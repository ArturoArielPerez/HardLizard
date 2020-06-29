const fs = require('fs');

let preguntasFrecuentes = {
    bd: './data/faqs.json',
    titulo: 'Preguntas Frecuentes',

    leerJSON: function() {
        let faqsJson = fs.readFileSync(this.bd, 'utf-8');
        let faqs = JSON.parse(faqsJson);
        return faqs;
    },
    totalDePreguntas: function(){
        return this.leerJSON().total_faqs;
    },
    listaDePreguntas: function(){
        let preguntas = this.leerJSON();
        let preguntasTotal = [];
        preguntas.faqs.forEach(function(pregunta){
            preguntasTotal.push(`
                pregunta: ${pregunta.faq_title}

                reseña: ${pregunta.faq_answer}
            
            `)
        })
        return preguntasTotal;
    }
}

module.exports = preguntasFrecuentes;