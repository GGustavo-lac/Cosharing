// Newsletter form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === '') {
        alert('Por favor, insira seu e-mail.');
        return;
      } else if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }

      // Simulate successful submission
      alert(`Obrigado por se inscrever na nossa newsletter, ${email}!`);

      // Clear the form
      newsletterForm.reset();
    });
  }
});
