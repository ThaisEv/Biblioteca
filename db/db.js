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

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    connection.connect(erro => {
        if (!erro) {
            console.log('BD conectado');
        } else {
            console.log(`erro BD: ${erro.sqlMessage}`);
        }
    })
})

app.get('/dados-usuario', (req, res) => {
    const SQL = 'SELECT * from usuario';

    connection.query(SQL, (erro, prods, fields) => {
        if (erro) {
            res.json({ 'erro na consulta do usuário': erro.sqlMessage });
        } else {
            res.json(prods);
        }
    })
})

app.get('/dados-favoritos', (req, res) => {
    const SQL = 'SELECT * from favoritos';

    connection.query(SQL, (erro, prods, fields) => {
        if (erro) {
            res.json({ 'erro na consulta do usuário': erro.sqlMessage });
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
        if (erro) {
            console.error('Erro ao executar consulta:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        }
    });
})

app.post('/add-favoritos', (req, res) => {
    const id_fav = req.body.id_fav;
    const id_usuario = req.body.id_usuario;
    const SQL = 'INSERT INTO favoritos (id_fav, id_usuario) VALUES(?, ?)';

    connection.query(SQL, [id_fav, id_usuario], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao executar consulta:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Livro cadastrado com sucesso nos favoritos!' });
        }
    });
})

app.delete('/deletar-favorito/:id', function (req, res) {
    const id = req.params.id;
    const SQL = 'DELETE FROM favoritos WHERE id_fav = ?;';

    connection.query(SQL, [id], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao deletar livro dos favoritos:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Livro deletado dos favoritos!' });
        }
    });
})