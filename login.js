document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'TUIOST' && password === 'CSIT') {
            window.location.href = 'listing.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
