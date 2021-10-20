const express = require("express");
const path = require("path");
const port = 8001;

const db = require("./config/mongoose");

const College = require("./models/colleges");

const app = express();

var cors = require("cors");

app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded()); // middleware  // parser => It reads only form data which has been submitted, NOT query params
app.use(express.static("assets")); // middleware   // all static files

app.get("/", function (req, res) {
  console.log("rendering home");
  return res.render("home", {});
});

app.get("/form", function (req, res) {
  console.log("rendering form");
  actionName = req.query["act"];
  console.log(actionName);
  return res.render("form", {
    action_name: actionName,
  });
});

app.get("/details", function (req, res) {
  console.log("rendering details");
  let name = req.query.name;
  College.find({ name: name }, function (err, docs) {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      return res.render("details", { college_list: docs });
    }
  });
});

app.get("/similar-colleges", function (req, res) {
  console.log("rendering similar colleges");
  //   console.log(req.query);
  let name = req.query.name;

  College.find({}, function (err, docs) {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      let similar_clg_list = docs; // put your logic here
      return res.render("similar-colleges", { college_list: similar_clg_list });
    }
  });
});

// FOR REACT
app.get("/charts", function (req, res) {
  console.log("opening charts");
  College.find({}, function (err, docs) {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      return res.json(docs);
    }
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error: ", err);
  }

  console.log("Express server is running on port: ", port);
});
