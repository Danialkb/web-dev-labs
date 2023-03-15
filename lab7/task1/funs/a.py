def mn(a, b, c, d):
    print(min(a, b, c, d))


mn(*list(map(int, input().split())))
