CREATE TABLE IF NOT EXISTS `usuario` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`senha` varchar(8) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `favoritos` (
	`id_fav` varchar(100) NOT NULL,
	`id_usuario` int NOT NULL,
	PRIMARY KEY (`id_fav`),
    CONSTRAINT `fk_favoritos_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO `usuario` (nome, email, senha) VALUES('root', 'root@gmail.com', '12345678');

