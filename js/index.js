const ID_HOJA_CALCULO = "1pnbcy5oBQNNAyWMrmgmkiisC02olukoot_FlXTJgXcQ"
const API_KEY = "AIzaSyA_00hUBLJ1hE9E3Cs8JiaKoqdN0rjtsBc";
const values = 'A2:AZ100';

const obj = {
    data: {
        listaDatos: []
    }
}

fetch(`https://content-sheets.googleapis.com/v4/spreadsheets/${ID_HOJA_CALCULO}/values/${values}?access_token=${API_KEY}&key=${API_KEY}`)
    .then(lista => lista.json())
    .then(valores => {
        obj.listaDatos = valores.values;
    }).catch(err => console.log(err));