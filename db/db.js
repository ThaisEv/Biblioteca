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

app.get('/dados-login', (req, res) => {
    const SQL = 'SELECT * from login';

    connection.query(SQL, (erro, prods, fields) => {
        if (erro) {
            res.json({ 'erro na consulta do login': erro.sqlMessage });
        } else {
            res.json(prods);
        }
    })
})

app.get('/dados-favoritos', (req, res) => {
    const SQL = 'SELECT * from favoritos';

    connection.query(SQL, (erro, prods, fields) => {
        if (erro) {
            res.json({ 'erro na consulta dos favoritos': erro.sqlMessage });
        } else {
            res.json(prods);
        }
    })
})

app.get('/dados-resenhas', (req, res) => {
    const SQL = 'SELECT * from resenhas';

    connection.query(SQL, (erro, prods, fields) => {
        if (erro) {
            res.json({ 'erro na consulta das resenhas': erro.sqlMessage });
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

app.post('/add-login', (req, res) => {
    const id = req.body.id_usuario;
    const nome = req.body.nome_login;
    const email = req.body.email_login;
    const senha = req.body.senha_login;
    const SQL = 'INSERT INTO login (id_usuario, nome_login, email_login, senha_login) VALUES(?, ?, ?, ?)';

    connection.query(SQL, [id, nome, email, senha], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao executar consulta:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Login cadastrado com sucesso no bd!' });
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

app.post('/add-resenha', (req, res) => {
    const resenha = req.body.resenha;
    const estrelas = req.body.estrelas;
    const id_usuario = req.body.id_usuario;
    const id_livro = req.body.id_livro;
    const nome_usuario = req.body.nome_usuario;
    const SQL = 'INSERT INTO resenhas (resenha, estrelas, id_usuario, id_livro, nome_usuario) VALUES(?, ?, ?, ?, ?)';

    connection.query(SQL, [resenha, estrelas, id_usuario, id_livro, nome_usuario], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao executar consulta:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Resenha cadastrada com sucesso no bd!' });
        }
    });
})

app.delete('/deletar-login/:id', function (req, res) {
    const id = req.params.id;
    const SQL = 'DELETE FROM login WHERE id_usuario = ?;';

    connection.query(SQL, [id], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao deletar livro dos favoritos:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Usuário deslogado!' });
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

app.delete('/deletar-resenha/:id', function (req, res) {
    const id_livro = req.params.id_livro;
    const SQL = 'DELETE FROM resenhas WHERE id_livro = ?;';

    connection.query(SQL, [id_livro], (erro, prods, fields) => {
        if (erro) {
            console.error('Erro ao deletar livro dos favoritos:', erro);
            res.status(500).json({ error: erro.sqlMessage });
        } else {
            res.status(201).json({ message: 'Resenha deletada no bd!' });
        }
    });
})