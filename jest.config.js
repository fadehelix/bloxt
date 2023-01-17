module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.ts?(x)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
      "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
  };