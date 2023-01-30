const homeController = require('express').Router();

// TODO replace withreal controller by assigment
homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    });
});

module.exports = homeController;
