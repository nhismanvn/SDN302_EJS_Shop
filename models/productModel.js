const mongoose=require('mongoose');
const schema=new mongoose.Schema({productName:{type:String,required:true,unique:true,trim:true},category:{type:String,required:true},stockStatus:{type:String,enum:['in_stock','out_of_stock','discontinued'],required:true},unitPrice:{type:Number,required:true,min:0},tags:[String]});
module.exports=mongoose.model('Product',schema);
