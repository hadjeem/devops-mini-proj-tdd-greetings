const greet = require('./app.js')

test('should return Hello, Bob when given Bob', () => {
  const result = greet('Bob')
  expect(result).toEqual('Hello, Bob.')
})

test('should replace empty to my friend', () => {
  const result = greet('')
  expect(result).toEqual('Hello, my friend.')
})