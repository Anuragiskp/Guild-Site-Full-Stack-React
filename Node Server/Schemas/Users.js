const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ruleSchema = Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    }
}, {timestamps: true})

const Users = new mongoose.model("users", ruleSchema)

module.exports = Users;