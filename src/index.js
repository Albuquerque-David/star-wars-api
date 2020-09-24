const express = require('express');
const DatabaseConfig = require('./config/DatabaseConfig');
const routes = require('./routes');
const cors = require('cors');

const app = express();

DatabaseConfig.connect();

app.use(express.json());

app.use(routes);

app.use(cors())

app.listen(3333);