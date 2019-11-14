const express = require("express");

const Cats = require('./catsModel');

const server = express();
server.use(express.json());

// let cats = [
//     { name: "Ziggy", hobby: "eating flies" },
//     { name: "Abi", hobby: "breaking computers" },
//     { name: "Zuri", hobby: "pirating" },
//     { name: "Pusskins", hobby: "decapitating rabbits" }
//   ]


server.get("/cats", (req, res) => {
    // res.json('testing cats')
        Cats.getAll()
          .then(cats => {
            res.status(200).json(cats);
          })
          .catch(error => {
            res.status(500).json(error.message);
          });
      });


server.get("/", (req, res) => {
  res.status(200).json({ api: "miaow" });
});

module.exports = server;
