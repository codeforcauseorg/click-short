const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  connectTimeoutMS: 10000,
};

const HOSTNAME = "127.0.0.1"
const MONGOPORT = "27017"
const DATABASE = "links-db"

const url = `mongodb://${HOSTNAME}:${MONGOPORT}/${DATABASE}`

mongoose.connect(url, options).then(function () {
  console.log('MongoDB is connected');
})
.catch(function (err) {
  console.log("Database connection failed.")
  console.log(err);
});
