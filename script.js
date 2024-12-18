// Interactivity for the form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const responseElement = document.getElementById('form-response');
  
  if (name && email) {
    responseElement.textContent = `Thank you, ${name}! We will get back to you at ${email}.`;
    responseElement.classList.remove('hidden');
    this.reset();
  } else {
    responseElement.textContent = "Please fill out the form correctly.";
    responseElement.classList.remove('hidden');
  }
});
