const express = require("express");
const app = express();

app.use(express.static("wwwroot"));

app.listen(300,function(){
    console.log("server is aan het luisteren op poort 3000");
})