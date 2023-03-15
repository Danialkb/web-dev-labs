t, a = int(input()), list(map(int, input().split()))

print(*[i for i in a if i % 2 == 0])
