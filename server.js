const express = require("express");

const Cats = require('./catsModel');

const server = express();

server.use(express.json());


server.get("/catses", cats, (req, res) => {
        Cats.getAll()
          .then(cats => {
            res.status(200).json(cats);
          })
          .catch(error => {
            res.status(500).json(error);
          });
      });


server.get("/", (req, res) => {
  res.status(200).json({ api: "miaow" });
});

module.exports = server;
