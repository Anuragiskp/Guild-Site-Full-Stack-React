const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const Rule = require('./Schemas/Rules');

const app = express();
const dbURI = 'mongodb+srv://anuragiskp:anurag1976@cluster0.qwpxlry.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(result =>{
        app.listen(8000);
        console.log('conencted to db')
    })
    .catch(err =>{
        console.log(err);
    })

app.use(cors());
app.use(bodyparser.json());


app.post('/all-rules', (req,res) =>{
    
    let rule = new Rule(req.body);

    rule.save()
        .then(res.redirect('/all-rules'))
})

app.get('/all-rules', (req,res) =>{
    Rule.find().sort({createdAt: -1})
        .then(result =>{
            res.json(result);
        })
})