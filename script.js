'use strict';

// VIDEO LINKS — EDIT EACH RECORD INDEPENDENTLY. Never reuse a single shared source.
// originalUrl opens the user-supplied Google Drive file; embedUrl plays it in the modal.
const videoItems = [
  {id:'video01',number:'01',title:'Video Ad 01',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/14OZCXW7h7dYO3lO920FRD3MJ2iY2KddA/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/14OZCXW7h7dYO3lO920FRD3MJ2iY2KddA/preview'},
  {id:'video02',number:'02',title:'Video Ad 02',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/1ElCLuwiWSG3pAmx2mXzIQrfuk_WarQJH/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/1ElCLuwiWSG3pAmx2mXzIQrfuk_WarQJH/preview'},
  {id:'video03',number:'03',title:'Video Ad 03',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/10YLlAM_N2mr1uwxwKevxJ1tl8JFurk8v/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/10YLlAM_N2mr1uwxwKevxJ1tl8JFurk8v/preview'},
  {id:'video04',number:'04',title:'Video Ad 04',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/13y32_LxTKnPJxYS0p6rk08UI-m8ehmkt/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/13y32_LxTKnPJxYS0p6rk08UI-m8ehmkt/preview'},
  {id:'video05',number:'05',title:'Video Ad 05',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/1wUR3kvufyEDEQgowXblmqveeMftCwK-j/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/1wUR3kvufyEDEQgowXblmqveeMftCwK-j/preview'},
  {id:'video06',number:'06',title:'Video Ad 06',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/10r7ZzY9SIUnEkjGp4K-CJbX0c6fyYrqJ/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/10r7ZzY9SIUnEkjGp4K-CJbX0c6fyYrqJ/preview'},
  {id:'video07',number:'07',title:'Video Ad 07',category:'META / EDITING + CREATIVE',originalUrl:'https://drive.google.com/file/d/1mOvncnp9RDfCDqIbgJbGWEnIjSbBTpfM/view?usp=drive_link',embedUrl:'https://drive.google.com/file/d/1mOvncnp9RDfCDqIbgJbGWEnIjSbBTpfM/preview'}
];

// STATIC IMAGE SOURCES — each points to the distinct original user-supplied visual.
const imageItems = [
  {id:'image01',src:'assets/images/ad-01.png',title:'Static Ad 01',category:'META / STATIC CREATIVE',alt:'NOCO Design Build advertisement titled Transform Your Backyard With a Custom ADU'},
  {id:'image02',src:'assets/images/ad-02.png',title:'Branded Project Photo 02',category:'PROJECT / VISUAL CONTENT',alt:'Photograph of a white accessory dwelling unit with black trim and NOCO Design Build logo'},
  {id:'image03',src:'assets/images/ad-03.png',title:'Static Ad 03',category:'META / STATIC CREATIVE',alt:'NOCO Design Build advertisement titled Make Room For More'},
  {id:'image04',src:'assets/images/ad-04.png',title:'Brand Logo 04',category:'BRAND IDENTITY / DESIGN',alt:'Powercore Electric Inc black monogram and wordmark on white background'},
  {id:'image05',src:'assets/images/ad-05.png',title:'Social Media Profile 05',category:'SOCIAL MEDIA / PAGE CREATIVE',alt:'A1 Building Contractors branded Facebook business page and cover artwork'}
];

const videoGrid = document.getElementById('video-grid');
const imageGrid = document.getElementById('image-grid');
const videoDialog = document.getElementById('video-dialog');
const imageDialog = document.getElementById('image-dialog');
let lastVideoTrigger = null;
let lastImageTrigger = null;

// Create only the necessary DOM nodes. Video iframes are NOT loaded until selected.
videoItems.forEach((item) => {
  const article = document.createElement('article');
  article.className = 'video-item';
  article.id = item.id;
  article.innerHTML = `
    <button type="button" class="video-trigger" aria-label="Play ${item.title}">
      <span class="video-top">SHORT-FORM / 9:16</span>
      <span class="video-middle"><span class="video-number" aria-hidden="true">${item.number}</span><span class="play-circle" aria-hidden="true">▶</span></span>
      <span class="video-bottom"><span>ORIGINAL VIDEO</span><span>CLICK TO PLAY / OPEN LINK</span></span>
    </button>
    <div class="video-caption"><h3>${item.title.toUpperCase()}</h3><p>${item.category}</p></div>`;
  article.querySelector('.video-trigger').addEventListener('click', (event) => {
    lastVideoTrigger = event.currentTarget;
    document.getElementById('dialog-video-title').textContent = item.title.toUpperCase();
    const original = document.getElementById('video-original');
    original.href = item.originalUrl;
    const iframe = document.createElement('iframe');
    iframe.src = item.embedUrl;
    iframe.title = item.title + ' — Google Drive video player';
    iframe.allow = 'autoplay; fullscreen; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    const player = document.getElementById('video-player');
    player.replaceChildren(iframe);
    videoDialog.showModal();
    document.body.classList.add('dialog-open');
  });
  videoGrid.append(article);
});

function closeVideo() {
  if (!videoDialog.open) return;
  videoDialog.close();
}
document.getElementById('video-close').addEventListener('click', closeVideo);
videoDialog.addEventListener('close', () => {
  // Stop playback and prevent retaining all seven Google Drive iframe sources.
  document.getElementById('video-player').replaceChildren();
  document.body.classList.remove('dialog-open');
  if (lastVideoTrigger) lastVideoTrigger.focus();
});
videoDialog.addEventListener('click', (event) => {
  if (event.target === videoDialog) closeVideo();
});

// STATIC IMAGES / LIGHTBOX — full image, no crop.
imageItems.forEach((item) => {
  const article = document.createElement('article');
  article.className = 'image-item';
  article.id = item.id;
  const button = document.createElement('button');
  button.className = 'image-trigger';
  button.type = 'button';
  button.setAttribute('aria-label', `Enlarge ${item.title}`);
  const image = document.createElement('img');
  image.src = item.src;
  image.alt = item.alt;
  image.loading = 'lazy';
  image.decoding = 'async';
  button.append(image);
  const caption = document.createElement('div');
  caption.className = 'art-caption';
  const name = document.createElement('h3');
  name.textContent = item.title.toUpperCase();
  const category = document.createElement('p');
  category.textContent = item.category;
  caption.append(name, category);
  article.append(button, caption);
  button.addEventListener('click', () => {
    lastImageTrigger = button;
    const enlarged = document.getElementById('lightbox-image');
    enlarged.src = item.src;
    enlarged.alt = item.alt;
    document.getElementById('lightbox-caption').textContent = item.title.toUpperCase() + ' / ' + item.category;
    imageDialog.showModal();
    document.body.classList.add('dialog-open');
  });
  imageGrid.append(article);
});
const imageClose = document.getElementById('image-close');
imageClose.addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', (event) => {
  if (event.target === imageDialog) imageDialog.close();
});
imageDialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (lastImageTrigger) lastImageTrigger.focus();
});

// MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-navigation');
function closeMenu() {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label','Open navigation');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  nav.classList.toggle('open',!expanded);
  menuToggle.setAttribute('aria-expanded',String(!expanded));
  menuToggle.setAttribute('aria-label',expanded ? 'Open navigation' : 'Close navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
