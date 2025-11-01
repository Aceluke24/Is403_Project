
require('dotenv').config();

const express = require("express");

// Needed for the session variable
const session = require("express-session");

let path = require("path");
let bodyParser = require("body-parser");

let app = express();

app.set("view engine", "ejs");

// process.env.PORT is when you deploy and 3000 is for test
const port = process.env.PORT || 3000;

app.use(
    session(
        {
        secret: process.env.SESSION_SECRET || 'fallback-secret-key',
        resave: false,
        saveUninitialized: false
        }
    )
)

app.use(express.urlencoded({extended: true}));




// Global authentication middleware - runs on EVERY request
app.use((req, res, next) => {
    // Skip authentication for login routes
    if (req.path === '/' || req.path === '/login' || req.path === '/logout') {
        // continue with the request path
        return next();
    }

    // Check if user is logged in for all other routes
    if (req.session.isLoggedIn) {
        // notice no return becasue nothing below it
        next();
    }
    // User is logged in, continue
    else {
        res.render("login", { error_message: "Please log in to access this page" });
    }
});


// Main page route - notice it checks if they have logged in
app.get("/", (req, res) => {
    // Check if user is logged in
    if (req.session.isLoggedIn) {
        res.render("index");
    } else {
        res.render("login", { error_message: "" });
    }
});

// This creates attributes in the session object to keep track of user and if they logged in
app.post("/login", (req, res) => {
    let sName = req.body.username;
    let sPassword = req.body.password;

    if ((sName == "Luke") && (sPassword == "admin")) {
        // Set session variables
        req.session.isLoggedIn = true;
        req.session.username = sName;
        res.redirect("/landing");
    } else {
        res.render("login", { error_message: "Invalid login" });
    }
});

// Logout route
app.get("/logout", (req, res) => {
    // Get rid of the session object
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.get("/t", (req, res) => {
    res.render("test");
});


app.listen(port, () => {
    console.log("The server is listening");
});

app.get("/landing", (req,res) => {
    res.render("landing", {username: req.session.username});
})