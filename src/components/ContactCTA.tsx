'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">
            ¿Listo para crear algo <span className="text-accent">extraordinario</span>?
          </h2>
          <p className="text-xl opacity-80 mb-10">
            Conversemos sobre cómo puedo ayudarte a transformar tus ideas en
            soluciones tecnológicas impactantes y con propósito.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contacto" className="btn-primary">
              Contáctame
            </Link>
            <Link
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 rounded-md font-semibold border border-accent text-accent hover:bg-accent hover:bg-opacity-10 transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 