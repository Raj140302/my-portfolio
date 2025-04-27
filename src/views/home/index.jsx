import React, { useEffect, useState } from 'react'
import Card from '../../shared/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCode, faFilePen } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/images/profile.jpg';
import { faFacebook, faHtml5, faInstagram, faJs, faLinkedin, faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Home = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // State for counters with animation
  const [counters] = useState({
    years: 2.5,
    clients: 10,
    projects: 20
  });
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <div className='home-container'>
      {/* <div className='hero-section'>
        <div className='hero-leftSide'>
          <img src={profile} alt="profile image" />
          <div className='profile-description'>
            <p>Frontend Developer</p>
            <h2>Raj Patel</h2>
            <p>I am frontend developer at Yudiz Solutions Ltd.</p>
          </div>
        </div>
        <div className='hero-rightSide'>
          <p className='welcome-msg'>
            Howdy, welcome to my portfolio! <span>Take look around, feel at home and let's do business😊.</span>
          </p>
          <div className='about-projects'>
            <Card className={'moreAboutme-card'} content={'Raj'} title={'More about me'} detail={'Credentials'} root={'/about'} />
            <Card className={'projects-card'} content={<FontAwesomeIcon icon={faClipboardList} />} title={'Showcase'} detail={'Projects'} root={'/projects'} />
          </div>
        </div>
      </div>
      <div className='second-row'>
        <Card className={'blog-card'} content={<FontAwesomeIcon icon={faFilePen} />} title={'Blog'} detail={'Tech Writings'} />
        <Card className={'specialization-card'} content={<><FontAwesomeIcon icon={faJs} width={42} height={42} /> <FontAwesomeIcon icon={faHtml5} width={42} height={42} /> <FontAwesomeIcon icon={faReact} width={42} height={42} /> <FontAwesomeIcon icon={faCode} width={42} height={42} /></>} title={'Specialization'} detail={'Services | Offer'} />
        <Card className={'socialMedia-card'} content={<><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faLinkedin} /> <FontAwesomeIcon icon={faInstagram} /></>} title={'Get social with me'} detail={'Profiles'} />
      </div>
      <div className='third-row'>
        <div className='my-expiriance'>
          <div className='totle-expiriance'>
            <p>02</p>
            <p className='title'>Years Expiriance</p>
          </div>
          <div className='clients'>
            <p>10+</p>
            <p className='title'>Clients Satisfied</p>
          </div>
          <div className='projects'>
            <p>20+</p>
            <p className='title'>Projects Completed</p>
          </div>
        </div>
        <div className='work-together'>
          <p>Let's <span>work <span>together!</span></span></p>
        </div>
      </div> */}
      <section className="hero-section">
        <div className="hero-backdrop"></div>
        <div className="hero-content">
          <div className="hero-image-container animate-on-scroll">
            <img src={profile} alt="Raj Patel" className="hero-image" />
            <div className="hero-image-border"></div>
          </div>

          <div className="hero-text animate-on-scroll">
            <span className="welcome-text">Welcome to my portfolio</span>
            <h1>Hi, I'm <span className="gradient-text">Raj Patel</span></h1>
            <h2>Web & Game Developer</h2>

            <p className="bio-text">
              I'm a passionate developer focused on creating engaging digital experiences.
              With expertise in modern web technologies and game development, I transform
              ideas into interactive realities.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="primary-btn">
                <span>View My Work</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="outline-btn">
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
          <p>Scroll to discover</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">
              <span className="counter">{Number(counters.years).toFixed(1)}</span>+
            </div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="divider"></div>

          <div className="stat-card">
            <div className="stat-number">
              <span className="counter">{counters.clients}</span>+
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>

          <div className="divider"></div>

          <div className="stat-card">
            <div className="stat-number">
              <span className="counter">{counters.projects}</span>+
            </div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home