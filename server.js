const app = require('./src/app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/test');

app.listen(3000);
