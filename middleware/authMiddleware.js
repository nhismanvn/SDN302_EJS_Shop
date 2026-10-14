exports.requireLogin=(req,res,next)=>req.session.user?next():res.redirect('/login');
exports.requireAdmin=(req,res,next)=>req.session.user?.role==='admin'?next():res.status(403).send('Forbidden: admin only');
