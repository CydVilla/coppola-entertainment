import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './ProjectCard.css';

export interface Project {
  id: string;
  title: string;
  poster: string;
  tagline?: string;
  description?: string;
  year?: string;
  genre?: string;
  director?: string;
  producer?: string;
  writer?: string;
  cast?: string[];
  locations?: string;
  awards?: string[];
  distribution?: string;
  synopsis?: string;
  trailer?: string; // YouTube URL, Vimeo URL, or direct video file URL
  status?: 'completed' | 'pre-production' | 'development';
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -10 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="project-card-inner">
          <div className="poster-container">
            {!imageError ? (
              <img 
                src={project.poster} 
                alt={project.title}
                onError={() => setImageError(true)}
                className="project-poster"
              />
            ) : (
              <div className="poster-placeholder">
                <div className="placeholder-icon">🎬</div>
                <div className="placeholder-text">{project.title}</div>
              </div>
            )}
            <div className="poster-overlay">
              <div className="overlay-content">
                <h3>{project.title}</h3>
                {project.tagline && <p className="tagline">{project.tagline}</p>}
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
          
          {project.status && (
            <div className={`project-status status-${project.status}`}>
              {project.status === 'completed' && 'Completed'}
              {project.status === 'pre-production' && 'In Pre-Production'}
              {project.status === 'development' && 'In Development'}
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal 
            project={project} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;

