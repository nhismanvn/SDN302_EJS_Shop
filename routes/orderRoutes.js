const router=require('express').Router();const c=require('../controllers/orderController');const {requireLogin,requireAdmin}=require('../middleware/authMiddleware');
router.get('/',(req,res)=>res.redirect('/orders'));
router.get('/orders',requireLogin,c.list);
router.get('/orders/new',requireLogin,requireAdmin,c.createForm);
router.post('/orders',requireLogin,requireAdmin,c.create);
router.get('/orders/:id/edit',requireLogin,requireAdmin,c.updateForm);
router.post('/orders/:id/update',requireLogin,requireAdmin,c.update);
router.post('/orders/:id/delete',requireLogin,requireAdmin,c.remove);
module.exports=router;
