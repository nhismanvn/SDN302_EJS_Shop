const mongoose=require('mongoose');
const schema=new mongoose.Schema({customerName:{type:String,required:true,trim:true},productName:{type:String,required:true},quantity:{type:Number,required:true,min:1},orderDate:{type:Date,required:true},totalPrice:{type:Number,required:true,min:0}},{timestamps:true});
module.exports=mongoose.model('Order',schema);
