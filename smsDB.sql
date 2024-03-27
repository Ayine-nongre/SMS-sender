---Script to create database and tables
CREATE DATABASE IF NOT EXISTS `smsDB`;
USE `smsDB`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `username` VARCHAR(60) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL
);

DROP TABLE `messages`;

CREATE TABLE IF NOT EXISTS `messages` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `recipient` VARCHAR(13) NOT NULL,
    `content` TEXT NOT NULL,
    `status` VARCHAR(60) NOT NULL,
    `sender_id` VARCHAR(60) NOT NULL,
     `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    FOREIGN KEY (`sender_id`) REFERENCES users (`id`)
);

CREATE TABLE IF NOT EXISTS `templates` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,
    `recipients` TEXT NOT NULL,
    `author_id` VARCHAR(60) NOT NULL,
     `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    FOREIGN KEY (`author_id`) REFERENCES users (`id`)
);


