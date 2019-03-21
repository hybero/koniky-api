const healthModel = require('../models/healths');

module.exports = {

    getById: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.health_id !== 'undefined') {
            healthModel.findById(req.params.health_id, function(err, healthInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "health found", data: {healths: healthInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "health_id is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let healthsList = [];
        //console.log(req);
        if (typeof req.params.user_id !== 'undefined') {
            healthModel.find({user_id: req.params.user_id}, function(err, healths){
                if(err) {
                    next(err);
                } else {
                    for(let health of healths) {
                        healthsList.push({id: health._id, label: health.label, health_type: health.health_type, date: health.date, costs: health.costs});
                    }
                    res.json({status: "success", message: "healths list found", data: {healths: healthsList}});
                }
            });
        } else {
            res.json({status:"error", message: "health_id is required parameter", data:null});
        }
    },

    updateById: function(req, res, next) {
        healthModel.findByIdAndUpdate(req.params.health_id, { label: req.body.label, health_type: req.body.health_type, date: req.body.date, costs: req.body.costs}, function(err, healthInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "health updated successfully", data: null});
            }
        });
    },

    deleteById: function(req, res, next) {
        healthModel.findByIdAndRemove(req.params.health_id, function(err, healthInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "health deleted successfully", data: null});
            }
        });
    },

    create: function(req, res, next) {
        if (typeof req.body.label !== 'undefined' && typeof req.body.health_type !== 'undefined' && typeof req.body.date !== 'undefined') {
            healthModel.create({label: req.body.label, health_type: req.body.health_type, date: req.body.date, costs: req.body.costs}, function (err, result) {
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "health added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "name, health_type, gender and age is required", data:null});
        }
    },

}
