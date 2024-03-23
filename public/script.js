function send() {
    document.getElementById('blinds').style.display = 'block'
    document.getElementById('form').style.display = 'flex'
}

function exit() {
    document.getElementById('blinds').style.display = 'none'
    document.getElementById('form').style.display = 'none'
}

function expand(divElement) {
    document.getElementById('blinds').style.display = 'block'
    document.getElementById('form').style.display = 'flex'
    document.getElementById('recipients').value = divElement.querySelector('.number').innerText
    document.getElementById('recipients').readOnly = true
    document.getElementById('message').value = divElement.querySelector('.msg').innerText
    document.getElementById('message').readOnly = true
}

// function edit() {
    
// }

document.getElementById('edit').addEventListener('click', (event) => {
    event.preventDefault()
    document.getElementById('recipients').readOnly = false
    document.getElementById('message').readOnly = false
})