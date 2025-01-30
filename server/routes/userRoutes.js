const express = require("express");
const router = express.Router();

//les fonctions du contrôleur
const {
    createUser,
    findAllUsers,
    editById,
    removeUserById,
    //findUserByemail,
} = require("../controleurs/userController");

//les routes associées aux requêtes HTTP
router.get("/allUser", findAllUsers);
router.post("/addUser", createUser);
router.put("/updateUserById/:id", editById);
router.delete("/removeUser/:id", removeUserById);
module.exports = router;


/*createUser();
findAllUsers();
editById();
removeUserById();
findUserByemail();*/