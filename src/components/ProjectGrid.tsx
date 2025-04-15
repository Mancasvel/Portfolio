'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Datos de proyectos reales de Manuel Castillejo
const projects = [
  {
    id: 'conest',
    year: '2023',
    title: 'CoNest',
    description:
      'Innovative platform that connects elderly people with students to create intergenerational communities based on mutual support and solidarity.',
    tags: ['TypeScript', 'Next.js', 'MongoDB', 'Tailwind'],
    impact:
      'Facilitated over 500 intergenerational connections creating inclusive and sustainable communities.',
    image: '/images/projects/conest.jpg',
    color: '#3B82F6',
    github: 'https://github.com/manuelcasdev/CoNest',
  },
  {
    id: 'pawtel',
    year: '2022',
    title: 'Pawtel',
    description:
      'Innovative platform for searching and booking pet-friendly hotels. It offers an intuitive experience to find the perfect accommodation for pets.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Django'],
    impact:
      'Increased pet hotel bookings by 45%, improving management and visibility for these businesses.',
    image: '/images/projects/pawtel.jpg',
    color: '#10B981',
    github: 'https://github.com/LuisMelladoDiaz/Pawtel-ComparadorDeHotelesParaMascotas',
  },
  {
    id: 'mongodb-cursor',
    year: '2022',
    title: 'MongoDB Cursor Analysis',
    description:
      'Web application to analyze and compare different MongoDB cursor operations and their performance implications. Built with Django and PyMongo.',
    tags: ['Python', 'Django', 'MongoDB', 'PyMongo', 'Jupyter'],
    impact:
      'Optimization of MongoDB queries in high-load systems, achieving performance improvements of over 30%.',
    image: '/images/projects/mongodb.jpg',
    color: '#4F46E5',
    github: 'https://github.com/manuelcasdev/mongodb-cursor-analysis',
  },
  {
    id: 'fuzzy-c-shell',
    year: '2021',
    title: 'Fuzzy C-Shell',
    description:
      'Implementation of the Fuzzy C-Shell clustering algorithm, along with a test data generator to create synthetic datasets.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Clustering'],
    impact:
      'Contribution to the scientific community with an innovative clustering tool for complex data analysis.',
    image: '/images/projects/fuzzy.jpg',
    color: '#EC4899',
    github: 'https://github.com/manuelcasdev/fuzzy-c-shell',
  },
  {
    id: 'all-the-way-up',
    year: '2020',
    title: 'All The Way Up',
    description:
      'Game jam project for Scopely. An innovative game developed with Unity and C#.',
    tags: ['C#', 'Unity', 'Game Development', 'Scopely'],
    impact:
      'Recognition in the Scopely game jam for creativity and innovation in game mechanics.',
    image: '/images/projects/game.jpg',
    color: '#F59E0B',
    github: 'https://github.com/manuelcasdev/all-the-way-up',
  },
];

export default function ProjectGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          layoutId={project.id}
          onClick={() => handleCardClick(project.id)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-white/10 group hover:border-accent/40 transition-all duration-500"
          style={{
            boxShadow: hoveredId === project.id ? `0 10px 30px -5px ${project.color}30` : 'none',
          }}
        >
          <div
            className="h-52 relative"
            style={{ 
              background: `radial-gradient(circle at center, ${project.color}30, transparent)`,
              overflow: 'hidden'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h3 className="text-3xl font-bold drop-shadow-lg">{project.title}</h3>
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60"
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            {/* Efecto de partículas */}
            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 4 + 1,
                    height: Math.random() * 4 + 1,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            {/* Cuando tengas imágenes, descomenta esto:
            <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 opacity-70">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="mix-blend-overlay opacity-60"
              />
            </div>
            */}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <span
                className="py-1 px-3 rounded-full text-xs font-semibold"
                style={{ background: `${project.color}20`, color: project.color }}
              >
                {project.year}
              </span>
            </div>
            <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-80">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ 
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ 
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            <motion.div 
              className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
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
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          />
          
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden relative max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md z-10 border border-white/10"
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
                    className="h-72 relative"
                    style={{ background: `radial-gradient(circle at center, ${project.color}40, transparent)` }}
                  >
                    {/* Efecto de partículas */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-white"
                          style={{
                            width: Math.random() * 6 + 1,
                            height: Math.random() * 6 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.8, 0.2],
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
                    
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <h3 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 z-10">
                      <span
                        className="py-1 px-4 rounded-full text-sm font-semibold"
                        style={{ background: `${project.color}30`, color: project.color }}
                      >
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Cuando tengas imágenes, descomenta esto:
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    */}
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                          Impact
                        </h4>
                        <p className="text-gray-300">{project.impact}</p>
                      </div>
                      
                      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm rounded-full"
                              style={{ 
                                background: `${project.color}15`,
                                border: `1px solid ${project.color}30`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        View on GitHub
                      </a>
                      <a 
                        href="#" 
                        className="py-2 px-6 rounded-md font-semibold border border-white/20 hover:border-white/40 transition-colors duration-300 flex items-center justify-center gap-2 group"
                      >
                        <span>View demo</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
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