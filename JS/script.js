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

  document.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    cursorDot.style.top = `${clientY}px`;
    cursorDot.style.left = `${clientX}px`;
    cursorOutline.style.top = `${clientY}px`;
    cursorOutline.style.left = `${clientX}px`;
  });
