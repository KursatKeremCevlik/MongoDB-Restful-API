const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BordroSchema = new Schema({
    title: String
});

module.exports = mongoose.model('bordro', BordroSchema);