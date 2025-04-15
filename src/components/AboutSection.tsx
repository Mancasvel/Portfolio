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
              {/* Here you can add your personal image */}
              <div className="absolute inset-0 bg-accent bg-opacity-20 flex items-center justify-center">
                <div className="text-6xl font-bold">CTO</div>
              </div>
              
              
              <Image
                src="/images/ksty_web_cropped.jpg"
                alt="Professional profile"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              
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
                Technology as <span className="text-accent">functional art</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-lg mb-6 opacity-80">
                As a CTO with experience leading teams and technological projects, 
                I have a vision of development that goes beyond simple implementation.
              </p>

              <p className="text-lg mb-8 opacity-80">
                My philosophy is that programming is not just a technical act, but also
                a creative act with a profound human impact. Working with attention to detail,
                maintaining a high standard of quality, and being obsessed with design are my pillars.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm uppercase tracking-wide opacity-70">
                    Years of experience
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-accent text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm uppercase tracking-wide opacity-70">
                    Completed projects
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Architecture', 'Fullstack', 'UI/UX', 'AI', 'Automation'].map(
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