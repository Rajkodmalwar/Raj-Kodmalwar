document.addEventListener("DOMContentLoaded", function () {
    // Get the form element by its id
    var form = document.getElementById("login-form");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Add an event listener for the form's submit event
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Define your predefined username and password
        var validUsername = "admin";
        var validPassword = "password";

        // Get the values entered by the user
        var enteredUsername = usernameInput.value;
        var enteredPassword = passwordInput.value;

        // Check if the entered credentials match the predefined credentials
        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Debugging: Check if this message appears in the console
            console.log("Login successful!");

            // Redirect to another HTML page (e.g., dashboard.html) upon successful login
            window.location.href = "home.html";
        } else {
            // Debugging: Check if this message appears in the console
            console.log("Invalid username or password. Please try again.");

            // Display an error message or handle invalid credentials
            alert("Invalid username or password. Please try again.");
        }
    });
});
