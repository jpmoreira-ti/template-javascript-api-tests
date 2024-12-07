module.exports = {
  testEnvironment: 'node',
  testTimeout: 5000,
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './reports/test-api-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
    }]
  ]
};