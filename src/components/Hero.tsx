'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);

  // Efecto para la animación avanzada del fondo
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración para alta resolución
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Configuración de partículas
    const particleCount = 120;
    const connectDistance = 150;
    const baseSpeed = 0.2;
    
    // Clase para partículas con funcionalidades mejoradas
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      blinkSpeed: number;
      opacity: number;
      glowing: boolean;
      angle: number;
      angleSpeed: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth) / dpr;
        this.y = Math.random() * (canvas?.height || window.innerHeight) / dpr;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * baseSpeed;
        this.speedY = (Math.random() - 0.5) * baseSpeed;
        this.color = `hsl(${210 + Math.random() * 30}, 100%, 65%)`;
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.glowing = Math.random() > 0.9; // 10% de partículas brillantes
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.001;
      }

      update() {
        if (!canvas) return;
        
        // Movimiento base
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Movimiento orbital auto-animado
        this.angle += this.angleSpeed;
        this.x += Math.cos(this.angle) * 0.1;
        this.y += Math.sin(this.angle) * 0.1;

        // Paredes rebote
        if (this.x > canvas.width / dpr) this.x = 0;
        else if (this.x < 0) this.x = canvas.width / dpr;
        if (this.y > canvas.height / dpr) this.y = 0;
        else if (this.y < 0) this.y = canvas.height / dpr;

        // Efecto de parpadeo para partículas brillantes
        if (this.glowing) {
          this.opacity = 0.5 + Math.sin(Date.now() * this.blinkSpeed) * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.glowing) {
          // Efecto glow para partículas especiales
          const glow = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 8
          );
          glow.addColorStop(0, `rgba(59, 130, 246, ${this.opacity})`);
          glow.addColorStop(1, 'rgba(59, 130, 246, 0)');
          
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 8, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Crear partículas
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Función para conectar partículas con líneas
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            // Gradiente para las líneas de conexión
            const opacity = 1 - distance / connectDistance;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5 * opacity;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Función principal de animación
    const animate = () => {
      if (!canvas) return;
      
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Fondo con gradiente
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / dpr);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#061328');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Conectar partículas
      connectParticles();

      requestAnimationFrame(animate);
    };

    animate();

    // Recalcular dimensiones del canvas en respuesta al cambio de tamaño de la ventana
    const handleResize = () => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Arrays para generar palabras con efecto de typing
  const techWords = [
    'Next.js', 'React', 'Node.js', 'MongoDB', 'TypeScript', 
    'UI/UX', 'Django', 'Python', 'C#', 'Unity'
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Canvas para fondo animado */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-primary"
        style={{ zIndex: 0 }}
      />

      {/* Grid futurista decorativo */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 opacity-20">
          {/* Líneas horizontales */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px bg-accent/30 w-full"
              style={{ top: `${(i+1) * 5}%` }}
            />
          ))}
          
          {/* Líneas verticales */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px bg-accent/30 h-full"
              style={{ left: `${(i+1) * 5}%` }}
            />
          ))}
        </div>
      </div>

      {/* Círculos decorativos con animación */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 bg-accent blur-3xl z-[1]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 bg-blue-700 blur-3xl z-[1]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 1
        }}
      />

      <div className="container-custom relative z-0 mt-20 md:mt-0">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              className="flex items-center justify-center text-5xl font-mono text-accent opacity-70 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              &lt; Manuel_Castillejo /&gt;
            </motion.div>
            
            <h1 className="heading-xl mb-6 relative overflow-hidden">
              <span className="relative z-8">
                CTO & Artesano del código con enfoque{' '}
              </span>
              <span className="relative z-10 text-accent font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                creativo
              </span>
              
              {/* Línea brillante que se desliza */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-accent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.5 }}
                style={{ boxShadow: "0 0 10px 1px #3B82F6" }}
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl mb-10 opacity-80 leading-relaxed"
          >
            Creo soluciones tecnológicas con propósito, balanceando{' '}
            <span className="text-accent font-semibold">funcionalidad</span>,{' '}
            <span className="text-accent font-semibold">estética</span> y{' '}
            <span className="text-accent font-semibold">valor humano</span>.{' '}
            <span className="italic">El software como arte funcional.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          >
            <Link 
              href="/proyectos" 
              className="btn-primary relative overflow-hidden group bg-black border border-accent/50 hover:border-accent"
            >
              <span className="relative z-10">Ver proyectos</span>
              <motion.div 
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/contacto"
              className="relative group py-2 px-6 rounded-md font-semibold border border-accent/40 hover:border-accent text-accent transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contactar</span>
              <motion.div 
                className="absolute inset-0 bg-accent/0 group-hover:bg-accent/100 -z-10"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 relative"
        >
          {/* Contenedor con efecto de glassmorphism */}
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-white/10">
            {/* Palabras clave con tecnologías */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {techWords.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 1.2 + index * 0.1,
                      duration: 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.4)",
                    color: "#ffffff",
                    borderColor: "rgba(59, 130, 246, 0.8)",
                    background: "linear-gradient(135deg, rgba(10, 30, 80, 0.8), rgba(20, 30, 70, 0.9))"
                  }}
                  className="py-2 px-4 bg-gradient-to-br from-black/80 to-black/40 rounded-md text-sm md:text-base backdrop-blur-sm text-center border border-white/5 hover:border-accent/40 transition-all duration-300 relative group cursor-pointer"
                >
                  {tech}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Líneas conectoras decorativas */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute h-16 w-px bg-accent left-1/4 -top-16" />
            <div className="absolute h-16 w-px bg-accent right-1/4 -top-16" />
            <div className="absolute h-px w-1/2 bg-accent top-0 left-1/4" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-60 font-mono">
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              scroll_down
            </motion.span>
          </span>
          <div className="w-5 h-10 border border-white/20 rounded-full flex justify-center group hover:border-accent/50 transition-colors duration-300">
            <motion.div
              animate={{
                y: [2, 14, 2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 group-hover:bg-white"
              style={{ boxShadow: "0 0 5px rgba(59, 130, 246, 0.8)" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Decoraciones futuristas en esquinas */}
      <div className="absolute top-0 left-0 w-24 h-24 z-10 pointer-events-none opacity-60">
        <div className="absolute top-0 left-0 w-8 h-1 bg-accent"></div>
        <div className="absolute top-0 left-0 w-1 h-8 bg-accent"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 z-10 pointer-events-none opacity-60">
        <div className="absolute bottom-0 right-0 w-8 h-1 bg-accent"></div>
        <div className="absolute bottom-0 right-0 w-1 h-8 bg-accent"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
      </div>
    </section>
  );
} 