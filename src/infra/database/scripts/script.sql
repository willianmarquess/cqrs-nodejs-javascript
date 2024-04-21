CREATE DATABASE IF NOT EXISTS `inventory-ms`;

CREATE TABLE IF NOT EXISTS product(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    price INT
);

CREATE TABLE IF NOT EXISTS inventory(
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    productId VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) DEFAULT 'ACTIVE',
    total INT NOT NULL,
    FOREIGN KEY (productId) REFERENCES product(id)
);