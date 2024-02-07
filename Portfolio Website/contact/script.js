// script.js
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  // Event listener for form submission
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Display submitted data in a pop-up window
    const message = `Name: ${formDataObject.name}\nEmail: ${formDataObject.email}\nMessage: ${formDataObject.message}`;
    alert(message);

    // Reset form after submission
    contactForm.reset();
  });
});
