var solution = function (isBadVersion) {
  return function (n) {
    let left = 1
    let right = n

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) {
          return mid
        } else {
          right = mid - 1
        }
      } else {
        left = mid + 1
      }
    }
  }
}
