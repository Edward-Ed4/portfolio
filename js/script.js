// ============================================
// SMOOTH SCROLLING
// ============================================

function smoothScroll(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all section elements
document.querySelectorAll("section > .container").forEach((element) => {
  observer.observe(element);
});

// ============================================
// SKILL CARDS STAGGER ANIMATION
// ============================================

const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  card.classList.add("slide-in-up");
});

// ============================================
// EXPERTISE CARDS ANIMATION
// ============================================

const expertiseCards = document.querySelectorAll(".expertise-card");
expertiseCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  card.classList.add("slide-in-up");
});

// ============================================
// ACTIVE NAVIGATION ON SCROLL
// ============================================

window.addEventListener("scroll", () => {
  // You can add active nav highlights here when you add a navbar
  updateScrollAnimation();
});

function updateScrollAnimation() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const cards = section.querySelectorAll(
        ".skill-card, .expertise-card, .badge",
      );
      cards.forEach((card, index) => {
        if (!card.classList.contains("fade-in")) {
          setTimeout(() => {
            card.classList.add("fade-in");
          }, index * 50);
        }
      });
    }
  });
}

// ============================================
// PAGE LOAD EFFECTS
// ============================================

window.addEventListener("load", () => {
  // Add loaded class to body for initial animations
  document.body.classList.add("loaded");
});
