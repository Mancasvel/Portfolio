'use client';

import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ExpertiseCard({ title, description, icon, delay }: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-xl hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-80">{description}</p>
    </motion.div>
  );
}

export default function Expertise() {
  const expertiseAreas = [
    {
      title: 'Desarrollo Fullstack',
      description:
        'Dominio en tecnologías modernas como Next.js, Node.js, MongoDB, Vue.js y más, para crear soluciones web completas y potentes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Arquitectura Moderna',
      description:
        'Diseño de sistemas escalables, sostenibles y resilientes. Implementación de patrones arquitectónicos que optimizan el rendimiento y la mantenibilidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Integración de IA',
      description:
        'Desarrollo de soluciones con IA, chatbots avanzados y flujos inteligentes. Automatización de procesos empresariales complejos con n8n.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Moderno',
      description:
        'Creación de interfaces elegantes con enfoque en la experiencia emocional del usuario. Diseño de interacciones que deleitan y generan conexión.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-5">Áreas de <span className="text-accent">expertise</span></h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Un enfoque multidisciplinario que combina habilidades técnicas y visión
            estratégica para desarrollar productos digitales excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 