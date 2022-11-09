#!/usr/bin/python3
# function that prints first x elements of a list and only intergers


def safe_print_list_integers(my_list=[],x=0):
    counter = 0
    for i in range(x):
        try:
            print("{:d}".format(my_list[i]),end=" ")
            counter+=1
        except IndexError:
            break
        print(" ")
    return counter
