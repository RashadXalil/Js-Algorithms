const checkAnagram = (s, t) => {
  if (t.length !== s.length) {
    return false
  }

  s = [...s].sort().join('')
  t = [...t].sort().join('')

  if (s === t) return true

  return false
}

checkAnagram('anagram', 'nagaram')
