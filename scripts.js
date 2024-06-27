document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation
    if (username === 'user' && password === 'pass') {
        alert('Login successful');
        errorMessage.style.display = 'none';
        // Redirect to another page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
