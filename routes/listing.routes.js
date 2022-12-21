const express = require ('express')
const fileUploader = require('../config/cloudinary.config');
const router = express.Router()
const { createListingController,
        getListingController,
        getListingControllerById,
        updateListingController,
        deleteListingController
        } = require('../controllers/listing.controller')

router.post('/listing', fileUploader.single("yardAndGrillImage"),createListingController );
router.get('/listing',getListingController );
router.get ('/listing/:listingId',getListingControllerById);
router.put ('/listing/:listingId',updateListingController);
router.delete ('/listing/:listingId', deleteListingController);


// router.post('/upload', fileUploader.single("yardAndGrillImage"), (req, res, next) => {
//     //localStorage.clear() 
//     if (!req.file) {
//         next(new Error("No file uploaded!"))
//         return
//     }
//     res.json({ fileUrl: req.file.path })
// })

module.exports = router


    