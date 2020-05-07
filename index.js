// require the express npm module, needs to be added to the project using 'yarn add express'
const express = require('express')

// creates an express application using the express module
const server = express();

server.get('/', (req, res) => {
  res.send('Hello World')
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee'
    },
    {
      id: 2,
      name: 'Frodo Baggins'
    }
  ]

  res.status(200).json(hobbits)
})


// NOTE Client makes a POST request /api/users
server.post('/api/users', (req, res) => {
  // TODO if the request body is missing the name or bio property:
  // - respond with HTTP status code 400
  // - return the following JSON response { errorMessage: "Please provide name and bio for the user." }

  // TODO if the information about the user is valid:
  // - respond with HTTP status code 201 (created)
  // - return the newly created user document

  // TODO if there's an error while saving the user:
  // - respond with HTTP status code 500 (server error)
  // - return the following JSON object: { errorMessage: "There was an error while saving the user to the database" }
})

// NOTE Client makes a GET request to /api/users
server.get('/api/users', (req, res) => {
  // TODO If there's an error in retrieving the users from the database:
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The users information could not be retrieved." }
})

// NOTE Client makes a GET request to /api/users/:id
server.get('/api/users/:id', (req, res) => {
  // TODO if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }

  // TODO if there's an error in retrieving the user from the database:
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The user information could not be retrieved." }
})

// NOTE Client makes a DELETE request to /api/users/:id
server.delete('/api/users/:id', (req, res) => {
  // TODO if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }

  // TODO if there's an error in removing the user from the database
  // - respond with HTTP status code 500.
  // - return the following JSON object: { errorMessage: "The user could not be removed" }
})

// NOTE Client makes a PUT request to /api/users/:id
server.put('/api/users/:id', (req, res) => {
  // TODO if the user with the specified id is not found
  // - respond with HTTP status code 404
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }

  // TODO if the request body is missing the name or bio property
  // - respond with HTTP status code 400 (bad request)
  // - return the following JSON respons: { errorMessage: "Please provide name and bio for the user" }

  // TODO if there's an error when updating the user
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The user information could not be modified" }

  // TODO if the user is found and new information is invalid
  // - update the user document in the database using the new information sent in the request body.
  // - respond with HTTP status code 200 (ok)
  // - return the newly updated user document
})


server.listen(8000, () => console.log(`API running on port 8000`))