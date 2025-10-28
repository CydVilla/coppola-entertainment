import { motion } from 'framer-motion';
import './Biography.css';

function Biography() {
  return (
    <div className="biography-page">
      <motion.div
        className="bio-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="bio-header">
          <h1 className="page-title">Biography</h1>
          <div className="title-underline" />
        </header>

        <div className="bio-content">
          <div className="bio-image-section">
            <div className="bio-image-frame">
              <img 
                src="/patrick-coppola.jpg" 
                alt="Patrick Coppola"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="bio-placeholder">Patrick Coppola</div>';
                }}
              />
            </div>
            <h2 className="bio-name">PATRICK COPPOLA</h2>
            <p className="bio-title-text">Writer/Producer/Director/Actor</p>
          </div>

          <div className="bio-text-section">
            <div className="company-intro">
              <h3>COPPOLA ENTERTAINMENT</h3>
              <p>is an independent filmmaking company</p>
            </div>

            <div className="bio-paragraph">
              <p>
                Patrick Coppola has been involved with filmmaking for the past 20 years, dedicating himself 
                toward the pursuit of excellence in the filmmaking process.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Early Career</h4>
              <p>
                In 1985 he began his acting career studying at several drama schools in Boston. He landed 
                principal roles in Spenser For Hire, Cheers, Unsolved Mysteries and others, while appearing 
                in several national commercials including those for Burger King, Toyota, Exxon and John Hancock. 
                He also appeared on stage in many plays, including Streamers, A Streetcar Named Desire, A Christmas 
                Carol and Mindbender.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Writing & Early Production</h4>
              <p>
                Patrick began writing in 1987 and produced his first short comedy film, The Date, later that year. 
                He also completed his first feature-length script, Midnight Confession.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Education & Los Angeles</h4>
              <p>
                Soon after he was selected to attend New York University's Intensive filmmaking program and in 1988 
                earned his Certificate In Filmmaking. After a brief stint in production in Boston, he loaded his 
                pick-up truck and moved to Los Angeles, California, to pursue his acting and production careers on 
                a larger scale.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Television Experience</h4>
              <p>
                While in Los Angeles, Patrick worked for Warner Brothers on the TV Sitcom pilot Mulberry Street, 
                where he assisted producers with script revisions, in production and post production, and learned 
                the studio system. Unfortunately, Mulberry Street was not picked up by Warner Brothers, so Patrick 
                went to work in the mail room of The Burbank Studios until landing a job at Universal Studios for 
                Viacom Productions on the TV show Jake and the Fat Man, where his capacity was utilized as an 
                assistant in the casting department.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Acting Training</h4>
              <p>
                As he was gaining experience in the production field, he was also growing rapidly as an actor 
                studying Meisner method acting at the Victory Theater in Burbank with the renowned, Marla Gobetti, 
                and studying Shakespeare from noted author and Shakespearean scholar, Delbert Spain.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Television Appearances</h4>
              <p>
                His T.V. appearances included The Golden Girls and Santa Barbara, and he made a film appearance in 
                Forgotten Heroes, the Viet Nam war drama directed by Jack Marino. He also starred as Jimmy in Sex 
                On The Weekend, a comedy shot on the West End Playhouse.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>WHERE ANGELS DANCE</h4>
              <p>
                With his contact base in Boston, he returned to begin the difficult task of raising money to shoot 
                the 35mm feature film WHERE ANGELS DANCE. Patrick formed a Limited Partnership and eventually had 
                raised enough money to start principal photography in September of 1993.
              </p>
              <p>
                The film was shot in 18 days and was finished 11 months later making its debut in 1994 at the 
                Independent Feature Film Market and the New Hampshire Film Festival, where it received excellent reviews.
              </p>
              <p>
                WHERE ANGELS DANCE - written, produced and directed by Patrick Coppola has been released in over 20 
                countries to date. It was released theatrically in several foreign territories. It aired on HBO Latin 
                America and FOX Latin America. Domestically it has been released on Video and DVD.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>SEASIDE SEDUCTION</h4>
              <p>
                SEASIDE SEDUCTION - Patrick's second 35mm feature film was shot in the fall of 1996, at Salisbury 
                Beach, MA. The film was completed by December 1997. It is a riveting murder mystery set on a 
                honky-tonk beach strip. Patrick served as writer, producer and director on the film.
              </p>
              <p>
                SEASIDE SEDUCTION has been released in over 15 foreign countries. Domestically it has aired on 
                Pay-Per-View and been released on Video and DVD.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>A WAKE IN PROVIDENCE</h4>
              <p>
                A WAKE IN PROVIDENCE - In 1998, Patrick completed principal photography on the $2,000,000.00 feature 
                film in Providence, Rhode Island. He served as Producer, Line Producer and UPM and guided the film 
                through completion and distribution. It was selected for the Boston Film Festival and won the Audience 
                Award at the Fort Lauderdale Film Festival. He personally secured a U.S. theatrical release for the 
                film through Indican Pictures. Secured Foreign Distribution through Allied Entertainment. The film has 
                currently aired on Lifetime TV and has been released on DVD.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>JESUS, MARY AND JOEY</h4>
              <p>
                April through August of 2002 - Patrick produced the $4,000,000.00 feature film JESUS, MARY AND JOEY. 
                This romantic comedy stars Olympia Dukakis, Charles Durning, Stacey Keach, Melissa Joan Hart, Jason 
                Gedrick, Tess Harper, Marley Shelton, Jennifer Esposito and Dan Lauria. The shoot took place in 
                Providence, RI and NY City. The film has currently aired on Showtime TV and has been released on DVD.
              </p>
            </div>

            <div className="bio-paragraph">
              <h4>Recent Projects</h4>
              <p>
                <strong>2004</strong> - Creator, writer, producer and director of the Reality TV demo show, "I ALWAYS 
                WANTED TO DATE A STRIPPER". An episodic show that deals with contestants trying to land a "dream date" 
                with a stripper. Shot at the world famous Foxy Lady in Providence, RI in a multi camera 24P digital 
                video format. It is R-rated (upper body nudity on strippers) and is wildly funny and breaks new ground 
                in Reality TV.
              </p>
              <p>
                <strong>August 2005</strong> - Cast in Martin Scorsese's newest film "THE DEPARTED" in a principal role, 
                as "The Bookie" harassed by French."
              </p>
              <p>
                <strong>October 2005</strong> - Producer/Director/DP/Editor - of the highly successful "sold out" live 
                music performance of "JOHNNY COPPOLA - LIVE AT CAPITOL RECORDS". Shot with 5 cameras in Studio A at 
                Capitol Records, the show captures the dynamic sound and performance of Johnny Coppola of Goku Music. 
                The DVD will be sold with the live recorded performance CD and will be available in December of 2005.
              </p>
              <p>
                <strong>2005 - 2006</strong> - Served as "Post Production Consultant" for the Gangster Comedy - "JOHNNY 
                SLADE'S GREATEST HITS"
              </p>
              <p>
                <strong>March 2006</strong> - Cast in the CBS Pilot "THE WATERFRONT" in a principal role as Paddy.
              </p>
              <p>
                <strong>December 2006</strong> - Acting as Producer's Rep - secured world wide distribution for the film 
                "EAMON'S ROAD", an independent horror film through Film Artists Network.
              </p>
              <p>
                <strong>Fall 2007</strong> - Created, wrote, produced and directed "TONY'S TURF" a ½ hour Demo-Pilot 
                made for TV. Comedy/Drama that takes place in Boston's historic North End.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Biography;

