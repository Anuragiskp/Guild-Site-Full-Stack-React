const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const Rule = require('./Schemas/RuleData');
const User = require('./Schemas/Users');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { adminAuth, userAuth } = require("./auth.js");

const app = express();
const dbURI = 'mongodb+srv://Khushal_iskp:anurag1976@personalserver.gtmeqbe.mongodb.net/?retryWrites=true&w=majority&appName=PersonalServer';
const jwtSecret = "2add7fc6117e9acc6654951133a649c54068e23cea8875b48a12cb54f769c7035844f1";
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));

mongoose.connect(dbURI)
  .then(result => {
    app.listen(8000);
    console.log('conencted to db')
  })
  .catch(err => {
    console.log(err);
  })

app.use(cors());
app.use(bodyparser.json());


app.post('/all-rules', (req, res) => {
  let rule = new Rule(req.body);
  rule.save()
    .then(res.redirect('/all-rules'))
})

app.get('/all-rules', (req, res) => {
  Rule.find().sort({ createdAt: -1 })
    .then(result => {
      res.json(result);
    })
})


app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({
        email,
        password: hash,
      })
        .then((user) => {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, email, role: user.role },
            jwtSecret,
            {
              expiresIn: maxAge, 
            }
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, 
          });
          res.status(201).json({
            message: "User successfully created",
            user: user._id,
          });
        })
    })
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/signup', (req, res) => {
  User.find().sort({ createdAt: -1 })
    .then(result => {
      res.json(result);
    })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(400).json({
        message: "Login not successful",
        error: "User not found",
      })
    } else {
      bcrypt.compare(password, user.password).then(function (result) {
        if (result) {
          const maxAge = 3 * 60 * 60;
          const token = jwt.sign(
            { id: user._id, email, role: user.role },
            jwtSecret,
            {
              expiresIn: maxAge, // 3hrs in sec
            }
          );
          res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: maxAge * 1000, // 3hrs in ms
          });
          res.status(201).json({
            message: "User successfully Logged in",
            user: user._id,
          });
        }else {
          res.status(410).json({ message: "Login not successful" });
        }})
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

app.get('/login', (req, res) => {
  User.find().sort({ createdAt: -1 })
    .then(result => {
      res.json(result);
    })
})