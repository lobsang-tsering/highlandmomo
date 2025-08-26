// slideInAnimation.js
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: stop observing after animation triggers
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all slide-in elements
  const slideElements = document.querySelectorAll(
    ".slide-in, .slide-in-right, .slide-in-up"
  );
  slideElements.forEach((element) => {
    observer.observe(element);
  });
});

// Alternative: Manual trigger for immediate testing
function triggerSlideAnimations() {
  const slideElements = document.querySelectorAll(
    ".slide-in, .slide-in-right, .slide-in-up"
  );
  slideElements.forEach((element) => {
    element.classList.add("active");
  });
}

// Uncomment the line below to test animations immediately
// triggerSlideAnimations();
