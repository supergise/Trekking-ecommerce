//Validaciones para el formulario de registro

const nameError = document.getElementById(`name-error`);
const phoneError = document.getElementById(`phone-error`);
const emailError = document.getElementById(`email-error`);
const submitError = document.getElementById(`submit-error`);
const submitSuccess = document.getElementById(`submit-success`);

function validateName() {
    const name = document.getElementById(`contact-name`).value;
    if(name.length == 0){
        nameError.innerHTML = `El nombre es requerido`;
        return false;
    }
    if(!name.match(/^[A-Za-z]{3}/)){
        nameError.innerHTML = `Escribí tu nombre`;
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validatePhone() {
    const phone = document.getElementById(`contact-phone`).value;
    if(phone.length == 0){
        phoneError.innerHTML = `El teléfono es requerido`;
        return false;
    }
    if(phone.length < 8){
        phoneError.innerHTML = `El teléfono tiene que tener más de 8 dígitos`;
        return false;
    }
    if(!phone.match(/^[0-9]+$/)){
        phoneError.innerHTML = `El teléfono debe tener solamente números`;
        return false
    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true
}

function validateEmail() {
    const email = document.getElementById(`contact-email`).value;
    if(email.length == 0){
        emailError.innerHTML = `El E-mail es requerido`;
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML =  `El Email es inválido`;
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail()){
        submitError.style.display = `block`;
        submitError.innerHTML = `Por favor revisar los campos`;
        setTimeout(function(){submitError.style.display = `none`;}, 4000);
        return false;
    }
    submitSuccess.style.display = `block`;
    submitSuccess.innerHTML = `Su consulta fue enviada exitosamente`;
    setTimeout(function(){submitSuccess.style.display = `none`;}, 4000);
    return true;
}

document.getElementById("contact-name").onkeyup = function() {
    validateName();
}

document.getElementById("contact-phone").onkeyup = function() {
    validatePhone();
}

document.getElementById("contact-email").onkeyup = function() {
    validateEmail();
}

document.getElementById("contact-button").onclick = function() {
    return validateForm();
}