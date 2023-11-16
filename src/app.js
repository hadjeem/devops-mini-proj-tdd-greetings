function greet (name) {
  if (name === '' || name === null || name === undefined) return 'Hello, my friend.'
  if (typeof (name) === 'object' && name.length >= 3) {
    return moreThanTwoParameters(name)
  }
  if (typeof (name) === 'object') return `Hello, ${(name[0])} and ${(name[1])}.`
  if (name.toUpperCase() === name) return `HELLO, ${(name)}!`
  return `Hello, ${(name)}.`
}

function moreThanTwoParameters (name) {
  let result = 'Hello'
  for (let index = 0; index < name.length - 1; index++) {
    result += `, ${(name[index])}`
  }
  result += ` and ${(name[name.length - 1])}.`
  return result
}

module.exports = greet
