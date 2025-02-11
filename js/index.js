fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRjtGEeJcNRGooq5bwqKnXKlRtJtXxQjDC2iyTMC9onSAjhC53z2C9MNiLF1GekE-0oOY1icBC7QvyP/pub?output=csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split("\n").map(row => row.split(","));
        console.log(rows); // Muestra los datos en la consola
    })
    .catch(error => console.error("Error al obtener los datos:", error));