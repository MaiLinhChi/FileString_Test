const express = require('express')
const cors = require("cors");
require('dotenv').config()

const routes = require("./routes")
const connectDb = require('./connections/mongodb')

const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
connectDb()

routes(app)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})