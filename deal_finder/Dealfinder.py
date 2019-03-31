import re
import requests
from bs4 import BeautifulSoup
import json
import urllib

range = input("Range: ")#get the desired range from input

url = "https://api.discountapi.com/v2/deals?api_key=qgqKNhnf&location=latitude:76.4860,longitude:%44.2312&radius=" + range
json_data = requests.get(url).json()#get data from the url


i = 0
while i<3:

    print(json_data['deals'][i]['deal']['title'])
    print(json_data['deals'][i]['deal']['description'])
    print(json_data['deals'][i]['deal']['discount_percentage'])
    print(json_data['deals'][i]['deal']['image_url'])
    print()
    # post request to mongo database
    i=i+1



