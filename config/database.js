const mongoose = require('mongoose');

// TODO change database according to assigment
const CONNECTION_STRING = 'mongodb://localhost:27017/scaffoldDB';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log('Database connected');

    } catch(err) {
        console.error(err.massage);
        process.exit(1);
    }

};