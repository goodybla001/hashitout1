// Get the button elements
const toggleButton = document.getElementById('toggleButton');
const loadingButton = document.getElementById('loadingButton');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Hide the toggle button and show the loading button
  toggleButton.setAttribute('hidden', '');
  loadingButton.removeAttribute('hidden');

  // Simulate some loading or processing time (2 seconds in this example)
  setTimeout(() => {
    // Show the toggle button and hide the loading button after the loading time
    toggleButton.removeAttribute('hidden');
    loadingButton.setAttribute('hidden', '');
  }, 2000); // Change 2000 to the desired loading time in milliseconds
});


// Get the iframe element
const mapIframe = document.getElementById('mapIframe');

// Check if the Geolocation API is available in the browser
if ('geolocation' in navigator) {
  // Get the user's current position
  navigator.geolocation.getCurrentPosition(
    position => {
      // Extract latitude and longitude from the position object
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Update the iframe source with the user's location
      const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&ie=UTF8&t=&z=14&iwloc=B&output=embed`;
      mapIframe.src = mapSrc;

      // Show the iframe (it may have been hidden with opacity in the initial HTML)
      mapIframe.style.opacity = 0.16;
    },
    error => {
      console.error('Error getting user location:', error);
    }
  );
} else {
  console.error('Geolocation is not available in this browser.');
}
function initMap() {
  const mapIframe = document.getElementById('mapIframe');
  mapIframe.style.opacity = 1; // Show the iframe (remove the opacity style)

  // Get the user's current position
  navigator.geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Create a map centered at the user's location
      const map = new google.maps.Map(mapIframe, {
        center: { lat: latitude, lng: longitude },
        zoom: 14, // You can adjust the zoom level as needed
        disableDefaultUI: true, // Optional: Hide default map controls
      });
    },
    error => {
      console.error('Error getting user location:', error);
    }
  );
}
