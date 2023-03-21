import { mostrarAlerta, validar } from './funciones.js';
import { getClient, editareCliente } from './API.js'
(function() {

    // CRUD = Create Read Update Delete

//  CRUD	SQL
// Create	INSERT
// Read	SELECT
// Update	UPDATE
// Delete	DELETE


    //Campi formulari
    const nomeInput = document.querySelector('#nome')
    const emailInput = document.querySelector('#email')
    const aziendaInput = document.querySelector('#azienda')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document,addEventListener('DOMContentLoaded', async () => {
        const parametroURL = new URLSearchParams(window.location.search)

        const idCliente = parseInt(parametroURL.get('id'));

        console.log(idCliente);

        const cliente = await getClient(idCliente);
        showCliente(cliente);

        //SUBMIT FORMULARIO
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validareCliente)

    });

    function showCliente(cliente) {
        const { nome, azienda, email, telefono, id} = cliente;

        nomeInput.value = nome;
        emailInput.value = email;
        aziendaInput.value = azienda;
        telefonoInput.value = telefono;
        idInput.value = id
    }

    function validareCliente(e) {
        e.preventDefault();

        const cliente = {
            nome: nomeInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            azienda: aziendaInput.value,
            id: parseInt(idInput.value),
        }


        if(validar(cliente)) {
            //mostra mensaje
            mostrarAlerta('Tutti i campi sono obbligatori');
            return;
         
        }

        //Rescribe oggetto
        editareCliente(cliente);




    }
})();