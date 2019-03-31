const express = require('express');
const router = express.Router();
const Todo = require('../db/models/todo');
// const Deal = require('../db/models/deal'); // This will use the deal schema

router.get('/todos', (req, res, next) => {

    //this will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/todos', (req, res, next) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty"
        })
    }
});

router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
});


// These ones are to interact with deals, I'm not sure if it will implement -- don't actually get how databases work too well no matter how much I read
// router.get('/deals', (req, res, next) => {

//     //this will return all the data, exposing only the id and action field to the client
//    Deal.find({}, 'dealName', 'merchant', 'image', 'normalDetail', 'extraDetail')
//         .then(data => res.json(data))
//         .catch(next)
// });

// // Double check what action means here
// router.post('/deals', (req, res, next) => {
//     if (req.body.action) {
//         Deal.create(req.body)
//             .then(data => res.json(data))
//             .catch(next)
//     } else {
//         res.json({
//             error: "The input field is empty"
//         })
//     }
// });

// router.delete('/deals/:id', (req, res, next) => {
//     Deal.findOneAndDelete({ "_id": req.params.id })
//         .then(data => res.json(data))
//         .catch(next)
// });


module.exports = router;