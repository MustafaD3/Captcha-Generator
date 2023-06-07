import express from "express"
const app = express()
const port = 4000 || 5000
app.listen(port,()=>{
    console.log("Sunucu "+port+" Portundan Dinleniyor")
    app.use("/public",express.static("./public"))
    app.get("/",(req,res,next)=>{
        res.sendFile("index.html",{root:"./"})
    })
})