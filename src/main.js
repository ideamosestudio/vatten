import './style.css'

const serviceTags = [
  'Calderas',
  'Circuitos cerrados',
  'Torres de enfriamiento',
  'Ósmosis inversa',
  'Ablandadores',
  'Intercambiadores',
  'Control de variables',
  'Resinas de intercambio iónico',
  'Antiescalantes',
  'Mantenimiento'
]

document.querySelector('#app').innerHTML = `
  <header class="topbar" data-header>
    <a class="logo" href="#inicio" aria-label="VATTEN Aguas y Servicios, inicio">
      <img src="/images/vatten-logo.png" alt="VATTEN Aguas y Servicios">
    </a>
    <nav class="desktop-nav" aria-label="Navegación principal">
      <a href="#empresa">La empresa</a>
      <a href="#soluciones">Soluciones</a>
      <a href="#planta">Nuestra planta</a>
    </nav>
    <a class="nav-contact" href="#contacto">Contactar <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" data-menu-toggle>
      <span></span><span></span>
    </button>
  </header>

  <div class="mobile-menu" data-mobile-menu aria-hidden="true">
    <div class="mobile-menu__wash"></div>
    <nav aria-label="Navegación móvil">
      <a href="#inicio"><span>01</span>Inicio</a>
      <a href="#empresa"><span>02</span>La empresa</a>
      <a href="#soluciones"><span>03</span>Soluciones</a>
      <a href="#planta"><span>04</span>Nuestra planta</a>
      <a href="#contacto"><span>05</span>Contacto</a>
    </nav>
    <div class="mobile-menu__foot">
      <a href="tel:+541162399993">+54 (11) 6239-9993</a>
      <a href="mailto:info@vattenaguas.ar">info@vattenaguas.ar</a>
    </div>
  </div>

  <main>
    <section class="hero" id="inicio">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/images/vatten-hero-poster.jpg"
        aria-hidden="true">
        <source src="/media/vatten-hero.webm" type="video/webm">
        <source src="/media/vatten-hero.mp4" type="video/mp4">
      </video>
      <div class="hero__overlay"></div>
      <div class="hero__glow hero__glow--one"></div>
      <div class="hero__glow hero__glow--two"></div>
      <div class="hero__content">
        <p class="kicker hero__kicker reveal">Agua industrial · Ingeniería argentina</p>
        <h1 class="reveal">
          Soluciones que hacen<br>
          <span>fluir la industria.</span>
        </h1>
        <p class="hero__lead reveal">
          Diseñamos tratamientos de agua a medida para que cada proceso
          sea más eficiente, confiable y sustentable.
        </p>
        <div class="hero__actions reveal">
          <a class="glow-button" href="#soluciones">
            <span>Conocer soluciones</span><b aria-hidden="true">↘</b>
          </a>
          <a class="round-link" href="#empresa" aria-label="Ir a La empresa">↓</a>
        </div>
      </div>
      <div class="hero__meta reveal">
        <span>Buenos Aires, Argentina</span>
        <span>Desde 1994</span>
      </div>
    </section>

    <section class="about section-pad" id="empresa">
      <div class="section-head reveal">
        <p class="kicker"><span>01</span> La empresa</p>
        <p class="section-note">Experiencia aplicada a cada desafío hídrico.</p>
      </div>
      <div class="about__grid">
        <div class="about__stat reveal">
          <strong>30<span>+</span></strong>
          <p>años de experiencia<br>en la industria</p>
        </div>
        <div class="about__copy reveal">
          <h2>Conocemos el agua.<br><em>Entendemos la industria.</em></h2>
          <p>
            VATTEN AGUAS Y SERVICIOS SRL es una compañía argentina dedicada
            a prestar servicios en el área de tratamientos de aguas industriales,
            adaptados a la necesidad de cada cliente.
          </p>
          <div class="micro-features">
            <span>Ingeniería propia</span>
            <span>Control analítico</span>
            <span>Cobertura nacional</span>
          </div>
        </div>
      </div>
    </section>

    <section class="solutions" id="soluciones">
      <div class="solutions__intro section-pad">
        <div class="section-head section-head--light reveal">
          <p class="kicker"><span>02</span> Qué hacemos</p>
          <p class="section-note">Soluciones integrales, de punta a punta.</p>
        </div>
        <h2 class="reveal">Tratamiento de aguas.<br><em>Sin fórmulas genéricas.</em></h2>
        <p class="solutions__lead reveal">
          Integramos tecnología, química, ingeniería y seguimiento operativo para
          resolver las necesidades reales de cada planta.
        </p>
        <div class="tag-cloud reveal">
          ${serviceTags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </div>

      <div class="service-grid section-pad">
        <article class="service-card service-card--featured reveal">
          <div class="service-card__copy">
            <p class="card-label"><i></i> Tratamientos</p>
            <h3>Calderas y sistemas de vapor</h3>
            <p>Prevención de corrosión e incrustaciones con productos, monitoreo y control automatizado.</p>
            <a href="#contacto" class="card-link">Consultar <span>↗</span></a>
          </div>
          <div class="service-card__media image-reveal">
            <img src="/images/fabrica-4.jpg" alt="Instalaciones de VATTEN para tratamiento de agua">
          </div>
        </article>

        <article class="service-card reveal">
          <div class="service-card__copy">
            <p class="card-label"><i></i> Refrigeración</p>
            <h3>Sistemas de enfriamiento</h3>
            <p>Soluciones personalizadas para optimizar la transferencia de calor y controlar corrosión, incrustaciones y contaminación biológica.</p>
          </div>
          <div class="service-card__media service-card__media--blue image-reveal">
            <img src="/images/refrigeracion.png" alt="Sistema industrial de refrigeración">
          </div>
        </article>

        <article class="service-card reveal">
          <div class="service-card__copy">
            <p class="card-label"><i></i> Alta pureza</p>
            <h3>Ósmosis inversa</h3>
            <p>Programas específicos para membranas de ósmosis, ultra y nanofiltración que previenen ensuciamiento e incrustaciones.</p>
          </div>
          <div class="service-card__media image-reveal">
            <img src="/images/osmosis-inversa.jpg" alt="Sistema de ósmosis inversa">
          </div>
        </article>

        <article class="service-card service-card--dark reveal">
          <div class="service-card__copy">
            <p class="card-label"><i></i> Gestión responsable</p>
            <h3>Efluentes cloacales e industriales</h3>
            <p>Procesos físicos, químicos y biológicos para devolver el agua al ambiente dentro de la legislación vigente o reutilizarla.</p>
            <ul>
              <li>Floculantes y coagulantes</li>
              <li>Biocidas específicos</li>
              <li>Deshidratación de barros</li>
            </ul>
          </div>
          <div class="service-card__media image-reveal">
            <img src="/images/efluentes-industriales.jpg" alt="Tratamiento de efluentes industriales">
          </div>
        </article>
      </div>
    </section>

    <section class="plant section-pad" id="planta">
      <div class="section-head reveal">
        <p class="kicker"><span>03</span> Infraestructura</p>
        <p class="section-note">Donde las soluciones se convierten en resultados.</p>
      </div>
      <div class="plant__headline">
        <h2 class="reveal">Fabricación y<br><em>laboratorio propios.</em></h2>
        <p class="reveal">
          En nuestro predio del Parque Industrial PIM II reunimos la planta de
          fabricación, un moderno laboratorio, el control de operaciones y las
          oficinas administrativas.
        </p>
      </div>
      <figure class="plant__visual reveal image-reveal">
        <img src="/images/fabrica2.jpg" alt="Nuevas oficinas y planta de VATTEN en el Parque Industrial Moreno">
        <figcaption class="glass-card">
          <span>Planta Moreno</span>
          <b>Fabricación · Laboratorio · Operaciones</b>
          <small>Buenos Aires, Argentina</small>
        </figcaption>
      </figure>
      <div class="process-strip reveal">
        <div><span>01</span><b>Ingeniería</b></div>
        <div><span>02</span><b>Fabricación</b></div>
        <div><span>03</span><b>Aplicación</b></div>
        <div><span>04</span><b>Control</b></div>
        <div><span>05</span><b>Mantenimiento</b></div>
      </div>
    </section>

    <section class="cta-band" id="contacto">
      <div class="cta-band__content reveal">
        <p class="kicker">Hablemos de su proyecto</p>
        <h2>¿Qué necesita<br>resolver su planta?</h2>
        <p>Nuestros especialistas pueden diseñar un tratamiento específico para su proceso.</p>
        <div class="cta-band__actions">
          <a class="glow-button glow-button--light" href="mailto:info@vattenaguas.ar">
            <span>Enviar una consulta</span><b>↗</b>
          </a>
          <a class="phone-link" href="tel:+541162399993">+54 (11) 6239-9993</a>
        </div>
      </div>
      <div class="cta-band__rings" aria-hidden="true"><i></i><i></i><i></i></div>
    </section>

    <section class="location">
      <div class="location__top section-pad">
        <div class="section-head reveal">
          <p class="kicker"><span>04</span> Visítenos</p>
        </div>
        <div class="location__copy reveal">
          <h2>Nuevas Oficinas<br>y Planta</h2>
          <address>
            Parque Industrial Moreno<br>
            Cuartel V — PIM II<br>
            RP24 7900 · B1740ADB<br>
            Buenos Aires, Argentina
          </address>
          <a class="plain-button" href="https://www.google.com/maps/search/?api=1&query=Parque+Industrial+Moreno+PIM+II+RP24+7900" target="_blank" rel="noreferrer">
            Cómo llegar <span>↗</span>
          </a>
        </div>
      </div>
      <div class="map-wrap">
        <iframe
          title="Ubicación de VATTEN en Parque Industrial Moreno"
          src="https://www.google.com/maps?q=Parque%20Industrial%20Moreno%20PIM%20II%20RP24%207900%20Buenos%20Aires&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="map-card glass-card">
          <span>VATTEN</span>
          <b>Parque Industrial Moreno</b>
          <small>Cuartel V — PIM II</small>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="/images/vatten-logo.png" alt="VATTEN Aguas y Servicios">
        <p>Soluciones integrales para el tratamiento de aguas industriales.</p>
      </div>
      <div class="footer__col">
        <span>Navegación</span>
        <a href="#empresa">La empresa</a>
        <a href="#soluciones">Soluciones</a>
        <a href="#planta">Nuestra planta</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div class="footer__col">
        <span>Contacto</span>
        <a href="tel:+541162399993">+54 (11) 6239-9993</a>
        <a href="mailto:info@vattenaguas.ar">info@vattenaguas.ar</a>
        <p>Buenos Aires<br>Argentina</p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© ${new Date().getFullYear()} Vatten Aguas y Servicios SRL</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
    <p class="footer__watermark" aria-hidden="true">VATTEN</p>
  </footer>
`

const menuButton = document.querySelector('[data-menu-toggle]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const header = document.querySelector('[data-header]')

const setMenuState = (isOpen) => {
  menuButton.classList.toggle('is-open', isOpen)
  mobileMenu.classList.toggle('is-open', isOpen)
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
  mobileMenu.setAttribute('aria-hidden', String(!isOpen))
  document.body.classList.toggle('menu-open', isOpen)
}

menuButton.addEventListener('click', () => {
  setMenuState(!mobileMenu.classList.contains('is-open'))
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false))
})

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 32)
}, { passive: true })

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12, rootMargin: '0px 0px -40px' })

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
  revealObserver.observe(element)
})

const video = document.querySelector('.hero__video')
video.play().catch(() => {})
