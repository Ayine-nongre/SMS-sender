function send() {
    document.getElementById('blinds').style.display = 'block'
    document.getElementById('form').style.display = 'flex'
}

function exit() {
    document.getElementById('blinds').style.display = 'none'
    document.getElementById('form').style.display = 'none'
    document.getElementById('form1').style.display = 'none'
}

function expand(divElement) {
    document.getElementById('blinds').style.display = 'block'
    document.getElementById('form').style.display = 'flex'
    document.getElementById('recipients').value = divElement.querySelector('.number').innerText
    document.getElementById('recipients').readOnly = true
    document.getElementById('message').value = divElement.querySelector('.msg').innerText
    document.getElementById('message').readOnly = true
}

document.getElementById('edit').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('recipients').readOnly = false
    document.getElementById('message').readOnly = false
})

document.getElementById('temp').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('recipients').readOnly = false
    document.getElementById('message').readOnly = false
})

document.getElementById('custom').addEventListener('click', (event) => {
    event.preventDefault()
    console.log("Hello")
    document.getElementById('contacts').readOnly = false
    document.getElementById('contents').readOnly = false
    document.getElementById('name').readOnly = false
})

function template(contacts, msg) {
    document.getElementById('blinds').style.display = 'block'
    document.getElementById('form1').style.display = 'flex'
    document.getElementById('contacts').value =  '+2344' //divElement.querySelector('.number').innerText
    document.getElementById('contacts').readOnly = true
    document.getElementById('contents').value = 'Hello world!!' //divElement.querySelector('.msg').innerText
    document.getElementById('contents').readOnly = true
    document.getElementById('name').value = 'Discount' //divElement.querySelector('.msg').innerText
    document.getElementById('name').readOnly = true
}

const container = document.getElementById('container');

// Function to toggle password visibility
function togglePassword(passwordIds, showPasswordId) {
    const showPasswordCheckbox = document.getElementById(showPasswordId);

    passwordIds.forEach((passwordId) => {
        const passwordInput = document.getElementById(passwordId);
        passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    });
}

// Function to handle the sign-up and log-in buttons
function handleButtonClick(isSignUp) {
    container.classList.toggle("right-panel-active", isSignUp);
}

// Event listeners for sign-up and log-in buttons
document.getElementById('signUp').addEventListener('click', () => {
    handleButtonClick(true);
});

document.getElementById('logIn').addEventListener('click', () => {
    handleButtonClick(false);
});

// Event listener for the showPassword checkbox in the sign-up form
document.getElementById("showPasswordSignUp").addEventListener("change", function() {
    togglePassword(["passwordSignUp", "confirmPasswordSignUp"], "showPasswordSignUp");
});

// Event listener for the showPassword checkbox in the log-in form
document.getElementById("showPasswordLogIn").addEventListener("change", function() {
    togglePassword(["passwordLogIn"], "showPasswordLogIn");
});