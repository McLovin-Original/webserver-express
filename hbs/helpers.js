const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio',() => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar',(texto) => {
    let palabras = texto.split(' ');
    console.log(palabras);
    palabras.forEach((palabra,idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});