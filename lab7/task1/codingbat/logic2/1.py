def make_bricks(small, big, goal):
    max_big_bricks = goal // 5 if big >= goal // 5 else big

    remaining_goal = goal - max_big_bricks * 5

    return remaining_goal <= small
