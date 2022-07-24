module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironmment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
