// JavaScript to validate the form and handle button click
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation: ensure all fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;  // Prevent form submission if validation fails
    }

    return true;  // Allow form submission if validation passes
}

// Ensure the submit button works
document.getElementById("contact-form").addEventListener("submit", function (event) {
    // Check if form is valid before submission
    let isValid = validateForm();

    // Prevent default behavior if the form is invalid
    if (!isValid) {
        event.preventDefault();  // Stops form submission if validation fails
    }
});
