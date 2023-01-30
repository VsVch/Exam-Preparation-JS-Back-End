const express = require('express');
const handelbars = require('express-handlebars');




module.exports = (app) => {
    const hbs = handelbars.create({
        extname: '.hbs'
    });

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');


    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true}));

};