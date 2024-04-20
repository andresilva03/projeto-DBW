const express = require('express');
const router = express.Router();
const userCont = require('../controller/UserController');
const passport = require('passport');

router.get('/Signup', userCont.signGet);

router.post('/Signup',userCont.signPost);

router.get('/',userCont.loginGet);

router.post('/',
    passport.authenticate("local",{failureRedirect: '/'}), 
    function (req, res) {
        res.redirect('/main');
    }
);

module.exports = router;