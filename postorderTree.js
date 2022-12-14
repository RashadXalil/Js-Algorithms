if (root == null) {
  return []
}

let arr = []
let stack = [root]

while (stack.length) {
  let cur = stack.pop()
  arr.unshift(cur.val)

  if (cur.left) stack.push(cur.left)
  if (cur.right) stack.push(cur.right)
}

return arr
