const express = require("express")
const path = require("path")
const app = express();

const port = 5000;

app.use(express.static(path.join(__dirname, "agr_hub")));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "/agr_hub/index.html"));
})

app.get("/farming_guides", (req, res)=>{
    res.sendFile(path.join(__dirname, "/agr_hub/farming_guides/guide.html"));
})

app.get("/crop_details", (req, res)=>{
    res.sendFile(path.join(__dirname, "/agr_hub/crop_details/crop.html"));
})

app.get("/pest_control", (req, res)=>{
    res.sendFile(path.join(__dirname, "/agr_hub/pest_control/pest.html"));
})


app.listen(port, ()=>{
    console.log("Server is running...");
    
})