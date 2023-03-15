def rotate_left3(nums):
  nums[0], nums[1], nums[2] = nums[1], nums[2], nums[0]
  return nums
