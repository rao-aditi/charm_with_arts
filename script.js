/* ===== GALLERY DATA ===== */
const galleryItems = [
  { id: 1, title: 'Sunflower Field', category: 'nature', price: 799, img: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, title: 'BMW Artwork', category: 'cars', price: 999, img: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, title: 'Space Dream', category: 'space', price: 599, img: 'https://images.pexels.com/photos/1527934/pexels-photo-1527934.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, title: 'F1 Car (Craft)', category: 'craft', price: 1199, img: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, title: 'Mountain View', category: 'nature', price: 799, img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, title: 'Sunset Glow', category: 'nature', price: 699, img: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 7, title: 'Butterfly', category: 'other', price: 699, img: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 8, title: 'Rainy Day', category: 'other', price: 799, img: 'https://images.pexels.com/photos/1574806/pexels-photo-1574806.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 9, title: 'Galaxy Far Away', category: 'space', price: 899, img: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 10, title: 'Ferrari Red', category: 'cars', price: 1099, img: 'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 11, title: 'Ocean Waves', category: 'nature', price: 749, img: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 12, title: 'Clay Sculpture', category: 'craft', price: 649, img: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const ITEMS_PER_PAGE = 8;
let visibleCount = 8;
let currentFilter = 'all';

/* ===== RENDER GALLERY ===== */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  const filtered = currentFilter === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === currentFilter);

  grid.innerHTML = '';
  filtered.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    if (idx >= visibleCount) card.setAttribute('data-hidden', 'true');
    card.style.animationDelay = `${(idx % 4) * 0.08}s`;
    card.innerHTML = `
      <div style="overflow:hidden;">
        <img src="${item.img}" alt="${item.title}" class="gallery-card-img" loading="lazy" />
      </div>
      <div class="gallery-card-body">
        <h3 class="gallery-card-title">${item.title}</h3>
        <div class="gallery-card-meta">
          <span class="gallery-card-cat">${capitalize(item.category)}</span>
          <span class="gallery-card-price">₹ ${item.price.toLocaleString('en-IN')}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  const loadBtn = document.getElementById('loadMoreBtn');
  loadBtn.style.display = filtered.length > visibleCount ? 'inline-flex' : 'none';
}

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

/* ===== FILTER BUTTONS ===== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    visibleCount = ITEMS_PER_PAGE;
    renderGallery();
  });
});

/* ===== LOAD MORE ===== */
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  visibleCount += 4;
  renderGallery();
});

/* ===== HERO SLIDER ===== */
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideTimer;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function stopAutoSlide() { clearInterval(autoSlideTimer); }

document.getElementById('slideNext').addEventListener('click', () => {
  goToSlide(currentSlide + 1);
  startAutoSlide();
});
document.getElementById('slidePrev').addEventListener('click', () => {
  goToSlide(currentSlide - 1);
  startAutoSlide();
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    goToSlide(i);
    startAutoSlide();
  });
});

startAutoSlide();

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
}, { passive: true });

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===== ACTIVE NAV LINK ===== */
function updateActiveNav() {
  const sections = ['home', 'gallery', 'about', 'custom-order', 'contact'];
  const scrollPos = window.scrollY + 90;
  let active = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) active = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').slice(1);
    link.classList.toggle('active', href === active);
  });
}

/* ===== FILE INPUT ===== */
document.getElementById('fileInput').addEventListener('change', function () {
  const name = this.files[0] ? this.files[0].name : 'No file chosen';
  document.getElementById('fileName').textContent = name;
});

/* ===== WHATSAPP ORDER FORM ===== */
const WHATSAPP_NUMBER = '91XXXXXXXXXX'; // Replace with real number
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('[name="name"]').value.trim();
  const phone = this.querySelector('[name="phone"]').value.trim();
  const email = this.querySelector('[name="email"]').value.trim();
  const size = this.querySelector('[name="size"]').value;
  const desc = this.querySelector('[name="description"]').value.trim();
  if (!name || !phone) { showToast('Please fill in your name and phone number.'); return; }
  const msg = `*Custom Painting Order – Charm With Arts*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email || 'N/A'}\n🖼️ *Size:* ${size || 'Not specified'}\n📝 *Description:* ${desc || 'No description'}\n\nPlease confirm my order. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ===== CONTACT FORM ===== */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon.');
  this.reset();
});

/* ===== NEWSLETTER ===== */
document.querySelector('.newsletter-btn').addEventListener('click', () => {
  const input = document.querySelector('.newsletter-input');
  if (input.value.trim() && input.value.includes('@')) {
    showToast('Subscribed! Thank you for joining us.');
    input.value = '';
  } else {
    showToast('Please enter a valid email address.');
  }
});

/* ===== TOAST NOTIFICATION ===== */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ===== SCROLL ANIMATIONS (Intersection Observer) ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

/* ===== GALLERY CARD HOVER GLOW ===== */
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  });
});

/* ===== INIT ===== */
renderGallery();
updateActiveNav();
