if (root == null) {
  return []
}

let stack = []
let arr = []
let cur = root
while (cur != null || stack.length) {
  while (cur != null) {
    stack.push(cur)
    cur = cur.left
  }
  cur = stack.pop()
  arr.push(cur.val)
  cur = cur.right
}

return arr
