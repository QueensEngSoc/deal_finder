const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
    // , dealName: { // A property/field
    //     type: String,
    //     required: [true, 'The type of deal is required. For example: 50% off'] // Required:true means that it's needed & Error message 
    // },
    // merchant: {
    // 	type: String,
    // 	required: [true, "The merchant name is required. For example: Domino's Pizza"]
    // },
    // image: {
    // 	type: String,
    // 	required: [false, "An image is not required"] // Not sure if you need the second statement, can't find online
    // },
    // normalDetail: {
    // 	type: String,
    // 	required: [true, "Basic details are required"] // Not sure if you need the second statement, can't find online
    // }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;