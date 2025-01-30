const Message = require("../modeles/msgModel");

// findAllUsers fonction de lecture : Afficher tous les utilisateurs
exports.findAllMessages = async (req, res) => {
    try {
        const allMessages = await Message.find().sort([['courriel', 'ascending']]);
        res.status(200).send({ message: "all messages: ", allMessages });
    }
    catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
};

// createMessage fonction de création Ajout d’un nouvel Message
exports.createMessage = (req, res) => {
    try {
        const newMessage = new Message(req.body);
        newMessage.save();
        res.status(200).send({
            message: "user added successfully",
            newMessage,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// editById fonction de mise à jour
exports.editById = async (req, res) => {
    try {
        const editMessage = await Message.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).send({
            message: "Message is edited successfully: "
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};

// removeMessageById fonction de suppression
exports.removeMessageById = async (req, res) => {
    try {
        const deleteMessage = await Message.deleteOne({ _id: req.params.id })
        res.status(200).send({
            message: "user is deleted successfully: ", deleteMessage
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};

/*
//Afficher tous les messages
exports.findAllMessages = async () => {
    try {
        const allMessages = await Message.find({});
        console.log(allMessages)
    } catch (err) {
        console.log(err)
    }
};

//trouver un message connaissant le courriel
exports.findMessageByEmail = async () => {
    try {
        const message = await Message.find({ courriel: "michael@vsauce.extra" });
        console.log(message.length + " messages : " + message)
    } catch (err) {
        console.log(err)
    }
};

//ajouter 2 messages, des données fictives 
exports.createMessage = () => {
    try {

        new Message({
            "courriel": "hello@world.net",
            "sujet": "how to help",
            "description": "the world would like to help your cause. let us know if we can collaborate and solve climate change",
        }).save();

        new Message({
            "courriel": "michael@vsauce.extra",
            "sujet": "there's lava inside you.",
            "description": "i bet you liked that. i bet you eat rocks on purpose every day. i know you do.",
        }).save();

        console.log("Ajout réussi!")

    } catch (err) {
        console.log(err);
    }
};

//mettre à jour les données d'un message connaissant son _id
exports.editMessageById = async () => {
    try {
        const editMessage = await Message.updateOne(
            { _id: "" }, //remplacer par un id existant 
            { courriel: "updated@email.com" }
        );
        console.log("Update réussi ");
    }
    catch (err) {
        console.log(err);
    }
};

//supprimer un message connaissant son _id
exports.removeMessageById = async () => {
    try {
        const deleteMessage = await Message.deleteOne({ _id: "" })
        console.log("Delete réussi ");
    }
    catch (err) {
        console.log(err);
    }
};
*/