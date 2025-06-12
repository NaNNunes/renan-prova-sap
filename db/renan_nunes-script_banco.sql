
CREATE DATABASE `mydb`;
USE `mydb` ;

CREATE TABLE IF NOT EXISTS `USUARIO` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome_usuario` VARCHAR(45) NOT NULL,
  `email_usuario` VARCHAR(360) NOT NULL
);

CREATE TABLE IF NOT EXISTS `TAREFA` (
  `id_tarefa` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `USUARIO_id_usuario` INT NOT NULL,
  `descricao_tarefa` VARCHAR(300) NULL,
  `nome_setor` VARCHAR(45) NULL,
  `prioridade` VARCHAR(45) NULL,
  `TAREFAcol` ENUM('baixa', 'média', 'alta') NULL,
  `data_cadastro_tarefa` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `status_tarefa` ENUM('a fazer', 'fazendo', 'pronto') NULL DEFAULT 'a fazer',
  CONSTRAINT `fk_TAREFA_USUARIO`
    FOREIGN KEY (`USUARIO_id_usuario`)
    REFERENCES `mydb`.`USUARIO` (`id_usuario`)
);

