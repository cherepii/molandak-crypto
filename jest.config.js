const nextJest = require('next/jest')
const esModules = [].join('|')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',

})
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '@app(.*)$': '<rootDir>/src/app/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@entities(.*)$': '<rootDir>/src/entities/$1',
    '@shared(.*)$': '<rootDir>/src/shared/$1',
    '@features(.*)$': '<rootDir>/src/features/$1',
    '@widgets(.*)$': '<rootDir>/src/widgets/$1',
    '@public(.*)$': '<rootDir>/public/$1',
    "^.+\\.svg$": "<rootDir>/__mocks__/svg.mock.js",
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/style.mock.js',
    '\\.(gif|ttf|eot)$': '<rootDir>/__mocks__/file.mock.js',
  },  
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/index.ts',
    '!./src/**/*.{constant,stories,styled,mock,entity}.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!./coverage/**/*.*',
    '!./.next/**/*.*',
    '!./api/**/*.*',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
