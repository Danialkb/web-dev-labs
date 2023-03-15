from math import isqrt
a, b = int(input()), int(input())

for i in range(a, b + 1):
    if isqrt(i)**2 == i:
        print(i, end=' ')
