const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const error = document.querySelector('.form-error');
const formTwo = document.querySelector('.footer-form');
const emailInputTwo = document.querySelector('.access-email');
const errorTwo = document.querySelector('.form-error-two');

form.setAttribute("novalidate", "");
formTwo.setAttribute("novalidate", "");

const showError  = (string, emailInput) => {
    emailInput.classList.add('not-valid');
    if (!emailInput.classList.contains('access-email')) {
        error.textContent = string;
        error.classList.remove('hidden');
    } else {
        errorTwo.textContent = string;
        errorTwo.classList.remove('hidden');
    }
    
};

const removeError = (emailInput) => {
    emailInput.classList.remove('not-valid');
    if (!emailInput.classList.contains('access-email')) {
        error.classList.add('hidden');
    } else {
        errorTwo.classList.add('hidden');
    }
    
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!emailInput.value) {
        showError("Doh! you forgot to add your email" , emailInput);
    } else if (!isEmail(emailInput.value)) {
        showError("Please check your email", emailInput);
    } else {
        emailInput.value = "";
        alert("The force is strong with this one, success!!!!")
    }
});

emailInput.addEventListener('input', e => {
    if (isEmail(emailInput.value)) {
        removeError(emailInput);
    }
});

formTwo.addEventListener('submit', event => {
    event.preventDefault();

    if (!emailInputTwo.value) {
        showError("Doh! you forgot to add your email", emailInputTwo);
    } else if (!isEmail(emailInputTwo.value)) {
        showError("Please check your email", emailInputTwo);
    } else {
        emailInputTwo.value = "";
        alert("The force is strong with this one, success!!!!")
    }
});

emailInputTwo.addEventListener('input', event => {
    if (isEmail(emailInputTwo.value)) {
        removeError(emailInputTwo);
    }
});