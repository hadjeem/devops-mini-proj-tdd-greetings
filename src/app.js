function greet (name) {
  if (name === '' || name === null || name === undefined) { return 'Hello, my friend.' }
  let greeting
  let languageAnd
    ;({ greeting, languageAnd } = findLanguage(name, greeting, languageAnd))
  ;({ greeting, name, languageAnd } = haveLanguage(
    greeting,
    name,
    languageAnd
  ))
  if (typeof name === 'object' && haveUpperCase(name)) {
    return lowerAndUpperCase(name, languageAnd, greeting)
  }
  if (typeof name === 'object' && name.length >= 3) {
    return moreThanTwoParameters(name, languageAnd, greeting)
  }
  if (typeof name === 'object' && name[1] !== undefined) {
    return `${greeting}, ${name[0]} ${languageAnd} ${name[1]}.`
  }
  if (typeof name === 'string' && name.toUpperCase() === name) {
    greeting = greeting.toUpperCase()
    return `${greeting}, ${name}!`
  }
  return `${greeting}, ${name}.`
}

function haveLanguage (greeting, name, languageAnd) {
  if (greeting !== undefined) {
    name = removeLanguageParameter(name)
  } else {
    greeting = 'Hello'
    languageAnd = 'and'
  }
  return { greeting, name, languageAnd }
}

function removeLanguageParameter (name) {
  const nameB = []
  for (let index = 0; index < name.length - 1; index++) {
    nameB.push(name[index])
  }
  name = nameB
  return name
}

function findLanguage (name, greeting, languageAnd) {
  if (name[name.length - 1] === 'fr') {
    greeting = 'Bonjour'
    languageAnd = 'et'
  }
  if (name[name.length - 1] === 'en') {
    greeting = 'Hello'
    languageAnd = 'and'
  }
  if (name[name.length - 1] === 'nl') {
    greeting = 'Hallo'
    languageAnd = 'en'
  }
  return { greeting, languageAnd }
}

function moreThanTwoParameters (name, languageAnd, greeting) {
  let result = `${greeting}, ${name[0]}`
  let end
    ;({ end, result } = areUpperCase(greeting, result, name))
  result = fillStringMTTP(name, result, languageAnd, end)
  return result
}

function fillStringMTTP (name, result, languageAnd, end) {
  for (let index = 1; index < name.length - 1; index++) {
    result += `, ${name[index]}`
  }
  if (name.length === 1) return result + `${end}`
  return result + ` ${languageAnd} ${name[name.length - 1]}${end}`
}

function areUpperCase (greeting, result, name) {
  let end = '.'
  if (greeting.toUpperCase() === greeting) {
    end = ' !'
    result = `${greeting} ${name[0]}`
  }
  return { end, result }
}

function haveUpperCase (name) {
  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) return true
  }
}

function lowerAndUpperCase (name, languageAnd, greeting) {
  const lowerCase = []
  const upperCase = []
  const upperCaseLanguageAnd = languageAnd.toUpperCase()
  const upperCaseGreeting = greeting.toUpperCase()

  fillUpperLower(name, upperCase, lowerCase)
  if (lowerCase.length === 0) {
    return moreThanTwoParameters(
      name,
      upperCaseLanguageAnd,
      upperCaseGreeting
    )
  }
  if (lowerCase.length === 1) {
    return `${greeting}, ${lowerCase[0]}. ${upperCaseLanguageAnd} ${upperCaseGreeting} ${upperCase[0]} !`
  }
  return (
    moreThanTwoParameters(lowerCase, languageAnd, greeting) + 
        ` ${upperCaseLanguageAnd} ` + moreThanTwoParameters(upperCase, upperCaseLanguageAnd, upperCaseGreeting)
  )
}

function fillUpperLower (name, upperCase, lowerCase) {
  for (const nameP of name) {
    if (nameP === nameP.toUpperCase()) {
      upperCase.push(nameP)
    } else {
      lowerCase.push(nameP)
    }
  }
}

module.exports = greet
