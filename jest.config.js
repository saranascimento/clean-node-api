module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
