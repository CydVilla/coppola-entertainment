import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from './ProjectCard';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Helper function to get embed URL from various video platforms
  const getEmbedUrl = (url: string) => {
    if (!url) return null;

    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
    }

    // Direct video file
    return url;
  };

  const embedUrl = project.trailer ? getEmbedUrl(project.trailer) : null;
  const isDirectVideo = embedUrl && !embedUrl.includes('youtube.com') && !embedUrl.includes('vimeo.com');

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="project-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-poster">
              <img src={project.poster} alt={project.title} />
            </div>
            
            <div className="modal-header-info">
              <h2>{project.title}</h2>
              {project.tagline && (
                <p className="modal-tagline">{project.tagline}</p>
              )}
              
              <div className="modal-meta">
                {project.year && (
                  <div className="meta-item">
                    <span className="meta-label">Year:</span>
                    <span className="meta-value">{project.year}</span>
                  </div>
                )}
                {project.genre && (
                  <div className="meta-item">
                    <span className="meta-label">Genre:</span>
                    <span className="meta-value">{project.genre}</span>
                  </div>
                )}
                {project.status && (
                  <div className="meta-item">
                    <span className="meta-label">Status:</span>
                    <span className={`meta-value status-${project.status}`}>
                      {project.status === 'completed' && 'Completed'}
                      {project.status === 'pre-production' && 'In Pre-Production'}
                      {project.status === 'development' && 'In Development'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="modal-body">
            {project.description && (
              <div className="production-info">
                <p>{project.description}</p>
              </div>
            )}

            {/* Trailer Section */}
            {embedUrl && (
              <section className="modal-section trailer-section">
                <h3>
                  <span className="trailer-icon">🎬</span>
                  Watch Trailer
                </h3>
                <div className="trailer-container">
                  <div className="trailer-frame">
                    {isDirectVideo ? (
                      <video controls className="trailer-video">
                        <source src={embedUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <iframe
                        src={embedUrl}
                        title={`${project.title} Trailer`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="trailer-iframe"
                      />
                    )}
                  </div>
                </div>
              </section>
            )}

            {project.synopsis && (
              <section className="modal-section">
                <h3>Synopsis</h3>
                <p className="synopsis-text">{project.synopsis}</p>
              </section>
            )}

            <div className="modal-details-grid">
              {project.director && (
                <div className="detail-item">
                  <h4>Director</h4>
                  <p>{project.director}</p>
                </div>
              )}
              
              {project.producer && (
                <div className="detail-item">
                  <h4>Producer</h4>
                  <p>{project.producer}</p>
                </div>
              )}
              
              {project.writer && (
                <div className="detail-item">
                  <h4>Writer</h4>
                  <p>{project.writer}</p>
                </div>
              )}
              
              {project.locations && (
                <div className="detail-item">
                  <h4>Locations</h4>
                  <p>{project.locations}</p>
                </div>
              )}
            </div>

            {project.cast && project.cast.length > 0 && (
              <section className="modal-section">
                <h3>Cast</h3>
                <ul className="cast-list">
                  {project.cast.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.awards && project.awards.length > 0 && (
              <section className="modal-section awards-section">
                <h3>Awards & Recognition</h3>
                <ul className="awards-list">
                  {project.awards.map((award, index) => (
                    <li key={index}>
                      <span className="award-icon">🏆</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.distribution && (
              <section className="modal-section">
                <h3>Distribution</h3>
                <p>{project.distribution}</p>
              </section>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;

