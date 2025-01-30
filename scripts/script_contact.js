const form = document.getElementById('contactForm');
const emailInput = document.getElementById('courriel');
const sujetInput = document.getElementById('sujet');
const descriptionInput = document.getElementById('description');

form.addEventListener('submit', function (event){
    event.preventDefault();

    let errors = [];

    // Vérifier que le sujet contient au moins 2 caractères
    if (sujetInput.value.trim().length < 2) {
        errors.push("Le sujet doit contenir au moins 2 caractères.");
    }

    // Vérifier que l'adresse courriel est valide
    if (!isValidEmail(emailInput.value.trim())) {
        errors.push("L'adresse courriel n'est pas valide.");
    }

    // Vérifier que la description contient au moins 3 caractères
    if (descriptionInput.value.trim().length < 3) {
        errors.push("Le message doit contenir au moins 3 caractères.");
    }

    //Effacement des anciennes erreurs
    const elementError = document.getElementById('error');
    if (elementError) {
        elementError.remove();
    }
    const elementSuccess = document.getElementById('success');
    if (elementSuccess) {
        elementSuccess.remove();
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
        displaySuccess("Votre message a été envoyé avec succès!");
        form.reset();
    }

});

// Verification du courriel
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Retour d'un succès
function displaySuccess(message){
    const successContainer = document.createElement("div");
    successContainer.id = 'success';
    const successMessage = document.createElement("p");
    successMessage.textContent = message;
    successContainer.appendChild(successMessage);
    form.appendChild(successContainer);
}