def wrap(string, max_width):
    str = ''
    for i in range(len(string)):
        str += string[i]
        if (i + 1) % max_width == 0:
            str += '\n'
    return str


string, max_width = input(), int(input())
result = wrap(string, max_width)
print(result)
