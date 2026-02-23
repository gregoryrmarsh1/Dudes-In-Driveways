// Main JavaScript for Dudes in Driveways website
// Currently this script only updates the footer year and can be
// extended for further interactivity (e.g. mobile nav toggles).

document.addEventListener('DOMContentLoaded', function() {
  // Update footer year automatically
  const yearSpan = document.querySelector('#current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});