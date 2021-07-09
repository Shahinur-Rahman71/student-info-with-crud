const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = model('Student', studentSchema);