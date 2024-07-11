document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        localStorage.setItem('userEmail', email);
        window.location.href = 'ronaldo.html';
    } else {
        alert('Please enter a valid email.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

