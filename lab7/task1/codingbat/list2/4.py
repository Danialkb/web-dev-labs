def sum67(nums):
    total = 0
    add = True
    for num in nums:
        if num == 6:
            add = False
        elif num == 7 and not add:
            add = True
        elif add:
            total += num
    return total
