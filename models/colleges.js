//  this file is to define SCHEMA
// since SCHEMA can be define d using MONGOOSE, we need to include it here too

const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  ID: {
    type: String,
  },
  name: {
    type: String,
  },
  year_founded: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  no_of_students: {
    type: Number,
  },
  courses: {
    type: Array,
  },
});

const College = mongoose.model("College", collegeSchema);

// export it
module.exports = College;

