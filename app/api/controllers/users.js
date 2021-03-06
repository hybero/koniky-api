const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    create: function(req, res, next) {
        if (typeof req.body.name !== 'undefined' && typeof req.body.email !== 'undefined' && typeof req.body.password !== 'undefined') {
            userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
                if (err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "User added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "Name, Email and Password are required", data:null});
        }
    },

    authenticate: function(req, res, next) {
        if (typeof req.body.email !== 'undefined' && typeof req.body.password !== 'undefined') {
            userModel.findOne({email:req.body.email}, function(err, userInfo){
                if (err) {
                    console.log(err);
                    next(err);
                } else {
                    if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                        res.json({status:"success", message: "user found", data:{user: userInfo, token:token}});
                    } else {
                        res.json({status:"error", message: "Invalid email/password", data:null});
                    }
                }
            });
        } else {
            res.json({status:"error", message: "Email and Password are required", data:null});
        }
    },

    deleteById: function(req, res, next) {
        userModel.findByIdAndRemove(req.params.userId, function(err, userInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "user deleted successfully", data: null});
            }
        });
    },

}
