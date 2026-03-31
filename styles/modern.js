/* ── Navbar scroll effect ── */
const navbar = document.getElementById("navbar");
const scrollup = document.getElementById("scrollup");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (window.scrollY > 400) {
      scrollup.classList.add("visible");
    } else {
      scrollup.classList.remove("visible");
    }
  },
  { passive: true },
);

/* ── Mobile menu toggle ── */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", isOpen);
  iconOpen.classList.toggle("hidden", !isOpen);
  iconClose.classList.toggle("hidden", isOpen);
});

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  });
});

/* ── Scroll reveal & stagger ── */
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ── Contact form ── */
function submitForm(event) {
  event.preventDefault();
  const successEl = document.getElementById("successMessage");
  const errorEl = document.getElementById("errorMessage");

  fetch("/contact-us-save", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      _token: document.getElementById("_token").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status) {
        successEl.classList.remove("hidden");
        document.contact_us.reset();
        setTimeout(() => successEl.classList.add("hidden"), 5000);
      } else {
        errorEl.classList.remove("hidden");
        setTimeout(() => errorEl.classList.add("hidden"), 5000);
      }
    })
    .catch(() => {
      errorEl.classList.remove("hidden");
      setTimeout(() => errorEl.classList.add("hidden"), 5000);
    });
}

/* ── Newsletter subscribe ── */
document
  .getElementById("subscribe_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const successEl = document.getElementById("successMessage_sub");
    const errorEl = document.getElementById("errorMessage_sub");
    const alreadyEl = document.getElementById("AlreadyExistMessage_sub");

    fetch("/subscribe-save", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(this)),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          successEl.classList.remove("hidden");
          this.reset();
          setTimeout(() => successEl.classList.add("hidden"), 5000);
        } else if (data.status === false) {
          errorEl.classList.remove("hidden");
          setTimeout(() => errorEl.classList.add("hidden"), 5000);
        } else {
          alreadyEl.classList.remove("hidden");
          setTimeout(() => alreadyEl.classList.add("hidden"), 5000);
        }
      })
      .catch(() => {
        errorEl.classList.remove("hidden");
        setTimeout(() => errorEl.classList.add("hidden"), 5000);
      });
  });
