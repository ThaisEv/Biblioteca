export class Resenha {
    resenha: string = '';
    estrelas: number = 0;
    id_usuario: number = 0;
    id_livro: string = '';
    nome_usuario: string = '';

    constructor(
        resenha: string = '',
        estrelas: number = 0,
        id_usuario: number = 0,
        id_livro: string = '',
        nome_usuario: string = ''
    ) {
        this.resenha = resenha;
        this.estrelas = estrelas;
        this.id_usuario = id_usuario;
        this.id_livro = id_livro;
        this.nome_usuario = nome_usuario;
    }
}