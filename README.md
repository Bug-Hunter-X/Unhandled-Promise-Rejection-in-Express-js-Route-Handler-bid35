# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections caused by database query failures.

## Bug Description

The `bug.js` file contains an Express.js route handler that fetches a user from a database.  If the database query fails, the `user` variable will be undefined and the application will throw an error resulting in an unhandled promise rejection.

## Solution

The `bugSolution.js` file shows how to correctly handle this case using async/await and try...catch blocks to catch potential errors during the database query and return appropriate HTTP error responses to the client.