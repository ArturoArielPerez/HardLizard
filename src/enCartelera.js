const fs = require ('fs');

let EnCartelera = {
    bd: './data/movies.json',
    titulo: 'En cartelera',
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    totalPelis: function(){
        return this.leerJSON().total_movies;
    },
    carteleraActual: function(){
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(`
            Titulo: ${movie.title}
            Reseña: ${movie.overview}
            
            `)
        })
        return titleMovies;
    }
}
module.exports = EnCartelera;