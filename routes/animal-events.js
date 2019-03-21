const express = require('express');
const router = express.Router();
const animalEventController = require('../app/api/controllers/animal-events');

router.get('/', animalEventController.getAll);
router.post('/', animalEventController.create);
router.get('/:animalEventId', animalEventController.getById);
router.put('/:animalEventId', animalEventController.updateById);
router.delete('/:animalEventId', animalEventController.deleteById);

module.exports = router;
