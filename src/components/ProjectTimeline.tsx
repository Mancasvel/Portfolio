'use client';

import { motion } from 'framer-motion';

// Datos de los proyectos con timeline
const projects = [
  {
    id: 'conest',
    year: '2023',
    title: 'CoNest',
    description:
      'Plataforma para conectar estudiantes con personas mayores para compartir alojamiento, con enfoque social e intergeneracional.',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    impact:
      'Facilitó más de 500 conexiones intergeneracionales en los primeros 6 meses, creando comunidades más inclusivas.',
    image: '/images/projects/conest.jpg', // Placeholder
    color: '#3B82F6',
  },
  {
    id: 'pawtel',
    year: '2022',
    title: 'Pawtel',
    description:
      'Plataforma de reservas para hoteles caninos, con sistema de pagos, comisiones y dashboards para hoteleros.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
    impact:
      'Incremento de reservas del 45% para los hoteles participantes, mejorando la gestión y visibilidad.',
    image: '/images/projects/pawtel.jpg', // Placeholder
    color: '#10B981',
  },
  {
    id: 'cutelligence',
    year: '2022',
    title: 'Cutelligence',
    description:
      'IA especializada para barberías, con integraciones inteligentes y asistente conversacional.',
    tags: ['React', 'TensorFlow.js', 'OpenAI', 'Firebase'],
    impact:
      'Reducción del 30% en tiempos de gestión y aumento del 25% en satisfacción de clientes.',
    image: '/images/projects/cutelligence.jpg', // Placeholder
    color: '#8B5CF6',
  },
  {
    id: 'ecommerce-platform',
    year: '2021',
    title: 'Plataforma E-commerce',
    description:
      'Sistema completo de comercio electrónico con múltiples vendedores, pagos y gestión de productos.',
    tags: ['React', 'Node.js', 'MySQL', 'Redis', 'AWS'],
    impact:
      'Procesamiento de más de 10.000 transacciones mensuales con un tiempo de respuesta optimizado.',
    image: '/images/projects/ecommerce.jpg', // Placeholder
    color: '#F59E0B',
  },
  {
    id: 'smart-dashboard',
    year: '2020',
    title: 'Dashboard Inteligente',
    description:
      'Panel de control con analíticas avanzadas para empresas, con visualizaciones en tiempo real y predicciones.',
    tags: ['Angular', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    impact:
      'Implementado en 12 empresas, mejorando la toma de decisiones basada en datos en un 40%.',
    image: '/images/projects/dashboard.jpg', // Placeholder
    color: '#EC4899',
  },
];

export default function ProjectTimeline() {
  return (
    <div className="relative">
      {/* Línea vertical del timeline */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent opacity-40 transform md:translate-x-px" />

      {/* Proyectos en timeline */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Punto del timeline */}
            <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-accent transform -translate-x-2 md:-translate-x-2.5 z-10" />

            {/* Contenido del proyecto */}
            <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10">
              <span
                className="inline-block py-1 px-3 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${project.color}33`, color: project.color }}
              >
                {project.year}
              </span>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Impacto
                </h4>
                <p className="text-gray-300">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={`#${project.id}`}
                  className="text-accent hover:text-blue-400 transition-colors font-medium inline-flex items-center"
                >
                  Ver detalles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Imagen del proyecto (vista vacía para el otro lado del timeline) */}
            <div className="md:w-1/2 md:pl-10">
              {index % 2 === 0 ? (
                <div
                  className="h-60 md:h-80 rounded-xl overflow-hidden"
                  style={{ background: `linear-gradient(45deg, ${project.color}33, ${project.color}66)` }}
                >
                  <div className="h-full flex items-center justify-center">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                  {/* Cuando tengas imágenes, descomenta esto:
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                  */}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 