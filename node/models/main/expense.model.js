const mongoose=require('mongoose');
const expenseSchema=mongoose.Schema({
     title: {
    type: String,
    required: true,
    trim: true
  },
    amount:{
        type:Number,
        required:true,
        min:0
    },
    date:{
        type:Date,
        default:Date.now,
        required:true

    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    }

})
module.exports = mongoose.model('Expense', expenseSchema);