'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Datos de proyectos reales de Manuel Castillejo
const projects = [
  {
    id: 'conest',
    year: '2023',
    title: 'CoNest',
    description:
      'Plataforma innovadora que conecta a personas mayores con estudiantes para crear comunidades intergeneracionales basadas en el apoyo mutuo y la solidaridad.',
    tags: ['TypeScript', 'Next.js', 'MongoDB', 'Tailwind'],
    impact:
      'Facilitó más de 500 conexiones intergeneracionales creando comunidades inclusivas y sostenibles.',
    image: '/images/projects/conest.jpg',
    color: '#3B82F6',
    github: 'https://github.com/manuelcasdev/CoNest',
  },
  {
    id: 'pawtel',
    year: '2022',
    title: 'Pawtel',
    description:
      'Plataforma innovadora para la búsqueda y reserva de hoteles para mascotas. Ofrece una experiencia intuitiva para encontrar el hospedaje perfecto para las mascotas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Django'],
    impact:
      'Incrementó las reservas en hoteles para mascotas en un 45%, mejorando la gestión y visibilidad de estos negocios.',
    image: '/images/projects/pawtel.jpg',
    color: '#10B981',
    github: 'https://github.com/LuisMelladoDiaz/Pawtel-ComparadorDeHotelesParaMascotas',
  },
  {
    id: 'mongodb-cursor',
    year: '2022',
    title: 'MongoDB Cursor Analysis',
    description:
      'Aplicación web para analizar y comparar diferentes operaciones de cursor de MongoDB y sus implicaciones de rendimiento. Construida con Django y PyMongo.',
    tags: ['Python', 'Django', 'MongoDB', 'PyMongo', 'Jupyter'],
    impact:
      'Optimización de consultas MongoDB en sistemas de alta carga, logrando mejoras de rendimiento superiores al 30%.',
    image: '/images/projects/mongodb.jpg',
    color: '#4F46E5',
    github: 'https://github.com/manuelcasdev/mongodb-cursor-analysis',
  },
  {
    id: 'fuzzy-c-shell',
    year: '2021',
    title: 'Fuzzy C-Shell',
    description:
      'Implementación del algoritmo de clustering Fuzzy C-Shell, junto con un generador de datos de prueba para crear conjuntos de datos sintéticos.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Clustering'],
    impact:
      'Aportación a la comunidad científica con una herramienta de clustering innovadora para análisis de datos complejos.',
    image: '/images/projects/fuzzy.jpg',
    color: '#EC4899',
    github: 'https://github.com/manuelcasdev/fuzzy-c-shell',
  },
  {
    id: 'all-the-way-up',
    year: '2020',
    title: 'All The Way Up',
    description:
      'Proyecto de game jam para Scopely. Un juego innovador desarrollado con Unity y C#.',
    tags: ['C#', 'Unity', 'Game Development', 'Scopely'],
    impact:
      'Reconocimiento en la game jam de Scopely por la creatividad e innovación en mecánicas de juego.',
    image: '/images/projects/game.jpg',
    color: '#F59E0B',
    github: 'https://github.com/manuelcasdev/all-the-way-up',
  },
];

export default function ProjectTimeline() {
  return (
    <div className="relative">
      {/* Línea vertical del timeline con efecto de degradado */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/70 to-accent/30 transform md:translate-x-px z-10" />

      {/* Proyectos en timeline */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Punto del timeline con animación */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 transform -translate-x-2 md:-translate-x-3 z-20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="w-6 h-6 rounded-full bg-black border-2 border-accent" />
              <div 
                className="absolute w-12 h-12 rounded-full opacity-50 animate-ping-slow"
                style={{ background: `radial-gradient(circle, ${project.color}50 0%, transparent 70%)` }}
              />
            </motion.div>

            {/* Contenido del proyecto */}
            <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
              >
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 shadow-xl relative overflow-hidden group">
                  {/* Efecto decorativo */}
                  <div 
                    className="absolute top-0 right-0 w-40 h-40 opacity-30 transform translate-x-20 -translate-y-20 rounded-full"
                    style={{ background: `radial-gradient(circle, ${project.color}40, transparent)` }}
                  />
                  
                  <span
                    className="inline-block py-1 px-4 rounded-full text-sm font-semibold mb-4"
                    style={{ background: `${project.color}20`, color: project.color, backdropFilter: 'blur(4px)' }}
                  >
                    {project.year}
                  </span>
                  
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base mb-5 leading-relaxed opacity-90">
                    {project.description}
                  </p>

                  <div className="mb-5 bg-black/30 p-4 rounded-xl backdrop-blur-sm">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
                      Impacto
                    </h4>
                    <p className="text-gray-300 text-sm">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ 
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div 
                    className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  />

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-white transition-colors font-medium inline-flex items-center group"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Ver en GitHub
                      <motion.div 
                        className="inline-block ml-1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Imagen del proyecto */}
            <div className="md:w-1/2 md:pl-12">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
                className="h-60 md:h-80 rounded-2xl overflow-hidden relative group"
              >
                <div
                  className="absolute inset-0 z-10"
                  style={{ 
                    background: `radial-gradient(circle at center, ${project.color}40, transparent)`,
                  }}
                />
                
                <div className="absolute inset-0 bg-black/50 z-20" />
                
                {/* Efecto de partículas */}
                <div className="absolute inset-0 z-30">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.1, 0.7, 0.1],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-40">
                  <motion.h3 
                    className="text-4xl font-bold text-white filter drop-shadow-lg"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                
                {/* Cuando tengas imágenes, descomenta esto:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-overlay"
                />
                */}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decoración final del timeline */}
      <motion.div 
        className="absolute left-0 md:left-1/2 bottom-0 transform -translate-x-2 md:-translate-x-3 -translate-y-5 z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="w-6 h-6 rounded-full bg-accent blur-sm" />
      </motion.div>
    </div>
  );
} 