const express   = require('express');
var router      = express.Router();

//Model
var { Pergunta }   = require('./../models/pergunta.model');

router.get('/', (req, res) => {
    Pergunta.find((err, pergunta) => {
        if(!err) {
            var pergRandomica = Math.floor((Math.random() * pergunta.length));
            res.redirect('/pergunta/' + pergunta[pergRandomica]._id);
        }
    })
});

router.get('/:id', (req, res) => {
    Pergunta.findById(req.params.id, (err, pergunta) => {
        if(!err) {
            res.render('./pergunta/index', {pergunta});
        }
    })
});

router.get('/check/:id', (req, res) => {
    Pergunta.findById(req.params.id, (err, pergunta) => {
        if(!err) {
            res.render('./pergunta/check', {pergunta});
        }
    });
});

router.post('/save', (req, res) => {

    let pergunta = new Pergunta({
        descricao: req.body.descricao,
        opcoes: req.body.opcoes
    });

    pergunta.save((err, pergunta) => {
        if(!err){
            res.status(200).send('Pergunta gravada');
        }
    }) 
});


module.exports = router;