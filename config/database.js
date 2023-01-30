const mongoose = require('mongoose');

// TODO change database according to assigment
const CONNECTION_STRING = 'mongodb://localhost:27017/scaffoldDB';

module.exports = async (app) => {
    try {
        mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser
        })
    }

};