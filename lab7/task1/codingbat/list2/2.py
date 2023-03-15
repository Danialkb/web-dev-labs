def sum13(nums):
    if not nums:
        return 0

    total_sum = 0
    i = 0

    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total_sum += nums[i]
            i += 1

    return total_sum