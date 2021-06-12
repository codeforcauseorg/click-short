const mongoose = require('mongoose')

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  connectTimeoutMS: 10000
}

const HOSTNAME = '127.0.0.1'
const MONGOPORT = '27017'
const DATABASE = 'links-db'

const url = `mongodb://${HOSTNAME}:${MONGOPORT}/${DATABASE}`
// Or Replace your url with your cluster link here like shown below:
// const url = "mongodb+srv://muiz1234:muiz1234@cluster0.gguur.mongodb.net/click-short?retryWrites=true&w=majority";

mongoose
  .connect(url, options)
  .then(function () {
    console.log('MongoDB is connected')
  })
  .catch(function (err) {
    console.log('Database connection failed.')
    console.log(err)
  })
