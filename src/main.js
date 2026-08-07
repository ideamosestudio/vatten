import './style.css'
import { content } from './content.js'

const assetBase = import.meta.env.BASE_URL

const navLink = ({ label, href, external = false }) => `
  <a href="${href}" ${external ? 'target="_blank" rel="noreferrer"' : ''}>${label}</a>
`

const cta = (className = 'cta-button') => `
  <a
    class="${className}"
    href="${content.cta.href}"
    target="_blank"
    rel="noreferrer">
    <span>${content.cta.label}</span>
  </a>
`

const ctaGroup = (
  className = '',
  secondaryLabel = content.servicesIntro.label,
  secondaryHref = '#servicios'
) => `
  <div class="cta-group ${className}">
    ${cta()}
    <a class="cta-button cta-button--secondary" href="${secondaryHref}">
      <span>${secondaryLabel}</span>
    </a>
  </div>
`

const serviceCard = (service, index) => {
  const photos = service.images ?? [{ image: service.image, alt: service.alt }]
  const rotates = photos.length > 1

  return `
  <article
    class="service-card service-card--${service.size} service-card--${service.slug}"
    data-reveal
    style="--delay: ${index * 90}ms">
    <div class="service-card__image image-mask" ${rotates ? 'data-photo-rotator' : ''}>
      ${photos.map((photo, photoIndex) => `
        <img
          class="${rotates ? `service-card__photo ${photoIndex === 0 ? 'is-active' : ''}` : ''}"
          src="${assetBase}${photo.image}"
          alt="${photo.alt}"
          loading="lazy"
          data-parallax
          style="object-position: ${service.position}">
      `).join('')}
      ${rotates ? `
        <button type="button" class="service-card__photo-nav service-card__photo-nav--prev" data-photo-prev aria-label="Foto anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button type="button" class="service-card__photo-nav service-card__photo-nav--next" data-photo-next aria-label="Foto siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      ` : ''}
      ${service.video ? `
        <button type="button" class="service-card__play" data-video-trigger="${assetBase}${service.video}" aria-label="Reproducir video de ${service.title}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
        </button>
      ` : ''}
    </div>
    <div class="service-card__body">
      <p class="eyebrow">${service.label}</p>
      <h3>${service.title}</h3>
      <p class="service-card__summary">${service.summary}</p>
      <p class="service-card__text">${service.text}</p>
      <div class="cta-group cta-group--card">
        <a class="cta-button cta-button--small" href="#contacto">
          <span>CONTÁCTENOS HOY</span>
        </a>
      </div>
    </div>
  </article>
`
}

const lineIcon = (name) => {
  const paths = {
    experience: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.25 2"/><path d="M8.5 2.8 7 1.5m8.5 1.3L17 1.5"/>',
    location: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    email: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>',
    factory: '<path d="M3 21V9l6 3V9l6 3V5h5l1 16Z"/><path d="M7 17h2m4 0h2m4 0h2"/>',
    lab: '<path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 16h9"/>',
    support: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 19c0 1.1-.9 2-2 2h-3"/><rect x="3" y="13" width="4" height="6" rx="2"/><rect x="17" y="13" width="4" height="6" rx="2"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><path d="M17.4 6.6h.01"/>'
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      ${paths[name]}
    </svg>
  `
}

const detailIcon = (label) => {
  if (label === 'TELÉFONO') return lineIcon('phone')
  if (label === 'EMAIL') return lineIcon('email')
  if (label === 'INSTAGRAM') return lineIcon('instagram')
  return lineIcon('location')
}

document.querySelector('#app').innerHTML = `
  <header class="site-header" data-header>
    <a class="site-logo" href="#inicio" aria-label="${content.brand}, Inicio">
      <img class="site-logo__img site-logo__img--light" src="${assetBase}images/vatten/vatten-logo-light.png" alt="${content.brand}">
      <img class="site-logo__img site-logo__img--dark" src="${assetBase}images/vatten/vatten-logo-dark.png" alt="${content.brand}">
    </a>

    <nav class="desktop-nav" aria-label="Navegación principal">
      ${content.navigation.map(navLink).join('')}
    </nav>

    <button
      class="menu-button"
      type="button"
      aria-label="Abrir menú"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-menu-button>
      <span></span>
      <span></span>
    </button>
  </header>

  <div class="mobile-menu" id="mobile-menu" aria-hidden="true" data-mobile-menu>
    <div class="mobile-menu__orb" aria-hidden="true"></div>
    <p class="mobile-menu__eyebrow" aria-hidden="true">
      <span>VATTEN S.R.L.</span>
      <span>30+ años tratando agua industrial</span>
    </p>
    <nav class="mobile-menu__nav" aria-label="Navegación móvil">
      ${content.navigation.map((link, index) => `
        <a href="${link.href}">
          <em>0${index + 1}</em>
          <span>${link.label}</span>
        </a>
      `).join('')}
    </nav>
    <div class="mobile-menu__footer">
      ${cta('mobile-menu__cta')}
      <div class="mobile-menu__quick">
        <a href="${content.whatsapp.href}" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.3-.7-2.8-1.13-4.6-3.97-4.74-4.15-.14-.19-1.13-1.51-1.13-2.88 0-1.37.72-2.04.97-2.32.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.27 1.64 2.06 1.13 1.02 2.08 1.34 2.37 1.49.29.15.46.13.63-.08.17-.21.72-.85.92-1.14.19-.29.39-.24.65-.14.26.1 1.68.8 1.97.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z"/></svg>
        </a>
        <a href="${content.contact.details.find((d) => d.label === 'TELÉFONO').href}" aria-label="Llamar por teléfono">${lineIcon('phone')}</a>
        <a href="${content.contact.details.find((d) => d.label === 'EMAIL').href}" aria-label="Enviar email">${lineIcon('email')}</a>
        <a href="${content.contact.social.href}" target="_blank" rel="noreferrer" aria-label="Instagram">${lineIcon('instagram')}</a>
      </div>
    </div>
  </div>

  <a
    class="whatsapp-float"
    href="${content.whatsapp.href}"
    target="_blank"
    rel="noreferrer"
    aria-label="${content.whatsapp.label}">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.3-.7-2.8-1.13-4.6-3.97-4.74-4.15-.14-.19-1.13-1.51-1.13-2.88 0-1.37.72-2.04.97-2.32.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.27 1.64 2.06 1.13 1.02 2.08 1.34 2.37 1.49.29.15.46.13.63-.08.17-.21.72-.85.92-1.14.19-.29.39-.24.65-.14.26.1 1.68.8 1.97.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z"/>
    </svg>
  </a>

  <button
    type="button"
    class="back-to-top"
    data-back-to-top
    aria-label="Volver arriba">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 19V5"/>
      <path d="M6 11l6-6 6 6"/>
    </svg>
  </button>

  <div class="video-modal" data-video-modal aria-hidden="true">
    <div class="video-modal__panel">
      <button type="button" class="video-modal__close" data-video-close aria-label="Cerrar video">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18"/>
        </svg>
      </button>
      <video data-video-modal-player controls playsinline></video>
    </div>
  </div>

  <main>
    <section class="hero water-bg" id="inicio">
      <video
        class="section-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-hidden="true">
        <source src="${assetBase}video/vatten-hero-agua-final.mp4" type="video/mp4">
      </video>
      <div class="section-video__overlay" aria-hidden="true"></div>
      <div class="water-bg__layer water-bg__layer--one" aria-hidden="true"></div>
      <div class="water-bg__layer water-bg__layer--two" aria-hidden="true"></div>
      <div class="water-bg__wave" aria-hidden="true"></div>
      <div class="noise" aria-hidden="true"></div>

      <div class="hero__content">
        <p class="eyebrow eyebrow--light" data-reveal>${content.hero.label}</p>
        <h1
          aria-label="${content.hero.titlePrimary} ${content.hero.titleSecondary}"
          data-reveal>
          <span class="hero__title-primary">${content.hero.titlePrimary}</span>
          <em class="hero__title-secondary">${content.hero.titleSecondary}</em>
        </h1>
        <p class="hero__description" data-reveal>${content.hero.description}</p>
        <div data-reveal>${ctaGroup('cta-group--hero')}</div>
      </div>

      <div class="hero__waterline" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
    </section>

    <section class="about section-shell" id="nosotros">
      <div class="about-redesign">
        <header class="about-redesign__heading">
          <p class="eyebrow" data-reveal>${content.about.label}</p>
          <h2
            class="section-heading__split"
            aria-label="${content.about.title}"
            data-reveal>
            <span>Somos una empresa enfocada</span>
            <em>en el tratamiento de aguas industriales</em>
          </h2>
        </header>

        <div class="about-redesign__overview">
          <div class="about-redesign__copy">
            <p class="about__featured" data-reveal>${content.about.featured}</p>
            <div class="about__body">
              ${content.about.paragraphs.map((paragraph) => `<p data-reveal>${paragraph}</p>`).join('')}
            </div>
          </div>

          <div class="about-gallery" data-about-gallery data-reveal>
            <div class="about-gallery__viewport">
              ${content.about.gallery.map((image, index) => `
                <figure
                  class="about-gallery__slide ${index === 0 ? 'is-active' : ''}"
                  data-about-slide
                  aria-hidden="${index !== 0}">
                  <img
                    src="${assetBase}${image.image}"
                    alt="${image.alt}"
                    loading="${index === 0 ? 'eager' : 'lazy'}">
                </figure>
              `).join('')}
              <div class="about-gallery__index" aria-hidden="true">
                <span data-gallery-current>01</span>
                <i></i>
                <span>0${content.about.gallery.length}</span>
              </div>
            </div>
            <div class="about-gallery__controls" aria-label="Imágenes sobre VATTEN">
              ${content.about.gallery.map((image, index) => `
                <button
                  type="button"
                  class="${index === 0 ? 'is-active' : ''}"
                  data-about-control="${index}"
                  aria-label="Ver imagen ${index + 1}"
                  aria-pressed="${index === 0}">
                  <span>0${index + 1}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <ul class="about-highlights" aria-label="Características de VATTEN" data-reveal>
          ${content.about.highlights.map((highlight, index) => `
            <li style="--delay: ${index * 70}ms">
              <span class="about-highlights__icon" aria-hidden="true">${lineIcon(highlight.icon)}</span>
              <div>
                ${highlight.number ? `<strong>${highlight.number}</strong>` : ''}
                <span>${highlight.label}</span>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section class="services-intro water-bg" id="servicios">
      <video
        class="section-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-hidden="true">
        <source src="${assetBase}video/vatten-hero.mp4" type="video/mp4">
      </video>
      <div class="section-video__overlay" aria-hidden="true"></div>
      <div class="water-bg__layer water-bg__layer--one" aria-hidden="true"></div>
      <div class="water-bg__layer water-bg__layer--two" aria-hidden="true"></div>
      <div class="water-bg__wave" aria-hidden="true"></div>
      <div class="noise" aria-hidden="true"></div>
      <div class="section-shell services-intro__content">
        <p class="eyebrow eyebrow--light" data-reveal>${content.servicesIntro.label}</p>
        <h2 data-reveal>
          <span>${content.servicesIntro.title.split(' para ')[0]}</span>
          <em>para ${content.servicesIntro.title.split(' para ')[1]}</em>
        </h2>
        <p data-reveal>${content.servicesIntro.description}</p>
        <div data-reveal>
          <div class="cta-group cta-group--light">
            <a class="cta-button cta-button--secondary" href="#contacto">
              <span>CONTÁCTENOS HOY</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="services section-shell" aria-label="Servicios de VATTEN">
      <div class="services-grid">
        ${content.services.map(serviceCard).join('')}
      </div>
    </section>

    <section class="certifications section-shell" aria-labelledby="certifications-title">
      <div class="certifications__heading" data-reveal>
        <p class="eyebrow">${content.certifications.title.toUpperCase()}</p>
        <h2 id="certifications-title">${content.certifications.title}</h2>
      </div>

      <div class="certifications__grid">
        ${content.certifications.items.map((certificate, index) => `
          <article class="certificate-card" data-reveal style="--delay: ${index * 80}ms">
            <div class="certificate-card__image">
              <img
                src="${assetBase}${certificate.image}"
                alt="${certificate.alt}"
                loading="lazy">
            </div>
            <a
              class="certificate-card__download"
              href="${assetBase}${certificate.pdf}"
              download>
              <span>${content.certifications.downloadLabel}</span>
            </a>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="contact section-shell" id="contacto">
      <div class="contact__intro">
        <p class="eyebrow" data-reveal>CONTACTO</p>
        <h2 data-split data-reveal>${content.contact.title}</h2>
        <p data-reveal>${content.contact.description}</p>
      </div>

      <div class="contact__grid">
        <form class="contact-form" data-contact-form data-reveal>
          <div class="form-grid">
            ${content.contact.fields.slice(0, 4).map((field) => `
              <label>
                <span>${field}</span>
                <input
                  type="${field === 'Email' ? 'email' : field === 'Teléfono' ? 'tel' : 'text'}"
                  name="${field}"
                  autocomplete="${field === 'Nombre' ? 'name' : field === 'Email' ? 'email' : field === 'Teléfono' ? 'tel' : 'organization'}"
                  required>
              </label>
            `).join('')}
            <label class="form-message">
              <span>${content.contact.fields[4]}</span>
              <textarea name="${content.contact.fields[4]}" rows="4" required></textarea>
            </label>
          </div>
          <button class="submit-button" type="submit">
            <span>${content.contact.submit}</span>
          </button>
        </form>

        <address class="contact-details" data-reveal>
          ${content.contact.details.map((detail) => `
            <div class="contact-detail">
              <i aria-hidden="true">${detailIcon(detail.label)}</i>
              <div>
                <span>${detail.label}</span>
                ${detail.href
                  ? `<a href="${detail.href}">${detail.value}</a>`
                  : `<p>${detail.value}</p>`}
                ${detail.directionsHref
                  ? `<a class="contact-detail__directions" href="${detail.directionsHref}" target="_blank" rel="noreferrer">Cómo llegar</a>`
                  : ''}
              </div>
            </div>
          `).join('')}
          <div class="contact-detail">
            <i aria-hidden="true">${detailIcon(content.contact.social.label)}</i>
            <div>
              <span>${content.contact.social.label}</span>
              <a href="${content.contact.social.href}" target="_blank" rel="noreferrer">${content.contact.social.value}</a>
            </div>
          </div>
        </address>
      </div>

      <div class="map-wrap" data-reveal>
        <iframe
          title="Ubicación de VATTEN en Parque Industrial Moreno"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.9278538334115!2d-58.825964!3d-34.56028750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc91506e966f73%3A0x1d904619559703c4!2sVatten%20Aguas%20y%20Servicios%20SRL!5e1!3m2!1ses!2sar!4v1786027994335!5m2!1ses!2sar"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer__top section-shell">
      <div class="footer-brand">
        <img src="${assetBase}images/vatten/vatten-logo-light.png" alt="${content.brand}">
      </div>

      <nav class="footer-nav" aria-label="Navegación del pie">
        ${content.navigation.map(navLink).join('')}
      </nav>

      <div class="footer-contact">
        ${content.contact.details.map((detail) => `
          <div>
            <span>${detail.label}</span>
            ${detail.href
              ? `<a href="${detail.href}">${detail.value}</a>`
              : `<p>${detail.value}</p>`}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="site-footer__bottom section-shell">
      <p>${content.brand}</p>
      <a href="#inicio">Inicio ↑</a>
    </div>

  </footer>
`

const menuButton = document.querySelector('[data-menu-button]')
const mobileMenu = document.querySelector('[data-mobile-menu]')

const setMenu = (open) => {
  menuButton.classList.toggle('is-open', open)
  mobileMenu.classList.toggle('is-open', open)
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
  mobileMenu.setAttribute('aria-hidden', String(!open))
  document.body.classList.toggle('menu-open', open)
}

menuButton.addEventListener('click', () => {
  setMenu(!mobileMenu.classList.contains('is-open'))
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false)
})

const header = document.querySelector('[data-header]')
const backToTop = document.querySelector('[data-back-to-top]')
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24)
  backToTop.classList.toggle('is-visible', window.scrollY > 700)
}, { passive: true })

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const videoModal = document.querySelector('[data-video-modal]')
const videoModalPlayer = videoModal.querySelector('[data-video-modal-player]')

const closeVideoModal = () => {
  videoModal.classList.remove('is-open')
  videoModal.setAttribute('aria-hidden', 'true')
  videoModalPlayer.pause()
  videoModalPlayer.removeAttribute('src')
  videoModalPlayer.load()
}

const openVideoModal = (src) => {
  videoModalPlayer.src = src
  videoModal.classList.add('is-open')
  videoModal.setAttribute('aria-hidden', 'false')
  videoModalPlayer.play().catch(() => {})
}

document.querySelectorAll('[data-video-trigger]').forEach((trigger) => {
  trigger.addEventListener('click', () => openVideoModal(trigger.dataset.videoTrigger))
})

videoModal.querySelector('[data-video-close]').addEventListener('click', closeVideoModal)
videoModal.addEventListener('click', (event) => {
  if (event.target === videoModal) closeVideoModal()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeVideoModal()
})

document.querySelectorAll('[data-split]').forEach((element) => {
  const text = element.textContent.trim()
  element.setAttribute('aria-label', text)
  element.innerHTML = text
    .split(/\s+/)
    .map((word, index) => `<span aria-hidden="true" style="--word-delay: ${index * 35}ms">${word}</span>`)
    .join(' ')
})

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    revealObserver.unobserve(entry.target)
  })
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -45px'
})

document.querySelectorAll('[data-reveal]').forEach((element) => {
  revealObserver.observe(element)
})

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const sectionVideos = [...document.querySelectorAll('.section-video')]
const aboutGallery = document.querySelector('[data-about-gallery]')

if (aboutGallery) {
  const gallerySlides = [...aboutGallery.querySelectorAll('[data-about-slide]')]
  const galleryControls = [...aboutGallery.querySelectorAll('[data-about-control]')]
  const galleryCurrent = aboutGallery.querySelector('[data-gallery-current]')
  let galleryIndex = 0
  let galleryTimer = null

  const showGallerySlide = (nextIndex) => {
    galleryIndex = nextIndex
    gallerySlides.forEach((slide, index) => {
      const active = index === galleryIndex
      slide.classList.toggle('is-active', active)
      slide.setAttribute('aria-hidden', String(!active))
    })
    galleryControls.forEach((control, index) => {
      const active = index === galleryIndex
      control.classList.toggle('is-active', active)
      control.setAttribute('aria-pressed', String(active))
    })
    galleryCurrent.textContent = `0${galleryIndex + 1}`
  }

  const stopGallery = () => {
    if (!galleryTimer) return
    window.clearInterval(galleryTimer)
    galleryTimer = null
  }

  const startGallery = () => {
    if (reducedMotion.matches || galleryTimer) return
    galleryTimer = window.setInterval(() => {
      showGallerySlide((galleryIndex + 1) % gallerySlides.length)
    }, 5200)
  }

  galleryControls.forEach((control, index) => {
    control.addEventListener('click', () => {
      showGallerySlide(index)
      stopGallery()
      startGallery()
    })
  })

  aboutGallery.addEventListener('mouseenter', stopGallery)
  aboutGallery.addEventListener('mouseleave', startGallery)
  aboutGallery.addEventListener('focusin', stopGallery)
  aboutGallery.addEventListener('focusout', startGallery)
  startGallery()
}

document.querySelectorAll('[data-photo-rotator]').forEach((rotator) => {
  const photos = [...rotator.querySelectorAll('.service-card__photo')]
  if (photos.length < 2) return

  let photoIndex = 0
  let rotatorTimer = null

  const showPhoto = (nextIndex) => {
    photoIndex = (nextIndex + photos.length) % photos.length
    photos.forEach((photo, index) => {
      photo.classList.toggle('is-active', index === photoIndex)
    })
  }

  const stopRotator = () => {
    if (!rotatorTimer) return
    window.clearInterval(rotatorTimer)
    rotatorTimer = null
  }

  const startRotator = () => {
    if (reducedMotion.matches || rotatorTimer) return
    rotatorTimer = window.setInterval(() => {
      showPhoto(photoIndex + 1)
    }, 4200 + Math.random() * 600)
  }

  rotator.querySelector('[data-photo-prev]')?.addEventListener('click', () => {
    showPhoto(photoIndex - 1)
    stopRotator()
    startRotator()
  })

  rotator.querySelector('[data-photo-next]')?.addEventListener('click', () => {
    showPhoto(photoIndex + 1)
    stopRotator()
    startRotator()
  })

  startRotator()
})

if (!reducedMotion.matches) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target

      if (entry.isIntersecting) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, { threshold: 0.12 })

  sectionVideos.forEach((video) => videoObserver.observe(video))
}

const parallaxImages = [...document.querySelectorAll('[data-parallax]')]
let parallaxFrame = null

const updateParallax = () => {
  parallaxFrame = null
  if (reducedMotion.matches) return

  const viewport = window.innerHeight
  parallaxImages.forEach((image) => {
    const rect = image.parentElement.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > viewport) return
    const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport
    image.style.setProperty('--parallax-y', `${progress * -20}px`)
  })
}

window.addEventListener('scroll', () => {
  if (parallaxFrame) return
  parallaxFrame = requestAnimationFrame(updateParallax)
}, { passive: true })

window.addEventListener('resize', updateParallax)
updateParallax()

document.querySelector('[data-contact-form]').addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const lines = content.contact.fields.map((field) => `${field}: ${data.get(field)}`)
  window.location.href =
    `mailto:${content.contact.details[2].value}?subject=${encodeURIComponent(content.brand)}&body=${encodeURIComponent(lines.join('\n\n'))}`
})

if (window.location.hash) {
  requestAnimationFrame(() => {
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()
  })
}
