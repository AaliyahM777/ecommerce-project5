const router = require('express').Router();
let Product = require('../models/products');
// 1. get all products on record
router.get('/', (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})



module.exports = router;