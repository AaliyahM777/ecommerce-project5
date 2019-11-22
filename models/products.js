const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productsSchema = new Schema ({
    img_url:{type: String},
    product_title:{type: String},
    product_description:{type: String},
    product_categories:{type: String},
    price: {type: Number}
})



const Product = mongoose.model('Product', productsSchema);


module.exports = Product;