const invia = document.getElementById("invia");
const numero = document.getElementById("numero");
const codaTable = document.getElementById("coda");
const elimina = document.getElementById("elimina");
let coda = [];

/**
 * Funzione per inserire un elemento all'inizio dell'array
 * @param {*} value valore da inserire nell'array
 * @returns array
 */
const insert = (value) =>{
    const temp = [value,...coda];
    return temp;
}

/**
 * Funzione per rimuovere l'ultimo valore dall'array
 */
const extract = () =>{
    let temp = coda;
    temp.length = temp.length - 1;
    return temp;
}

/**
 * Funzione per la visualizzazione della coda in finestra
 * @param {*} coda 
 * @param {*} table 
 */
const renderCoda = (coda, table) =>{
    if(coda){
        let html = '<tr>';
        coda.forEach((element)=>{
            html += '<td>'+element+'</td>';
        });
        html += '</tr>';
        table.innerHTML = html;
    }
    
}

/**
 * Gestione click button inserimento valore in coda
 */
invia.onclick = () =>{
    if(numero.value){
        coda = insert(numero.value);
        renderCoda(coda, codaTable);
        numero.value = "";
    }
}

/**
 * gestione button elimina
 */
elimina.onclick = () =>{
    if(coda.length > 0){
        coda = extract();
        renderCoda(coda, codaTable);
    }
}

/**
 * visualizzazione iniziale della coda
 */
renderCoda(coda, codaTable);