 // 1. Check Network Speed
let lowDataMode = false;
if ('connection' in navigator) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (connection.downlink < 1.5 || connection.effectiveType.includes('2g')) {
    lowDataMode = true;
    document.getElementById('status').innerText = "Low data mode enabled (slow internet).";
  }
}

// 2. Get Location
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  document.getElementById('status').innerText = "Geolocation not supported.";
}

function success(position) {
  const { latitude, longitude } = position.coords;
  document.getElementById('status').innerText = `Location: ${latitude.toFixed(3)}, ${longitude.toFixed(3)}`;

  // Simulate fetching nearby parking data (normally from an API)
  const dummyParking = [
    { name: "Lot A", distance: "200m" },
    { name: "Lot B", distance: "350m" },
    { name: "Lot C", distance: "500m" },
    { name: "Lot D", distance: "700m" },
    { name: "Lot E", distance: "1km" }
  ];

  const list = document.getElementById('parking-list');

  dummyParking.forEach((spot, i) => {
    const div = document.createElement('div');
    div.className = 'parking-spot lazy';
    div.innerText = lowDataMode ? spot.name : `${spot.name} – ${spot.distance}`;
    div.dataset.index = i;
    list.appendChild(div);
  });

  observeLazyLoad();
}

function error(err) {
  document.getElementById('status').innerText = "Unable to get location.";
  console.error(err);
}

// 3. Intersection Observer for lazy-loading (animation, data)
function observeLazyLoad() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.background = "#d4f0d4"; // highlight when in view
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.lazy').forEach(el => observer.observe(el));
}

