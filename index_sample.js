import express from 'express'
import users from './data/data.json'

const app = express();
const PORT = 8000;

// NOTE Express lesson from Lynda.com
/**
 *
app.get('/item/:id', (req, res, next) => {
  let user = users.filter(user => user.id === Number(req.params.id))
  res.send(user)
  next();
}, (req, res) => {
  console.log('Did you get the right data?')
})

app.route('/item')
  .get((req, res) => {
    // res.send(`a put request with /item on port ${PORT}`)
    // res.end() --> ends API call
    // res.redirect('http://www.linkedIn.com') --> Redirects to new URL
    // res.download('images/rocket.jpg') --> Automatically starts a download action
    res.send(`a get request with /item route on port ${PORT}`)
  })
  .put((req, res) => {
    res.send(`a put request with /item on port ${PORT}`)
  })
  .delete((req, res) => {
    res.send(`a delete request with /item on port ${PORT}`)
  })

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
  console.log(users);
})
 */





/**
// NOTE Client makes a POST request /api/users
app.post('/api/users', (req, res) => {

  // TODO if the request body is missing the name or bio property:
  // - respond with HTTP status code 400
  // - return the following JSON response { errorMessage: "Please provide name and bio for the user." }
  if (req.body.name === undefined || req.body.bio === undefined) {
    return req.status(400).send("Please provide name and bio for the user")

    // TODO if the information about the user is valid:
    // - respond with HTTP status code 201 (created)
    // - return the newly created user document
  } else if (req.body.name !== undefined && req.body.bio !== undefined) {
    const newUser = req.body;
    users.push(newUser)
    return res.status(201).json(users)

    // TODO if there's an error while saving the user:
    // - respond with HTTP status code 500 (server error)
    // - return the following JSON object: { errorMessage: "There was an error while saving the user to the database" }
  } else {
    return res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
  }
})

// NOTE Client makes a GET request to /api/users
app.get('/api/users', (req, res) => {
  // TODO If there's an error in retrieving the users from the database:
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The users information could not be retrieved." }
  if (!users || users === undefined) {
    res.status(500).send("The users information could not be retrieved") // REVIEW
  } else {
    res.json(users)
  }
})

// NOTE Client makes a GET request to /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = users.filter(user => user.id === id)
  // TODO if the user with the specified id is not found
  // - respond with HTTP status code 404 (not found)
  // - return the following JSON object: { message: "The user with the specified ID does not exist." }
  if (user.length <= 0) {
    res.status(400).send("The user with the specified ID does not exist.")
  }
  // TODO if there's an error in retrieving the user from the database:
  // - respond with HTTP status code 500
  // - return the following JSON object: { errorMessage: "The user information could not be retrieved." }
  else {

    res.json(user)
  }
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

app.listen(8000, () => console.log(`API running on port 8000`))
*/