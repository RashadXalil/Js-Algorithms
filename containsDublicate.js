var containsDuplicate = function (nums) {
  let uniqueArr = [...new Set(nums)]
  if (nums.length === uniqueArr.length) {
    return false
  } else {
    return true
  }
}
