// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// you can always use whatever libraries or frameworks you'd like through `package.json` > "Add package".
const express = require("express");

const app = express(); // initialize an express instance called 'app'

app.use(express.json()); // set up the app to parse JSON request bodies

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// return the public/index.html file when a GET request is made to the root path "/"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/update-position", (req,res) => {
  let output = [12000, 12000];
  res.send(output);
});


// start listening on a port 
app.listen(process.env.PORT, () => {
  console.log(`Don't worry app is listening at port ${process.env.PORT}`);
});

// app.listen(3000, () => console.log('lis'));
