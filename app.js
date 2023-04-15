const express = require("express");
const app = express();

app.get("/", (rep,res) => () =>{
    const blog = {
        id: 1, 
        title: "Blog title", 
        description: "Blog description"
    }
    res.send(blog);
});

app.listen(3001, () => {
    console.log("Uygulama 3001 portunda başlatıldı")
})