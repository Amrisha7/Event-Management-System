// JavaScript code for form validation and submission handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('organizerForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // You can add your form validation logic here
      // For example, check if all required fields are filled, validate email format, etc.
  
      // If form validation passes, you can submit the form data
      const formData = new FormData(form);
  
      fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          // Form submission successful, handle success response
          console.log('Form submitted successfully!');
        } else {
          // Form submission failed, handle error response
          console.error('Form submission failed!');
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    });
  });
  