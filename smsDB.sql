---Script to create database and tables
CREATE DATABASE IF NOT EXISTS `smsDB`;
USE `smsDB`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS `messages` (
    `id` VARCHAR(60) NOT NULL PRIMARY KEY,
    `recipient` VARCHAR(10) NOT NULL,
    `content` TEXT NOT NULL,
    `sender_id` VARCHAR(60) NOT NULL,
    `status` ENUM('delivered', 'failed'),
    FOREIGN KEY (`sender_id`) REFERENCES users (`id`)
)