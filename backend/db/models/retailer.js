const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const retailerSchema = new Schema({
    id: {
        type: String,
        required: [true, "The todo text field is required"]
    },
    name: {
        type: String,
        required: [true, "The todo text field is required"]
    },
    address: {
        type: String,
        required: [true, "The todo text field is required"]
    },
    contact: {
        type: String,
        required: [true, "No Contact Information"]
    }
    tags: {
        type: String,
        required: [true, "The todo text field is required"]
    },
    image: {
        type: String,
        required: [true, "The todo text field is required"]
    },
    discount: {
        type: Number,
        required: [false, "The todo text field is required"]
    },
    description: {
        type: String,
        required: [true, "The todo text field is required"]
    }
});

//create model for todo
const Retailer = mongoose.model("retailers", retailerSchema);

module.exports = Retailer;
