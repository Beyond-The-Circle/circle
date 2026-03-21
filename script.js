/* ============================================================
   BEYOND THE CIRCLE — script.js
   All profile data lives here. To add a new profile, just
   add a new object to the `profiles` array below.
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   PROFILE DATA
   ► To add a profile: copy one object, change the values.
   ► image: path relative to index.html, e.g. "images/name.png"
   ► links: only include platforms you want shown. Remove the
     rest and they won't appear.
   ────────────────────────────────────────────────────────── */
const profiles = [
  {
    name: "Spideyboy",
    image: "Images/spideyboy.png",
    bio: "Creator & visionary.",
    links: {
      youtube:   "https://www.youtube.com/channel/UCbsP7bCco2U_gDVrcRtd5eg",
      instagram: "https://www.instagram.com/spideyboy_editz?igsh=MW90OTdiOHY4eWw2cQ=="
      
    }
  },
  {
    name: "Jirent",
    image: "Images/jirent.png",
    bio: "Content creator.",
    links: {
      youtube:   "https://www.youtube.com/channel/UCCkbVHFt_hYg1VZkpOpjd3A",
      instagram: ""
    }
  },
  {
    name: "Myriad of Arts",
    image: "Images/myriad-of-arts.png",
    bio: "Artist & storyteller.",
    links: {
      youtube:   "https://www.youtube.com/channel/UCF1SeSaiw1inT5ZL-Lw-yMQ",
      instagram: "#"
    }
  },
  {
    name: "Faceless Spider",
    image: "Images/faceless-spider.png",
    bio: "The unseen creator.",
    links: {
      youtube:   "https://www.youtube.com/channel/UCogV1b4TAI_5c21CUPp9Ikw",
      instagram: "#"
    }
  },
  {
    name: "Mark Learns",
    image: "Images/mark-learns.png",
    bio: "Learning out loud.",
    links: {
      youtube:   "#",
      instagram: "#",
      tiktok:    "#",
      website: "#"
    }
  },
  {
    name: "N3THRV3IN",
    image: "Images/n3thrv3in.png",
    bio: "Digital architect.",
    links: {
      youtube:   "#",
      spotify:    "#",
      instagram:   "#"
    }
  },
  {
    name: "Affordable Gamer",
    image: "Images/affordable-gamer.png",
    bio: "Gaming for everyone.",
    links: {
      youtube:   "#",
      instagram: "#"
    }
  },
  {
    name: "Radi d Araneum",
    image: "Images/radi-d-araneum.png",
    bio: "Web of wonders.",
    links: {
      youtube:   "#",
      instagram: "#"
    }
  }
];

/* ──────────────────────────────────────────────────────────
   PLATFORM CONFIG
   Defines the label, icon SVG, and CSS class for each platform.
   Add new platforms here and they'll automatically work.
   ────────────────────────────────────────────────────────── */
const platformConfig = {
  youtube: {
    label: "YouTube",
    class: "link-btn--youtube",
    dotClass: "platform-dot--youtube",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  },
  instagram: {
    label: "Instagram",
    class: "link-btn--instagram",
    dotClass: "platform-dot--instagram",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
  },
  tiktok: {
    label: "TikTok",
    class: "link-btn--tiktok",
    dotClass: "platform-dot--tiktok",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
  },
  discord: {
    label: "Discord",
    class: "link-btn--discord",
    dotClass: "platform-dot--discord",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.102.133 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`
  },
  twitch: {
    label: "Twitch",
    class: "link-btn--twitch",
    dotClass: "platform-dot--twitch",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`
  },
  twitter: {
    label: "Twitter / X",
    class: "link-btn--twitter",
    dotClass: "platform-dot--twitter",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>`
  },
  website: {
    label: "Website",
    class: "link-btn--website",
    dotClass: "platform-dot--website",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
  },
  spotify: {
     label: "Spotify",
     class: "link-btn--spotify",
     dotClass: "platform-dot--spotify",
     icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`
  }
   
};

/* ──────────────────────────────────────────────────────────
   HELPER: Get initials from name (fallback when no image)
   ────────────────────────────────────────────────────────── */
function getInitials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

/* ──────────────────────────────────────────────────────────
   HELPER: Build platform dots for the grid card
   ────────────────────────────────────────────────────────── */
function buildPlatformDots(links) {
  return Object.keys(links)
    .map(key => {
      const cfg = platformConfig[key];
      if (!cfg) return '';
      return `<span class="platform-dot ${cfg.dotClass}" title="${cfg.label}"></span>`;
    })
    .join('');
}

/* ──────────────────────────────────────────────────────────
   HELPER: Build link buttons for the modal
   ────────────────────────────────────────────────────────── */
function buildLinkButtons(links) {
  return Object.entries(links)
    .map(([key, url]) => {
      const cfg = platformConfig[key];
      if (!cfg) return '';
      return `
        <a
          class="link-btn ${cfg.class}"
          href="${url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${cfg.label}"
        >
          <span class="link-btn__icon">${cfg.icon}</span>
          ${cfg.label}
        </a>
      `;
    })
    .join('');
}

/* ──────────────────────────────────────────────────────────
   RENDER: Build profile grid from data
   ────────────────────────────────────────────────────────── */
function renderProfiles() {
  const grid = document.getElementById('profilesGrid');

  profiles.forEach((profile, index) => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${profile.name}'s profile`);

    // Staggered animation delay
    card.style.animationDelay = `${index * 0.07 + 0.2}s`;

    // Avatar: image or initials fallback
    const avatarContent = profile.image
      ? `<img src="${profile.image}" alt="${profile.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span class="profile-avatar-initials" style="display:none;">${getInitials(profile.name)}</span>`
      : `<span class="profile-avatar-initials">${getInitials(profile.name)}</span>`;

    card.innerHTML = `
      <div class="profile-avatar-ring">
        <div class="profile-avatar-inner">
          ${avatarContent}
        </div>
      </div>
      <span class="profile-name">${profile.name}</span>
      <div class="profile-platforms">${buildPlatformDots(profile.links)}</div>
    `;

    // Open modal on click or Enter key
    card.addEventListener('click', () => openProfileModal(profile));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProfileModal(profile);
      }
    });

    grid.appendChild(card);
  });
}

/* ──────────────────────────────────────────────────────────
   MODAL: Open profile modal
   ────────────────────────────────────────────────────────── */
function openProfileModal(profile) {
  const overlay  = document.getElementById('modalOverlay');
  const avatar   = document.getElementById('modalAvatar');
  const name     = document.getElementById('modalName');
  const bio      = document.getElementById('modalBio');
  const linksEl  = document.getElementById('modalLinks');

  // Populate data
  avatar.src = profile.image || '';
  avatar.alt = profile.name;
  name.textContent = profile.name;
  bio.textContent  = profile.bio || '';
  linksEl.innerHTML = buildLinkButtons(profile.links);

  // Show overlay
  overlay.removeAttribute('hidden');
  requestAnimationFrame(() => overlay.classList.add('is-open'));

  // Trap focus
  document.getElementById('modalClose').focus();
  document.body.style.overflow = 'hidden';
}

/* ──────────────────────────────────────────────────────────
   MODAL: Close profile modal
   ────────────────────────────────────────────────────────── */
function closeProfileModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('is-open');
  setTimeout(() => {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }, 300);
}


function bindEvents() {
  

  // Profile modal close
  document.getElementById('modalClose').addEventListener('click', closeProfileModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeProfileModal();
  });

  

  // Escape key closes any open modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeProfileModal();
    }
  });
}

/* ──────────────────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProfiles();
  bindEvents();
});
