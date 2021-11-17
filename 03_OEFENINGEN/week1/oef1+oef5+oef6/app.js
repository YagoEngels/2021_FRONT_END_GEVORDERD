const e = require("express");
const express = require("express");
const app = express();
const port = 3000;

let setCache = function(req,res,next){
    //hier kan je he aantal seconden meegeven 
    const period = 15
    //je wilt alleen maar cache voor get requests
    if(req.method = "GET"){
        res.set("Cache-control",`public,max-age=${period}`)
    } else {
        res.set("Cache-control",`no-store`)
    }
    next()
}
app.use(setCache)
app.use(express.static("wwwroot"));

app.listen(port);