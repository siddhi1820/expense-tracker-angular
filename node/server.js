const express=require('express');
const categoryService=require('./services/categoryService');
const expenseService=require('./services/expenseService');
const cors=require('cors');
const router=require('./services/authService');
const db=require('./db/connection');
const app=express();
app.use(express.json());
app.use(cors());
app.use('/auth',router);
app.use('/main',categoryService);
app.use('/main',expenseService);
app.get('',(req,res)=>{
    res.send('Welcome to Expense Tracker...');
db();
}).listen(2000,()=>{
    console.log('Server running..');
})