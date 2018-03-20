const mongoose = require('mongoose');
const E = require('./src/lib/events');
const Order = require('./src/lib/order');
const config = require('./config');

const mongoURL = config[process.env.NODE_ENV].mongo;

mongoose.connect(mongoURL);

const refresh = async () => {
    await Order.deleteMany({});
    const orderEvents = await E.OrderEvent.find({});
    await E.saveEvents(orderEvents);
    return mongoose.disconnect();
};

refresh();
