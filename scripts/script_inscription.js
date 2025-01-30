
const form = document.getElementById("formulaire-participer");
const errorSections = [
    document.getElementById("erreurs-personnel"),
    document.getElementById("erreurs-adresse"),
    document.getElementById("erreurs-age")
]

const firstname = document.getElementById("prenom");
const lastname = document.getElementById("nomF");
const phone = document.getElementById("telephone");
const email = document.getElementById("courriel");
const pw = document.getElementById("password");
const pwConfirm = document.getElementById("confirmer");

const street = document.getElementById("rue");
const building = document.getElementById("immeuble");
const postal = document.getElementById("postal");
const country = document.getElementById("pays");
const region = document.getElementById("region");
const city = document.getElementById("ville");

const major = document.getElementById("majeur");
const minor = document.getElementById("mineur");

const comment = document.getElementById("comment");
const newsletter = document.getElementById("infolettre");

let errorsActive = false;


//Verification des erreurs de formulaire
form.addEventListener("submit", function(event){
    let errorsPersonal = [];
    let errorsAddress = [];
    let errorsAge = [];

    //NOM
    if (firstname.value.trim() === ""){
        errorsPersonal.push("Veuillez fournir un prénom.");
    }
    if (lastname.value.trim() === ""){
        errorsPersonal.push("Veuillez fournir un nom de famille.");
    }

    //TELEPHONE
    if (phone.value.trim() === ""){
        errorsPersonal.push("Veuillez fourinr un numéro de téléphone");
    }

    //COURRIEL
    if (email.value.trim() === ""){
        errorsPersonal.push("Veuillez fournir une adresse courriel.");
    }
    else if (!isValidEmail(email.value)){
        errorsPersonal.push("Vérifiez que votre adresse courriel est valide.");
    }

    //MOT DE PASSE
    if (pw.value.length <= 6){
        errorsPersonal.push("Votre mot de passe doit contenir au moins 6 caractères");
    }
    if(!/[A-Z]/.test(pw.value) && /[a-z]/.test(pw.value)){
        errorsPersonal.push("Votre mot de passe doit contenir des lettres majuscules et minuscules.");
    }
    if(!/[0-9]/.test(pw.value)){
        errorsPersonal.push("Votre mot de pass doit contenir au moins un chiffre");
    }
    if(!/[^A-Za-z0-9]/.test(pw.value)){
        errorsPersonal.push("Votre mot de passe doit contenir au moins un caractère spécial.");
    }
    if (pwConfirm.value !== pw.value){
        errorsPersonal.push("Les mots de passe ne sont pas identiques.");
    }

    //ADRESSE
    if (street.value.trim() === ""){
        errorsAddress.push("Veuillez founrir une rue.");
    }
    if (building.value.trim() === ""){
        errorsAddress.push("Veuillez founrir un numéro d'immeuble.");
    }
    if (postal.value.trim() === ""){
        errorsAddress.push("Veuillez founrir un code postal.");
    }
    if (region.value.trim() === ""){
        errorsAddress.push("Veuillez founrir une région.");
    }
    if (city.value.trim() === ""){
        errorsAddress.push("Veuillez founrir une ville.");
    }

    //AGE
    if (!major.checked && !minor.checked){
        errorsAge.push("Veuillez choisir une option.");
    }

    //ENFIN...................................
    //Verdict et envoi des résultats
    for (let i = 0; i < errorSections.length; i++){
        const element = document.getElementById('error' + i); //on efface les anciennes erreurs
        if (element){
            element.remove()
        }
    }
    const element = document.getElementById('success'); //et aussi l'ancien succes
    if (element){
        element.remove()
    }

    if (errorsPersonal.length > 0) { //if there are errors in section 0
        event.preventDefault();
        displayErrors(errorsPersonal, 0);
    }
    if (errorsAddress.length > 0) { //if there are errors in section 1
        event.preventDefault();
        displayErrors(errorsAddress, 1);
    }
    if (errorsAge.length > 0) { //if there are errors in section 2
        event.preventDefault();
        displayErrors(errorsAge, 2);
    }

    if (errorsAddress.length <= 0 && errorsAge.length <= 0 && errorsPersonal.length <= 0){
        event.preventDefault();
        displaySuccess("Application au nom de " + firstname.value + " " + lastname.value + " envoyée avec succès!");
    }
});


// fonction pour verifier email
function isValidEmail(email){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //vérifie la structure d'un courriel
    return re.test(email);
}


//retour des erreurs
function displayErrors(errors, index){
    const errorContainer = document.createElement("div");
    errorContainer.id = 'error' + index;
    errors.forEach(function(error) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);
    });
    errorSections[index].appendChild(errorContainer);
    errorsActive = true;
}

// retour d'un succes!
function displaySuccess(message){
    const successContainer = document.createElement("div");
    successContainer.id = 'success';
    const successMessage = document.createElement("p");
    successMessage.textContent = message;
    successContainer.appendChild(successMessage);
    form.appendChild(successContainer);
    errorsActive = false;
}

function enregistrerSurDB(){
    /*
    vide. regarder plutot les dons
    */
}