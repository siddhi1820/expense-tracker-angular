const registerModel=require('../models/auth/register.models');
const loginModel=require('../models/auth/login.models');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const express=require('express');
const router=express.Router();

router.post('/register',async(req,res)=>{
   const {name,email,password}=req.body;
   const salt=await bcrypt.genSalt(10);
   const hashPassword=await bcrypt.hash(password,salt);
   const newData=new registerModel({
    name,email,password:hashPassword
   })
   await newData.save().then((data)=>{
    res.status(201).json({message:'User Added SucessFully.',res:data})
   }).catch((err)=>{
    res.status(401).json({error:err})
   });
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(email, password);

    const emailExist = await registerModel.findOne({ email });
    console.log(emailExist);

    if (!emailExist) {
      return res.status(404).json({ message: 'Sorry, email not found.' });
    }

    const correctPassword = await bcrypt.compare(password, emailExist.password);

    if (!correctPassword) {
      return res.status(401).json({ message: 'Password is incorrect.' });
    }
    const payload={userId:emailExist._id}
   const expiresIn='1h' ;
   const key="ok"

  const jwtToken= await jwt.sign(payload,key, { expiresIn });
 
    // If everything is correct
    return res.status(200).json({ message: 'Login Successfully.' ,token:jwtToken,isUserLogin:true,userName:emailExist.name});

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
});


module.exports=router;
