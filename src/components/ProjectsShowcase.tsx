'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Featured projects data
const featuredProjects = [
  {
    id: 'conest',
    title: 'CoNest',
    description: 'Platform connecting students with elderly people to share accommodation, with a social and intergenerational approach.',
    image: '/images/projects/conest.jpg',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind'],
    color: '#3B82F6',
    url: 'https://github.com/Mancasvel/CoNest'
  },
  {
    id: 'pawtel',
    title: 'Pawtel',
    description: 'Booking platform for pet hotels, with payment system, commissions and dashboards for hoteliers.',
    image: '/images/projects/pawtel.jpg',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#10B981',
    url: 'https://github.com/LuisMelladoDiaz/Pawtel-ComparadorDeHotelesParaMascotas'
  },
  {
    id: 'cutelligence',
    title: 'Cutelligence',
    description: 'AI specialized for barbershops, with smart integrations and conversational assistant.',
    image: '/images/projects/cutelligence.jpg',
    tags: ['React', 'TensorFlow.js', 'OpenAI', 'Firebase'],
    color: '#8B5CF6',
    url: '#'
  },
  {
    id: 'all-the-way-up',
    title: 'All The Way Up',
    description: 'Award-winning game developed during the Scopely Game Jam, demonstrating rapid prototyping and teamwork.',
    image: '/images/projects/all-the-way-up.jpg',
    tags: ['C#', 'Unity', 'ShaderLab', 'GameDev'],
    color: '#4F46E5',
    url: 'https://github.com/Mancasvel/all-the-way-up'
  },
  {
    id: 'car-model-detection',
    title: 'Car Model Detection',
    description: 'Deep learning model using PyTorch and YOLOv8 to classify car models from images with high accuracy.',
    image: '/images/projects/car-detection.jpg',
    tags: ['Python', 'PyTorch', 'YOLOv8', 'Deep Learning', 'AI'],
    color: '#D97706',
    url: 'https://github.com/davidgonmar/pid-car-model-classification'
  },
  {
    id: 'mongodb-analysis',
    title: 'MongoDB Analysis',
    description: 'Analysis project focused on MongoDB, exploring database performance and optimization techniques.',
    image: '',
    tags: ['MongoDB', 'Python', 'Data Analysis', 'Optimization'],
    color: '#13AA52',
    url: 'https://github.com/Mancasvel/Mongodb_Analysis_Project'
  },
  {
    id: 'fuzzy-c-shell',
    title: 'Fuzzy C-Shell',
    description: 'A custom C-shell implementation featuring fuzzy command matching and enhanced shell functionalities.',
    image: '',
    tags: ['C', 'Shell', 'Systems Programming', 'Fuzzy Logic'],
    color: '#FF6F61',
    url: 'https://github.com/Mancasvel/Fuzzy_C-Shell_Project'
  }
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Innovative solutions that combine technology, design and purpose. 
            Each project represents a unique challenge solved with creativity.
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
                  className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-gray-700 flex items-center justify-center"
                  style={{ background: `linear-gradient(45deg, ${project.color}33, ${project.color}66)` }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <h4 className="text-2xl font-semibold text-white opacity-80">{project.title}</h4>
                      <p className="text-sm text-white opacity-60">Image coming soon</p>
                    </div>
                  )}
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
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Project / Repo
                    </Link>
                  ) : (
                    <Link
                      href={`/proyectos`}
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                  )}
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
            View all projects
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