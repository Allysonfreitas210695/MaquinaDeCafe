
-- Criação do banco de dados para o sistema Devine Café

CREATE TABLE Cafe (
    id_cafe INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Leite (
    id_leite INT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE Acucar (
    id_acucar INT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE Tamanho (
    id_tamanho INT PRIMARY KEY,
    descricao VARCHAR(20) NOT NULL,
    volume_ml INT NOT NULL
);

CREATE TABLE Ingrediente (
    id_ingrediente INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    disponivel BOOLEAN NOT NULL
);

CREATE TABLE Pedido (
    id_pedido INT PRIMARY KEY,
    data_hora DATETIME NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    id_cafe INT,
    id_leite INT,
    id_acucar INT,
    id_tamanho INT,
    FOREIGN KEY (id_cafe) REFERENCES Cafe(id_cafe),
    FOREIGN KEY (id_leite) REFERENCES Leite(id_leite),
    FOREIGN KEY (id_acucar) REFERENCES Acucar(id_acucar),
    FOREIGN KEY (id_tamanho) REFERENCES Tamanho(id_tamanho)
);

CREATE TABLE Pedido_Ingrediente (
    id_pedido INT,
    id_ingrediente INT,
    PRIMARY KEY (id_pedido, id_ingrediente),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_ingrediente) REFERENCES Ingrediente(id_ingrediente)
);
