const animalEventModel = require('../models/animal-events');

module.exports = {

    getById: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.animalEventId !== 'undefined') {
            animalModel.findById(req.params.animalEventId, function(err, animalEventInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "animal event found", data: {animalEvents: animalEventInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "animalEventId is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let animalEventsList = [];
        //console.log(req);
        //if (typeof req.params.animalEventId !== 'undefined') {
            animalEventModel.find({}, function(err, animalEvents){
                if(err) {
                    next(err);
                } else {
                    for(let animalEvent of animalEvents) {
                        animalEventsList.push({id: animalEvent._id, name: animalEvent.name, released_on: animalEvent.released_on});
                    }
                    res.json({status: "success", message: "animalEvents list found", data: {animalEvents: animalEventsList}});
                }
            });
        //} else {
        //    res.json({status:"error", message: "animalEvent_id is required parameter", data:null});
        //}
    },

    updateById: function(req, res, next) {
        animalEventModel.findByIdAndUpdate(req.params.animalEventId, {name:req.body.name}, function(err, animalEventInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "animalEvent updated successfully", data: null});
            }
        });
    },

    deleteById: function(req, res, next) {
        animalEventModel.findByIdAndRemove(req.params.animalEventId, function(err, animalEventInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "animalEvent deleted successfully", data: null});
            }
        });
    },

    create: function(req, res, next) {
        if (typeof req.body.type !== 'undefined' && typeof req.body.capacity !== 'undefined' && typeof req.body.status !== 'undefined') {
            animalEventModel.create({name: req.body.name, released_on: req.body.released_on }, function (err, result) {
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "animalEvent added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "type, capacity and status is required", data:null});
        }
    },

}
