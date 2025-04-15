'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Datos de proyectos destacados
const featuredProjects = [
  {
    id: 'conest',
    title: 'CoNest',
    description: 'Plataforma para conectar estudiantes con personas mayores para compartir alojamiento, con enfoque social e intergeneracional.',
    image: '/images/projects/conest.jpg', // Placeholder, reemplazar con imagen real
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    color: '#3B82F6',
  },
  {
    id: 'pawtel',
    title: 'Pawtel',
    description: 'Plataforma de reservas para hoteles caninos, con sistema de pagos, comisiones y dashboards para hoteleros.',
    image: '/images/projects/pawtel.jpg', // Placeholder, reemplazar con imagen real
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#10B981',
  },
  {
    id: 'cutelligence',
    title: 'Cutelligence',
    description: 'IA especializada para barberías, con integraciones inteligentes y asistente conversacional.',
    image: '/images/projects/cutelligence.jpg', // Placeholder, reemplazar con imagen real
    tags: ['React', 'TensorFlow.js', 'OpenAI', 'Firebase'],
    color: '#8B5CF6',
  },
];

export default function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-5">
            Proyectos <span className="text-accent">destacados</span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Soluciones innovadoras que combinan tecnología, diseño y propósito. 
            Cada proyecto representa un desafío único resuelto con creatividad.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-10">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeProject === index
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeProject === index ? 1 : 0,
                y: activeProject === index ? 0 : 20,
                display: activeProject === index ? 'block' : 'none',
              }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <div>
                <div
                  className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                  style={{ background: `linear-gradient(45deg, ${project.color}33, ${project.color}66)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
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
              </div>
              
              <div>
                <h3 className="heading-md mb-4">{project.title}</h3>
                <p className="text-lg opacity-80 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {/* Enlaces a detalles de proyectos y/o demos */}
                  <Link
                    href={`/proyectos#${project.id}`}
                    className="btn-primary"
                  >
                    Ver detalles
                  </Link>
                  <button className="py-2 px-6 rounded-md font-semibold border border-white/20 hover:border-white/40 transition-colors duration-300">
                    Ver demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center text-accent hover:text-blue-400 transition-colors font-medium"
          >
            Ver todos los proyectos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 