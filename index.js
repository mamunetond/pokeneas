const express = require('express')
const ejs = require("ejs")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload") 

const port = 80

/* Include controllers */
const pokeneaController = require("./controllers/Pokenea.js");

const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

/* Routes */
app.get('/info', pokeneaController.infoPokenea)
app.get('/foto', pokeneaController.fotoPokenea)

if(port == null || port == ""){
    port = 4000
}
app.listen(port, function(){
    console.log("App listening...")
})
