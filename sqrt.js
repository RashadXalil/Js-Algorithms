var mySqrt = function (x) {
  for (let count = 0; true; count++) {
    if (count * count > x) {
      return count - 1
    }
  }
}
