#!/usr/bin/python3
#function that prints x elements


def safe_print_list(my_list=[], x=0):
    for i in my_list:
        try:
            print (i)
        except IndexError:
            break
        if i == my_list[x] :
            break
        return (x)
