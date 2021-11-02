const express = require("express");
const path = require("path");
const app = express();

//getting our post routes

const posts = require("./server/routes/post");

//Ussing midleware
app.use(express.static(path.join(__dirname, "dist")));
app.use("/posts", posts);

// Catch all other request and return to index

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
