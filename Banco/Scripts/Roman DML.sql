USE D_ROMAN;
GO


INSERT INTO TIPO_USUARIO(nomeDescricao)
VALUES ('Administardor'), 
		('Professor')

INSERT INTO Usuario(IdTipoUsuario, Nome,Email,Senha)
VALUES (1,'Marcos Paulo','Mar@gmail.com','12345'),
	   (2,'Pedro','P@gmail.com','12345')

INSERT INTO Temas(nomeTema)
VALUES('Gestão'),('Mobile'),('FrontEnd')

INSERT INTO Projeto(nomeProjeto,IdTema,IdUsuario)
VALUES('Roman',2,1),('Opflix',3,2)