
// Add active class to current page nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Initialize Google Maps
function initMap() {
  const cafeLocation = { lat: -34.397, lng: 150.644 }; // Replace with actual coordinates
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cafeLocation,
  });
  const marker = new google.maps.Marker({
    position: cafeLocation,
    map: map,
    title: 'Cozy Corner Cafe'
  });
}

// Add scroll-based navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const scroll = window.scrollY;
    
    if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
});
