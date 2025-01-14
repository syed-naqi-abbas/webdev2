const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const { login, create } = require("./utils.js");

const port = 3000;
const host = "192.168.51.136";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});
app.get("/loginpage", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/login.html"));
});
app.get("/createpage", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/create.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/create", (req, res) => {
  create(req.body.user, req.body.pass);
  res.redirect(`http://${host}:${port}`);
});

app.post("/login", (req, res) => {
  if (login(req.body.user, req.body.pass))
    res.send(`<h1>Welcome ${req.body.user}</h1>`);
  else res.send("<h1>Username or Password is Incorrect</h1>");
});

app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});
