const express = require ('express')
const fileUploader = require('../config/cloudinary.config');
const router = express.Router()
const { createListingController,
        getListingController,
        getListingControllerById,
        updateListingController,
        deleteListingController
        } = require('../controllers/listing.controller')

router.post('/listing', createListingController );
router.get('/listing',getListingController );
router.get ('/listing/:listingId',getListingControllerById);
router.put ('/listing/:listingId',updateListingController);
router.delete ('/listing/:listingId', deleteListingController);

module.exports = router


    