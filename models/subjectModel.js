const {Schema, model} = require('mongoose');

const subjectSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    student: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = model('Subject', subjectSchema);