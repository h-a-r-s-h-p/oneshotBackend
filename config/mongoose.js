// require the lbrary
const mongoose = require('mongoose')

// connect to the database
mongoose.connect('mongodb://localhost/college_db2');

// acquire the connection (to check if it was successful)
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'error connecting to db'));

// if up and running then print mssg
db.once('open', function(){
    console.log("Succesfully connected to db");
});

