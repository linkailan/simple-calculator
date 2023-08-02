module.exports = {
  // Specifies the preset to use for testing TypeScript projects
  preset: 'ts-jest',

  // Specifies the test environment in which the tests will be executed
  testEnvironment: 'node',

  // Specifies how to transform TypeScript files before running tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
