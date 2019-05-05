var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');


module.exports.postSignUp = (req, res, next) => {    
    req.checkBody('username', ' Username tu 4 den 20 ki tu').isLength({min: 4, max: 20});
    req.checkBody('password', ' Password tu 8 den 30 ki tu').isLength({min: 8, max: 30});
    // req.checkBody('re_pass', ' xac nhan mat khau khong chinh xac').isLength({max: 30, min: 8});
    req.checkBody('email', ' Email khong dung dinh dang').isEmail();
    req.checkBody('name', ' Nhap Full name').isLength({max: 100, min: 1});
    req.checkBody('phone', ' Nhap SDT').isLength({max: 15, min: 1});
    var errors = req.validationErrors(); 

    var messages = []; 
    if(errors) {       
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        if(req.body.password !== req.body.re_pass) messages.push('Xac nhan mat khau khong chinh xac')
        return res.status(404).json({message: messages});
    }
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var name = req.body.name;
    var phone = req.body.phone;

    User.findOne({ 'username' :  username }, (err, user) => {
        if (err) {
            return res.status(404).json({message: ['Tim user error']});
        }
        if (user) {
            console.log(user);
            return res.status(404).json({message: ['Username da ton tai']});
        } else {
            var newUser = new User({
                username: username,
                password : bcrypt.hashSync(password),
                email : email,
                name: name,
                phone: phone,
                dateCreate: Date.now()
            });
            newUser.save(function(err) {
                if (err) {
                    return res.status(404).json({message: ['Them user error']});
                }
                else {
                    return res.status(200).json({message: ['Them thanh cong']})
                }
            });
        }                    
    }); 
}

module.exports.postSignIn = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ 'username' :  username }, (err, user) => {
        if (err) {
            return res.status(404).json({message: ['Dang nhap that bai']});
        }
        if (!user) {
            return res.status(404).json({message: ['Username khong ton tai']});
        }
        if(bcrypt.compareSync(password, user.password) === false){
            return res.status(404).json({message: ['Mat khau khong chinh xac']});
        } else {             
            var token = jwt.sign({
                        username: user.username,
                        email: user.email,
                        name: user.name,
                        phone: user.phone,
                        _id: user._id
                    }, 'keyBaoMat', { expiresIn: '3h' } )                
            return res.status(200).json({access_token: token});
        }
        
    }); 
}

// module.exports.getSignIn = (req, res, next) => {
//     console.log(req.headers)
// }