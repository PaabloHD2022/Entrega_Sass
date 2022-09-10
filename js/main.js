// Variables Globales
let productos = [];
let gestor;
const url = '../js/DataBase.json';


// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {    
    productos = JSON.parse(localStorage.getItem(productos));
    gestor = new TiendaOnline();
    gestor.iniciar();
});




