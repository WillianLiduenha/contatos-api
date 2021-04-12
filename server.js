const express = require('express'); //import express; using express;
const { uuid } = require('uuidv4');


const server = express(); // o servidor está pronto, estaremos apenas reecrevendo os métodos

// middleware
server.use(express.json());

contatos = [];

server.get('/', function (request, response) {

    response.json(contatos);


})

server.get('/', function (request, response) {

    const id = request.params.id;
    response.json(id);


})


server.post('/', function (request, response) {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    contato = {
        id: uuid(),
        nome,
        telefone
    };

    contatos.push(contato);

    response.status(201).send();

})

server.listen(process.env.PORT || 3000);

//HTTP
// GET (Obter um recurso JSON[java script object notation]) = Read
// POST (Enviar ou adicionar um recurso) = Create
// PUT (Atualizar um recurso) = Update
// DELETE (Apagar um recurso) = Delete

// /?texto= Hello World (informações passadas pela url) - request.query
// produto/1 (informações passadas também pela url) - request.params
// corpo da mensagem - request.body (JSON)

