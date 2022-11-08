const os = require("os")

const pokenea = [
    ["01", "Jeison Alvarez", 1.78, "Inmunidad al sacol", 'https://storage.googleapis.com/tallerpokeneas/Jeison%20ALvarez.jpg',"No llore papi acuerdese que somos neas"],
    ["69", "Milton Gonzalez", 1.65, "Pequeño tamaño gran personalidad", 'https://storage.googleapis.com/tallerpokeneas/Milton%20Gonzalez.jpeg', "Yo le doy lengua a lo mango"],
    ["420", "David Londoño", 1.82, "Volar como los aviones", 'https://storage.googleapis.com/tallerpokeneas/David%20Londo%C3%B1o.jpg',"Y Si tosiste ya la hiciste"],
    ["3", "Mileidy Gil", 1.68, "Mecatear", 'https://storage.googleapis.com/tallerpokeneas/Mileidy%20Gil.jpg',"La plata es para mecatiar en cositas"],
    ["4", "Jennifer Arias", 1.73, "Importaculismo", 'https://storage.googleapis.com/tallerpokeneas/Jennifer%20Arias.jpg' ,"Oeeee, fuck you men gonorrea"],
    ["5", "Gonzo", 1.75, "Sentimentalismo", 'https://storage.googleapis.com/tallerpokeneas/Gonzo.jpg',"No ve que le falta un bracito"],
    ["6", "Lady Tabares", 1.62, "Perseverancia", 'https://storage.googleapis.com/tallerpokeneas/Lady%20Tabares.jpg', "Hágale que todo bien"],
    ["7", "El Zarco", 1.80, "Fama", 'https://storage.googleapis.com/tallerpokeneas/El%20Zarco.webp', "Mucha loca"]  
    ]

exports.infoPokenea = (req, res) => {
    const number = Math.floor(Math.random() * pokenea.length);
    pokeneaActual = pokenea[number];
    res.render("infoPokeneas" , {
        pokeneaID : pokeneaActual,
        hostname : os.hostname()
    });
};  

exports.fotoPokenea = (req, res) => {
    const number = Math.floor(Math.random() * pokenea.length);
    pokeneaActual = pokenea[number];
    res.render("fotoPokeneas" , {
        pokeneaID : pokeneaActual,
        hostname : os.hostname()
    });
};
