import { motion } from 'framer-motion';
import CurtainReveal from '../components/CurtainReveal';
import ProjectCard from '../components/ProjectCard';
import { featuredProject, projects } from '../data/projects';
import './Home.css';

function Home() {
  const completedProjects = projects.filter(p => p.status === 'completed');
  const inDevelopment = projects.filter(p => p.status === 'development' || p.status === 'pre-production');

  return (
    <div className="home-page">
      {/* Featured Project with Curtain Reveal */}
      <section className="hero-section">
        <CurtainReveal delay={500}>
          <motion.div 
            className="featured-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="featured-content">
              <div className="featured-poster">
                <img src={featuredProject.poster} alt={featuredProject.title} />
              </div>
              <div className="featured-info">
                <h1 className="featured-title">{featuredProject.title}</h1>
                {featuredProject.tagline && (
                  <p className="featured-tagline">{featuredProject.tagline}</p>
                )}
                <p className="featured-description">{featuredProject.description}</p>
                <div className="featured-meta">
                  {featuredProject.genre && <span className="meta-badge">{featuredProject.genre}</span>}
                  {featuredProject.year && <span className="meta-badge">{featuredProject.year}</span>}
                </div>
              </div>
            </div>
          </motion.div>
        </CurtainReveal>
      </section>

      {/* Welcome Section */}
      <motion.section 
        className="welcome-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <h2 className="section-title">Welcome to Coppola Entertainment</h2>
        <p className="welcome-text">
          An independent filmmaking company dedicated to bringing compelling stories to life.
          With over 20 years of experience in film production, direction, and storytelling,
          we create powerful narratives that resonate with audiences worldwide.
        </p>
      </motion.section>

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="projects-section">
          <h2 className="section-title">Completed Projects</h2>
          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* In Development */}
      {inDevelopment.length > 0 && (
        <section className="projects-section">
          <h2 className="section-title">In Development</h2>
          <div className="projects-grid">
            {inDevelopment.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;

