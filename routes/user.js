const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/getuser',userController.getUser)
router.get('/getauser/:elemId',userController.getAUser)
router.post('/adduser',userController.postAddUser)
router.put('/updateuser/:elemId',userController.updateUser)
router.delete('/deleteuser/:elemId',userController.deleteUser)

module.exports = router;