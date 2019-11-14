const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'miaow' });
});

module.exports = server;