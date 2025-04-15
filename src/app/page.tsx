'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Expertise from '@/components/Expertise';
import AboutSection from '@/components/AboutSection';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  // Para controlar las animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.js-show-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>
      
      <div className="js-show-on-scroll opacity-0">
        <Expertise />
      </div>
      
      <div className="js-show-on-scroll opacity-0">
        <ProjectsShowcase />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactCTA />
      </motion.div>
    </>
  );
} 