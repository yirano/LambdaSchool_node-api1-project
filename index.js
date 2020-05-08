// NOTE require the express npm module, needs to be added to the project using 'yarn add express'
import data from './data/data.json'

const express = require('express')
// const bodyParser = require('body-parser')

// NOTE creates an express application using the express module
const app = express();
const PORT = 8000
const users = data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(users)
})


// REVIEW Client makes a POST request /api/users
app.post('/api/users', (req, res) => {
  // REVIEW if the request body is missing the name or bio property:
  // - respond with HTTP status code 400
  // - return the following JSON response { errorMessage: "Please provide name and bio for the user." }
  if (req.body.email === '' || req.body.name === '') {
    res.json({ errorMessage: "Please provide name and bio for the user" })
  }
  // REVIEW if the information about the user is valid:
  // - respond with HTTP status code 201 (created)
  // - return the newly created user document
  else {
    const { first_name, last_name, email, gender } = req.body
    const newUser = {
      id: Date.now(),
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender
    }
    users.push(newUser)
    res.status(201).json(users)

    // REVIEW if there's an error while saving the user:
    // - respond with HTTP status code 500 (server error)
    // - return the following JSON object: { errorMessage: "There was an error while saving the user to the database" }
    if (!users.push(newUser)) {
      res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
    }
  }

})

// REVIEW Client makes a GET request to /api/users
app.get('/api/users', (req, res) => {
  // REVIEW If there's an error in retrieving the users from the database:
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The users information could not be retrieved." }
  if (!users) {
    res.status(500).json({ errorMessage: "The users information could not be retrieved." })
  } else {
    res.send(users)
  }
})

// REVIEW Client makes a GET request to /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const user = users.filter(user => user.id === Number(req.params.id))
  // REVIEW if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }
  if (user.length === 0) {
    res.status(404).json({ message: "The user with the specified ID does not exist." })
  } else if (user === undefined || user === null) {
    // REVIEW if there's an error in retrieving the user from the database:
    // - respond with HTTP status code 500
    // - return the following JSON object: { errorMessage: "The user information could not be retrieved." }
    res.status(500).send("The user information could not be retrieved.")
  }
  res.send(user)

})

// REVIEW Client makes a DELETE request to /api/users/:id
app.delete('/api/users/:id', (req, res) => {
  // REVIEW if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }
  const found = users.find(user => user.id === Number(req.params.id))
  if (found) {
    res.json(users.filter(user => user.id !== Number(req.params.id)))

    // REVIEW if there's an error in removing the user from the database
    // - respond with HTTP status code 500.
    // - return the following JSON object: { errorMessage: "The user could not be removed" }
  } else {
    // res.status(500).json({ errorMessage: "The user could not be removed" })
    res.status(404).json({ message: 'The user could not be found' })
  }
})

// NOTE Client makes a PUT request to /api/users/:id
app.put('/api/users/:id', (req, res) => {
  const found = users.find(user => user.id === Number(req.params.id))
  const changes = req.body;
  let index = users.findIndex(user => user.id === id)

  // REVIEW if the user with the specified id is not found
  // - respond with HTTP status code 404
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }
  if (index === -1) {
    res.status(404).json({ message: "The user with the specified ID does not exist" })

    // REVIEW if the request body is missing the name or bio property
    // - respond with HTTP status code 400 (bad request)
    // - return the following JSON respons: { errorMessage: "Please provide name and bio for the user" }
  } else if (!req.body.first_name || !req.body.email) {
    res.status(400).json({ message: "Please provide name and bio for the user" })

    // REVIEW if there's an error when updating the user
    // - respond with HTTP status code 500
    // - return the following JSON object: { errorMessage: "The user information could not be modified" }
  } else if (!user) {
    res.status(500).json({ errorMessage: "The user information could not be modified" })

    // REVIEW if the user is found and new information is valid
    // - update the user document in the database using the new information sent in the request body.
    // - respond with HTTP status code 200 (ok)
    // - return the newly updated user document
  } else {
    users[index] = changes
    res.status(200).json(users[index])
  }







})

app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  let found = users.find(user => user.id === id)

  if (found) {
    Object.assign(found, changes)
    res.status(200).json(found)
  } else {
    res.status(404).json({ message: "User not found" })
  }
})


app.listen(PORT, () => console.log(`API running on port 8000`))