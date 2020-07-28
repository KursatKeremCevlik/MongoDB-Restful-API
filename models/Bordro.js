const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BordroSchema = new Schema({
    isim: String,
    soyisim: String,
    yaş: Number,
    maaş: Number,
    mesai: Number,
    sicilNo: Number,
});

module.exports = mongoose.model('bordro', BordroSchema);