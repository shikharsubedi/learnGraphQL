'use strict'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const dbConnect = require('./db')
const app = express()
const cors = require('cors')

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
try {
  dbConnect()
} catch (err) {
  console.log(err.message)
  process.exit(1)
}

app.listen(4000, () => {
  console.log('now listening to requests on port 4000')
})
