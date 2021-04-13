const Pool = require('pg').Pool;// no heroku posso fazer 20 conexões simultâneas

//Lembrar de abrir e fechar a conexão com o banco
//O heroku pode alterar as conexões, temos que lembrar de conferir sempre

const pool = new Pool({
    user: 'hycolfraftxbob',
    password:'b61fcb26e80778fd710300eb2998adf2294bb38da5938f9a25c29fc999693356',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'dflpmqmgd4cb7',
    port: 5432,
    ssl:{rejectUnauthorized:false},
});


const script = `
    CREATE TABLE IF NOT EXISTS contatos(

        ID serial primary key,
        nome varchar(60) not null,
        telefone varchar(20) not null
    )
`;

pool.query(script, function(error, result){
    if(error)
        throw error;
    
    console.log('Tabela criada com sucesso, meus parabéns você sabe o básico de banco!');
})