var backspaceCompare = function (s, t) {
  let sList = []
  let tList = []
  ;[...s].forEach((elem) => {
    if (elem != '#') {
      sList.push(elem)
    } else {
      sList.pop()
    }
  })

  ;[...t].forEach((elem) => {
    if (elem != '#') {
      tList.push(elem)
    } else {
      tList.pop()
    }
  })

  s = sList.join('')
  t = tList.join('')

  if (s == t) {
    return true
  } else {
    return false
  }
}
