const express = require('express')
const os = require("os")
const app = express()
const port = 80

const pokenea = [
  ["0", "Jeison Alvarez", 1.78, "Inmunidad al sacol", "No llore papi, acuerdese que somos neas"],
  ["69", "Milton Gonzalez", 1.65, "Pequeño tamaño gran personalidad", "Yo le deoy lengua a lo mango"],
  ["420", "David Londoño", 1.82, "Volar como los aviones", "Si tosiste ya la hiciste"],
  ["3", "Mileidy Gil", 1.68, "Mecatear", "La plata es para mecatiar en cositas"],
  ["4", "Jennifer Arias", 1.73, "Importaculismo", "Oeeee, fuck you men gonorrea"],
  ["5", "Gonzo", 1.75, "Sentimentalismo", "No ve que le falta un bracito"],
  ["6", "Lady Tabares", 1.62, "Perseverancia", "Hágale que todo bien"]
  ["7", "El Zarco", 1.80, "Fama", "Mucha loca"]  
]

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(pokenea[number].slice(0, 4)+"\n - Container Id: "+os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})