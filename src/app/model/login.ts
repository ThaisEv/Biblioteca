export class Login {
    id_usuario: number = 0;
    nome_login: string = '';
    email_login: string = '';
    senha_login: string = '';

    constructor(id: number, nome: string, email: string, senha: string) {
        this.id_usuario = id;
        this.nome_login = nome;
        this.email_login = email;
        this.senha_login = senha;
    }
}