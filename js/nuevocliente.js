import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';


(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const azienda = document.querySelector('#azienda').value;

        const cliente = {
            nome,
            email,
            telefono,
            azienda
        }

        // console.log(!Object.values(cliente).every( input => input !== ''));

        if(validar(cliente)) {
            //mostra mensaje
            mostrarAlerta('Tutti i campi sono obbligatori');
            return;
         
        }

        nuevoCliente(cliente)
        
        // console.log('Si se paso la validacion');
    };



})();