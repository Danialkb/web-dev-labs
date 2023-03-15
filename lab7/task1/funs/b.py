def fun(a: float, n: int) -> int:
    return pow(a, n)


print(fun(*list(map(float, input().split()))))
