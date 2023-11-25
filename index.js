const express = require("express");
const app = express();
const port = 1234;
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./roles/role");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//get
app.get("/", auth, (req, res) => {
  res.status(401).send({
    status: 201,
    message: `${req.body.name} User Authorized as a ${req.body.role} `,
  });
});
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("server running ");
});
