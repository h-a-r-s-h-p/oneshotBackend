// require the lbrary
const mongoose = require("mongoose");

const connection_url = "mongodb+srv://admin:wWWzdu1nOUEBhWsS@cluster0.yxz6j.mongodb.net/oneshotdatabase?retryWrites=true&w=majority";

// connect to the database
// mongoose.connect('mongodb://localhost/college_db2');

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// acquire the connection (to check if it was successful)
const db = mongoose.connection;

// if error
db.on("error", console.error.bind(console, "error connecting to db"));

// if up and running then print mssg
db.once("open", function () {
  console.log("Succesfully connected to db");
});

/*
DATABASE AUTH ::
username: XXXX
password: XXXX
*/

