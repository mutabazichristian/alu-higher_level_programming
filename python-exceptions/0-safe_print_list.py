#!/usr/bin/python3
# A function that prints x elements of a list


def safe_print_list(my_list=[], x=0):
    willy = 0
    for i in range(x):
        try:
            print("{}".format(my_list[i]), end="")
            willy += 1
        except IndexError:
            break
    print("")
    return (willy)
