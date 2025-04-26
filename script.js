// Hamburger menü toggling
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  navMenu.classList.toggle('active');
}

// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project Filtering (Varsa kategoriler için)
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Lightbox (Görsele tıklayınca büyük gösterim)
const projectImages = document.querySelectorAll('.project-card img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

projectImages.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Form Validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    let valid = true;

    // Temel doğrulamalar
    if (!name.value.trim()) {
      alert('Lütfen adınızı girin.');
      valid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
      alert('Geçerli bir email adresi girin.');
      valid = false;
    }

    if (!message.value.trim()) {
      alert('Lütfen bir mesaj yazın.');
      valid = false;
    }

    if (valid) {
      alert('Mesajınız gönderildi! Teşekkürler.');
      contactForm.reset();
    }
  });
}

// Email doğrulama fonksiyonu
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

