////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
const app = express()
const PORT = 3500
const drinks = require("./models/drinks.js")

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req, res) => {
    res.send("WELCOME TO THE GITPUB APP!")
})
app.get("/drinks", (req, res) => {
    res.render("index.ejs")
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log("LISTENING ON PORT 3500")
})