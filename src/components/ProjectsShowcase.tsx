'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  url: string;
}

// Featured projects data
const featuredProjects: Project[] = [
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
  // Test comment to check if file editing works
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const activeProject = featuredProjects[activeProjectIndex];

  return (
    <section id="proyectos" className="py-24 bg-gray-900 relative">
      <div className="container-custom">
        {/* Section Header */}
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

        {/* Project Selector Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {featuredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProjectIndex(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${ activeProjectIndex === index
                  ? 'bg-accent text-white shadow-md shadow-accent/40 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <motion.div
            key={activeProject.id} // Ensure remount on project change for animation
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-800/30 p-8 rounded-xl shadow-lg border border-gray-700/50 mb-16"
        >
          {/* Image Column */}
          <motion.div
            className="cursor-pointer group relative"
            onClick={() => handleOpenModal(activeProject)}
            whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}
          >
            <div
              className="relative aspect-video rounded-lg overflow-hidden border border-gray-700 shadow-xl"
              style={{ background: `linear-gradient(45deg, ${activeProject.color}33, ${activeProject.color}66)` }}
            >
              {activeProject.image ? (
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-4">
                    <h4 className="text-xl font-semibold text-white opacity-80">{activeProject.title}</h4>
                    <p className="text-sm text-white opacity-60">Image coming soon</p>
                  </div>
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">View Details</p>
              </div>
            </div>
          </motion.div>

          {/* Details Column */}
          <div>
            <h3 className="heading-md mb-3 text-white">{activeProject.title}</h3>
            <p className="text-lg opacity-80 mb-6 leading-relaxed">{activeProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {activeProject.url && activeProject.url !== '#' ? (
                <Link
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label={`View project or repository for ${activeProject.title}`}
                >
                  View Project / Repo
                </Link>
              ) : (
                <button
                  onClick={() => handleOpenModal(activeProject)}
                  className="btn-secondary"
                  aria-label={`View details for ${activeProject.title}`}
                >
                  View Details
                </button>
              )}
              <button
                onClick={() => handleOpenModal(activeProject)}
                className="btn-primary"
                aria-label={`View details for ${activeProject.title}`}
              >
                 More Details
              </button>
            </div>
          </div>
        </motion.div>

        {/* Link to potentially full projects page */}
        <div className="text-center">
          <Link
            href="/proyectos" // Link still points to /proyectos page
            className="inline-flex items-center text-accent hover:text-blue-400 transition-colors font-medium"
          >
            View all projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={handleCloseModal} // Close modal on backdrop click
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden border border-gray-700/50 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center text-white transition-colors duration-200 z-10"
                aria-label="Close project details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="relative aspect-video bg-gray-800">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center p-4">
                      <h4 className="text-2xl font-semibold text-white opacity-80">{selectedProject.title}</h4>
                      <p className="text-sm text-white opacity-60">Image coming soon</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="heading-lg mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedProject.url && selectedProject.url !== '#' && (
                  <Link
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                    aria-label={`View project or repository for ${selectedProject.title}`}
                  >
                    View Project / Repo
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 