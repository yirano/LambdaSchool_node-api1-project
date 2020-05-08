// require the express npm module, needs to be added to the project using 'yarn add express'
import users from './data/data.json'

const express = require('express')

// creates an express application using the express module
const app = express();
const PORT = 8000

app.get('/', (req, res) => {
  res.send(users)
})


// TODO Client makes a POST request /api/users
app.post('/api/users', (req, res) => {
  // TODO if the request body is missing the name or bio property:
  if (req.body.name === undefined || req.body.bio === undefined) {
    // - respond with HTTP status code 400
    // - return the following JSON response { errorMessage: "Please provide name and bio for the user." }
    return req.status(400).send("Please provide name and bio for the user")
  } else if (req.body.name !== undefined && req.body.bio !== undefined) {
    // TODO if the information about the user is valid:
    // - respond with HTTP status code 201 (created)
    // - return the newly created user document
    const newUser = req.body;
    users.push(newUser)
    return res.status(201).json(users)
  } else {
    // TODO if there's an error while saving the user:
    // - respond with HTTP status code 500 (server error)
    // - return the following JSON object: { errorMessage: "There was an error while saving the user to the database" }
    return res.status(500).send('There was an error while saving the user to the database')
  }
})

// REVIEW Client makes a GET request to /api/users
app.get('/api/users', (req, res) => {
  // TODO If there's an error in retrieving the users from the database:
  if (users.length < 0) {
    // - respond with HTTP status code 500
    // - return the following JSON object: { errorMessage: "The users information could not be retrieved." }
    res.status(500).json({ errorMessage: "The users information could not be retrieved." })
  } else {
    res.send(users)
  }
})

// NOTE Client makes a GET request to /api/users/:id
app.get('/api/users/:id', (req, res) => {
  // TODO if the user with the specified id is not found
  // const user = users.filter(user => user.id === Number(req.params.id))
  if (user.length === 0) {
    // - respond with HTTP status code 404 (not found)
    // - return the following JSON object: { message: "The user with the specified ID does not exist." }
    res.status(404).json({ message: "The user with the specified ID does not exist." })
  } else if (user.length === -1) {
    // TODO if there's an error in retrieving the user from the database:
    // - respond with HTTP status code 500
    // - return the following JSON object: { errorMessage: "The user information could not be retrieved." }
    res.status(500).send("The user information could not be retrieved.")
  }
  res.send(user)

})

// NOTE Client makes a DELETE request to /api/users/:id
app.delete('/api/users/:id', (req, res) => {
  // TODO if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }

  // TODO if there's an error in removing the user from the database
  // - respond with HTTP status code 500.
  // - return the following JSON object: { errorMessage: "The user could not be removed" }
})

// NOTE Client makes a PUT request to /api/users/:id
app.put('/api/users/:id', (req, res) => {
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


app.listen(PORT, () => console.log(`API running on port 8000`))