const fs = require('fs'); //DECIA Fs -> es fs

let sucursales = {
    bd: './data/theaters.json',
    titulo: 'Sucursales',

    leerJSON: function(){
        let theatersJson = fs.readFileSync(this.bd, 'utf-8');
        let salas = JSON.parse(theatersJson);
        return salas;
    },
    totalSalas: function(){
        return this.leerJSON().total_theaters;
    },
    listaDeSalas: function(){
        let theaters = this.leerJSON(); //ESTABAS HACIENDO THEATHERS.LEERJSON(), ERA CON THIS
        let descripcionTheaters = [];

        theaters.theaters.forEach(function(sala){//theaters tiene dentro la lista de teatros por eso
                                                // por eso hago .theathers, accedo a esa lista y la recorro
            descripcionTheaters.push(`           
            
                Nombre de sala: ${sala.name}

                Direccion: ${sala.address}

                Descripcion: ${sala.description}

            `)
        });
        return descripcionTheaters;

    }

}

module.exports = sucursales;