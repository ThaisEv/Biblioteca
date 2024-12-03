const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lupa'
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    connection.connect(erro => {
        if(!erro) {
            console.log('BD conectado');
        } else {
            console.log(`erro BD: ${erro.sqlMessage}`);
        }
    })
})

app.get('/dados-usuario', (req, res) => {
    const SQL = 'SELECT * from usuario';

    connection.query(SQL, (erro, prods, fields) =>{
        if(erro) {
            res.json({'erro na consulta do usuário': erro.sqlMessage});
        } else {
            res.json(prods);
        }
    })
})

app.post('/add-usuario', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const SQL = 'INSERT INTO usuario (nome, email, senha) VALUES(?, ?, ?)';    

    connection.query(SQL, [nome, email, senha], (erro, prods, fields) => {
        if(erro) {
            res.json({'erro no post do usuário': erro.sqlMessage});
        } else {
            res.send('Usuário cadastrado!');
        }
    })
})