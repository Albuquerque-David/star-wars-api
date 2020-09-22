const express = require('express');
const DatabaseConfig = require('./config/DatabaseConfig');
const routes = require('./routes');

const app = express();

DatabaseConfig.connect();

app.use(express.json());

app.use(routes);

app.listen(3333);