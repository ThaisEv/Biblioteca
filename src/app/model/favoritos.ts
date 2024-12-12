export class Favorito {
    id_fav: string;
    id_usuario: number;

    constructor(livro: string, id: number) {
        this.id_fav = livro;
        this.id_usuario = id;
    }
}