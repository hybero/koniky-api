const animalModel = require('../models/animals');

module.exports = {

    getById: function(req, res, next) {
        //console.log(req.body);
        if (typeof req.params.animalId !== 'undefined') {
            animalModel.findById(req.params.animalId, function(err, animalInfo){
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "animal found", data: {animals: animalInfo}});
                }
            });
        } else {
            res.json({status:"error", message: "animalId is required parameter", data:null});
        }
    },

    getAll: function(req, res, next) {
        let animalsList = [];
        //console.log(req);
        //if (typeof req.params.animalId !== 'undefined') {
            animalModel.find({}, function(err, animals){
                if(err) {
                    next(err);
                } else {
                    for(let animal of animals) {
                        animalsList.push({id: animal._id, name: animal.name, released_on: animal.released_on});
                    }
                    res.json({status: "success", message: "animals list found", data: {animals: animalsList}});
                }
            });
        //} else {
        //    res.json({status:"error", message: "animal_id is required parameter", data:null});
        //}
    },

    updateById: function(req, res, next) {
        animalModel.findByIdAndUpdate(req.params.animalId, {name:req.body.name}, function(err, animalInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "animal updated successfully", data: null});
            }
        });
    },

    deleteById: function(req, res, next) {
        animalModel.findByIdAndRemove(req.params.animalId, function(err, animalInfo){
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "animal deleted successfully", data: null});
            }
        });
    },

    create: function(req, res, next) {
        if (typeof req.body.type !== 'undefined' && typeof req.body.capacity !== 'undefined' && typeof req.body.status !== 'undefined') {
            animalModel.create({name: req.body.name, released_on: req.body.released_on }, function (err, result) {
                if(err) {
                    next(err);
                } else {
                    res.json({status: "success", message: "animal added successfully", data: null});
                }
            });
        } else {
            res.json({status:"error", message: "type, capacity and status is required", data:null});
        }
    },

}
