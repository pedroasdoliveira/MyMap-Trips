import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './src'
})

const esModules = ['@react-leaflet', 'react-leaflet'].join('|')

const customJestConfig = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/']
}

module.exports = createJestConfig(customJestConfig)
