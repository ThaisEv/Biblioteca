CREATE TABLE IF NOT EXISTS `usuario` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`senha` varchar(8) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `favoritos` (
    `id_favorito` int NOT NULL AUTO_INCREMENT,
	`id_fav` varchar(100) NOT NULL,
	`id_usuario` int NOT NULL,
	PRIMARY KEY (`id_favorito`),
    CONSTRAINT `fk_favoritos_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS `login` (
    `id_login` INT NOT NULL AUTO_INCREMENT,
    `nome_login` VARCHAR(100) NOT NULL,
    `email_login` VARCHAR(100) NOT NULL,
    `senha_login` VARCHAR(8) NOT NULL, 
    `id_usuario` INT NOT NULL,
    PRIMARY KEY (`id_login`),
    CONSTRAINT `fk_login_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS `resenhas` (
	`id_resenha` INT NOT NULL AUTO_INCREMENT,
    `resenha` VARCHAR(10000) NOT NULL,
    `estrelas` INT NOT NULL,
	`id_usuario` INT NOT NULL,
    `id_livro` VARCHAR(300) NOT NULL,
    `nome_usuario` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id_resenha`),
    CONSTRAINT `fk_resenhas_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `usuario` (nome, email, senha) VALUES('root', 'root@gmail.com', '12345678');

