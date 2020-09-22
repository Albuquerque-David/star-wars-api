const express = require('express');
const DatabaseConfig = require('./config/DatabaseConfig');

const app = express();

DatabaseConfig.connect();

app.use(express.json());

app.listen(3333);