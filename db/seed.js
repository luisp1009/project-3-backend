require ('dotenv').config()
const mongoose = require('mongoose')
const Listing = require('../models/Listing.model')

mongoose.connect(process.env.MONGODB_URI)
.then(x => {
    console.log('connected to db name', x.connections[0].name)




    return Listing.create({
        title: 'test Title',
        brandGrill: 'test brandGrill',
        modelGrill: 'test modeGrilll',
        yardDetailsAndSize: 'test yardDetailsAndSize',
        price: 'test price',
        yardAndGrillImage: 'test yardAndGrillImage',
        // owner: createdUser._id
})
})
.then(createdListing => {
    console.log('my created listing is:', createdListing)
})
.catch(err => console.log('error connecting to db', err))
