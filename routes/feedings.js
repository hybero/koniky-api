const express = require('express');
const router = express.Router();
const feedingController = require('../app/api/controllers/feedings');

router.get('/', feedingController.getAll);
router.post('/', feedingController.create);
router.get('/:feedingId', feedingController.getById);
router.put('/:feedingId', feedingController.updateById);
router.delete('/:feedingId', feedingController.deleteById);

module.exports = router;
