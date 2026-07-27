export const content = {
  brand: 'VATTEN AGUAS Y SERVICIOS SRL',
  cta: {
    label: 'CONSULTE CON UN ESPECIALISTA',
    href: 'https://wa.link/2t2svz'
  },
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Blog', href: 'https://ideamos.ar/vatten/blog/', external: true },
    { label: 'Contacto', href: '#contacto' }
  ],
  hero: {
    label: 'TRATAMIENTO DE AGUAS INDUSTRIALES',
    titlePrimary: 'Soluciones a medida',
    titleSecondary: 'para optimizar el agua de su industria',
    description:
      'Tratamientos químicos, asistencia técnica y control especializado para calderas, sistemas de enfriamiento, ósmosis inversa y efluentes industriales.'
  },
  about: {
    label: 'SOBRE NOSOTROS',
    title: 'Somos una empresa enfocada en el tratamiento de aguas industriales',
    featured:
      'VATTEN AGUAS Y SERVICIOS SRL es una compañía argentina dedicada a prestar servicios en el área de tratamientos de aguas industriales, adaptados a la necesidad de cada cliente.',
    paragraphs: [
      'Acompañamos a industrias y comercios con experiencia técnica, fabricación propia y laboratorio especializado.',
      'Con más de 30 años de trayectoria, desarrollamos tratamientos personalizados para optimizar el uso del agua en procesos industriales. Contamos con planta de fabricación, laboratorio propio y un equipo técnico orientado a resolver necesidades concretas en calderas, sistemas de enfriamiento, ósmosis inversa, ablandadores, intercambiadores y efluentes.',
      'Nuestro trabajo combina conocimiento, control y asistencia cercana para proteger instalaciones, mejorar la eficiencia operativa y acompañar la continuidad de cada cliente.'
    ]
  },
  bento: {
    experienceNumber: '30+',
    experienceLabel: 'años de experiencia en la industria',
    concepts: ['Fabricación propia', 'Laboratorio especializado', 'Asistencia técnica']
  },
  servicesIntro: {
    label: 'CONOZCA NUESTROS SERVICIOS',
    title: 'Tratamientos a medida para sistemas industriales de agua',
    description:
      'Soluciones químicas y asistencia técnica para calderas, sistemas de enfriamiento, ósmosis inversa y efluentes industriales.'
  },
  services: [
    {
      slug: 'caldera',
      label: 'SERVICIOS',
      title: 'Sistema de caldera y vapor',
      summary:
        'Químicos y control inteligente para proteger calderas, evitar fallas y optimizar el rendimiento del sistema.',
      text:
        'Los productos químicos de VATTEN AGUAS Y SERVICIOS están diseñados para prevenir la corrosión y la incrustación en sistemas de vapor y calderas, protegiendo la alimentación, el tratamiento interno y el condensado. Además, integran monitoreo y control automatizados para optimizar el funcionamiento del sistema.',
      image: 'images/vatten/sistema-caldera-vapor.png',
      alt: 'Técnico inspeccionando un sistema industrial de caldera y vapor',
      position: 'center center',
      size: 'large'
    },
    {
      slug: 'enfriamiento',
      label: 'SERVICIOS',
      title: 'Sistema de enfriamiento',
      summary:
        'Soluciones para optimizar la transferencia de calor y proteger sistemas de refrigeración y agua de proceso.',
      text:
        'Desarrollamos soluciones personalizadas para sistemas de refrigeración y agua de proceso, enfocadas en optimizar la transferencia de calor mediante la prevención de incrustaciones, corrosión y contaminación biológica.',
      image: 'images/vatten/torres-enfriamiento.png',
      alt: 'Torres industriales de enfriamiento de agua',
      position: 'center center',
      size: 'medium'
    },
    {
      slug: 'efluentes',
      label: 'SERVICIOS',
      title: 'Efluentes Industriales',
      summary:
        'Tratamiento de aguas residuales para una descarga segura, reutilización responsable y cumplimiento normativo.',
      text:
        'Aplicamos procesos físicos, químicos y biológicos para tratar aguas residuales, eliminando contaminantes y permitiendo su devolución segura al medio ambiente o su reutilización conforme a la normativa vigente.',
      image: 'images/vatten/efluentes-industriales.jpg',
      alt: 'Proceso de descarga y tratamiento de efluentes industriales',
      position: 'center center',
      size: 'medium'
    },
    {
      slug: 'osmosis',
      label: 'SERVICIOS',
      title: 'Sistema de Osmosis inversa',
      summary:
        'Tratamientos para membranas que mejoran la eficiencia, previenen incrustaciones y reducen costos de mantenimiento.',
      text:
        'Ofrecemos programas de tratamiento para sistemas de membrana, como ósmosis inversa, ultrafiltración y nanofiltración, diseñados para prevenir y controlar incrustaciones y ensuciamiento, mejorando la eficiencia y reduciendo costos de mantenimiento.',
      image: 'images/vatten/sistema-osmosis-inversa.jpg',
      alt: 'Equipo industrial de membranas para sistema de ósmosis inversa',
      position: 'center center',
      size: 'wide'
    }
  ],
  contact: {
    title: 'Contactanos',
    description:
      'Complete el formulario con sus datos de contacto y en breve nos estaremos comunicando con usted.',
    fields: ['Nombre', 'Email', 'Teléfono', 'Mensaje'],
    submit: 'ENVIAR',
    details: [
      {
        label: 'DIRECCIÓN',
        value:
          'Parque Industrial Moreno Cuartel V – PIM II RP24 7900, B1740ADB Buenos Aires, Argentina'
      },
      { label: 'TELÉFONO', value: '+54 911 7180 5415', href: 'tel:+5491171805415' },
      {
        label: 'EMAIL',
        value: 'comercial@vattenaguas.ar',
        href: 'mailto:comercial@vattenaguas.ar'
      }
    ]
  }
}
