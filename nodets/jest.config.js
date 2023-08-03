module.exports = {
  // Specifies the preset to use for testing TypeScript projects
  preset: 'ts-jest',

  // Specifies the test environment in which the tests will be executed
  testEnvironment: 'node',

  // Specifies how to transform TypeScript files before running tests
  // No need to include the "transform" option when using "preset": "ts-jest".
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  // Display more detailed output for each test case
  verbose: true,

};
