const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Blog = require("./models/Blogs");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//template engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes
app.get("/index.html", async (req,res) =>{
    const blogs = await Blog.find({})
    res.render("index",{
        blogs
    });
});
app.get("/",  async (req,res) =>{
    const blogs = await Blog.find({})
    res.render("index",{
        blogs
    });
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

app.post("/blogs", async(req,res) => {
    await Blog.create(req.body)
    res.redirect("/")
})

app.listen(4000, () => {
    console.log("Uygulama 4000 portunda başlatıldı")
})