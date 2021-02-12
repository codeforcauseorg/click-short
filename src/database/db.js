/*const mongoose = require('mongoose')

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

mongoose
  .connect(url, options)
  .then(function () {
    console.log('MongoDB is connected')
  })
  .catch(function (err) {
    console.log('Database connection failed.')
    console.log(err)
  })
*/


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://muiz1234:muiz1234@cluster0.gguur.mongodb.net/click-short?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
