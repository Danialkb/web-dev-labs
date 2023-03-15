def xor(x: bool, y: bool) -> bool:
    return x != y


print(1) if xor(*list(map(int, input().split()))) is True else print(0)
