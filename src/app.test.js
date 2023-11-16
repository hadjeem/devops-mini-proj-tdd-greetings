const greet = require('./app.js')

test('should return Hello, Bob when given Bob', () => {
  const result = greet('Bob')
  expect(result).toEqual('Hello, Bob.')
})

test('should replace empty to my friend', () => {
  const result = greet('')
  expect(result).toEqual('Hello, my friend.')
})

test('should replace null to my friend', () => {
  const result = greet(null)
  expect(result).toEqual('Hello, my friend.')
})

test('should replace undefined to my friend', () => {
  const result = greet(undefined)
  expect(result).toEqual('Hello, my friend.')
})

test('should return HELLO, JERRY! when given JERRY', () => {
  const result = greet('JERRY')
  expect(result).toEqual('HELLO, JERRY!')
})

test('should return Hello, Jill and Jane. when given Jill and Jane', () => {
  const result = greet(['Jill', 'Jane'])
  expect(result).toEqual('Hello, Jill and Jane.')
})

test('should return Hello, Amy, Brian and Charlotte. when given Amy, Brian and Charlotte', () => {
  const result = greet(['Amy', 'Brian', 'Charlotte'])
  expect(result).toEqual('Hello, Amy, Brian and Charlotte.')
})

test('should returnHello, Amy and Charlotte. AND HELLO BRIAN !', () => {
  const result = greet(['Amy', 'BRIAN', 'Charlotte'])
  expect(result).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN !')
})

test('should return Bonjour, Marie. when given Marie, fr', () => {
  const result = greet(['Marie', 'fr'])
  expect(result).toEqual('Bonjour, Marie.')
})

test('should return Hello, Marie. when given Marie, en', () => {
  const result = greet(['Marie', 'en'])
  expect(result).toEqual('Hello, Marie.')
})

test('should return Hallo, Marie. when given Marie, nl', () => {
  const result = greet(['Marie', 'nl'])
  expect(result).toEqual('Hallo, Marie.')
})

test('should return Hallo, Marie en Brian. when given Marie, Brian, nl', () => {
  const result = greet(['Marie', 'Brian', 'nl'])
  expect(result).toEqual('Hallo, Marie en Brian.')
})

test('should return Bonjour, Marie et Brian. when given Marie, Brian, fr', () => {
  const result = greet(['Marie', 'Brian', 'fr'])
  expect(result).toEqual('Bonjour, Marie et Brian.')
})

test('should return Bonjour, Marie. ET BONJOUR BRIAN ! when given Marie, BRIAN, fr', () => {
  const result = greet(['Marie', 'BRIAN', 'fr'])
  expect(result).toEqual('Bonjour, Marie. ET BONJOUR BRIAN !')
})

test('should return Hallo, Marie en Charlotte. EN HALLO BRIAN ! when given Marie, BRIAN, Charlotte, nl', () => {
  const result = greet(['Marie', 'BRIAN', 'Charlotte', 'nl'])
  expect(result).toEqual('Hallo, Marie en Charlotte. EN HALLO BRIAN !')
})

test('should return BONJOUR MARIE ET BRIAN ! when given MARIE, BRIAN, fr', () => {
  const result = greet(['MARIE', 'BRIAN', 'fr'])
  expect(result).toEqual('BONJOUR MARIE ET BRIAN !')
})

test('should return BONJOUR MARIE, CHARLOTTE ET BRIAN ! when given MARIE, CHARLOTTE, BRIAN, fr', () => {
  const result = greet(['MARIE', 'CHARLOTTE', 'BRIAN', 'fr'])
  expect(result).toEqual('BONJOUR MARIE, CHARLOTTE ET BRIAN !')
})

test('should return Hello, Jill and Jane. AND HELLO MARIE, CHARLOTTE AND BRIAN ! when given Jill, Jane, MARIE, CHARLOTTE, BRIAN, en', () => {
  const result = greet(['Jill', 'Jane', 'MARIE', 'CHARLOTTE', 'BRIAN', 'en'])
  expect(result).toEqual(
    'Hello, Jill and Jane. AND HELLO MARIE, CHARLOTTE AND BRIAN !'
  )
})
