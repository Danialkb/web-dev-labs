t, a = int(input()), list(map(int, input().split()))

print(len(list(filter(lambda x: x > 0, a))))
