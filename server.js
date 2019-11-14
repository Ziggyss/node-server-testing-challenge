const express = require("express");

const Cats = require("./catsModel");

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

server.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  Cats.findById(id).then(cat => {
    res.json(cat);
  });
});

server.delete("/cats/:id", (req, res) => {
  Cats.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Cat deleted successfully" });
    })
    .catch(err => {
      res.status(500).json({ message: "Error deleting cat: " + err.message });
    });
});

module.exports = server;
