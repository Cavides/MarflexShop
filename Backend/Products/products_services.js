const Products = require("./products_model");

function createProducts(products) {
    return Products.create(products);
}

function deleteProducts(_id){
    return Products.findByIdAndDelete(id);
}

function updateProducts(_id, products){
    return Products.findByIdAndDelete(id, products, {new: true});
}

function getAllProducts(){
    return Products.find({});
}

function getProducts(_id){
    return Products.findById(_id);
}

module.exports ={
    createProducts,
    deleteProducts,
    updateProducts,
    getAllProducts,
    getProducts,
};