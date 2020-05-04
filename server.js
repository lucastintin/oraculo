const express       = require('express');
const bodyParser    = require('body-parser');

const config = require('./config/config');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Controller
var perguntaController = require('./controllers/perguntaController');

app.use('/pergunta', perguntaController);

app.get('/', (req, res) => {
    res.redirect('/pergunta/');
});

//Rotas
app.get('/teste', (req, res) => {
    res.status(200).send('OK');
});

app.listen(config.PORT, () => {
    console.log(`Servidor rodando na porta ${config.PORT}`)
});


module.exports = app;