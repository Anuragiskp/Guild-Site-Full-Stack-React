const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ruleSchema = Schema({
    RuleData :{
        type: String,
        required : true
    }
}, {timestamps: true})

const Rules = mongoose.model('Rules', ruleSchema)
    
module.exports = Rules;