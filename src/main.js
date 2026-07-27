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
    <b aria-hidden="true">↗</b>
  </a>
`

const serviceCard = (service, index) => `
  <article
    class="service-card service-card--${service.size} service-card--${service.slug}"
    data-reveal
    style="--delay: ${index * 90}ms">
    <div class="service-card__image image-mask">
      <img
        src="${assetBase}${service.image}"
        alt="${service.alt}"
        loading="lazy"
        data-parallax
        style="object-position: ${service.position}">
    </div>
    <div class="service-card__body">
      <p class="eyebrow">${service.label}</p>
      <h3>${service.title}</h3>
      <p class="service-card__summary">${service.summary}</p>
      <p class="service-card__text">${service.text}</p>
      ${cta('cta-button cta-button--small')}
    </div>
  </article>
`

document.querySelector('#app').innerHTML = `
  <header class="site-header" data-header>
    <a class="site-logo" href="#inicio" aria-label="${content.brand}, Inicio">
      <img src="${assetBase}images/vatten/vatten-logo.png" alt="${content.brand}">
    </a>

    <nav class="desktop-nav" aria-label="Navegación principal">
      ${content.navigation.map(navLink).join('')}
    </nav>

    ${cta('header-cta')}

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
    <nav aria-label="Navegación móvil">
      ${content.navigation.map(navLink).join('')}
    </nav>
    ${cta('mobile-menu__cta')}
  </div>

  <main>
    <section class="hero water-bg" id="inicio">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        aria-hidden="true">
        <source src="${asset('video/vatten-hero.mp4')}" type="video/mp4">
      </video>
      <div class="hero__video-overlay" aria-hidden="true"></div>
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
        <div data-reveal>${cta()}</div>
      </div>

      <div class="hero__waterline" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
    </section>

    <section class="about section-shell" id="nosotros">
      <header class="section-heading">
        <p class="eyebrow" data-reveal>${content.about.label}</p>
        <h2 data-split data-reveal>${content.about.title}</h2>
      </header>

      <div class="about__content">
        <p class="about__featured" data-reveal>${content.about.featured}</p>
        <div class="about__body">
          ${content.about.paragraphs.map((paragraph) => `<p data-reveal>${paragraph}</p>`).join('')}
          <div data-reveal>${cta('cta-button cta-button--dark')}</div>
        </div>
      </div>

      <div class="bento" aria-label="Presentación de VATTEN">
        <article class="bento-card bento-card--experience bento-glow" data-reveal>
          <strong>${content.bento.experienceNumber}</strong>
          <p>${content.bento.experienceLabel}</p>
          <span class="bento-card__rings" aria-hidden="true"></span>
        </article>

        <article class="bento-card bento-card--statement bento-glow" data-reveal>
          <p>${content.about.featured}</p>
        </article>

        ${content.bento.concepts.map((concept, index) => `
          <article
            class="bento-card bento-card--concept bento-card--concept-${index + 1} bento-glow"
            data-reveal
            style="--delay: ${(index + 1) * 80}ms">
            <span aria-hidden="true"></span>
            <h3>${concept}</h3>
          </article>
        `).join('')}

        <figure class="bento-card bento-card--photo image-mask" data-reveal>
          <img
            src="${assetBase}images/vatten/torres-enfriamiento.png"
            alt="Torres industriales de enfriamiento de agua"
            loading="lazy"
            data-parallax>
        </figure>
      </div>
    </section>

    <section class="services-intro water-bg" id="servicios">
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
      </div>
    </section>

    <section class="services section-shell" aria-label="Servicios de VATTEN">
      <div class="services-grid">
        ${content.services.map(serviceCard).join('')}
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
            ${content.contact.fields.slice(0, 3).map((field) => `
              <label>
                <span>${field}</span>
                <input
                  type="${field === 'Email' ? 'email' : field === 'Teléfono' ? 'tel' : 'text'}"
                  name="${field}"
                  autocomplete="${field === 'Nombre' ? 'name' : field === 'Email' ? 'email' : 'tel'}"
                  required>
              </label>
            `).join('')}
            <label class="form-message">
              <span>${content.contact.fields[3]}</span>
              <textarea name="${content.contact.fields[3]}" rows="5" required></textarea>
            </label>
          </div>
          <button class="submit-button" type="submit">
            <span>${content.contact.submit}</span>
            <b aria-hidden="true">↗</b>
          </button>
        </form>

        <address class="contact-details" data-reveal>
          ${content.contact.details.map((detail) => `
            <div>
              <span>${detail.label}</span>
              ${detail.href
                ? `<a href="${detail.href}">${detail.value}</a>`
                : `<p>${detail.value}</p>`}
            </div>
          `).join('')}
        </address>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer__top section-shell">
      <div class="footer-brand">
        <img src="${assetBase}images/vatten/vatten-logo.png" alt="${content.brand}">
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

    <p class="site-footer__wordmark" aria-hidden="true">VATTEN</p>
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
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24)
}, { passive: true })

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
