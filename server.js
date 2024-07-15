const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // Puedes cambiar el puerto a uno alto, por ejemplo 8080, 3000 es usado aquí como ejemplo.

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
