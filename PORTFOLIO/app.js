

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent successfully!');
    // Optionally, send data to a server here.
  } else {
    alert('Please fill in all fields.');
  }
});
  