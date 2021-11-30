USE D_ROMAN;
GO

INSERT INTO Usuario(Nome,Email,Senha)
VALUES ('Marcos Paulo','Mar@gmail.com','12345'),
	   ('Pedro','P@gmail.com','12345')

INSERT INTO TIPO_USUARIO(nomeDescricao)
VALUES ('Administardor'), 
		('Professor')

INSERT INTO Temas(nomeTema)
VALUES('Gest�o'),('Mobile'),('FrontEnd')

INSERT INTO Projeto(nomeProjeto,IdTema,IdUsuario)
VALUES('Roman',2,1),('Opflix',3,2)