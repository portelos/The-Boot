const express = require("express");
const helmet = require("helmet");

//const db = require("LINK TO YOUR MODEL/HELPERS FILE");
//const ourRouter = require("./POINT TO YOUR ROUTER");
const server = express();

server.use(helmet());
server.use(express.json());
//server.use("/", ourRouter);

server.get("/", (req, res) => {
  // get all species from the database

  console.log("we in here,");

  res.status(200).json("you succeeded.");
});

module.exports = server;
