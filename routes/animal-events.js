const express = require('express');
const router = express.Router();
const animalEventController = require('../app/api/controllers/animal-events');

router.post('/', animalEventController.create);
router.get('/:animalEventId', animalEventController.getById);
router.get('/animal/:animalEventId', animalEventController.getByAnimalId);
router.get('/user/:userId', animalEventController.getByUserId);
router.put('/:animalEventId', animalEventController.updateById);
router.delete('/:animalEventId', animalEventController.deleteById);

module.exports = router;
