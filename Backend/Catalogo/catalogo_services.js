const Catalogo = require("./catalogo_model");

function createCatalogo(catalogo) {
    return Catalogo.create(catalogo);
}

function deleteCatalogo(id){
    return Catalogo.findByIdAndDelete(id);
}

function updateCatalogo(id, catalago){
    return Catalogo.findByIdAndDelete(id, catalago, {new: true});
}

function getAllCatalogo(){
    return Catalogo.find({});
}

function getCatalogo(id){
    return Catalogo.findById(id);
}

module.exports ={
    createCatalogo,
    deleteCatalogo,
    updateCatalogo,
    getAllCatalogo,
    getCatalogo,
};