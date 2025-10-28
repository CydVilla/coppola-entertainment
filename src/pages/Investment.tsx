import { motion } from 'framer-motion';
import CurtainReveal from '../components/CurtainReveal';
import { featuredProject } from '../data/projects';
import './Investment.css';

function Investment() {
  return (
    <div className="investment-page">
      <motion.div
        className="investment-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="investment-header">
          <h1 className="page-title">Investment Opportunities</h1>
          <div className="title-underline" />
        </header>

        <CurtainReveal delay={800}>
          <div className="featured-investment">
            <div className="investment-poster">
              <img src={featuredProject.poster} alt={featuredProject.title} />
            </div>

            <div className="investment-details">
              <h2 className="project-title">{featuredProject.title}</h2>
              
              <div className="investment-info-box">
                <h3>Written By: Patrick Coppola</h3>
                <p className="page-count">83 pages - Drama</p>
              </div>

              <div className="logline-section">
                <h4>Logline:</h4>
                <p>{featuredProject.tagline}</p>
              </div>

              <div className="investment-plan">
                <h3>Production Plan</h3>
                <p>
                  COPPOLA ENTERTAINMENT plans on producing the screenplay <em>When I Was A Redskin</em> into 
                  a financial and critically successful film. COPPOLA ENTERTAINMENT will pursue a domestic 
                  theatrical release, DVD release, TV and Cable release and all worldwide distribution releases.
                </p>
              </div>

              <div className="investment-potential">
                <h3>Investment Opportunity</h3>
                <p>
                  This compelling story based on real events has all the elements of a potential breakthrough 
                  film which could prove to be very profitable for investors.
                </p>
                <p>
                  <em>When I Was A Redskin</em> is a family film, a kid's film, a sports film, a father and 
                  son film, an underdog film, a triumph over adversity film. Great success has surrounded 
                  similar films like Rocky, Miracle, Hoosiers, The Natural, Breaking Away, The Champ, Remember 
                  The Titans, Chariots of Fire, Field of Dreams and The Karate Kid to name a few. COPPOLA 
                  ENTERTAINMENT is confident that <em>When I Was A Redskin</em> will follow the same path to success.
                </p>
              </div>

              <div className="funding-details">
                <h3>Funding Details</h3>
                <p>
                  In order to produce a quality film COPPOLA ENTERTAINMENT will raise Two Million ($2,000,000.00) 
                  dollars. This money will be used to develop, produce and market the film.
                </p>
                <p>
                  The money will be spent on securing the best actors, locations, support crew, post production 
                  personnel, period music clearances (mid-60's through 1970) and general filmmaking expenses.
                </p>
              </div>
            </div>
          </div>

          {featuredProject.synopsis && (
            <div className="synopsis-section">
              <h3>Synopsis</h3>
              <div className="synopsis-content">
                {featuredProject.synopsis.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          <div className="contact-cta">
            <h3>Get In Touch</h3>
            <p>
              Investors who are interested in finding out more detailed financial information about the film 
              project; such as its legal entity, film tax incentives, production budgets and schedules and any 
              questions they may have should contact Patrick Coppola at COPPOLA ENTERTAINMENT via{' '}
              <a href="/contact">Email</a> and leave their contact phone number.
            </p>
            <p>
              The script and all relevant information will be made available to all serious qualified potential 
              investors.
            </p>
            <a href="/contact" className="contact-button">
              Contact Us About Investment Opportunities
            </a>
          </div>
        </CurtainReveal>
      </motion.div>
    </div>
  );
}

export default Investment;

