var express = require('express');
var router = express.Router();
// var stripe = require("stripe")("sk_test_LAG7VpfmWClDeFr59iztotdg");
var Cart = require('../models/cart');
var Product=require('../models/product');
var Order=require('../models/order');

//var Cart = require('../models/cart')
//
// var order = require('../models/order')
/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(res.locals)
    // console.log(req.user)
     var successMsg =req.flash('success')[0]
    // var products=
        Product.find(function(err,docs){
        var productChunks = [];
        var chunksize=3;
        for(var i=0;i<docs.length;i+=chunksize){
            productChunks.push(docs.slice(i,i+chunksize));
        }
        res.render('shop/index', { title: 'Ecomm-Cart' ,products:productChunks, successMsg:successMsg, noMessages: !successMsg});
    });
});

router.get('/add-to-cart/:id', function(req,res,next){
    var productId=req.params.id;
    var cart=new Cart(req.session.cart ? req.session.cart : {});
    Product.findById(productId,function(err,product){
        if(err){
            return res.redirect('/')
        }
        cart.add(product,product.id);
        req.session.cart=cart;
        res.redirect('/');
    });
});


router.get('/shopping-cart', function(req,res,next){
    if(!req.session.cart){
        return res.render('shop/shopping-cart',{products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart',{products: cart.generateCart(), totalPrice: cart.totalPrice});
});

router.get('/checkout',isLoggedIn, function(req,res,next){
    if(!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg=req.flash('error')[0]
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg})
});


router.post('/checkout',isLoggedIn,function(req,res,next){
    if(!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    // console.log(req.body)

    var cart = new Cart(req.session.cart);
    var stripe = require("stripe")("sk_test_LAG7VpfmWClDeFr59iztotdg");

    var token = req.body.stripeToken
    
    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: token, // obtained with Stripe.js
        description: "Test Charge",
    }, function(err, charge) {
        if(err){
            req.flash('error',err.message)
            return res.redirect('/checkout')
        }
    //    console.log(req.body)
       
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentID: charge.id
        })
        console.log(order);
        order.save(function(err,result){
            // if(err){
            //     console.log("error is here");
            // }
            req.flash('success', 'Successfully bought the product')
            req.session.cart = null
            res.redirect('/');
        })
    });
})


router.get('/reduce/:id', function(req,res,next){
    var productId=req.params.id
    var cart=new Cart(req.session.cart ? req.session.cart : {})
    cart.reduceByOne(productId)
    req.session.cart = cart
    res.redirect('/Shopping-cart')
})


router.get('/remove/:id', function(req,res,next){
    var productId=req.params.id
    var cart=new Cart(req.session.cart ? req.session.cart : {})
    cart.removeItem(productId)
    req.session.cart = cart
    res.redirect('/Shopping-cart')
})


module.exports = router;



function isLoggedIn(req,res,next) {
    if(req.isAuthenticated())
    {
     return next();
    }
    req.session.oldUrl= req.url;

    res.redirect('/user/signin');
}

function notLoggedIn(req,res,next) {
    if(!req.isAuthenticated())
    {
        return next();
    }
    res.redirect('/');
}

//
// successMsg:successMsg, noMessages: !successMsg
//
//
//
//

//

//

//
// function isLoggedin(req,res,next){
//     if(req.isAuthenticated()){
//         return next()
//     }
//     req.session.oldUrl = req.url
//     res.redirct("/user/signin")
// }