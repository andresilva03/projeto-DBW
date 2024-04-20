const User = require('../server/models/Users');

const signGet = function (req, res) {
    res.render('Signup')
}

const signPost = async function(req,res) {
    try {
        const { email, username, password } = req.body;

        const user = new User({email, username});
        await User.register(user, password);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }    
    
}

const loginGet = function (req, res) {
    res.render('login')
}



module.exports = {signGet, signPost,loginGet};