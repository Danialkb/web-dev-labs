def split_and_join(line):
    ar = line.split()
    line = '-'.join(ar)
    return line


line = input()
result = split_and_join(line)
print(result)
