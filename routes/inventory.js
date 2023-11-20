const express = require('express');

const inventoryController = require('../controllers/inventory');

const router = express.Router();

router.get('/getinventory',inventoryController.getInventory)
router.post('/addinventory',inventoryController.postAddInventory)
router.put('/updateinventory',inventoryController.updateInventory)

module.exports = router;