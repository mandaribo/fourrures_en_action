const express = require("express");
const router = express.Router();

//les fonctions du contrôleur
const {

    createDon,
    findAllDons,
    editById,
    removeDonById,
    //findDonByEmail,
} = require("../controleurs/donController");

//les routes associées aux requêtes HTTP
router.get("/allDons", findAllDons);
router.post("/addDon", createDon);
router.put("/updateDonById/:id", editById);
router.delete("/removeDon/:id", removeDonById);
module.exports = router;


/*createDon();
findAllDons();
editDonById();
removeDonById();
findDonByEmail();*/