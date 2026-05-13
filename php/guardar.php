<?php
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

$nombre = trim($_POST["nombre"] ?? "");
$telefono = trim($_POST["telefono"] ?? "");
$correo = trim($_POST["correo"] ?? "");
$seguro = trim($_POST["seguro"] ?? "");
$mensaje = trim($_POST["mensaje"] ?? "");
$origen = trim($_POST["origen"] ?? "Landing Vital Agentes");

if ($nombre === "" || $telefono === "" || $correo === "" || $seguro === "") {
    header("Location: ../index.html?error=1#contacto");
    exit;
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../index.html?error=1#contacto");
    exit;
}

$sql = "INSERT INTO leads (nombre, telefono, correo, seguro, mensaje, origen) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    header("Location: ../index.html?error=1#contacto");
    exit;
}

$stmt->bind_param("ssssss", $nombre, $telefono, $correo, $seguro, $mensaje, $origen);

if ($stmt->execute()) {
    header("Location: ../index.html?success=1#contacto");
    exit;
}

header("Location: ../index.html?error=1#contacto");
exit;
?>
