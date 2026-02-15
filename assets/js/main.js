/* =========================
   TYPING EFFECT
========================= */
const words = ["Tech Support", "Network Admin", "Web Developer", "IT Enthusiast"];
let i = 0, j = 0;
let isDeleting = false;

function type() {
  const currentWord = words[i];
  j = isDeleting ? j - 1 : j + 1;

  document.getElementById("typed-text").textContent =
    currentWord.substring(0, j);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, speed);
}
type();

/* =========================
   SCROLL REVEAL + COUNTER (MERGED)
========================= */
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const aboutSection = document.getElementById("about");

let counterStarted = false;

function handleScrollAnimations() {
  const windowHeight = window.innerHeight;

  // Reveal animation
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - 100) {
      el.classList.add("active");
    }
  });

  // Counter trigger
  if (!counterStarted &&
      aboutSection?.getBoundingClientRect().top < windowHeight - 150) {
    startCounters();
    counterStarted = true;
  }
}

window.addEventListener("scroll", handleScrollAnimations);
handleScrollAnimations();

/* =========================
   COUNTER ANIMATION
========================= */
function startCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const speed = 200;

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

/* =========================
   SKILL BARS
========================= */
const skillBars = document.querySelectorAll('#skills .fill');
const skillsSection = document.getElementById('skills');

function animateSkillBars() {
  skillBars.forEach(bar => {
    bar.style.width = bar.dataset.width;
  });
}

function resetSkillBars() {
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
}

// Intersection Observer
if (skillsSection) {
  const skillsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateSkillBars();
      skillsObserver.disconnect();
    }
  }, { threshold: 0.4 });

  skillsObserver.observe(skillsSection);
}

/* =========================
   TAB SWITCH
========================= */
let currentTab = document.querySelector('.tab-content.active');
const navLinks = document.querySelectorAll('.nav-link[data-tab]');

navLinks.forEach(btn => {
  btn.addEventListener('click', () => {
    const nextTab = document.getElementById(btn.dataset.tab);
    if (!nextTab || nextTab === currentTab) return;

    // Update nav active state
    navLinks.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Slide animation
    currentTab.classList.remove('active');
    currentTab.classList.add('exit-left');

    setTimeout(() => {
      currentTab.classList.remove('exit-left');
      nextTab.classList.add('active');
      currentTab = nextTab;

      if (btn.dataset.tab === 'skills') {
        resetSkillBars();
        setTimeout(animateSkillBars, 150);
      }

      animateTabItems(btn.dataset.tab);
    }, 300);
  });
});

/* =========================
   TAB ITEM ANIMATION
========================= */
function animateTabItems(tabId) {
  const items = document.querySelectorAll(
    `#${tabId} .timeline-item, #${tabId} .cert-list li`
  );

  items.forEach(item => item.classList.remove('show'));

  items.forEach((item, index) => {
    setTimeout(() => item.classList.add('show'), index * 200);
  });
}

/* =========================
   PORTFOLIO CARD TILT
========================= */
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

/* =========================
   PORTFOLIO LOAD ANIMATION
========================= */
window.addEventListener('load', () => {
  document.querySelectorAll('.portfolio-item')
    .forEach((item, index) => {
      setTimeout(() => item.classList.add('show'), index * 120);
    });
});

/* =========================
   CONTACT FORM (FORMSPREE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMsg = document.getElementById("formSuccess");
  const button = form.querySelector("button");

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const formData = {
      name: form.nameInput.value,
      email: form.emailInput.value,
      subject: form.subjectInput.value,
      message: form.messageInput.value
    };

    try {
      button.disabled = true;
      button.textContent = "Sending...";

      const response = await fetch("https://formspree.io/f/mkgjpypn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Submission failed.");

      successMsg.classList.remove("d-none");
      successMsg.classList.add("show-success");

      form.reset();
      button.textContent = "Message Sent ✓";

      setTimeout(() => {
        successMsg.classList.add("d-none");
        button.disabled = false;
        button.innerHTML = "<span>Send Message</span>";
      }, 4000);

    } catch (error) {
      alert("Error: " + error.message);
      button.disabled = false;
      button.innerHTML = "<span>Send Message</span>";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section");
const sideNavLinks = document.querySelectorAll(".nav-icon");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  sideNavLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================
   MOBILE GLASS NAV TOGGLE
========================= */
const mobileBurger = document.querySelector(".mobile-nav-toggle");
const mobileIcons = document.querySelector(".mobile-icon-nav");

if (mobileBurger) {
  mobileBurger.addEventListener("click", () => {
    mobileBurger.classList.toggle("active");
    mobileIcons.classList.toggle("active");
  });

  // Close when clicking icon
  mobileIcons.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileBurger.classList.remove("active");
      mobileIcons.classList.remove("active");
    });
  });
}
