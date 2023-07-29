// Get the dark mode toggle checkbox
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
  // Get the document body element
  const body = document.body;

  // Toggle the dark mode class on the body element
  body.classList.toggle('dark-mode');
}

// Add event listener to the dark mode toggle checkbox
darkModeToggle.addEventListener('change', toggleDarkMode);

window.addEventListener("load", function() {
  var clientImage = document.querySelector(".client-image");
  clientImage.style.opacity = "1";
});
