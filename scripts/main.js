document.documentElement.classList.remove("no-js");

const WA_NUMBER = "2348000000000";

function waLink(context, extra = "") {
  const message = `Hello Grandplay Hotel, I want to inquire about: ${context}${extra ? ` | ${extra}` : ""}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function wireWhatsAppLinks() {
  const nodes = document.querySelectorAll("[data-wa]");
  nodes.forEach((node) => {
    const context = node.getAttribute("data-wa") || "General Booking";
    const extra = node.getAttribute("data-wa-extra") || "";
    node.setAttribute("href", waLink(context, extra));
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  });
}

function wireNavbarBehavior() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll);

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu?.classList.toggle("is-open");
  });

  document.addEventListener("click", (event) => {
    if (!menu || !toggle) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    const isOpen = menu.classList.contains("is-open");
    if (!isOpen) return;
    if (menu.contains(target) || toggle.contains(target)) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function wireRevealAnimations() {
  const targets = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((target) => observer.observe(target));
}

function wireLightboxes() {
  const galleryDialog = document.getElementById("lightboxDialog");
  const galleryText = document.getElementById("lightboxText");

  document.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!galleryDialog || !galleryText) return;
      galleryText.textContent = button.getAttribute("data-lightbox") || "Gallery image";
      galleryDialog.showModal();
    });
  });

  const viewDialog = document.getElementById("viewDialog");
  const viewText = document.getElementById("viewText");

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!viewDialog || !viewText) return;
      const room = button.getAttribute("data-view") || "Room";
      viewText.textContent = `${room} 360 tour is coming soon. We are preparing an immersive walkthrough for this room.`;
      viewDialog.showModal();
    });
  });

  document.querySelectorAll(".lightbox-close").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      dialog?.close();
    });
  });

  document.querySelectorAll("dialog.lightbox").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!inside) {
        dialog.close();
      }
    });
  });
}

function wireEventForm() {
  const form = document.getElementById("eventInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "Guest");
    const eventType = String(data.get("eventType") || "General Event");
    const guests = String(data.get("guests") || "");
    const date = String(data.get("date") || "");
    const message = String(data.get("message") || "");

    const extra = `Name: ${name} | Guests: ${guests} | Date: ${date} | Notes: ${message || "None"}`;
    window.open(waLink(`Event Inquiry: ${eventType}`, extra), "_blank", "noopener,noreferrer");
  });
}

wireWhatsAppLinks();
wireNavbarBehavior();
wireRevealAnimations();
wireLightboxes();
wireEventForm();

// --- Smart-Vibe Popup System ---
const SMART_POPUP_WA = {
  brunch: `https://wa.me/2348000000000?text=Hi!%20I’d%20like%20to%20reserve%20a%20spot%20for%20Sunday%20Brunch%20at%20Grandplay.`,
  poolParty: `https://wa.me/2348000000000?text=Hi!%20I’d%20like%20to%20book%20a%20spot%20for%20the%20Last%20Saturday%20Pool%20Party.`
};

function showPopup(type) {
  // Remove any existing popup
  document.querySelectorAll('.smart-vibe-popup').forEach(el => el.remove());

  // Popup content by type
  const config = {
    brunch: {
      bg: '#F5E6D3',
      blur: 'backdrop-blur-md',
      title: 'Sunday Brunch',
      subtitle: 'Reserve your table for a luxe brunch experience.',
      img: 'assets/images/brunch.jpg', // Replace with real asset
      font: 'Playfair Display, serif',
      btn: 'Reserve Brunch',
      btnColor: '#0EA5E9',
      btnText: '#fff',
      wa: SMART_POPUP_WA.brunch
    },
    poolParty: {
      bg: '#0369A1',
      blur: 'backdrop-blur-lg',
      title: 'Last Saturday Pool Party',
      subtitle: 'Book your spot for the ultimate poolside night.',
      img: 'assets/images/promo-room-b.jpg',
      font: 'Poppins, Inter, sans-serif',
      btn: 'Book Pool Party',
      btnColor: '#D4AF37',
      btnText: '#222',
      wa: SMART_POPUP_WA.poolParty
    }
  }[type];
  if (!config) return;

    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'smart-vibe-popup';
    popup.innerHTML = `
      <div class="card-style">
        <button aria-label="Close popup">&times;</button>
        <img src="${config.img}" alt="${config.title}">
        <h2>${config.title}</h2>
        <p>${config.subtitle}</p>
        <a href="${config.wa}" target="_blank" rel="noopener noreferrer">${config.btn}</a>
      </div>
    `;
    document.body.appendChild(popup);
    // Close logic
    popup.querySelector('button').onclick = () => popup.remove();
}

// Smart logic & trigger
const today = new Date();
const dayOfWeek = today.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
const isLastWeek = (date > lastDayOfMonth - 7);

function triggerSmartPopup() {
  // Always show Pool Party for demo; comment/uncomment as needed
  setTimeout(() => {
    showPopup('poolParty');
  }, 8000);
}
window.addEventListener('DOMContentLoaded', triggerSmartPopup);

// Smooth scroll for 'Back to top' link in footer
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector('footer a[href="#top"]');
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
