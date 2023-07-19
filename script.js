//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeTitle(newTitle) {
    let titolo = document.getElementById('negozio');
    titolo.innerHTML = newTitle;
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeProp(color){
    let sfondo = document.getElementsByTagName('body');
    document.body.style.backgroundColor = color;
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeFooter(newAddress){
    let indirizzo = document.getElementById('address');
    indirizzo.textContent = newAddress;
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addCssClass(newClass) {
    let links = document.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++) {
        links[i].classList.add(newClass);
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function addClassAndStyle(selector, newClass, prop, value) {
    let element = document.querySelectorAll(selector);
    for(let i = 0; i < element.length; i++) {
        element[i].classList.add(newClass);
        element[i].style[prop] = value;
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function getRandomColor(){
    let coloreCasuale = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.querySelectorAll('.prezzo').forEach(el => el.style.color = coloreCasuale);
}