const mongoose = require('mongoose')
const { Schema, model } = mongoose;

// schema définit la structure des documents
const donationSchema = new Schema({
    prenom: { type: String, required: true},
    nom: { type: String, required: true},
    telephone:{type: Number, required: true},
    courriel: { type: String, required: true},
    don: { type: String , required: true}, //string juste au cas où, car je ne suis pas sûre si ça serait  un Number ou pas
    message: { type: String , required: false},
});

module.exports = Don = mongoose.model('dons', donationSchema)