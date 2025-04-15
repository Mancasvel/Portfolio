'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Importamos los mismos datos de proyectos que en ProjectTimeline
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

export default function ProjectGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          layoutId={project.id}
          onClick={() => handleCardClick(project.id)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -10 }}
          className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer"
        >
          <div
            className="h-48"
            style={{ background: `linear-gradient(45deg, ${project.color}33, ${project.color}66)` }}
          >
            <div className="h-full flex items-center justify-center">
              <h3 className="text-3xl font-bold">{project.title}</h3>
            </div>
            {/* Cuando tengas imágenes, descomenta esto:
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              className="rounded-t-xl"
            />
            */}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span
                className="py-1 px-3 rounded-full text-xs font-semibold"
                style={{ background: `${project.color}33`, color: project.color }}
              >
                {project.year}
              </span>
            </div>
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs bg-gray-800 rounded-full">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Detalle del proyecto seleccionado */}
      {selectedId && (
        <motion.div
          layoutId={selectedId}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          />
          
          <motion.div
            className="bg-gray-900 rounded-xl overflow-hidden relative max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 z-10"
              onClick={() => setSelectedId(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            {projects
              .filter((p) => p.id === selectedId)
              .map((project) => (
                <div key={project.id}>
                  <div
                    className="h-64 relative"
                    style={{ background: `linear-gradient(45deg, ${project.color}33, ${project.color}66)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold">{project.title}</h3>
                    </div>
                    {/* Cuando tengas imágenes, descomenta esto:
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    */}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span
                        className="py-1 px-3 rounded-full text-xs font-semibold"
                        style={{ background: `${project.color}33`, color: project.color }}
                      >
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        Impacto
                      </h4>
                      <p className="text-gray-300">{project.impact}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="btn-primary">Ver demo</button>
                      <button className="py-2 px-6 rounded-md font-semibold border border-white/20 hover:border-white/40 transition-colors duration-300">
                        Ver caso de estudio
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 