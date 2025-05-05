const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const users = [
  {
    "id": 1,
    "username": "johnDoe",
    "password": "password123",
    "balance": 1000.00
  },
  {
    "id": 2,
    "username": "janeDoe",
    "password": "ilovecats",
    "balance": 500.00
  },
  {
    "id": 3,
    "username": "admin",
    "password": "admin123",
    "balance": 10020230.00
  },
  {
    "id": 4,
    "username": "bobSmith",
    "password": "mySecret123",
    "balance": 750.00
  },
  {
    "id": 5,
    "username": "sarahJohnson",
    "password": "ilovebooks",
    "balance": 200.00
  },
  {
    "id": 6,
    "username": "casinoAdmin",
    "password": "admin1234",
    "balance": 1000000.00
  }
]

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = users.find((user) => user.username === username && user.password === password)
  if (user) {
    res.json({ message: 'Login successful' })
  } else {
    res.status(401).json({ message: 'Invalid username or password' })
  }
})

app.listen(port, () => {
  console.log(`Credentials running on port ${port}`)
})