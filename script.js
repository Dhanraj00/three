// Check if the user is already logged in (by checking localStorage)
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // Skip login and show the welcome page and blocks
        document.getElementById('welcomePage').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('blocksContainer').style.display = 'block'; // Show blocks
        document.getElementById('logoutBtn').style.display = 'block'; // Show Logout Button
    }
};

// Login functionality
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with actual login credentials or a check for authorized users
    const authorizedUsername = 'admin';
    const authorizedPassword = '12345';

    if (username === authorizedUsername && password === authorizedPassword) {
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Show the Welcome page and blocks, and hide the login form
        document.getElementById('welcomePage').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('blocksContainer').style.display = 'block'; // Show blocks
        document.getElementById('logoutBtn').style.display = 'block'; // Show Logout Button
    } else {
        // Show error message if login credentials are incorrect
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});

// Logout button functionality
document.getElementById('logoutBtn').addEventListener('click', function () {
    // Remove the login state from localStorage
    localStorage.removeItem('isLoggedIn');

    // Hide welcome page and blocks, and show the login form again
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('blocksContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none'; // Hide Logout Button
});
