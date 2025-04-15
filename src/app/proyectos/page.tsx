'use client';

import { motion } from 'framer-motion';
import ProjectTimeline from '@/components/ProjectTimeline';
import ProjectGrid from '@/components/ProjectGrid';
import { useState } from 'react';

export default function Projects() {
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');

  return (
    <div className="container-custom section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="heading-xl mb-6">Projects</h1>
        <p className="text-xl opacity-80 max-w-3xl">
          A selection of my most outstanding work. Each project reflects my approach
          at the intersection of technology, design, and human impact.
        </p>

        <div className="flex items-center mt-8 space-x-4">
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'timeline' ? 'bg-accent text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'grid' ? 'bg-accent text-white' : 'bg-gray-800 text-gray-300'
            }`}
          >
            Grid
          </button>
        </div>
      </motion.div>

      {viewMode === 'timeline' ? (
        <ProjectTimeline />
      ) : (
        <ProjectGrid />
      )}
    </div>
  );
} 