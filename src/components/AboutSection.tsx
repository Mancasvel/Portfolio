'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              {/* Aquí puedes agregar tu imagen personal */}
              <div className="absolute inset-0 bg-accent bg-opacity-20 flex items-center justify-center">
                <div className="text-6xl font-bold">CTO</div>
              </div>
              
              {/* Cuando tengas una imagen, descomenta esto:
              <Image
                src="/images/profile.jpg"
                alt="Perfil profesional"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              */}
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="heading-lg mb-6">
                La tecnología como <span className="text-accent">arte funcional</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-lg mb-6 opacity-80">
                Como CTO con experiencia liderando equipos y proyectos tecnológicos, 
                tengo una visión del desarrollo que va más allá de la simple implementación.
                Cada línea de código que escribo es un balance entre belleza y estructura.
              </p>

              <p className="text-lg mb-8 opacity-80">
                Mi filosofía es que la programación no es solo un acto técnico, sino también
                un acto creativo con un profundo impacto humano. Trabajar con atención al detalle,
                mantener un alto estándar de calidad y obsesionarme con el diseño son mis pilares.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-2">7+</div>
                  <div className="text-sm uppercase tracking-wide opacity-70">
                    Años de experiencia
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-2">40+</div>
                  <div className="text-sm uppercase tracking-wide opacity-70">
                    Proyectos completados
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Liderazgo', 'Arquitectura', 'Fullstack', 'UI/UX', 'IA', 'Automatización'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="py-1 px-3 bg-accent bg-opacity-20 text-accent rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 