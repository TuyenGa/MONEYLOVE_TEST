const mongoose = require('mongoose');
const { Schema } = mongoose;

const sinhvien = new Schema({
    name: String,
    age: String,
    address: String,
    create_at : {
        type: Date,
        default: Date.now()
    },
    update_at : {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('sinhvien',sinhvien);