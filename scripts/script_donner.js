const form = document.getElementById('donationForm');
const firstNameInput = document.getElementById('prenom');
const lastNameInput = document.getElementById('nom');
const phoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('courriel');
const montantDon = document.getElementById('courriel');
/*const tenDollars = document.getElementById('10d');
const twentyDollars = document.getElementById('20d');
const fiftyDollars = document.getElementById('50d');
const inputDollars = document.getElementById('argentInput');*/
const manualDollars = document.getElementById('montant');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = [];

    // Vérifier que le prénom contient au moins 2 caractères
    if (firstNameInput.value.trim().length < 2) {
        errors.push("Le prénom doit contenir au moins 2 caractères.");
    }

    // Vérifier que le nom contient au moins 3 caractères
    if (lastNameInput.value.trim().length < 3) {
        errors.push("Le nom doit contenir au moins 3 caractères.");
    }

    // Vérifier que le telephone est valide
    if (phoneInput.value.trim() === "") { //(!isValidPhone(phoneInput.value.trim())) {
        errors.push("Le téléphone n'est pas valide.");
    }

    // Vérifier que l'email est valide
    if (!isValidEmail(emailInput.value.trim())) {
        errors.push("L'adresse email n'est pas valide.");
    }

    /*if (!tenDollars.checked && !twentyDollars.checked && !fiftyDollars.checked && !inputDollars.checked) {
        errors.push("Veuillez choisir un montant.");
    } else if (inputDollars.checked && !manualDollars.value.trim()) {
        errors.push("Veuillez entrer un montant.");
    } else if (inputDollars.checked && isNaN(parseFloat(manualDollars.value))) {
        errors.push("Veuillez entrer un montant valide.");
    }*/
    if (manualDollars.value.trim === "" || isNaN(parseFloat(manualDollars.value))) {
        errors.push("Veuillez entrer un montant de don.");
    } else if (manualDollars.value < 1) {
        errors.push("Veuillez donner un minimum de 1$.");
    }


    //Effacement des anciennes erreurs
    const elementError = document.getElementById('error');
    if (elementError) {
        elementError.remove();
    }
    const elementSuccess = document.getElementById('success');
    if (elementSuccess) {
        elementSuccess.remove();
        //addDonToServer();
    }

    // Retour des erreurs ou d'un succès
    if (errors.length > 0) {
        const errorContainer = document.createElement("div");
        errorContainer.id = 'error';
        const errorMessages = document.createElement("p");
        errorMessages.innerHTML = errors.join('<br>');
        errorContainer.appendChild(errorMessages);
        document.body.appendChild(errorContainer);
        form.appendChild(errorContainer);
    } else {
        displaySuccess("Merci pour votre don!");
        addDonToServer();
        form.reset();
    }
});

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

/*function isValidPhone(phone) {
    const re = /^(\+\d{1,3}?)?\(?[0-9]{3}\)??[0-9]{3}?[0-9]{4}$/;
    return re.test(phone);
}*/

// Retour d'un succès
function displaySuccess(message) {
    const successContainer = document.createElement("div");
    successContainer.id = 'success';
    const successMessage = document.createElement("p");
    successMessage.textContent = message;
    successContainer.appendChild(successMessage);
    form.appendChild(successContainer);
}

async function addDonToServer(){
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

        try {
            
            const response = await fetch('http://localhost:3000/api/addDon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert('Ajout avec succès !');
            } else {
                alert('Erreur lors de l\'envoi. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    };