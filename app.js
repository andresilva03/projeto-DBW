const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
const connectDB = require('./server/config_db/db');
var path = require('path');


//Passport
const passport = require("passport");
const localStrategy = require("passport-local");
const session = require("express-session");
const user = require("./server/models/Users");
const { METHODS } = require('http');

//express session
app.use(
    session(
        {
            secret : "a-tua-chave",
            resave: false,
            saveUninitialized:false,
        }
    )
);

//passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());

passport.deserializeUser(user.deserializeUser());
//conectar a bd
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get('/login',(req,res) =>{
    res.render('login')
});

app.get('/',(req,res) =>{
    res.render('index')
});


app.get('/MobileAPP',(req,res) =>{
    res.render('MobileAPP')
});

app.get('/Signup',(req,res) =>{
    res.render('Signup')
});

app.post('/login',(req,res) =>{
    res.render('login')
});




app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});