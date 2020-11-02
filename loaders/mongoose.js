const mongoose = require('mongoose');
const config = require('../config');

module.exports = () => {
    const db = mongoose.connection;
    const { MONGODB_BASE_URL, MONGODB_DATABASE_NAME } = config;

    mongoose.connect(`${MONGODB_BASE_URL}/${MONGODB_DATABASE_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db.on('error', (e) => {
        console.error('connection error:');
        console.error(e);
    });

    db.once('open', function () {
        console.log('mongo db connected');
    });
};
