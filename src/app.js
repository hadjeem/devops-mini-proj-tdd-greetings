function greet (name) {
  if (name === '' || name === null || name === undefined) return 'Hello, my friend.'
  if (typeof (name) === 'object') return 'Hello, Jill and Jane.'
  if (name.toUpperCase() === name) return `HELLO, ${(name)}!`
  return `Hello, ${(name)}.`
}

module.exports = greet
