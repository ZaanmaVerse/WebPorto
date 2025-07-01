// Smooth scroll for anchor links (optional if CSS already has scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active nav link on current page
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

// Optional: Scroll-triggered animation using Intersection Observer (bonus enhancement)
// Example for fading in sections (add class 'fade-in' to sections if needed)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

const fullText = "IT and Cybersecurity Enthusiasts";
  const typingText = document.getElementById("typing-text");
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      typingText.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 120); // kecepatan ketik
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);

  AOS.init({
  duration: 1000,
  once: true
});

const starsContainer = document.getElementById("stars-container");

for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  starsContainer.appendChild(star);
}

function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (window.innerWidth > 768) {
  document.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    cursorDot.style.top = `${clientY}px`;
    cursorDot.style.left = `${clientX}px`;
    cursorOutline.style.top = `${clientY}px`;
    cursorOutline.style.left = `${clientX}px`;
  });
} else {
  cursorDot.style.display = "none";
  cursorOutline.style.display = "none";
  document.body.style.cursor = "none";
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".gallery-slider .slides");
  const totalSlides = slides.children.length;

  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Optional: Auto-slide every 5s
setInterval(() => {
  nextSlide();
}, 5000);

const canvas = document.getElementById("matrixRain");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const chars = "01#@$&%";
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);

  function toggleSkill(card) {
    const container = card.parentElement;
    const desc = container.querySelector('.skill-description');
    
    // Close others
    document.querySelectorAll('.skill-description').forEach(el => {
      if (el !== desc) el.style.display = "none";
    });

    // Toggle current
    desc.style.display = (desc.style.display === "block") ? "none" : "block";
  }

document.querySelector("form").addEventListener("submit", function(e) {
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    e.preventDefault();
    alert("Please verify that you are not a robot.");
  }
});
