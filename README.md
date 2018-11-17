## Acceptance Criteria

You are building a React-based frontend interface for displaying data from and interacting with an IoT device. Once you're finished with the basic app, a user should be able to do the following:

* **Retrieve the device's state** from the backend.
* **Show each of the device's readings**: name, unit, value, timestamp, and active status.
* **Show a counter** showing how many readings are active and how many are inactive.
* **Implement a search input** that filters visible readings by name.
* A user should also be able to **toggle the active status of each reading** by making the proper requests to the backend. After successfully changing the status on the backend, the UI should display the updated state of the active counter.
 
Please the `API_DOCS.MD` file for information on the API endpoints available.

## Extra Credit

Finishing the above acceptance criteria is enough to submit the challenge, and we don't expect you to do any more. That said, you are welcome to implement anything further that you'd like and we'll keep it in mind. Again, extra work is not required at all: a good basic solution will be graded higher than an OK solution with more features. 

## Getting started

To run the server locally: ```npm run start```

## Prerequisites

To install dependencies: ```npm install```

## Notes
* We've set up a basic webpack configuration to serve files. Your code should hot reload, as should any styles you put in the `styles.css` file.
