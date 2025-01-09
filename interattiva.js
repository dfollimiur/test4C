/*
1)Se il nick è
vuoto di restituire un messaggio di errore
2)Le due password devono coincidere altrimenti riportare un messaggio di errore
3)Nome, cognome e citta devono essere non vuote
4)La regione deve essere selezionata
5)Infine
Controllare se sono stati digitati i 16 caratteri del codice fiscale
*/
let form = document.forms[0]

function checkVuoto(valore){
    if (valore.length==0){
        return true
    }
    return false
}

function checkPassword(){
    if (form.password.value == form.password_conferma.value && form.password.value.length>=8){
        return true
    }
    return false
}

function checkRegione(){
    if (form.regione.value>0){
        return true
    }
    return false
}

function checkCodiceFiscale(){
    if (form.codice_fiscale.value.length==16) return true
    return false
    
    
}

//Event Listener
//Nickname
form.nickname.addEventListener("keyup", function(){
    let risultato = checkVuoto(form.nickname.value);
    if (risultato){
        document.getElementById("nickname_alert").style.display = "block";
    }
    else document.getElementById("nickname_alert").style.display = "none";
})

//Nome
form.nome.addEventListener("keyup", function(){
    let risultato = checkVuoto(form.nome.value);
    if (risultato){
        document.getElementById("nome_alert").style.display = "block";
    }
    else document.getElementById("nome_alert").style.display = "none";
})

//Cognome
form.cognome.addEventListener("keyup", function(){
    let risultato = checkVuoto(form.cognome.value);
    if (risultato){
        document.getElementById("cognome_alert").style.display = "block";
    }
    else document.getElementById("cognome_alert").style.display = "none";
})

//Password
form.password.addEventListener("keyup", function(){
    let risultato = checkPassword();
    if (!risultato){
        document.getElementById("password_alert").style.display = "block";
    }
    else document.getElementById("password_alert").style.display = "none";
})
form.password_conferma.addEventListener("keyup", function(){
    let risultato = checkPassword();
    if (!risultato){
        document.getElementById("password_alert").style.display = "block";
    }
    else document.getElementById("password_alert").style.display = "none";
})

//Città
form.citta.addEventListener("keyup", function(){
    let risultato = checkVuoto(form.citta.value);
    if (risultato){
        document.getElementById("citta_alert").style.display = "block";
    }
    else document.getElementById("citta_alert").style.display = "none";
})

//Regione
form.regione.addEventListener("change",function(){
    let risultato = checkRegione();
    if (!risultato){
        document.getElementById("regione_alert").style.display = "block";
    }
    else document.getElementById("regione_alert").style.display = "none";
})

//Codice Fiscale
form.codice_fiscale.addEventListener("keyup",function(){
    let risultato = checkCodiceFiscale()
    if (!risultato){
        document.getElementById("codice_fiscale_alert").style.display = "block";
    }
    else document.getElementById("codice_fiscale_alert").style.display = "none";
})

//Submit
form.addEventListener("submit", function(event){
    if (!checkVuoto(form.nickname.value) && !checkVuoto(form.cognome.value) && checkPassword() && !checkVuoto(form.citta.value) && checkRegione() && checkCodiceFiscale()){
        document.getElementById("successo").style.display = "block"
        document.getElementById("attenzione").style.display = "none"
    }
    else {
        document.getElementById("successo").style.display = "none"
        document.getElementById("attenzione").style.display = "block"
    }
    event.preventDefault();
})