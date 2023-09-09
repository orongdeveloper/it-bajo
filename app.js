const express = require("express")
const app = express()
const port = 3000


app.listen(port, '0.0.0.0', () => {
    console.log("App listening port 3000")
})

app.use(express.static(__dirname))

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})
app.get("/software", (req, res) => {
    res.sendFile(__dirname+"/page/software.html")
})

app.get("/jaringan", (req, res) =>{
res.sendFile(__dirname+"/page/jaringan.html")})

app.get("/cctv", (req,res)=>{
res.sendFile(__dirname+"/page/cctv.html")
})