const express = require("express")
const app = express()

app.get("/" , (req , res) =>{
    res.send("Created this file via docker")
})

app.listen(3000)