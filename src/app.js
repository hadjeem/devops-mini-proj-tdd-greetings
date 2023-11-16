function greet (name) {
  if (name === '') return 'Hello, my friend.'
  if (name === null) return 'Hello, my friend.'
  return `Hello, ${(name)}.`
}

module.exports = greet
