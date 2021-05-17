const functions = require("firebase-functions");
const app = require('express')();

//index.js

const { signIn, signUp } = require("./users");

app.post("/signin", signIn);
app.post("/signup", signUp);

exports.api = functions.https.onRequest(app);