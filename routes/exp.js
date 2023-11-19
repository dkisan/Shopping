const express = require('express');

const userController = require('../controllers/expense');

const router = express.Router();

router.get('/getexpense',userController.getExpense)
router.get('/getaexpense/:elemId',userController.getAExpense)
router.post('/addexpense',userController.postAddExpense)
router.put('/updatexpense/:elemId',userController.updateExpense)
router.delete('/deleteexpense/:elemId',userController.deleteexpense)

module.exports = router;