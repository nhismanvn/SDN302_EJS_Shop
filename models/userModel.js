const mongoose=require('mongoose');
const schema=new mongoose.Schema({email:{type:String,required:true,unique:true,lowercase:true,trim:true},passwordHash:{type:String,required:true},role:{type:String,enum:['admin','viewer'],default:'viewer'}});
module.exports=mongoose.model('User',schema);
