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
    nav_about:     'About',
    nav_contact:   'Contact',
    nav_services:  'Services',
    /* mobile menu */
    mob_portfolio: 'Portfolio',
    mob_projects:  'Projects',
    mob_about:     'About',
    mob_people:    'People',
    mob_landscape: 'Landscape',
    mob_arch:      'Architektur',
    mob_golf:      'Golf',
    mob_wedding:   'Wedding',
    mob_services:  'Services',
    mob_contact:   'Contact',
    /* about page */
    about_label:  'The person behind the lens',
    about_heading: 'About',
    about_intro:  'Photography is a mirror of personality.',
    about_p1:     'The expressive power of a photograph depends on the photographer — their awareness, their feel for light and shadow, their ability to translate a visual idea into an image.',
    about_p2:     'I look for situations I find compelling: exciting, original, mysterious. Cities, people, interesting environments — even a weathered wall in the right light becomes an image where structure, light and shadow compose into something harmonious.',
    about_p3:     'The rest I leave to the viewer: to sense the mood, perhaps discover a symbol, give it their own meaning.',
    about_p4:     'Photography is like music. It is not just about the instrument. What matters is the moment — the mood, the feeling that stays long after the shutter closes.',
    about_p5:     'For over 20 years I have photographed people, places and moments across Europe. Weddings, concerts, architecture, landscapes — always with one goal: to make the real visible.',
    about_p6:     'My aim has always been to find and present my own stylistic expression — individual, creative, shaped by international experience in and outside of Europe.',
    about_d1_title: 'Photography',
    about_d1_text:  'Portrait, architecture, events, concerts, weddings, travel — in Heidelberg, Dubrovnik and across Europe.',
    about_d2_title: 'Film & Video',
    about_d2_text:  'Brand films, social media reels, event and concert videos, drone footage — moving images that tell a story.',
    about_d3_title: 'Design',
    about_d3_text:  'Visual identity, logo, print, web — a consistent image you can present to the world with confidence.',
    about_col1_p1: 'For over 20 years I have photographed people, places and moments across Europe. Weddings, concerts, architecture, landscapes — always with one goal: to make the real visible. The rest I leave to the viewer: to sense the mood, perhaps discover a symbol, give it their own meaning.',
    about_col2_p2: 'My aim has always been to find and present my own stylistic expression — individual, creative, shaped by an international experience in and outside of Europe. Whether a single portrait or a complete visual identity: from first idea to finished result.',
    /* testimonials */
    test_label: 'What people say',
    test_1: '"The photos captured exactly the feeling of that day — light, laughter, everything. We look at them and we\'re right back there."',
    test_1_name: '— Sandra',
    test_2: '"Working with Dubo is always effortless. He creates an atmosphere where you forget there\'s a camera — and somehow that\'s exactly when the real moments happen."',
    test_2_name: '— Marcus',
    test_3: '"Every time we work together it\'s a genuine pleasure. He has this rare ability to make people feel at ease — and it shows in every single image."',
    test_3_name: '— Katrin',
    test_4: '"The atmosphere he creates on set is something special. Calm, focused, and a lot of fun — you always want to do it again."',
    test_4_name: '— Thomas',
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
    srv1_story: 'Photography is my foundation. For over 20 years I have worked with light, people and places — always looking for the moment that reveals something true. Whether a quiet portrait or a dynamic event: every image carries a point of view.',
    srv2_new_1: 'Executive Portrait',
    srv2_new_2: 'Speaker & Presenter',
    srv2_new_3: 'Founder & Entrepreneur',
    srv2_new_4: 'LinkedIn & Press',
    srv2_story: 'Your image is your first impression — before you enter the room. I create portraits that show who you are, not just how you look. Strong, authentic, with the presence your work deserves.',
    srv3_new_name: 'Corporate Storytelling',
    srv3_new_desc: 'Your company. Your people. Your culture.',
    srv3_new_1: 'Team & Culture',
    srv3_new_2: 'Office & Location',
    srv3_new_3: 'Events & Launches',
    srv3_new_4: 'Annual Reports & Press',
    srv3_story: 'Companies have stories worth telling — but most never get the images they deserve. I photograph the people, spaces and moments that make a business what it is. Not polished. Real.',
    srv4_new_name: 'Brand Photography',
    srv4_new_desc: 'Apartments, architecture, products, atmosphere.',
    srv4_new_1: 'Architektur & Immobilien',
    srv4_new_2: 'Produkte & Still Life',
    srv4_new_3: 'Gastronomie & Hospitality',
    srv4_new_4: 'Visual Storytelling / Film',
    srv4_story: 'A space photographed well sells faster. A product shown beautifully is chosen first. I create imagery that communicates quality — for brands that want to be seen in the right light.',
    srv1_1: 'Portrait & People',
    srv1_2: 'Architektur & Interieur',
    srv1_3: 'Event & Konzert',
    srv1_4: 'Hochzeit & Feier',
    srv1_5: 'Reise & Dokumentation',
    srv2_name: 'Personal Branding',
    srv2_desc: 'For entrepreneurs, executives and speakers.',
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
    nav_about:     'Über mich',
    nav_contact:   'Kontakt',
    nav_services:  'Leistungen',
    /* mobile menu */
    mob_portfolio: 'Portfolio',
    mob_projects:  'Projekte',
    mob_about:     'Über mich',
    mob_people:    'People',
    mob_landscape: 'Landscape',
    mob_arch:      'Architektur',
    mob_golf:      'Golf',
    mob_wedding:   'Wedding',
    mob_services:  'Leistungen',
    mob_contact:   'Kontakt',
    /* about page */
    about_label:  'Die Person hinter der Kamera',
    about_heading: 'Über mich',
    about_intro:  'Fotografie ist ein Spiegel der Persönlichkeit.',
    about_p1:     'Die Ausdrucksstärke einer Fotografie ist abhängig vom Fotografen — seinem Wahrnehmungsbewusstsein, seinem Gespür für Licht und Schatten sowie seinem gestalterischen Können, seine Bildidee in ein Bild umzusetzen.',
    about_p2:     'Ich suche Situationen, die ich als spannend, originell, ausgewogen, geheimnisvoll empfinde. Städte, Menschen, interessante Umgebungen — oder eine verwitternde Häuserwand, im richtigen Licht und Ausschnitt aufgenommen, werden zum Bild, wo sich Flächen, Strukturen, Licht und Schatten zur harmonischen Ordnung fügen.',
    about_p3:     'Den Rest überlasse ich dem Betrachter: Er mag die Stimmungen empfinden, vielleicht auch Symbole entdecken, dem Ganzen seinen eigenen Sinn geben.',
    about_p4:     'In der Fotografie ist es wie in der Musik — es kommt nicht nur auf das Instrument allein an. Was zählt, ist der Moment: die Stimmung, das Gefühl, das noch lange nach dem Auslösen bleibt.',
    about_p5:     'Seit über 20 Jahren fotografiere ich Menschen, Orte und Momente in ganz Europa. Hochzeiten, Konzerte, Architektur, Landschaften — immer mit einem Ziel: das Echte sichtbar zu machen.',
    about_p6:     'Meine Zielsetzung ist es, den eigenen stilistischen Ausdruck zu finden und zu präsentieren — individuell, kreativ, geprägt durch internationale Erfahrung innerhalb und außerhalb Europas.',
    about_d1_title: 'Fotografie',
    about_d1_text:  'Portrait, Architektur, Events, Konzerte, Hochzeiten, Reisen — in Heidelberg, Dubrovnik und ganz Europa.',
    about_d2_title: 'Film & Video',
    about_d2_text:  'Imagefilme, Social-Media-Reels, Event- und Konzertvideos, Drohnenaufnahmen — Bewegtbild, das eine Geschichte erzählt.',
    about_d3_title: 'Design',
    about_d3_text:  'Visuelle Identität, Logo, Print, Web — ein konsistentes Bild, das du mit Überzeugung nach außen tragen kannst.',
    about_col1_p1: 'Seit über 20 Jahren fotografiere ich Menschen, Orte und Momente in ganz Europa. Hochzeiten, Konzerte, Architektur, Landschaften — immer mit einem Ziel: das Echte sichtbar zu machen.',
    about_col2_p2: 'Meine Zielsetzung ist es, den eigenen stilistischen Ausdruck zu finden und zu präsentieren — individuell, kreativ, geprägt durch internationale Erfahrung innerhalb und außerhalb Europas.',
    /* testimonials */
    test_label: 'Was andere sagen',
    test_1: '„Die Fotos haben genau das eingefangen, was dieser Tag war — Licht, Lachen, alles. Wir schauen sie an und sind sofort wieder mittendrin."',
    test_1_name: '— Sandra',
    test_2: '„Mit Dubo zu arbeiten ist jedes Mal eine Leichtigkeit. Er schafft eine Atmosphäre, in der man die Kamera vergisst — und genau dann entstehen die echten Momente."',
    test_2_name: '— Marcus',
    test_3: '„Jedes Mal wieder eine echte Freude. Er hat diese seltene Fähigkeit, Menschen zum Entspannen zu bringen — und das sieht man in jedem einzelnen Bild."',
    test_3_name: '— Katrin',
    test_4: '„Die Atmosphäre, die er am Set schafft, ist etwas Besonderes. Ruhig, fokussiert und viel Spaß — man möchte es immer wieder machen."',
    test_4_name: '— Thomas',
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
    srv1_story: 'Fotografie ist meine Basis. Seit über 20 Jahren arbeite ich mit Licht, Menschen und Orten — immer auf der Suche nach dem Moment, der etwas Wahres zeigt. Ob stilles Portrait oder dynamisches Event: Jedes Bild trägt eine Haltung.',
    srv2_new_1: 'Executive Portrait',
    srv2_new_2: 'Speaker & Presenter',
    srv2_new_3: 'Gründer & Unternehmer',
    srv2_new_4: 'LinkedIn & Presse',
    srv2_story: 'Dein Bild ist dein erster Eindruck — bevor du den Raum betrittst. Ich schaffe Portraits, die zeigen wer du bist, nicht nur wie du aussiehst. Stark, authentisch, mit der Präsenz, die deine Arbeit verdient.',
    srv3_new_name: 'Corporate Storytelling',
    srv3_new_desc: 'Deine Firma. Deine Menschen. Deine Kultur.',
    srv3_new_1: 'Team & Kultur',
    srv3_new_2: 'Büro & Standort',
    srv3_new_3: 'Events & Launches',
    srv3_new_4: 'Geschäftsberichte & Presse',
    srv3_story: 'Unternehmen haben Geschichten, die es wert sind erzählt zu werden — aber die wenigsten bekommen die Bilder, die sie verdienen. Ich fotografiere die Menschen, Räume und Momente, die eine Firma ausmachen. Nicht gestellt. Echt.',
    srv4_new_name: 'Brand Photography',
    srv4_new_desc: 'Apartments, Architektur, Produkte, Atmosphäre.',
    srv4_new_1: 'Architektur & Immobilien',
    srv4_new_2: 'Produkte & Still Life',
    srv4_new_3: 'Gastronomie & Hospitality',
    srv4_new_4: 'Visual Storytelling / Film',
    srv4_story: 'Ein gut fotografierter Raum verkauft sich schneller. Ein schön gezeigtes Produkt wird zuerst gewählt. Ich schaffe Bildwelten, die Qualität kommunizieren — für Marken, die im richtigen Licht gesehen werden wollen.',
    srv1_1: 'Portrait & People',
    srv1_2: 'Architektur & Interieur',
    srv1_3: 'Event & Konzert',
    srv1_4: 'Hochzeit & Feier',
    srv1_5: 'Reise & Dokumentation',
    srv2_name: 'Personal Branding',
    srv2_desc: 'Für Unternehmer, Executives und Speaker.',
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
