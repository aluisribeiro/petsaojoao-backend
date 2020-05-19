CREATE DATABASE registro;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    email VARCHAR(45),
    telefone VARCHAR(11),
    whatsapp VARCHAR(11)
);