function greet (name) {
  if (name === '' || name === null || name === undefined) return 'Hello, my friend.'
  if (typeof (name) === 'object') return `Hello, ${(name[0])} and ${(name[1])}.`
  if (name.toUpperCase() === name) return `HELLO, ${(name)}!`
  return `Hello, ${(name)}.`
}

module.exports = greet
