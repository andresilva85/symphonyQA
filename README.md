# Automated API Test for Public APIs

This project contains an automated API test implemented using the [Cypress](https://www.cypress.io/) testing framework to test the [Public APIs](https://api.publicapis.org/entries) endpoint. The test is designed to achieve the following objectives:

## Test Description

The automated API test is designed to perform the following actions:

1. Send a GET request to the [Public APIs](https://api.publicapis.org/entries) endpoint.
2. Receive and read the response from the API.
3. Filter and identify all objects with the property "Category: Authentication & Authorization."
4. Compare, count, and verify the number of objects that have the specified property.
5. Print the found objects to the console for further examination.

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
git clone https://github.com/andresilva85/symphonyQA.git
```

2. Navigate to the project folder:

```
cd symphonyQA
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
- `loginPage.js`: Files containing the element page and login function.
- `productPage.js`: Files containing the element page and product sorting verification function.

# Continuous Integration with GitHub Actions

The project is configured for continuous integration using GitHub Actions. The workflow defined in `.github/workflows/cypress.yml` is triggered on every push to the repository. This workflow performs the following tasks:

- Runs the tests on an Ubuntu runner with a Docker container.
- Utilizes the Cypress GitHub Action for running Cypress tests.
- Uses the `GITHUB_TOKEN` secrets for authentication.

**Note:** For the GitHub Actions workflow to work, you should set up the necessary secrets in your GitHub repository settings

## Contributing

Contributions are welcome! If you wish to contribute to this project, follow recommended contribution practices, create a fork of the repository, make your changes, and submit a pull request.

## Author

- André Silva - Developer and project maintainer