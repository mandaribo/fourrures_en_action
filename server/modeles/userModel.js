const mongoose = require('mongoose')
const { Schema, model } = mongoose;

// schema définit la structure des documents
const userSchema = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    phone:{type: Number, required: true},
    email: { type: String, unique:true},
    pw: { type: String , required: true},

    street: { type: String , required: true},
    building: { type: Number , required: true},
    postal: { type: String , required: true},
    country: { type: String , required: true},
    region: { type: String , required: true},
    city: { type: String , required: true},

    major: { type: Boolean , required: true},
    
    comment: { type: String , required: false},
    newsletter: { type: Boolean , required: false}
});

module.exports = User = mongoose.model('User', userSchema)