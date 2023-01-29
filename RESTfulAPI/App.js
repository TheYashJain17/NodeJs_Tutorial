const express = require('express');

require('./ConnectionWithMongo');

const router = require('./Routes');

const app = express();

app.use(express.json());

app.use(router);

app.listen(80);

