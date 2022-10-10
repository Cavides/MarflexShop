const {createUser, updateUser, deleteUser, getUser, getAllUsers, getUserByEmail} = require("./user_services");


async function getAllUsersHandler(req,res){
    const users = await getAllUsers();
    return res.status(200).json(users);
}

async function getUserHandler(req,res){
    const {id} = req.params;
    try {
        const user = await getUser(id);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Nada papa"})
    }
}

async function createUserHandler(req,res){
    const {name,lastName,email,password} = req.body;
    try {
        // const userEmail = await getUserByEmail(email);
        const user = await createUser({name,lastName,email,password});
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error});
    }
}

module.exports ={
    getAllUsersHandler,
    getUserHandler,
    createUserHandler
}

