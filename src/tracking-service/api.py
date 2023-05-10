from flask import Flask, request, jsonify

import os
import json
from web3 import Web3
from pathlib import Path
from dotenv import load_dotenv

app = Flask(__name__)
contract_address = ""


@app.route('/api/v1/create_contract/<uuid>', methods=['GET', 'POST'])
def create_contract(uuid):
    content = request.json

    accounts = w3.eth.accounts
    print(accounts)

    from_address = "0x33d95947E7D746142966683FA6F63Fa7B4AE9e6d"

    name = "contract_1"
    quantity = 2
    price = 100
    deliveryDate = 20202323
    buyer = "0x33d95947E7D746142966683FA6F63Fa7B4AE9e6d"
    logisticsProvider = "0x57E11ac1c9bCfe0501055ba550D00B363862AD2b"

    tx_hash = contract.functions.createContract(name, quantity, price, deliveryDate, buyer, logisticsProvider).transact(
        {'from': from_address, 'gas': 1000000})

    receipt = w3.eth.waitForTransactionReceipt(tx_hash)
    print(dict(receipt))

    print(content)
    return jsonify({"uuid": uuid})


@app.route('/api/v1/contract_ids', methods=['GET', 'POST'])
def contract_ids():

    ids = contract.functions.viewContractIds().call()
    print(ids)
    strIds = []

    for id in ids:
        decodedId = w3.util.toAscii(id)
        print(f"type = {type(id)} id = {id} decoded = {decodedId}\n")
        strIds.append(decodedId)

    return jsonify(strIds)


@app.route('/api/v1/contract_count', methods=['GET', 'POST'])
def get_contract_count():
    count = contract.functions.getContractCount().call()
    return jsonify({"count": count})


@app.route('/api/v1/contract/<contractIndex>', methods=['GET', 'POST'])
def view_contract_by_index(contractIndex):
    contractIndex = int(contractIndex)
    contractData = contract.functions.getContractByIndex(contractIndex).call()
    print(f"contract data = {str(contractData)}")
    return jsonify({"contract": contractData})


load_dotenv()

# Define and connect a new Web3 provider
w3 = Web3(Web3.HTTPProvider(os.getenv("WEB3_PROVIDER_URI")))


def load_contract():
    # load the contract to be used in the API

    # Load the contract ABI
    with open(Path('./res/abi.json')) as f:
        artwork_abi = json.load(f)

    # Set the contract address (this is the address of the deployed contract)
    contract_address = os.getenv("SMART_CONTRACT_ADDRESS")
    print(f"contract address = {contract_address}\n")

    # Get the contract
    contract = w3.eth.contract(
        address=contract_address,
        abi=artwork_abi
    )

    return contract


# Load the contract
contract = load_contract()

# Start the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
