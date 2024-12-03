CREATE TABLE IF NOT EXISTS `usuario` (
	`id` int NOT NULL,
	`nome` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`senha` varchar(8) NOT NULL,
	PRIMARY KEY (`id`)
);

