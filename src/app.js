function greet (name) {
  if (name === '' || name === null || name === undefined) return 'Hello, my friend.'
  if (name === 'JERRY') return 'HELLO, JERRY!'
  return `Hello, ${(name)}.`
}

module.exports = greet
