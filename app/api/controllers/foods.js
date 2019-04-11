const foodModel = require('../models/foods');

module.exports = {

    getById: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.food_id !== 'undefined') {
            foodModel.findById(req.params.food_id, function(err, foodInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "food found", data: {foods: foodInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "food_id is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let foodsList = [];
        //console.log(req);
        if (typeof req.params.user_id !== 'undefined') {
            foodModel.find({user_id: req.params.user_id}, function(err, foods){
                if(err) {
                    next(err);
                } else {
                    for(let food of foods) {
                        foodsList.push({id: food._id, label: food.label, food_type: food.food_type, date: food.date, costs: food.costs});
                    }
                    res.json({status: "success", message: "foods list found", data: {foods: foodsList}});
                }
            });
        } else {
            res.json({status:"error", message: "food_id is required parameter", data:null});
        }
    },

    updateById: function(req, res, next) {
        foodModel.findByIdAndUpdate(req.params.food_id, { label: req.body.label, food_type: req.body.food_type, date: req.body.date, costs: req.body.costs}, function(err, foodInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "food updated successfully", data: null});
            }
        });
    },

    deleteById: function(req, res, next) {
        foodModel.findByIdAndRemove(req.params.food_id, function(err, foodInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "food deleted successfully", data: null});
            }
        });
    },

    create: function(req, res, next) {
        if (typeof req.body.label !== 'undefined' && typeof req.body.food_type !== 'undefined' && typeof req.body.date !== 'undefined') {
            foodModel.create({label: req.body.label, food_type: req.body.food_type, date: req.body.date, costs: req.body.costs}, function (err, result) {
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "food added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "name, food_type, gender and age is required", data:null});
        }
    },

}
