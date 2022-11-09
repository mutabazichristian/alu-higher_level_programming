#!usr/bin/python3
def safe_print_list(my_list=[0,"one",2,"three",4,"five"], x=3):
    for i in my_list:
        print (i)
        if i == my_list[x] :
            break
safe_print_list(x=1)
