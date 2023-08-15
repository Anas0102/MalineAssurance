const express=require("express")
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const keys=require("../../backend/.env")

//load input Validation

const ValidateRegisterInput=require("../validation/register");
const ValidateLoginInput=require("../validation/login")

//Load User Model
const User=require("../models/User")

//@route Post register
//@desc Register user
//@access Public

router.post('/register',(req,res)=>{
    //form validation
    const {errors,isValid}=ValidateRegisterInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne({email:req.body.email}).then((user)=>{
         if(user){
            return res.status(400).json({email:"Email already exists"});
        }else{
            const newUser =new User ({
                name:req.body.name,
                email: req.body.email,
                password:req.body.password
            })
        }
    });


    //hash password before saving in DB
    bcrypt.genSalt(10,(err,salt)=>bcrypt.hash(newUser.password, salt,(err, hash) => {
        if (err) throw err; 
        newUser.save()
        .then((user)=>res.json(user))
        .catch((err)=>console.log(err));
    }));
});
       