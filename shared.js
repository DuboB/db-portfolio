/* ── REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .block-2p, .block-full, .section-label, .page-hero, .about-strip, .contact-strip').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ── NAV scroll ── */
const nav = document.getElementById('main-nav');
const hero = document.getElementById('hero');
if (hero) {
  nav.classList.add('hero-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('hero-nav', hero.getBoundingClientRect().bottom > 80);
  });
}

/* ── MOBILE MENU ── */
function openMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('mobile-overlay').classList.add('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ── LANGUAGES ── */
const i18n = {
  en: {
    /* nav */
    nav_portfolio: 'Portfolio',
    nav_projects:  'Projects',
    nav_contact:   'Contact',
    nav_services:  'Services',
    /* mobile menu */
    mob_portfolio: 'Portfolio',
    mob_projects:  'Projects',
    mob_people:    'People',
    mob_landscape: 'Landscape',
    mob_arch:      'Architektur',
    mob_golf:      'Golf',
    mob_wedding:   'Wedding',
    mob_services:  'Services',
    mob_contact:   'Contact',
    /* hero */
    hero_title: 'Visual<br>Storytelling',
    /* contact strip */
    contact_h: "Let's create<br>something together.",
    /* footer */
    footer: '© 2026 db by Dubo Bulic',
    /* services page */
    srv_label:   'What I offer',
    srv_heading: 'Services',
    srv1_name: 'Photography',
    srv1_desc: 'Portrait, architecture, events and concerts.',
    srv1_1: 'Portrait & People',
    srv1_2: 'Architektur & Interieur',
    srv1_3: 'Event & Konzert',
    srv1_4: 'Hochzeit & Feier',
    srv1_5: 'Reise & Dokumentation',
    srv2_name: 'Design',
    srv2_desc: 'Visual identity that works.',
    srv2_1: 'Logo & Corporate Identity',
    srv2_2: 'Print & Editorial',
    srv2_3: 'Web Design',
    srv2_4: 'Social Media',
    srv3_name: 'AI Images',
    srv3_desc: 'Custom AI-generated visuals for any purpose.',
    srv3_1: 'Produktvisualisierung',
    srv3_2: 'Konzeptbilder & Storyboards',
    srv3_3: 'Marketing & Social Content',
    srv4_name: 'Visual Storytelling',
    srv4_desc: 'Moving images that tell your story.',
    srv4_1: 'Imagefilm & Imagevideo',
    srv4_2: 'Reels & Social Content',
    srv4_3: 'Konzert & Event Video',
    srv4_4: 'Drone & Aerial',
    srv_about_label: 'The full picture',
    srv_about_lead: 'I am a photographer, filmmaker and designer — helping you create a presence that truly gets noticed.',
    srv_about_1: 'Whether a single portrait or a complete visual identity — I accompany projects from the first idea to the finished result. My approach combines craftsmanship with a clear eye for the essential: what remains when you remove everything unnecessary.',
    srv_about_2: '<strong>Photography</strong> is my foundation. For over 20 years I have photographed people, places and moments. Weddings, concerts, architecture, landscapes — always with the goal of making the real visible.',
    srv_about_3: '<strong>Video & Visual Storytelling</strong> extends photography where a single image is not enough. Brand films, social media reels, event videos, drone footage — moving images that tell a story and stay in the memory.',
    srv_about_4: '<strong>Websites & digital presence</strong> are the window to the outside. I build websites that not only look good but also work — fast, clear, with a visual language that fits the brief.',
    srv_about_5: '<strong>Presence & identity</strong> — logo, design, business card, social media or a complete corporate design: I help you develop a consistent image you can present to the world with confidence.',
    srv_p1_title: 'Photography',
    srv_p1_text:  'Portrait · Wedding · Event · Architecture · Travel',
    srv_p2_title: 'Video',
    srv_p2_text:  'Brand Film · Reels · Concert · Drone',
    srv_p3_title: 'Websites',
    srv_p3_text:  'Design · Development · Hosting · Maintenance',
    srv_p4_title: 'Presence',
    srv_p4_text:  'Logo · Corporate Design · Social Media · Print',
    /* contact page */
    contact_label:    "Let's talk",
    contact_heading:  'Contact',
    form_name:        'Name',
    form_name_ph:     'Your name',
    form_email:       'E-Mail',
    form_email_ph:    'your@email.com',
    form_subject:     'Subject',
    form_subject_ph:  'Please select …',
    form_subj_1: 'Photography',
    form_subj_2: 'Wedding',
    form_subj_3: 'Portrait / People',
    form_subj_4: 'Golf',
    form_subj_5: 'Architecture',
    form_subj_6: 'Landscape',
    form_subj_7: 'Video / Projects',
    form_subj_8: 'Other',
    form_message:     'Message',
    form_message_ph:  'Describe your project …',
    form_send:        'Send Message',
    info_email_label:    'E-Mail',
    info_mobile_label:   'Mobile',
    info_location_label: 'Location',
    info_response_label: 'Response time',
    info_location_val:   'Heidelberg — Dubrovnik',
    info_response_val:   'Within 24 hours',
  },
  de: {
    /* nav */
    nav_portfolio: 'Portfolio',
    nav_projects:  'Projekte',
    nav_contact:   'Kontakt',
    nav_services:  'Leistungen',
    /* mobile menu */
    mob_portfolio: 'Portfolio',
    mob_projects:  'Projekte',
    mob_people:    'People',
    mob_landscape: 'Landscape',
    mob_arch:      'Architektur',
    mob_golf:      'Golf',
    mob_wedding:   'Wedding',
    mob_services:  'Leistungen',
    mob_contact:   'Kontakt',
    /* hero */
    hero_title: 'Visuelles<br>Geschichten',
    /* contact strip */
    contact_h: 'Lass uns etwas<br>zusammen erschaffen.',
    /* footer */
    footer: '© 2026 db by Dubo Bulic',
    /* services page */
    srv_label:   'Was ich anbiete',
    srv_heading: 'Leistungen',
    srv1_name: 'Fotografie',
    srv1_desc: 'Portrait, Architektur, Events und Konzerte.',
    srv1_1: 'Portrait & People',
    srv1_2: 'Architektur & Interieur',
    srv1_3: 'Event & Konzert',
    srv1_4: 'Hochzeit & Feier',
    srv1_5: 'Reise & Dokumentation',
    srv2_name: 'Design',
    srv2_desc: 'Visuelle Identität, die funktioniert.',
    srv2_1: 'Logo & Corporate Identity',
    srv2_2: 'Print & Editorial',
    srv2_3: 'Web Design',
    srv2_4: 'Social Media',
    srv3_name: 'KI Bilder',
    srv3_desc: 'Individuelle KI-generierte Bilder für jeden Zweck.',
    srv3_1: 'Produktvisualisierung',
    srv3_2: 'Konzeptbilder & Storyboards',
    srv3_3: 'Marketing & Social Content',
    srv4_name: 'Visual Storytelling',
    srv4_desc: 'Bewegtbild, das deine Geschichte erzählt.',
    srv4_1: 'Imagefilm & Imagevideo',
    srv4_2: 'Reels & Social Content',
    srv4_3: 'Konzert & Event Video',
    srv4_4: 'Drone & Aerial',
    srv_about_label: 'Das große Bild',
    srv_about_lead: 'Ich bin Fotograf, Filmemacher und Designer — und ich helfe dir, deinen Auftritt so zu gestalten, dass er wirklich gesehen wird.',
    srv_about_1: 'Ob ein einzelnes Portrait oder eine komplette visuelle Identität — ich begleite Projekte von der ersten Idee bis zum fertigen Ergebnis. Mein Ansatz verbindet handwerkliches Können mit einem klaren Blick für das Wesentliche.',
    srv_about_2: '<strong>Fotografie</strong> ist meine Basis. Seit über 20 Jahren fotografiere ich Menschen, Orte, Momente. Hochzeiten, Konzerte, Architekturen, Landschaften — immer mit dem Ziel, das Echte sichtbar zu machen.',
    srv_about_3: '<strong>Video & Visual Storytelling</strong> ergänzt die Fotografie dort, wo ein einzelnes Bild nicht reicht. Imagefilme, Social-Media-Reels, Eventvideos, Drohnenaufnahmen — Bewegtbild, das eine Geschichte erzählt.',
    srv_about_4: '<strong>Webseiten & digitaler Auftritt</strong> sind das Schaufenster nach außen. Ich entwickle Webseiten, die nicht nur gut aussehen, sondern auch funktionieren — schnell, klar, mit einer Bildsprache, die zum Auftrag passt.',
    srv_about_5: '<strong>Auftritt & Identität</strong> — Logo, Design, Visitenkarte, Social Media oder das komplette Corporate Design: Ich helfe dir dabei, ein konsistentes Bild zu entwickeln, das du mit Überzeugung nach außen tragen kannst.',
    srv_p1_title: 'Fotografie',
    srv_p1_text:  'Portrait · Hochzeit · Event · Architektur · Reise',
    srv_p2_title: 'Video',
    srv_p2_text:  'Imagefilm · Reels · Konzert · Drone',
    srv_p3_title: 'Webseiten',
    srv_p3_text:  'Design · Entwicklung · Hosting · Pflege',
    srv_p4_title: 'Auftritt',
    srv_p4_text:  'Logo · Corporate Design · Social Media · Print',
    /* contact page */
    contact_label:    'Lass uns reden',
    contact_heading:  'Kontakt',
    form_name:        'Name',
    form_name_ph:     'Dein Name',
    form_email:       'E-Mail',
    form_email_ph:    'deine@email.com',
    form_subject:     'Betreff',
    form_subject_ph:  'Bitte wählen …',
    form_subj_1: 'Fotografie',
    form_subj_2: 'Hochzeit',
    form_subj_3: 'Portrait / People',
    form_subj_4: 'Golf',
    form_subj_5: 'Architektur',
    form_subj_6: 'Landschaft',
    form_subj_7: 'Video / Projekte',
    form_subj_8: 'Sonstiges',
    form_message:     'Nachricht',
    form_message_ph:  'Beschreibe dein Projekt …',
    form_send:        'Nachricht senden',
    info_email_label:    'E-Mail',
    info_mobile_label:   'Mobil',
    info_location_label: 'Standort',
    info_response_label: 'Reaktionszeit',
    info_location_val:   'Heidelberg — Dubrovnik',
    info_response_val:   'Innerhalb von 24 Stunden',
  }
};

let currentLang = localStorage.getItem('db_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('db_lang', lang);
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  /* placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => setLang(currentLang));

/* ── LIGHTBOX ── */
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<span class="lightbox-close">&#x2715;</span><img src="" alt="" />';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');

function openLightbox(src) {
  lbImg.src = src;
  lbImg.style.transform = 'scale(0.75)';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    lbImg.style.transform = '';
  }); });
}

function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 350);
}

document.body.addEventListener('click', function(e) {
  var t = e.target;
  var mediaItem = t.closest && t.closest('.media-item');
  if (mediaItem) {
    var src = (t.tagName === 'IMG') ? t.src : (mediaItem.querySelector('img') ? mediaItem.querySelector('img').src : null);
    if (src) openLightbox(src);
  }
});

lb.addEventListener('click', closeLightbox);
lb.querySelector('.lightbox-close').addEventListener('click', function(e) {
  e.stopPropagation();
  closeLightbox();
});
