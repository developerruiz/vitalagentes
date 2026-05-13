CREATE DATABASE IF NOT EXISTS vital_agentes
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE vital_agentes;

CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(160) NOT NULL,
    seguro VARCHAR(80) NOT NULL,
    mensaje TEXT NULL,
    origen VARCHAR(120) DEFAULT 'Landing Vital Agentes',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
