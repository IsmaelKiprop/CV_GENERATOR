// script.js

// Function to validate the form
function validateForm() {
    // Get form inputs by their IDs
    var fullName = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;

    // Check if the Full Name and Email fields are not empty
    if (fullName.trim() === "" || email.trim() === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }

    // Add more validation logic as needed

    return true; // Continue with form submission
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("cv_form");

    // Attach the validateForm function to the form's onsubmit event
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent default form submission if validation fails
        }
    });
});
