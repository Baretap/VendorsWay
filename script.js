document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Rekisteröinti onnistui!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Kirjautuminen onnistui!');
    } else {
        alert('Virheellinen käyttäjänimi tai salasana.');
    }
});
