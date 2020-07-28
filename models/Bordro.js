const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BordroSchema = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String,
    year: Number,
    pay: Number,
    overtime: Number,
    sicilNo: Number,
});

module.exports = mongoose.model('bordro', BordroSchema);