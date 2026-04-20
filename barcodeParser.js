/**
 * Functie pentru extragerea datelor din codul de bare
 * Format: NumarArticol / NumarComanda . NumarPiesa
 */
function parseBarcode(barcode) {
    // Exemplu: "6531140150/02.5123450017"
    
    const parts = barcode.split(/[/.]/); // Impartim dupa "/" si "."
    
    if (parts.length < 3) {
        return { error: "Format cod de bare invalid" };
    }

    return {
        numarArticol: parts[0],   // 6531140150
        numarComanda: parts[1],   // 02
        numarPiesa: parts[2],     // 5123450017
        timestamp: new Date().toISOString()
    };
}

// Testare
const barcodeInput = "6531140150/02.5123450017";
console.log(parseBarcode(barcodeInput));
