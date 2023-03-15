a, flag = int(input()), True

while a > 1:
    if a % 2 != 0:
        flag = False
        break
    else:
        a //= 2

print('YES') if flag is True else print('NO')
