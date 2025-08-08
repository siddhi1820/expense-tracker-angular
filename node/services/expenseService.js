const expenseModel=require('../models/main/expense.model');
const express=require('express');
const router=express.Router();

router.post('/addExpense',async(req,res)=>{
    try{
       const {title,amount,category,date}=req.body;
       const addExpense=new expenseModel({title,amount,category,date});
       await addExpense.save().then((data)=>{
        res.status(201).json({message:'Expense Added Sucessfully.'});
       }).catch((err)=>{
        res.status(422).json({message:'Techniqual error while adding expense.'});
       })
    }catch(error){
        console.log(error);
    }
})
router.get('/getExpense',async(req,res)=>{
   try{
     await expenseModel.find().then((data)=>{
        res.status(200).json({data:data})
     }).catch((err)=>{
        res.status(401).json({message:err})
     })
   }catch(error){
    console.log(error);
   }
})

module.exports=router;
