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

    getByAnimalId: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.animalId !== 'undefined') {
            animalModel.find({animal_id: req.params.animalId}, function(err, animalEventInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "animal event found", data: {animalEvents: animalEventInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "animalId is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let animalEventsList = [];
        //console.log(req);
        if (typeof req.params.userId !== 'undefined') {
            animalEventModel.find({user_id: req.params.userId}, function(err, animalEvents){
                if(err) {
                    next(err);
                } else {
                    for(let animalEvent of animalEvents) {
                        animalEventsList.push({id: animalEvent._id, user_id: animalEvent.user_id, animal_id: animalEvent.animal_id, label: animalEvent.label, event_date: animalEvent.event_date, event_type: animalEvent.event_type, costs: animalEvent.costs});
                    }
                    res.json({status: "success", message: "animalEvents list found", data: {animalEvents: animalEventsList}});
                }
            });
        } else {
            res.json({status:"error", message: "user_id is required parameter", data:null});
        }
    },

    updateById: function(req, res, next) {
        animalEventModel.findByIdAndUpdate(req.params.animalEventId, {user_id: req.body.user_id, animal_id: req.body.animal_id, label: req.body.label, event_date: req.body.event_date, event_type: req.body.event_type, costs: req.body.costs}, function(err, animalEventInfo){
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
        if (typeof req.body.user_id !== 'undefined' && typeof req.body.animal_id !== 'undefined' && typeof req.body.label !== 'undefined' && typeof req.body.event_date !== 'undefined' && typeof req.body.event_type !== 'undefined') {
            animalEventModel.create({user_id: req.body.user_id, animal_id: req.body.animal_id, label: req.body.label, evnt_date: req.body.evnt_date, event_type: req.body.event_type, costs: req.body.costs }, function (err, result) {
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
