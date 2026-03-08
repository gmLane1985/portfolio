// Auto-update the year in the footer
function updateYear() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
}

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('navbarNav');
  menu.classList.toggle('active');
}

// Close menu when a link is clicked
function closeMenuOnLinkClick() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('navbarNav').classList.remove('active');
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateYear();
  closeMenuOnLinkClick();
});
