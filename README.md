# Print Job Calculator

- [Features](#features)
- [Setup](#setup)
- [Architecture](#architecture)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

## Features
 - print job calculator
 - must read print job details ( from csv )
 - must print each print job to console
 - must print total cost of all jobs to console

## Setup

### Dependencies
- Node 12.8.1

### Getting started

1. `git clone https://github.com/bhtandev/paper-print-calculator.git` clone repository
2. `nvm install v12.8.1` install and use right version of node
3. `npm install` install dependencies
5. `npm run build:start` start print-job-calculator, viola!
6. `npm run test` - run tests

## Architecture

### Key Technologies
 - NodeJS
 - Typescript

### Typing and Code Consistency
 - Typescript for safe typing and better developer experience, speed and reduce bugs
 - TSLint and Prettier for code consistency

### Dependency Injection
 - use of dependency injection pattern to allow test mocking

## Error Handling
- Try/catch at app level and spitting exception to console.error

## Testing

### Run Tests
 - `npm run test` - test both unit and integration tests

### Details
 - mocha and chai for testing
