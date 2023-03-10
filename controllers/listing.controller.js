const Listing = require('../models/Listing.model')
const fileUploader = require('../config/cloudinary.config');


const createListingController = (req, res, next) => {

    if (!req.body.yardAndGrillImage) {
        next(new Error("No file uploaded!"))
        return
    }
    if (!req.body.title || !req.body.brandGrill || !req.body.modelGrill || !req.body.yardDetailsAndSize || !req.body.price || !req.body.yardAndGrillImage){
        return res.json({
            error: {
                message: " All fields are require to create a new listing"
            }
        })
    }
    // console.log(req.file.path)
    
    Listing.create({
        title: req.body.title,
        brandGrill: req.body.brandGrill,
        modelGrill: req.body.modelGrill,
        yardDetailsAndSize: req.body.yardDetailsAndSize,
        price: req.body.price,
        yardAndGrillImage: req.body.yardAndGrillImage,
        owner: req.body.owner,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    
    })
    .then(createdListing => {
        res.send(createdListing)
    })
    .catch(err => res.send(err))
}


const getListingController = (req, res, next) => {
    Listing.find()
    .then(foundListingsArray => {
        res.send(foundListingsArray)
    })
    .catch(err => res.send(err))
}


const getListingControllerById = (req, res, next) => {
    Listing.findById(req.params.listingId)
    .then(foundListing => {
        res.send(foundListing)
    })
    .catch(err => res.send(err))
}


const getMyListingController = (req, res, next) => {
        console.log("These are params:", req.params)
    Listing.find({
        owner: req.params.id
    })
    .then(foundListing => {
        console.log("THIS IS MY LISTINGS", foundListing)
        res.send(foundListing)
    })
    .catch(err => res.send(err))
}


const updateListingController = (req, res, next) => {
    Listing.findByIdAndUpdate(req.params.listingId, {
        title: req.body.title,
        brandGrill: req.body.brandGrill,
        modelGrill: req.body.modelGrill,
        yardDetailsAndSize: req.body.yardDetailsAndSize,
        price: req.body.price,
        yardAndGrillImage: req.body.yardAndGrillImage,
        
    }, { new : true } )
    .then(updatedListing => {
        res.send(updatedListing)
    })
    .catch(err => res.send(err))
}


const deleteListingController = (req, res, next) => {
    Listing.findByIdAndRemove(req.params.listingId)
    .then(deleteListing => {
        res.send(deleteListing)
    })
    .catch(err => res.send(err))
}

const photoUpload = (req, res, next) => {

}

module.exports= {
    createListingController,
    getListingController,
    getListingControllerById,
    updateListingController,
    deleteListingController,
    getMyListingController
}


