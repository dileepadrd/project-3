// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    // Define the structure of the product
    struct Product {
        string name;
        uint256 quantity;
        uint256 price;
        uint256 deliveryDate;  
    }
    
    // Define the structure of the contract
    struct Contract {
        Product product;
        address payable supplier;
        address payable buyer;
        address payable logisticsProvider;
        uint256 payment;
        bool paymentDone;
        bool deliveryDone;
    }

    // Define the mapping of contracts
    mapping(bytes32 => Contract) public contracts;

    // Array to store the contract ids
    bytes32[] contractIds;

    // Number of contracts
    uint256 public contractCount = 0;

    // Define the event for contract creation
    event ContractCreated(bytes32 id);

    // Define the event for payment
    event PaymentReceived(bytes32 id);

    // Define the event for delivery
    event DeliveryReceived(bytes32 id);

    // Create a new contract
    function createContract(
        string memory _name,
        uint256 _quantity,
        uint256 _price,
        uint256 _deliveryDate,
        address payable _buyer,
        address payable _logisticsProvider
    ) public {
        // Increase the contract count
        contractCount++;

        // Generate a unique ID for the contract
        bytes32 id = keccak256(
            abi.encodePacked(msg.sender, _buyer, block.timestamp)
        );

        // Define the product details
        Product memory product = Product(
            _name,
            _quantity,
            _price,
            _deliveryDate
        );

        // Define the contract details
        Contract memory contractDetails = Contract(
            product,
            payable(msg.sender),
            _buyer,
            _logisticsProvider,
            _price * _quantity,
            false,
            false
        );

        // Add the contract to the mapping
        contracts[id] = contractDetails;

        // Add the contract id to the array
        contractIds.push(id);

        // Emit the contract creation event
        emit ContractCreated(id);
    }

    // Send payment to the smart contract's address
    function sendPayment(bytes32 _id) public payable {
        // Get the contract details
        Contract storage contractDetails = contracts[_id];

        // Verify that the payment matches the contract amount
        require(
            msg.value == contractDetails.payment,
            "Payment amount is incorrect"
        );

        // Mark the payment as done
        contractDetails.paymentDone = true;

        // Emit the payment event
        emit PaymentReceived(_id);
    }

    // Record product delivery on the blockchain
    function recordDelivery(bytes32 _id) public {
        // Get the contract details
        Contract storage contractDetails = contracts[_id];

        // Verify that the sender is the logistics provider
        require(
            msg.sender == contractDetails.logisticsProvider,
            "You are not authorized to record delivery"
        );

        // Mark the delivery as done
        contractDetails.deliveryDone = true;

        // Emit the delivery event
        emit DeliveryReceived(_id);
    }

    // Confirm the transaction on the blockchain
    function confirmTransaction(bytes32 _id) public {
        // Get the contract details
        Contract storage contractDetails = contracts[_id];

       

        // Release the payment to the supplier
        contractDetails.supplier.transfer(contractDetails.payment);
    }

    function viewContractIds() public view returns (bytes32[] memory) {
        return contractIds;
    }

    function getContract(
        bytes32 contractId
    ) public view returns (Contract memory) {
        return contracts[contractId];
    }
        function getContractByIndex(uint256 index) public view returns (Contract memory) {
        return contracts[contractIds[index]];
    }
    function getContractCount() public view returns (uint256) {
        return contractCount;
    }
}
