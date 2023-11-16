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
