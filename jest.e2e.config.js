const initialConfigs = require('./jest.config');

module.exports = {
  ...initialConfigs,
  testEnvironment: './jest.e2e.env.js',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  testRegex: '\\.e2e.test.ts$',
  reporters: ['detox/runners/jest/streamlineReporter'],
  setupFilesAfterEnv: ['./jest.e2e.setup.js'],
};
