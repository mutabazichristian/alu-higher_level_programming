#!/usr/bin/python3
# function that divides 2 integers and prints the result

def safe_print_division(a, b):
    result = a/b
    try:
        print("{:}".format(result))
    except(ValueError):
        pass
    return result