const os = require("os")

const pokenea = [
    ["01", "Jeison Alvarez", 1.78, "Inmunidad al sacol", 'Imagenes/Jeison ALvarez.jpg',"No llore papi acuerdese que somos neas"],
    ["69", "Milton Gonzalez", 1.65, "Pequeño tamaño gran personalidad", 'Imagenes/Milton Gonzalez.jpg', "Yo le doy lengua a lo mango"],
    ["420", "David Londoño", 1.82, "Volar como los aviones", 'Imagenes/David Londoño.jpg',"Y Si tosiste ya la hiciste"],
    ["3", "Mileidy Gil", 1.68, "Mecatear", 'Imagenes/Mileidy Gil.jpg',"La plata es para mecatiar en cositas"],
    ["4", "Jennifer Arias", 1.73, "Importaculismo", 'Imagenes/Jennifer Arias.jpg',"Oeeee, fuck you men gonorrea"],
    ["5", "Gonzo", 1.75, "Sentimentalismo", 'Imagenes/Gonzo.jpg',"No ve que le falta un bracito"],
    ["6", "Lady Tabares", 1.62, "Perseverancia", 'Imagenes/Lady Tabares.jpg', "Hágale que todo bien"],
    ["7", "El Zarco", 1.80, "Fama", 'Imagenes/El Zarco.webp', "Mucha loca"]  
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
    render("infoPokeneas" , {
        pokeneaID : pokeneaActual,
        hostname : os.hostname()
    });
};
