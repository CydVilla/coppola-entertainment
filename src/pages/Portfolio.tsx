import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <motion.div
        className="portfolio-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="portfolio-header">
          <h1 className="page-title">Portfolio</h1>
          <div className="title-underline" />
          <p className="portfolio-subtitle">
            A showcase of films, television projects, and creative works spanning over two decades
          </p>
        </header>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Portfolio;

