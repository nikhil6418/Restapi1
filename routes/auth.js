const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register',async (req,res)=>{
    
    const userExist = await User.findOne({email:req.body.email});
    if(userExist)
    return res.status(400).send('Email already exist');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt); 

    const user = new User({
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }
    catch(err){
        res.status(400).send(err);

    }

});

router.post('/login',async (req,res)=>{
    const userExist = await User.findOne({email:req.body.email});
    if(!userExist)
    return res.status(400).send('check youremail or password');

    const pswdCorrect = await bcrypt.compare(req.body.password,userExist.password);
    if(!pswdCorrect)
    return res.status(400).send('Invalid Password');

    const token = jwt.sign({_id: userExist._id},process.env.TOKEN_SECRET);
    res.header('token',token).send('logged in');
});


module.exports = router;