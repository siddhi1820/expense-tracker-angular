const categoryModel=require('../models/main/categoryModel');
const express=require('express');
const router=express.Router();
router.post('/addCategory',async(req,res)=>{
    try{
      const {categoryName}=req.body;
      const addNewCategory=new categoryModel({categoryName});
      await addNewCategory.save().then((data)=>{
        res.status(201).json({message:'Category Added Sucessfully.',data});
      }).catch((err)=>{
        res.status(401).json({message:'Techniqual error while adding category.',res:err});
      })
    }catch(error){
        console.log(error);
    }
})
router.get('/viewCategory',async(req,res)=>{
    try{
      
      await categoryModel.find().then((data)=>{
        res.status(201).json({data});
      }).catch((err)=>{
        res.status(401).json({message:'Techniqual error while fetching category.',res:err});
      })
    }catch(error){
        console.log(error);
    }
})
module.exports=router;
