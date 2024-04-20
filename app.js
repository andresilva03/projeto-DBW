const express = require('express');

const app = express();
const PORT = 3000;
const connectDB = require('./server/config_db/db');
var path = require('path');
const methodOverride = require("method-override");


//Passport
const passport = require("passport");
const localStrategy = require("passport-local");
const session = require("express-session");
const User = require("./server/models/Users");
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

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
//conectar a bd
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get('/main',(req,res) =>{
    res.render('index')
});


app.get('/MobileAPP',(req,res) =>{
    res.render('MobileAPP')
});

// Routes
const userRouter = require("./routes/UserRoute");


//Middleware para os gets e posts
app.use(userRouter);


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});