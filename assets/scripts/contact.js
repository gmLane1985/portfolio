// Initialize EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init('KvPmxTgwIyKBIGOBL');

// Get the contact form
const contactForm = document.getElementById('contactForm');

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Create a loading state
  const submitButton = contactForm.querySelector('.submit-button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  try {
    // Prepare form data
    const templateParams = {
      from_name: document.getElementById('name').value,
      phone_number: document.getElementById('phone').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    // Replace 'service_xxxxx' with your EmailJS Service ID
    // Replace 'template_xxxxx' with your EmailJS Template ID
    const response = await emailjs.send(
      'service_gr44j5i',
      'template_lidnhhh',
      templateParams,
    );

    // Show success message
    alert('✓ Your message has been sent successfully!');
    submitButton.textContent = '✓ Message Sent!';
    submitButton.style.backgroundColor = '#28a745';
    submitButton.style.color = '#fff';

    // Reset form
    contactForm.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '';
      submitButton.style.color = '';
    }, 3000);
  } catch (error) {
    console.error('Failed to send email:', error);

    // Show error message
    alert('✗ Failed to send message. Please try again later.');
    submitButton.textContent = '✗ Failed to Send';
    submitButton.style.backgroundColor = '#dc3545';
    submitButton.style.color = '#fff';

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.backgroundColor = '';
      submitButton.style.color = '';
    }, 3000);
  }
});
