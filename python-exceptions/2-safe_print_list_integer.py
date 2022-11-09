#!/usr/bin/python3
# function that prints first x elements of a list and only intergers


def safe_print_list_integers(my_list=[1,2,3,4],x=0):
    counter = 0
    for i in range(x):
        try:
            print("{:d}".format(my_list[i]),end=" ")
            counter+=1
        except IndexError:
            break

    return counter
