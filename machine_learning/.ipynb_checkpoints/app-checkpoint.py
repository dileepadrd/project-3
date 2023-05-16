{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "cbfc9268-0f6d-4f23-b22e-6e1adece7a78",
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      " * Serving Flask app '__main__' (lazy loading)\n",
      " * Environment: production\n",
      "\u001b[31m   WARNING: This is a development server. Do not use it in a production deployment.\u001b[0m\n",
      "\u001b[2m   Use a production WSGI server instead.\u001b[0m\n",
      " * Debug mode: on\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      " * Restarting with watchdog (windowsapi)\n"
     ]
    },
    {
     "ename": "SystemExit",
     "evalue": "1",
     "output_type": "error",
     "traceback": [
      "An exception has occurred, use %tb to see the full traceback.\n",
      "\u001b[1;31mSystemExit\u001b[0m\u001b[1;31m:\u001b[0m 1\n"
     ]
    },
    {
     "name": "stderr",
     "output_type": "stream",
     "text": [
      "C:\\Users\\keito\\anaconda3\\envs\\dev\\lib\\site-packages\\IPython\\core\\interactiveshell.py:3465: UserWarning: To exit: use 'exit', 'quit', or Ctrl-D.\n",
      "  warn(\"To exit: use 'exit', 'quit', or Ctrl-D.\", stacklevel=1)\n"
     ]
    }
   ],
   "source": [
    "from flask import Flask, render_template, request\n",
    "from geopy.geocoders import Nominatim\n",
    "from IPython import get_ipython\n",
    "\n",
    "app = Flask(__name__)\n",
    "\n",
    "@app.route('/', methods=['GET', 'POST'])\n",
    "def home():\n",
    "    if request.method == 'POST':\n",
    "        address = request.form['address']\n",
    "        coordinates = address_to_coordinates(address)\n",
    "        return render_template('result.html', coordinates=coordinates)\n",
    "    return render_template('index.html')\n",
    "\n",
    "def address_to_coordinates(address):\n",
    "    geolocator = Nominatim(user_agent=\"my_app\")\n",
    "    location = geolocator.geocode(address)\n",
    "    if location is None:\n",
    "        return f\"Sorry, could not find a location for {address}\"\n",
    "    else:\n",
    "        return f\"The latitude and longitude coordinates of {address} are: {location.latitude}, {location.longitude}\"\n",
    "\n",
    "if __name__ == '__main__':\n",
    "    if 'ipykernel' in get_ipython().config['IPKernelApp']['connection_file']:\n",
    "        app.run(debug=False)\n",
    "    else:\n",
    "        app.run(debug=True)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "334f9183-c64a-442e-b8f4-06c70b05b28d",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3 (ipykernel)",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.7.15"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
