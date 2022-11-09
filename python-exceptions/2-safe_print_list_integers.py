#!/usr/bin/python3
# function that prints first x elements of a list and only intergers
my_list = [1,2,"H",4]


def safe_print_list_integers(my_list=[1,2,"H",4],x=0):
    counter = 0
    try:
        for i in range(x):
            if type(my_list[i]) is int:
             print("{:d}".format(my_list[i]),end="")
             counter+=1
    except IndexError:
        pass
    print("")
    return counter

safe_print_list_integers(x = len(my_list))