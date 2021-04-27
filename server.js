const express = require('express'); //import express; using express;
const server = express(); // o servidor está pronto, estaremos apenas reecrevendo os métodos

const database = require('./database');

// middleware
server.use(express.json());




// localhost:3000/
server.get('/', async function (request, response) {
    const contatos = await database.read();
    response.json(contatos);
})
// localhost:3000/1234-1234-1233-2134

server.get('/:id', async function (request, response) {

    const id = request.params.id;
    const contato = await database.find(id);
    response.json(contato);
})
server.delete('/:id', async function (request, response) {

    const id = request.params.id;
   await database.delete(id);
    response.status(201).send();
})

server.post('/', async function (request, response) {

    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.create(nome, telefone);


    response.status(201).send();

})

server.put('/:id', async function (request, response) {

    const id = request.params.id;
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    const result = await database.update(id,nome, telefone);


    response.status(200).send();

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

