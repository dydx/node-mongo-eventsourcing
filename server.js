const app = require('./src/app');
const mongoose = require('mongoose');
const config = require('./config');

const mongoURL = config[process.env.NODE_ENV].mongo;

mongoose.connect(mongoURL);

app.listen(3000);
