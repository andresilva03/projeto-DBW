const express = require('express');

const app = express();

var path = require('path');

app.listen(3000);

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
