#!/usr/bin/python3
'''documentation and stuff'''

import urllib.request
with urllib.request.urlopen('https://alu-intranet.hbtn.io/status') as response:
    html = response.read()
    print('\t- type:{}'.format(type(html)))
    print('\t- content:{}'.format(html))
    print('\t- utf8 content:{}'.format(html.decode("utf-8")))
    