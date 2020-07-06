const mongoose = require('mongoose')

function dbConnect () {
  // Set up default mongoose connection
  const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-a1jav.mongodb.net/graphql?retryWrites=true&w=majority`
  mongoose.connect(mongoDB, { useNewUrlParser: true })
  var db = mongoose.connection

  // Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  db.once('open', () => {
    console.log('mongodb is now connected')
  })
}

module.exports = dbConnect
