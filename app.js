const express = require("express");
const ejs = require("ejs");
const app = express();

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//routes
app.get("/index.html", (req,res) =>{
 
    res.render("index");
});

app.get("/about.html", (req, res) => {
    res.render("about");
})

app.get("/add_post.html", (req, res) => {
    res.render("add_post");
})

app.get("/post.html", (req, res) => {
    res.render("post");
})

app.listen(3000, () => {
    console.log("Uygulama 3000 portunda başlatıldı")
})