document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Validasi sederhana
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && subject && message) {
    // Simulasi kirim pesan
    document.getElementById('successMessage').classList.remove('hidden');
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
