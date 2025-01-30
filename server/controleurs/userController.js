const User = require("../modeles/userModel");


//CODE DE BASE DE MONGOOSE. IL FAUT UTILISER CELA POUR LE TP4, MAIS PAS LE TP3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// findAllUsers fonction de lecture : Afficher tous les utilisateurs
exports.findAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find().sort([['fullName', 'ascending']]);
        res.status(200).send({ message: "all users: ", allUsers });
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
};

// createUser fonction de création Ajout d’un nouvel user
exports.createUser = (req, res) => {
    try {
        const newUser = new User(req.body);
        newUser.save();
        res.status(200).send({
            message: "user added successfully",
            newUser,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// editById fonction de mise à jour
exports.editById = async (req, res) => {
    try {
        const editUser = await User.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).send({
            message: "user is edited successfully: "
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};

// removeUserById fonction de suppression
exports.removeUserById = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ _id: req.params.id })
        res.status(200).send({
            message: "user is deleted successfully: ", deleteUser
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};




//CETTE PARTIE POUR LE TP3 SEULEMENT, ARCHIVER APRÈS UTILISATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Afficher tous les utilisateurs
/*exports.findAllUsers = async () => {
    try {
        const allUsers = await User.find({});
        console.log(allUsers)
    } catch (err) {
        console.log(err)
    }
};

//trouver un utilisateur connaissant son email
exports.findUserByemail = async () => {
    try {
        const user = await User.find({ email: "viki@mel.com" });
        console.log(user.length + " utilisateurs : " + user)
    } catch (err) {
        console.log(err)
    }
};


//ajouter 2 utlisateurs, des données fictives 
exports.createUser = () => {
    try {
        new User(
            {
                "firstname": "nemnems",
                "lastname": "beeblejoose",
                "phone": 5143334444,
                "email": "viki@mel.com",
                "pw": "secret4SECRET!",

                "street": "Broken Dreams Blvd",
                "building": 9900,
                "postal": "A1A 1A1",
                "country": "Canada",
                "region": "Saskachewan",
                "city": "Regina",

                "major": false,

                "comment": "Go my beeble",
                "newsletter": false
            }).save();

        new User(
            {
                "firstname": "Nibble",
                "lastname": "Washington",
                "phone": 125634567890,
                "email": "joe2@mama.fr",
                "pw": "secret6SECRET?",

                "street": "Tohell Highway",
                "building": 8822,
                "postal": "B2B 2B2",
                "country": "France",
                "region": "NA",
                "city": "Paris",

                "major": true,

                "comment": "",
                "newsletter": false
            }).save();

        console.log("Ajout réussi!")

    } catch (err) {
        console.log(err);
    }
};

//mettre à jour les données d'un utilisateur connaissant son _id
exports.editById = async () => {
    try {
        const editUser = await User.updateOne(
            { _id: "674f05b2fd450f0b0ed0f1e9" }, //remplacer par un id existant 
            { comment: "mario hates you" }
        );
        console.log("Update réussi ");
    }
    catch (err) {
        console.log(err);
    }
};

//supprimer un utilisateur connaissant son _id
exports.removeUserById = async () => {
    try {
        const deleteUser = await User.deleteOne({ _id: "674f05b2fd450f0b0ed0f1ea" })
        console.log("Delete réussi ");
    }
    catch (err) {
        console.log(err);
    }
};*/