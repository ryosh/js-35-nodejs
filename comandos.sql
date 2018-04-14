CREATE DATABASE casadocodigo;

USE casadocodigo;

CREATE TABLE livros (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        titulo varchar(255) DEFAULT NULL,
        descricao text,
        preco decimal(10,2) DEFAULT NULL
);

INSERT INTO livros(titulo,descricao,preco)
VALUES('Começando com nodejs','Livro introdutório sobre nodejs', 39.90);
INSERT INTO livros(titulo,descricao,preco)
VALUES('Começando com javascript','Livro introdutório sobre javascript', 39.90);
INSERT INTO livros(titulo,descricao,preco)
VALUES('Começando com express','Livro introdutório sobre express', 39.90);

SELECT * FROM livros;
