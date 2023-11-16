function greet (name) {
  if (name === '' || name === null || name === undefined) {
    return 'Hello, my friend.'
  }
  let greeting
  let langageAnd
  if (name[name.length - 1] === 'fr') {
    greeting = 'Bonjour'
    langageAnd = 'et'
  }
  if (name[name.length - 1] === 'en') {
    greeting = 'Hello'
    langageAnd = 'and'
  }
  if (name[name.length - 1] === 'nl') {
    greeting = 'Hallo'
    langageAnd = 'en'
  }
  if (greeting !== undefined) {
    const nameB = []
    for (let index = 0; index < name.length - 1; index++) {
      nameB.push(name[index])
    }
    name = nameB
  } else {
    greeting = 'Hello'
    langageAnd = 'and'
  }

  if (typeof name === 'object') {
    if (haveUpperCase(name)) {
      return lowerAndUpperCase(name, langageAnd, greeting)
    }
  }
  if (typeof name === 'object' && name.length >= 3) {
    return moreThanTwoParameters(name, langageAnd, greeting)
  }
  if (typeof name === 'object' && name[1] !== undefined) {
    return `${greeting}, ${name[0]} ${langageAnd} ${name[1]}.`
  }
  if (typeof name === 'string' && name.toUpperCase() === name) {
    greeting = greeting.toUpperCase()
    return `${greeting}, ${name}!`
  }
  return `${greeting}, ${name}.`
}

function moreThanTwoParameters (name, langageAnd, greeting) {
  let result = greeting
  for (let index = 0; index < name.length - 1; index++) {
    result += `, ${name[index]}`
  }
  result += ` ${langageAnd} ${name[name.length - 1]}.`
  return result
}

function haveUpperCase (name) {
  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) return true
  }
}

function lowerAndUpperCase (name, langageAnd, greeting) {
  const lowerCase = []
  const upperCase = []
  const upperCaseLangageAnd = langageAnd.toUpperCase()
  const upperCaseGreeting = greeting.toUpperCase()

  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) {
      upperCase.push(nameP)
    } else {
      lowerCase.push(nameP)
    }
  }
  if (lowerCase.length === 1) {
    return `${greeting}, ${lowerCase[0]}. ${upperCaseLangageAnd} ${upperCaseGreeting} ${upperCase[0]} !`
  }
  return (
    moreThanTwoParameters(lowerCase, langageAnd, greeting) +
        ` ${upperCaseLangageAnd} ${upperCaseGreeting} ${upperCase[0]} !`
  )
}

module.exports = greet
