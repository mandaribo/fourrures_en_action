const Don = require("../modeles/donationModel");

// findAllUsers fonction de lecture : Afficher tous les utilisateurs
exports.findAllDons = async (req, res) => {
    try {
        const allDons = await Don.find({});
        res.status(200).send(allDons);
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
};

// createUser fonction de création Ajout d’un nouvel user
exports.createDon = (req, res) => {
    try {
        const newDon = new Don(req.body);
        newDon.save();
        res.status(200).send({
            message: "don added successfully",
            newDon,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// editById fonction de mise à jour
exports.editById = async (req, res) => {
    try {
        const editDon = await Don.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).send({
            message: "don is edited successfully: "
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};

// removeUserById fonction de suppression
exports.removeDonById = async (req, res) => {
    try {
        const deleteDon = await Don.deleteOne({ _id: req.params.id })
        res.status(200).send({
            message: "don is deleted successfully: ", deleteDon
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};


/*
//Afficher tous les dons
exports.findAllDons = async () => {
    try {
        const allDons = await Don.find({});
        console.log(allDons)
    } catch (err) {
        console.log(err)
    }
};

//trouver un don connaissant le courriel
exports.findDonByEmail = async () => {
    try {
        const don = await Don.find({ courriel: "mel@viki.com" });
        console.log(don.length + " dons : " + don)
    } catch (err) {
        console.log(err)
    }
};

//ajouter 2 dons, des données fictives 
exports.createDon = () => {
    try {

        new Don({
            "prenom": "mel",
            "nom": "ody",
            "telephone": 1234567890,
            "courriel": "mel@viki.com",
            "don": "17",
            "message": "the wizard wisheth good health to animals",
        }).save();

        new Don({
            "prenom": "timmy",
            "nom": "tremblay",
            "telephone": 9876543210,
            "courriel": "tim@timhortons.ca",
            "don": "2000",
            "message": "made money on roblox content, u need it more",
        }).save();

        new Don({
            "prenom": "vick",
            "nom": "def",
            "telephone": 1234565437890,
            "courriel": "vick@viki.com",
            "don": "17",
            "message": "the wizard wisheth good health to animals",
        }).save();

        console.log("Ajout réussi!")

    } catch (err) {
        console.log(err);
    }
};

//mettre à jour les données d'un don connaissant son _id
exports.editDonById = async () => {
    try {
        const editDon = await Don.updateOne(
            { _id: "674f0915a8a3fb28c9596f76" }, //remplacer par un id existant 
            { don: "250" }
        );
        console.log("Update réussi ");
    }
    catch (err) {
        console.log(err);
    }
};

//supprimer un don connaissant son _id
exports.removeDonById = async () => {
    try {
        const deleteDon = await Don.deleteOne({ _id: "" })
        console.log("Delete réussi ");
    }
    catch (err) {
        console.log(err);
    }
};

*/