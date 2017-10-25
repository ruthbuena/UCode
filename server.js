const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    env = require('dotenv').load(),
    path = require('path'),
    exphbs = require('express-handlebars')




const PORT = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("client/build"));

app.use(express.static(path.join(__dirname, 'public')));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//For Handlebars
app.set('views', './app/views')
app.engine('html', exphbs({
    extname: '.html'
}));
app.set('view engine', '.html');

//Models
const models = require("./App/models");


app.get('/', function(req, res) {
    res.redirect('/login')
});

app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.send(req.body);
});

app.post('/login', passport.authenticate('local-signin'), function(req, res) {
    res.send(req.body);
});


require('./App/config/passport/passport.js')(passport,models.users);


//Sync Database
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});



    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
