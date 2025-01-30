const express = require("express");
const router = express.Router();

//les fonctions du contrôleur
const {

    createMessage,
    findAllMessages,
    editById,
    removeMessageById,
    //findMessageByEmail,
} = require("../controleurs/msgController");

//les routes associées aux requêtes HTTP
router.get("/allMsg", findAllMessages);
router.post("/addMsg", createMessage);
router.put("/updateMsgById/:id", editById);
router.delete("/removeMsg/:id", removeMessageById);
module.exports = router;


/*createMessage();
findAllMessages();
editMessageById();
removeMessageById();
findMessageByEmail();*/