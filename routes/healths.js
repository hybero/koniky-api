const express = require('express');
const router = express.Router();
const healthController = require('../app/api/controllers/healths');

router.get('/', healthController.getAll);
router.post('/', healthController.create);
router.get('/:healthId', healthController.getById);
router.put('/:healthId', healthController.updateById);
router.delete('/:healthId', healthController.deleteById);

module.exports = router;
