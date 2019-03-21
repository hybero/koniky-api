const express = require('express');
const router = express.Router();
const animalController = require('../app/api/controllers/animals');

router.get('/', animalController.getAll);
router.post('/', animalController.create);
router.get('/:animalId', animalController.getById);
router.put('/:animalId', animalController.updateById);
router.delete('/:animalId', animalController.deleteById);

module.exports = router;
