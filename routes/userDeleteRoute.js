const express = require ('express')
const router = express.Router()
const { 
        userDeleteController,

        } = require('../controllers/userDeleteController')


router.delete ('/:userId',userDeleteController);

module.exports = router