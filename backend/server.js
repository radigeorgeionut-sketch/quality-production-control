const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Logica de procesare a codului de bare (din discutia noastra)
function parseBarcode(barcode) {
    const parts = barcode.split(/[/.]/);
    return {
        numarArticol: parts[0],
        numarComanda: parts[1],
        numarPiesa: parts[2],
        timestamp: new Date().toISOString()
    };
}

// Ruta care primeste scanarea de pe telefon
app.post('/api/scan', (req, res) => {
    const { barcode } = req.body;
    const data = parseBarcode(barcode);
    console.log("Piesa scanata noua:", data);
    res.json({ message: "Date primite cu succes!", info: data });
});

app.listen(PORT, () => {
    console.log(`Serverul de Control Productie ruleaza pe portul ${PORT}`);
});
