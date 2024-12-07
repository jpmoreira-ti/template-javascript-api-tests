# Template JavaScript API Tests
Template for API tests in JavaScript using [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest).</br>
The API used in this project is from [FakeStoreAPI](https://fakestoreapi.com/docs).

## Prerequisites
- [Node.js 16+](https://nodejs.org/) must be installed.
- [npm](https://www.npmjs.com/) must be installed.

## Installation
To install the project dependencies, run the following command:

```sh
npm install
```

## Test Execution and Report
To run the tests and generate the test report, run the following command:

```sh
npm test
```

## Test Report
The test report is generated at ./reports/test-api-report.html.

## Plugins
The following plugins are used in the project and are configured in the jest.config.js file:

[jest-html-reporter](https://github.com/Hargne/jest-html-reporter): Used to generate test reports in HTML.