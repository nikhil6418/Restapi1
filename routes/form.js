const router = require('express').Router();
const verify = require('./verify');
const User = require('../model/User');

router.post('/',verify,(req,res)=>{
    User.findById(req.user._id,function(err, result){
        if(err){
            res.status(400).send(err);
        }
        else{
            const obj = {
                symptoms: req.body.symptoms,
                travelHistory: req.body.travelHistory,
                suspectContact: req.body.suspectContact
            }
            result.userResponse.push(obj);
            result.save();
            if(req.body.symptoms==="Shortness of breath" || req.body.travelHistory==="Yes" || req.body.suspectContact==="Yes" )
            return res.send('High Risk Detected'); 
            
            return res.send('Low Risk Detected');
        }
    });
    
});


router.post('/detail',verify,(req,res)=>{
    User.findById(req.user._id,function(err, result){
        if(err){
            res.status(400).send(err);
        }
        else{
            result.contact = req.body.contact;
            result.address = req.body.address;
            result.save();
            return res.send('Data Recorded');
        }
    });
    
});


module.exports = router;