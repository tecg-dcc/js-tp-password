const btn = document.getElementById('showPass');
const inputPassword = document.querySelector('#password');

btn.addEventListener('click', ()=> {
    if (inputPassword.type === 'text') {
        btn.innerHTML = "Montrer"
        inputPassword.type = 'password';
    } else {
        btn.textContent = "Cacher"
        inputPassword.type = 'text';
    }
});
