document.addEventListener("DOMContentLoaded", () => {
  // Header Scroll Effect
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
      
      // Animate hamburger (optional, but good for UX)
      const lines = menuToggle.querySelectorAll("line");
      if (mobileMenu.classList.contains("active")) {
        lines[0].setAttribute("x1", "18"); lines[0].setAttribute("y1", "6"); lines[0].setAttribute("x2", "6"); lines[0].setAttribute("y2", "18");
        lines[1].style.opacity = "0";
        lines[2].setAttribute("x1", "6"); lines[2].setAttribute("y1", "6"); lines[2].setAttribute("x2", "18"); lines[2].setAttribute("y2", "18");
      } else {
        lines[0].setAttribute("x1", "3"); lines[0].setAttribute("y1", "12"); lines[0].setAttribute("x2", "21"); lines[0].setAttribute("y2", "12");
        lines[1].style.opacity = "1";
        lines[2].setAttribute("x1", "3"); lines[2].setAttribute("y1", "6"); lines[2].setAttribute("x2", "21"); lines[2].setAttribute("y2", "6");
        // Reset to original positions
        lines[0].setAttribute("x1", "3"); lines[0].setAttribute("y1", "12"); lines[0].setAttribute("x2", "21"); lines[0].setAttribute("y2", "12");
        lines[1].setAttribute("x1", "3"); lines[1].setAttribute("y1", "6"); lines[1].setAttribute("x2", "21"); lines[1].setAttribute("y2", "6");
        lines[2].setAttribute("x1", "3"); lines[2].setAttribute("y1", "18"); lines[2].setAttribute("x2", "21"); lines[2].setAttribute("y2", "18");
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("overflow-hidden");
      });
    });
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const matches = target === "all" || card.dataset.category === target;
        card.style.display = matches ? "block" : "none";
      });
    });
  });

  const statNumbers = document.querySelectorAll(".stat-number");
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.target);
      let count = 0;
      const step = () => {
        count += Math.max(1, Math.round(target / 20));
        el.textContent = count;
        if (count < target) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      };

      step();
      animObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  statNumbers.forEach((number) => animObserver.observe(number));

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    const toggleButton = () => {
      backToTop.classList.toggle("hidden", window.scrollY <= 220);
    };

    toggleButton();
    window.addEventListener("scroll", toggleButton);
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

AOS.init({
  duration: 900,
  once: true,
  offset: 40,
  easing: "ease-out-cubic"
});
