def make_chocolate(small, big, goal):
    max_big_bars = goal // 5 if big >= goal // 5 else big

    remaining_weight = goal - max_big_bars * 5

    if remaining_weight <= small:
        return remaining_weight
    else:
        return -1


