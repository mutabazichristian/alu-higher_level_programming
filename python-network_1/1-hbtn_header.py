#!/usr/bin/python3
'''Script that takes in URL,
    sends a request to the URL 
    and displays the value of X-Request-Id '''

import urllib.request
import sys

'''too many documentations'''
if __name__ == "__main__":
    '''sending the request'''
    req = sys.argv[1]
    with urllib.request.urlopen(req) as response:
        print(response.headers.get('X-Request-Id'))
