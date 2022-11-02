const express = require('express')
const ejs = require("ejs")
const os = require("os")
const app = express()
const port = 80
var img = new Image();

/* Include controllers */
const pokeneasController = require("./controllers/pokeneas")

const pokenea = [
  ["0", "Jeison Alvarez", 1.78, "Inmunidad al sacol", img.src = 'Imagenes/Jeison ALvarez.jpg',"No llore papi acuerdese que somos neas"],
  ["69", "Milton Gonzalez", 1.65, "Pequeño tamaño gran personalidad", img.src = 'Imagenes/Milton Gonzalez.jpg', "Yo le doy lengua a lo mango"],
  ["420", "David Londoño", 1.82, "Volar como los aviones", img.src = 'Imagenes/David Londoño.jpg',"Y Si tosiste ya la hiciste"],
  ["3", "Mileidy Gil", 1.68, "Mecatear", img.src = 'Imagenes/Mileidy Gil.jpg',"La plata es para mecatiar en cositas"],
  ["4", "Jennifer Arias", 1.73, "Importaculismo", img.src = 'Imagenes/Jennifer Arias.jpg',"Oeeee, fuck you men gonorrea"],
  ["5", "Gonzo", 1.75, "Sentimentalismo", img.src = 'Imagenes/Gonzo.jpg',"No ve que le falta un bracito"],
  ["6", "Lady Tabares", 1.62, "Perseverancia",img.src = 'Imagenes/Lady Tabares.jpg', "Hágale que todo bien"]
  ["7", "El Zarco", 1.80, "Fama", img.src = 'Imagenes/El Zarco.jpg', "Mucha loca"]  
]

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(pokenea[number].slice(0, 4)+"\n - Container Id: "+os.hostname())
})

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(pokenea[number].slice(4, 5)+"\n - Container Id: "+os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})