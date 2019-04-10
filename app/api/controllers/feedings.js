const feedingModel = require('../models/feedings');

module.exports = {

    getById: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.feeding_id !== 'undefined') {
            feedingModel.findById(req.params.feeding_id, function(err, feedingInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "feeding found", data: {feedings: feedingInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "feeding_id is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let feedingsList = [];
        //console.log(req);
        if (typeof req.params.user_id !== 'undefined') {
            feedingModel.find({user_id: req.params.user_id}, function(err, feedings){
                if(err) {
                    next(err);
                } else {
                    for(let feeding of feedings) {
                        feedingsList.push({id: feeding._id, label: feeding.label, feeding_type: feeding.feeding_type, date: feeding.date, costs: feeding.costs});
                    }
                    res.json({status: "success", message: "feedings list found", data: {feedings: feedingsList}});
                }
            });
        } else {
            res.json({status:"error", message: "feeding_id is required parameter", data:null});
        }
    },

    updateById: function(req, res, next) {
        feedingModel.findByIdAndUpdate(req.params.feeding_id, { label: req.body.label, feeding_type: req.body.feeding_type, date: req.body.date, costs: req.body.costs}, function(err, feedingInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "feeding updated successfully", data: null});
            }
        });
    },

    deleteById: function(req, res, next) {
        feedingModel.findByIdAndRemove(req.params.feeding_id, function(err, feedingInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "feeding deleted successfully", data: null});
            }
        });
    },

    create: function(req, res, next) {
        if (typeof req.body.label !== 'undefined' && typeof req.body.feeding_type !== 'undefined' && typeof req.body.date !== 'undefined') {
            feedingModel.create({label: req.body.label, feeding_type: req.body.feeding_type, date: req.body.date, costs: req.body.costs}, function (err, result) {
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "feeding added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "name, feeding_type, gender and age is required", data:null});
        }
    },

}
