// Toggle menu mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu mobile saat diklik di luar
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Tutup menu mobile setelah mengklik link
      navLinks.classList.remove("active");
    }
  });
});

// Testimonial slider
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let currentSlide = 0;

function showSlide(index) {
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  testimonialDots.forEach((dot) => dot.classList.remove("active"));

  testimonialSlides[index].classList.add("active");
  testimonialDots[index].classList.add("active");
  currentSlide = index;
}

testimonialDots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const slideIndex = parseInt(this.getAttribute("data-index"));
    showSlide(slideIndex);
  });
});

// Auto slide testimonial
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  showSlide(currentSlide);
}, 5000);

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulasi pengiriman form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Di sini biasanya akan ada kode untuk mengirim data ke server
  console.log("Form submitted:", { name, email, message });

  // Tampilkan pesan sukses
  alert("Terima kasih! Pesan Anda telah berhasil dikirim.");

  // Reset form
  contactForm.reset();
});

// Back to top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animasi saat scrolling
function checkScroll() {
  const elements = document.querySelectorAll(
    ".feature-card, .portfolio-item, .contact-form"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
}

// Inisialisasi style untuk animasi
document
  .querySelectorAll(".feature-card, .portfolio-item, .contact-form")
  .forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

// Jalankan saat scroll dan saat load pertama
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
