function greet (name) {
  if (name === '' || name === null || name === undefined) return 'Hello, my friend.'
  if (name.toUpperCase() === name) return `HELLO, ${(name)}!`
  return `Hello, ${(name)}.`
}

module.exports = greet
