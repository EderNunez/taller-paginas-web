const sheetID = '1pnbcy5oBQNNAyWMrmgmkiisC02olukoot_FlXTJgXcQ';
const sheetName = encodeURIComponent("Class Data");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
fetch(sheetURL)
    .then(response => response.text())
    .then(csvText => handleResponse(csvText));

const handleResponse = csvText => {
    console.log(csvText)
    
}