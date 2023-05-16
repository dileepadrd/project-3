#!/usr/bin/env python
# coding: utf-8

# In[1]:


# This function takes from and to address and tell you how long it takes

import pickle
import numpy as np
from geopy.geocoders import Nominatim

# Load the machine learning model from file
#with open('transportation_route_model.pkl', 'rb') as f:
#    model = pickle.load(f)

#def predict_travel_time(start_lon, start_lat, end_lon, end_lat):
    # Create an array with the input features
#    X = np.array([[start_lon, start_lat, end_lon, end_lat]])

    # Load the trained machine learning model
#    with open('transportation_route_model.pkl', 'rb') as f:
#        model = pickle.load(f)

    # Make a prediction using the input features
#    travel_time = model.predict(X)

    # Return the predicted travel time
#    return travel_time[0]


def estimate_time_calculator(address_from, address_to):
    # Initialize the Nominatim geolocator
    geolocator = Nominatim(user_agent="my_app")

    # Use the geolocator to get the latitude and longitude coordinates of the address
    location_from = geolocator.geocode(address_from)
    location_to = geolocator.geocode(address_to)

    if location_from is None or location_to is None:
        return None

    # Call the predict_travel_time() function with the user input
    X = np.array([[location_from.longitude, location_from.latitude, location_to.longitude, location_to.latitude]])
    
    # Load the trained machine learning model
    with open('transportation_route_model.pkl', 'rb') as f:
        model = pickle.load(f)
    
    travel_time = model.predict(X)

    return travel_time


# In[ ]:




