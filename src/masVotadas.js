const fs = require('fs');

let masVotadas = {
    bd: './data/movies.json',
    titulo: 'Mas votadas',
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    rating: function(){
        let movies = this.leerJSON();
        let promedios = movies.movies.filter(movie => movie.vote_average >= 7);
        let todosLosRating = [];
        
        promedios.forEach(function(movie){
            todosLosRating.push(movie.vote_average);
        });

        let sumaDeRatings = todosLosRating.reduce(function(valorAnterior, valorActual){
            return valorAnterior + valorActual;
          });

        return sumaDeRatings / todosLosRating.length;
       
    },
    listarPelis: function() {
        let allMovies = this.leerJSON();
        let movies = []
        allMovies.movies.forEach(function(movie) {
            if(movie.vote_average >= 7){
                movies.push(`
                
                Titulo: ${movie.title}
                Rating: ${movie.vote_average}
                Reseña: ${movie.overview}
                `)
            }
        });
        return movies;
    }
}

module.exports = masVotadas;