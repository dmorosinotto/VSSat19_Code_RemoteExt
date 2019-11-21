#!/usr/bin/env python3
# encoding: utf-8

import cowsay

num = int(input("Input a number: "))

if num > 1:
    for i in range(2, num):
        if (num % i) == 0:
            cowsay.beavis(str(num) + " is not a prime number")
            print(i, "times", num//i, "is", num)
            break
    else:
        cowsay.cheese(str(num) + " is a prime number")
else:
    cowsay.daemon(str(num) + " is not a prime number")
