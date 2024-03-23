---Script to create database and tables
CREATE DATABASE IF NOT EXISTS `smsDB`;
USE `smsDB`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL
);

DROP TABLE `messages`;

CREATE TABLE IF NOT EXISTS `messages` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `recipient` VARCHAR(13) NOT NULL,
    `content` TEXT NOT NULL,
    `status` VARCHAR(60) NOT NULL
    
);

FOREIGN KEY (`sender_id`) REFERENCES users (`id`)

`sender_id` VARCHAR(60) NOT NULL,