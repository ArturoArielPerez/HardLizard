let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let sucursales = require('./sucursales');
let masVotadas = require('./masVotadas');
let contacto = require('./contacto');
let preguntasFrecuentes = require('./preguntasFrecuentes');

let index = {
homePage: function(res){
    res.write(homePage.titulo);
    res.write('\n\n');
    res.write('El total de peliculas es de '+ homePage.cantidad());
    res.write('\n\n');
    let titulos = homePage.listarPelis();
    for (const titulo of titulos) {
        res.write(titulo); 
        res.write('\n')
    }    
    res.end();
},

enCartelera: function(res){
    res.write('En cartelera\n\n');
    res.write('El total de peliculas es de ' + enCartelera.totalPelis());
    res.write('\n\n');
    res.write('lista de peliculas: ' + enCartelera.carteleraActual());
    res.end();

},

sucursales: function(res){
    res.write(sucursales.titulo);//estabas poniendo titulo solo
    res.write('\n\n');
    res.write('Total de salas ' + sucursales.totalSalas());
    res.write('\n\n');
    res.write('Listado de salas: ' + sucursales.listaDeSalas());
    res.end();
},

masVotadas: function(res){
    res.write(masVotadas.titulo);
    res.write('\n\n');
    res.write('Total de peliculas: ' + masVotadas.listarPelis().length);
    res.write('\n\n');
    res.write('Rating Promedio:' + Math.round(masVotadas.rating()));
    res.write('\n\n');
    res.write('Lista de peliculas a mostrar:' + masVotadas.listarPelis());
    res.end();
},

preguntasFrecuentes: function(res){
    res.write(preguntasFrecuentes.titulo);
    res.write('\n\n');
    res.write('Total de preguntas: ' + preguntasFrecuentes.totalDePreguntas());
    res.write('\n\n');
    res.write('Lista de preguntas y respuestas: ' + preguntasFrecuentes.listaDePreguntas());
    res.end();
},
contacto: function(res){
    res.write(contacto.titulo);
    res.write('\n\n');
    res.write(contacto.contenido);
    res.end();
}
}
module.exports = index;