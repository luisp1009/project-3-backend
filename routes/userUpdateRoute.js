const express = require ('express')
const router = express.Router()
const { 
        userUpdateController,

        } = require('../controllers/userUpdateController')


router.put ('/:userId',userUpdateController);

module.exports = router