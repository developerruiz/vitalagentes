# Vital Agentes Landing

## Estructura

- index.html
- css/style.css
- js/app.js
- assets/logo-vital.svg
- assets/logo-vital-white.svg
- php/conexion.php
- php/guardar.php
- sql/database.sql

## Cómo correrlo

1. Coloca la carpeta en `htdocs` si usas XAMPP.
2. Importa `sql/database.sql` en phpMyAdmin.
3. Ajusta los datos de conexión en `php/conexion.php`.
4. Abre:
   `http://localhost/vital-agentes-landing-clean/`

## Formulario

El formulario envía a `php/guardar.php` y guarda en la tabla `leads`.

## Nota

Cambia el número de WhatsApp en `index.html`:
`https://wa.me/525512345678`
