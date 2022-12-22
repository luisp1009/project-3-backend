const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = new Schema  ({
title: {type: String,
        required: true },

brandGrill: {type: String,
        required: true },

modelGrill: {type: String,
        require: true },

yardDetailsAndSize: {type: String,
            require: true },

price: {type: String,
        require: true },

yardAndGrillImage: {type: String,
        require: true },

owner: {type: Schema.Types.ObjectId, ref: "User"},
latitude: Number,
longitude: Number
},

{timestamps: true})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing