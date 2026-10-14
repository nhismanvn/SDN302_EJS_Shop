const User=require('../models/userModel');
const bcrypt=require('bcryptjs');
exports.loginPage=(req,res)=>res.render('login',{error:null});
exports.login=async(req,res,next)=>{try{const user=await User.findOne({email:String(req.body.email||'').toLowerCase().trim()});if(!user||!await bcrypt.compare(req.body.password||'',user.passwordHash))return res.status(401).render('login',{error:'Email hoặc mật khẩu không đúng'});req.session.regenerate(err=>{if(err)return next(err);req.session.user={id:String(user._id),email:user.email,role:user.role};req.session.save(err=>err?next(err):res.redirect('/orders'));});}catch(err){next(err)}};
exports.logout=(req,res,next)=>req.session.destroy(err=>err?next(err):res.clearCookie('shop.sid').redirect('/login'));
