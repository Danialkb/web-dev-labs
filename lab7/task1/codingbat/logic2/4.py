def lone_sum(a, b, c):
    def is_unique(n):
        return [a, b, c].count(n) == 1

    return sum(filter(is_unique, [a, b, c]))
