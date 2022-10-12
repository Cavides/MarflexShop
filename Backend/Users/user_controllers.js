const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("./user_services");

async function getAllUsersHandler(req, res) {
  const users = await getAllUsers();
  return res.status(200).json(users);
}

async function getUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Nada papa" });
  }
}

async function createUserHandler(req, res) {
  const { name, lastName, email, password } = req.body;
  try {
    // const userEmail = await getUserByEmail(email);
    const user = await createUser({ name, lastName, email, password });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.user;

  try {
    await deleteUser(id);
    console.log(`User ${id} eliminated`);
    return res.status(200).json({ message: "User eliminated" });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

async function updateUserHandler(req, res) {
  const userUpdate = req.body;
  const { id, email } = req.user;

  try {
    await updateUser(id, userUpdate);
    const user = await findUserByEmail(email);
    console.log("User id:", id, "Data updated:", userUpdate);
    return res
      .status(200)
      .json({ message: "User updated", profile: user.profile });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ message: "Error updating user", error });
  }
}

module.exports = {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
};


