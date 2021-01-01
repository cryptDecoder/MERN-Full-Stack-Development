const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Hello MERN Stack Developer!!!"));

app.listen(port, () => {
  console.log(
    `Welcome to node express app,The app is listening on port ${port}`
  );
});

app.get("/about", (req, res) => res.send("This is about page!!"));
