var mongoose=require('mongoose');

var bcrypt=require('bcrypt-nodejs')
mongoose.connect('mongodb://localhost:27017/shopping');


var User=require('../models/user');

var users = [
    new User({
        email:"abc@gmail.com",
        password: encryptPassword("12345")

    }),
    new User({

        email:"admin@admin.com",
        password:encryptPassword("123456"),
        admin: true
    })
]

function encryptPassword(password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
}

var done=0;
for (var i=0;i<users.length;i++){
    users[i].save( function (err,result) {
        done++;
        if(done=== users.length){
            exit();
        }
    });

}

function exit(){
    mongoose.disconnect();
}

// module.exports = users