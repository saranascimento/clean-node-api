// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config')
config.testMatch = ['**/*.test.js']
module.exports = config
