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
    res.render("index.ejs", {drinks}) //2nd var tells index where to pull drinks from
})

app.get("/drinks/:id", (req, res) => {
    // get drink id from the url
    const id = req.params.id;
    // specify the drink
    const drink = drinks[id];
    // console.log(id)
    res.render("show.ejs", {drink, id})
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log("LISTENING ON PORT 3500")
})