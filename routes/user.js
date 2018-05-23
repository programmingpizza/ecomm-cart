var express = require('express');
var router = express.Router();
var csrf =require('csurf');
var passport=require('passport');
var Order=require('../models/order');
var Cart=require('../models/cart')
var Product=require('../models/product')

var csrfProtection=csrf();

router.use(csrfProtection);

router.get("/admin", isLoggedIn, isAdmin, (req, res, next) => {
    res.render('user/admin', { csrfToken:req.csrfToken() })
})

router.post("/admin", isLoggedIn, isAdmin, (req, res, next) => {
    const { title, description, price, image } = req.body
    let success = false
    let message = "Product listing created successfully!"
    const product = new Product({
        image, title, description, price
    })
    product.save((err) => {
        if(err) { return next(err) }
        success = true
        res.render('user/admin', { success, message ,csrfToken:req.csrfToken()})
    })
})

router.get('/profile',isLoggedIn,function (req,res,next) {
    Order.find({ user:req.user }, function(err, orders){
        if(err){
            return res.write('Error!')
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart)
            order.items=cart.generateCart()
        })
        res.render('user/profile',{ orders:orders })
    })

});

router.get('/logout',isLoggedIn,function(req,res,next){
    req.logout();
    res.redirect('/');
});


router.use('/',notLoggedIn,function (req,res,next) {
    next();
})
var Product=require('../models/product');

router.get('/signup',function (req,res,next) {
    var messages=req.flash('error');
    res.render('user/signup',{csrfToken:req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

router.post('/signup', passport.authenticate('local.signup',{
    failureRedirect: '/user/signup',
    failureFlash:true
}), function(req,res,next){
    if(req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl=null;
        res.redirect(oldUrl);
         
    } else{
        res.redirect('/');
    }
});

router.get('/signin',function (req,res,next) {
    var messages=req.flash('error');
    res.render('user/signin',{csrfToken:req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

router.post('/signin', passport.authenticate('local.signin',{

    failureRedirect: '/user/signin',
    failureFlash:true
}), function(req,res,next){
    // if(req.user.admin) { res.locals.admin = req.user.admin }
    //     res.locals.login = req.isAuthenticated()
    //     console.log(res.locals)
    if(req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl=null;
        res.redirect(oldUrl); 
    } else{
        res.redirect('/');
    }
});


module.exports = router;

function isAdmin(req, res, next) {
    if(req.user.admin) {
        return next()
    }
    res.redirect("/")
}

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated())
    {
     return next();
    }
    res.redirect('/');
}

function notLoggedIn(req,res,next) {
    if(!req.isAuthenticated())
    {
        return next();
    }
    res.redirect('/');
}