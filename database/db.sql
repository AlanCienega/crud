-- creando la base de datos
CREATE DATABASE crudnodejsmysql;
--usando la base de datos
use crudnodejsmysql;

CREATE TABLE customer(
	id int (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name varchar (50) NOT NULL,
	address varchar (100) NOT NULL,
	phone varchar(15)
);
-- mostrar las tablas
SHOW TABLES;
-- describir tabla
describe customer;