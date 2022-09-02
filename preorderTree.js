if (root == null) {
  return []
}

let arr = []
let stack = [root]

while (stack.length) {
  let cur = stack.pop()
  arr.push(cur.val)
  if (cur.right) stack.push(cur.right)
  if (cur.left) stack.push(cur.left)
}

return arr
