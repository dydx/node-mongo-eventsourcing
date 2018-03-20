const mongoose = require('mongoose');
const E = require('./src/lib/events');
const Order = require('./src/lib/order');
mongoose.connect('mongodb://mongo:27017/test');

const refresh = async () => {
    await Order.deleteMany({});
    const orderEvents = await E.OrderEvent.find({});
    await E.saveEvents(orderEvents);
    return mongoose.disconnect();
};

refresh();
