var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var server = express();
var port = 3000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/', express.static(path.join(__dirname, '../public')));

server.listen(port, () => {
  console.log(`server running on port ${port}`);
})