const {mongoose} = require('../database/database');

var perguntaSchema = new mongoose.Schema({
    descricao: {
        type: String
    },
    opcoes: [{
        texto : {
            type: String
        },
        isCorrect : {
            type: Boolean
        }
    }],
    nivel: {
        type: Number
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Pergunta = mongoose.model('Pergunta', perguntaSchema);

module.exports = { Pergunta };