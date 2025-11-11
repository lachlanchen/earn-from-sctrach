const ideas = [
  "Launch a 5-day Lazy Earn sprint teaching people to automate one newsletter ad slot, then sell replay access.",
  "Bundle your workflows into a 'Dream Desk OS' Notion template that pairs automations with nap reminders.",
  "Record meditative money stories, run them as looping background audio with embedded affiliate links.",
  "Offer a Lazy Earn Concierge: you map someone's existing assets, then design three automated income flows.",
  "Create a 'Zero Meetings Agency' where clients buy async strategy videos and auto-scheduled deliverables.",
  "Spin up a micro-store of AI-remixed, pastel financial dashboards with white-glove onboarding videos.",
  "Host virtual slow lounges where guests co-build digital assets, sell recurring memberships on autopilot.",
  "Design a Lazy Money licensing kit: pre-baked marketing, copy, and automations others can stamp their brand on.",
  "Curate monthly 'Earn From Scratch' moodboards with swipe copy, embed sponsor sections for ad revenue.",
  "Build a nap-friendly accountability bot that texts prompts, upsell a Lazy Earn mastermind for deeper access.",
];

const ideaBtn = document.querySelector(".generator-btn");
const ideaOutput = document.querySelector(".idea-output");
const footerYear = document.getElementById("year");

const typeIdea = (text) => {
  ideaOutput.classList.add("typing");
  ideaOutput.textContent = "";
  [...text].forEach((char, index) => {
    setTimeout(() => {
      ideaOutput.textContent += char;
      if (index === text.length - 1) {
        ideaOutput.classList.remove("typing");
      }
    }, index * 15);
  });
};

if (ideaBtn) {
  ideaBtn.addEventListener("click", () => {
    const choice = ideas[Math.floor(Math.random() * ideas.length)];
    typeIdea(choice);
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (targetId.length > 1) {
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Intersection observer reveal effect
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".section, .card, .idea-card").forEach((el) => {
  el.classList.add("fade");
  observer.observe(el);
});

// Parallax drift
const parallaxItems = document.querySelectorAll(".orb, .hero-card");
window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 20;
  const y = (event.clientY / window.innerHeight - 0.5) * 20;
  parallaxItems.forEach((item) => {
    item.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
  });
});

// Pretend form submission while backend is pending
const form = document.querySelector(".cta-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector("input[type=email]").value;
    form.reset();
    ideaOutput.textContent = `Invite sent to ${email}. Expect a lazy hello soon.`;
  });
}
