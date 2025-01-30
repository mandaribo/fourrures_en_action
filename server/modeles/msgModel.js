const mongoose = require('mongoose')
const { Schema, model } = mongoose;

// schema définit la structure des documents
const messageSchema = new Schema({
    courriel: { type: String, required:true},
    sujet: { type: String, required: true},
    description: {type: String, required: true},
});

module.exports = Message = mongoose.model('msg', messageSchema)