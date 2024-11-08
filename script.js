// Käyttäjän rekisteröinti
function registerUser(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Rekisteröinti onnistui!');
    window.location.href = 'login.html'; // Ohjaa käyttäjän kirjautumissivulle
}

// Käyttäjän kirjautuminen
function loginUser(username, password) {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Kirjautuminen onnistui!');
        localStorage.setItem('loggedIn', 'true'); // Merkitään käyttäjä kirjautuneeksi
        window.location.href = 'dashboard.html'; // Ohjaa käyttäjän hallintapaneeliin
    } else {
        alert('Virheellinen käyttäjänimi tai salasana.');
    }
}

// Päivitä tervetuloviesti hallintapaneelissa
document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        const username = localStorage.getItem('username');
        document.querySelector('.welcome-message').textContent = `Tervetuloa takaisin, ${username}!`;
    } else {
        window.location.href = 'login.html'; // Jos käyttäjä ei ole kirjautunut, ohjaa kirjautumissivulle
    }
});

// Kutsutaan rekisteröinti- ja kirjautumistoimintoja
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    registerUser(username, password);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});
