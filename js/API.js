const url = 'http://localhost:4000/clienti';

//QUANDO SI CREA UN NUOVO CLIENTE 
export const nuevoCliente = async cliente => {
    
    try {
        await fetch(url, {
            method:"POST",
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        window.location.href = 'index.html'
        
    } catch (error) {
        console.log(error);
        
    }
}

// OTTIENI UN NUOVO CLIENTE 
export const ottieniClienti = async () => {
    try {
        const result = await fetch(url);
        const clienti = await result.json();
        console.log(clienti);
        return clienti;
    } catch (error) {
        console.log(error);
    }
}

//CANCELLA CLIENTE

export const eliminareCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}


// GET A CLIENT FOR THE ID 

export const getClient = async id =>  {
    try {
        
        const result = await fetch(`${url}/${id}`)
        const cliente = await result.json();
        console.log(cliente);
    
        return cliente;
        
    } catch (error) {
        console.log(error);
    }

}  

//Attualizza registro
export const editareCliente = async cliente => {
    
    try {
      await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}