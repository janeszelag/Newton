// load .env data into process.env
require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require("cors");
const database   = require("./database");


app.use(cors());
app.options('*', cors()); 
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const userRoutes = require("./routes/users");

app.use("/users", userRoutes(database));
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})