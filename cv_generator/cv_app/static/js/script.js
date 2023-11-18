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

// Additional JavaScript for interactivity
// Example script, modify as needed

// Smooth scrolling for anchor links
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

 $(document).ready(function () {
        // When a template button is clicked
        $('.template-select').click(function () {
            var selectedTemplate = $(this).data('template');
            
            // Redirect to the form page with the selected template as a query parameter
            window.location.href = '/form/?template=' + selectedTemplate;
        });
    });