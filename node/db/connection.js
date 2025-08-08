const dbUrl='mongodb://localhost:27017/expenseTracker';
const mongoose=require('mongoose');

const db=
   mongoose.connect(dbUrl,{
    useNewUrlParser:true,useUniFiedTopology:true
}).then(()=>{
    console.log('Connected with DB...');
}).catch((err)=>{
    console.log(err);
}
) 
module.exports = db;
