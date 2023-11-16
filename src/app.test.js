const greet = require('./app.js')

test('should return Hello, Bob when given Bob', () => {
  const result = greet('Bob')
  expect(result).toEqual('Hello, Bob.')
})
