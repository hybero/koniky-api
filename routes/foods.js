const express = require('express');
const router = express.Router();
const foodController = require('../app/api/controllers/foods');

router.get('/', foodController.getAll);
router.post('/', foodController.create);
router.get('/:foodId', foodController.getById);
router.put('/:foodId', foodController.updateById);
router.delete('/:foodId', foodController.deleteById);

module.exports = router;
