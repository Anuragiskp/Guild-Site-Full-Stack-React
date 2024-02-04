const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = Schema({
    id:{
        type: Number,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    rule:[
        {
        type: String,
        required: true
        }
]
}, {timestamps: true})

const Rule = mongoose.model('Rule', ruleSchema)

module.exports = Rule;