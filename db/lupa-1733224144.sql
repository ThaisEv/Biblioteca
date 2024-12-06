CREATE TABLE IF NOT EXISTS `usuario` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`senha` varchar(8) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO `usuario` (nome, email, senha) VALUES('root', 'root@gmail.com', '12345678');

