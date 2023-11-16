function greet (name) {
  if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }

  if (name[name.length - 1] === 'fr') {
    return 'Bonjour, Marie.'
  }
  if (name[name.length - 1] === 'en') {
    return 'Hello, Marie.'
  }
  if (name[name.length - 1] === 'nl') {
    return 'Hallo, Marie.'
  }

  if (typeof name === 'object') {
    if (haveUpperCase(name)) return lowerAndUpperCase(name)
  }
  if (typeof name === 'object' && name.length >= 3) {
    return moreThanTwoParameters(name)
  }
  if (typeof name === 'object') return `Hello, ${name[0]} and ${name[1]}.`
  if (name.toUpperCase() === name) return `HELLO, ${name}!`
  return `Hello, ${name}.`
}

function moreThanTwoParameters (name) {
  let result = 'Hello'
  for (let index = 0; index < name.length - 1; index++) {
    result += `, ${name[index]}`
  }
  result += ` and ${name[name.length - 1]}.`
  return result
}

function haveUpperCase (name) {
  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) return true
  }
}

function lowerAndUpperCase (name) {
  const lowerCase = []
  const upperCase = []
  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) {
      upperCase.push(nameP)
    } else {
      lowerCase.push(nameP)
    }
  }
  return moreThanTwoParameters(lowerCase) + ` AND HELLO ${upperCase[0]} !`
}

module.exports = greet
