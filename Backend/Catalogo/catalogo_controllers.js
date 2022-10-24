const {
    createCatalogo,
    updateCatalogo,
    deleteCatalogo,
    getCatalogo,
    getAllCatalogo,
} = require("./catalogo_services");

async function getAllCatalogoHandler(req,res) {
    const catalogos = await getAllCatalogo();
    return res.status(200).json(catalogos);
}

async function getCatalogoHandler(req, res){
    const {id} = req.params;
    try {
        const catalogo = await getCatalogo(id);;
        return res.status(200).json(catalogo);
    }catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Error product not found" });
    }
}

async function createCatalogoHandler(req, res){
    const {code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, image} = req.body;
    try{
        const catalogo = await createCatalogo({code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, image});
        return res.status(200).json(catalogo);
    }catch(error) {
        console.error(error);
        return res.status(500).json({ error});
    }
}

async function deleteCatalogoHandler(req, res) {
    const { id } = req.user;
  
    try {
      await deleteCatalogo(id);
      console.log(`Product ${id} eliminated`);
      return res.status(200).json({ message: "Product eliminated" });
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ error });
    }
  }

  async function updateCatalogoHandler(req, res) {
    const catalogoUpdate = req.body;
    const { id, code } = req.user;
  
    try {
      await updateCatalogo(id, catalogoUpdate);
      const catalogo = await findUserByEmail(code);
      console.log("User id:", id, "Data updated:", catalogoUpdate);
      return res
        .status(200)
        .json({ message: "Product updated", profile: catalogo.profile });
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ message: "Error updating product", error });
    }
  }

module.exports = {
    getAllCatalogoHandler,
    getCatalogoHandler,
    createCatalogoHandler,
    deleteCatalogoHandler,
    updateCatalogoHandler,
};