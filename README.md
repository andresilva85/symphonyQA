# Cypress Test Suite for Sauce Demo

This is an automated testing project using the Cypress framework for the [Sauce Demo](https://www.saucedemo.com) website. The purpose of this project is to perform login and product sorting verification tests on the Sauce Demo website.

## Prerequisites

Before running the tests, ensure that you have Cypress installed globally. If you haven't installed Cypress yet, you can do so by running the following command:

```
npm install -g cypress
```

## Installation

1. Clone the repository to your development environment:

```
git clone https://your-repository/sauce-demo-automated-tests.git
```

2. Navigate to the project folder:

```
cd sauce-demo-automated-tests
```

3. Install project dependencies:

```
npm install
```

## Running the Tests

To run the tests, you can use the following command in the project's root directory:

```
cypress run
```

This will execute the tests in headless mode. To open the Cypress browser and run the tests interactively, use the following command:

```
cypress open
```

## Project Structure

The project is structured as follows:

- **cypress**: This folder contains the configuration files and Cypress tests.
  - **integration**: Contains the test files, including `ui.cy.js`.
  - **support**: Contains auxiliary functions and element pages for the tests.
- **cypress.json**: Cypress configuration file.
- **package.json**: Package definition file with project dependencies.

## File Descriptions

- `ui.cy.js`: The Cypress test file that performs login automation and product sorting verification on the Sauce Demo website.
- `loginPage.js`: File containing the element page and login function.
- `productPage.js`: File containing the element page and product sorting verification function.

## Contributing

Contributions are welcome! If you wish to contribute to this project, follow recommended contribution practices, create a fork of the repository, make your changes, and submit a pull request.

## Author

- André Silva - Developer and project maintainer