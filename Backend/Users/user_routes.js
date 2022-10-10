const express =require("express") ;
const { getAllUsersHandler,getUserHandler, createUserHandler } = require("./user_controllers");


const router = new express.Router();

router.get('/', getAllUsersHandler);

router.get('/:id', getUserHandler);

router.post('/',createUserHandler);


module.exports = router;