const authController = require('../controllers/authcontroller.js');
const path = require('path');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
        res.redirect('/home')
    });

    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/login',
        failureRedirect: '/login'
    }));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    app.post('/login', passport.authenticate('local-signin', (req, res, next) => {
        res.send('login successfull');
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
}