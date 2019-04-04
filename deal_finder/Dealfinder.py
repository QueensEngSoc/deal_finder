import re
import requests
from bs4 import BeautifulSoup
import json
import urllib


url = "https://api.discountapi.com/v2/deals?api_key=qgqKNhnf"
url = url + urllib.parse.urlencode({'radius': range}, {'location' : "latitude:76.4860,longitude:44.2312"})
json_data = requests.get(url).json()#get data from the url


for each in json_data['deals']:

    print(each['deal']['title'])
    print(each['deal']['description'])
    print(each['deal']['discount_percentage'])
    print(each['deal']['image_url'])
    print()
    # post request to mongo database
    



