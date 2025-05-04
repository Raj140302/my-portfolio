import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/Card';
import skill_icon from '../../assets/images/icons/skill_icon.png';
import project_icon from '../../assets/images/icons/project_icon.png';
import profile from '../../assets/images/profile.jpg';

const About = () => {
  // Animation on scroll effect
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

  // State for skills
  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'CSS/HTML5', level: 95, icon: '🎨' },
    { name: 'Phaser.js', level: 85, icon: '🎮' },
    { name: 'Pixi.js', level: 70, icon: '📱' }
  ]);

  const projects = [
    {
      name: 'BiryaniBet',
      description: 'BiryaniBet is a leading online gaming platform offering a wide range of games and betting options.',
      technologies: ['React', 'Phaser', 'Socket.io'],
      featured: true,
      color: '#4F46E5'
    },
    {
      name: `21 Hold'em`,
      description: `21 Hold'em is a multiplayer poker jack game platform with real-time participation, interactive tables, and secure authentication.`,
      technologies: ['React', 'Phaser', 'Socket.io'],
      featured: true,
      color: '#10B981'
    },
    {
      name: 'Viksit Bharat Sankalp',
      description: 'Played a key role in a nationwide awareness campaign for government schemes, featured in the NAMO App.',
      technologies: ['HTML5', 'Phaser'],
      featured: false,
      color: '#F59E0B'
    },
  ];
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Project filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Tab state for experience section
  const [activeTab, setActiveTab] = useState('experience');

  // State for counters with animation
  const [counters] = useState({
    years: 2.5,
    clients: 10,
    projects: 20
  });

  // Filter projects directly based on the active filter
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project =>
        project.technologies.includes(activeFilter)
      ));
    }
  };

  // Get filtered projects on the fly
  // Personal interests
  const interests = ['Photography', 'Coding', 'Traveling', 'Playing Sports'];

  return (
    <div className="about-page">
      {/* About Me Section */}
      <section className="about-me-section">
        <div className="section-header animate-on-scroll">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">My Story</h2>
        </div>

        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p>
              I'm a passionate Web & Game Developer with {counters.years}+ years of experience in building
              fast, interactive, and engaging digital experiences. From dynamic web apps to browser-based
              games, I bring ideas to life using modern technologies like JavaScript, React.js, Phaser.js, and Pixi.js.
            </p>
            <p>
              I love crafting intuitive user interfaces, optimizing performance, and developing scalable front-end systems.
              Currently working at Yudiz Solutions Ltd., I specialize in creating responsive websites and interactive gaming experiences.
            </p>

            <div className="interests-container">
              <h3>My Interests</h3>
              <div className="interests-list">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-badge">
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            <a href="https://drive.google.com/file/d/15SVbfHC192jAPsura0ZNel9U-0UAQwqG/view?usp=sharing"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer">
              <span>Download Resume</span>
              <span className="btn-icon">↓</span>
            </a>
          </div>

          <div className="skills-container animate-on-scroll">
            <h3>Skills & Expertise</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="experience-section">
        <div className="section-header animate-on-scroll">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="tabs-container animate-on-scroll">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span>Work Experience</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span>Education</span>
            </button>
          </div>

          <div className="tab-content">
            {/* Experience Tab */}
            <div className={`tab-pane ${activeTab === 'experience' ? 'active' : ''}`}>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2023 - Present</span>
                    <h3 className="timeline-title">Frontend Developer</h3>
                    <p className="timeline-company">Yudiz Solutions Ltd.</p>
                    <p className="timeline-description">
                      Developing responsive web applications and browser-based games using modern JavaScript frameworks.
                      Working with the wider development team.
                      Collaborated with designers and backend developers to build
                      scalable and maintainable web solutions.
                    </p>
                    <div className="timeline-tags">
                      <span className="tag">JavaScript</span>
                      <span className="tag">React JS</span>
                      <span className="tag">Phaser JS</span>
                      <span className="tag">Three JS</span>
                      <span className="tag">Babylon JS</span>
                      <span className="tag">Pixi JS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Tab */}
            <div className={`tab-pane ${activeTab === 'education' ? 'active' : ''}`}>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2019 - 2023</span>
                    <h3 className="timeline-title">Bachelor of Engineering (Information Technology)</h3>
                    <p className="timeline-company">Saffrony Institute of Technology, Mehsana</p>
                    <p className="timeline-description">
                      Focused on web development and computer programming. Graduated with honors.
                      Participated in coding competitions and sports.
                    </p>
                    <div className="timeline-tags">
                      <span className="tag">Programming</span>
                      <span className="tag">Web Development</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2018-2019</span>
                    <h3 className="timeline-title">HSC (12th Science)</h3>
                    <p className="timeline-company">Sarva Vidyalaya, Kadi</p>
                    <p className="timeline-description">
                      Completed 12th from Sarva Vidyalaya, Kadi.
                    </p>
                    <div className="timeline-tags">
                      {/* <span className="tag">Maths</span>
                      <span className="tag">Camestry</span>
                      <span className="tag">Full Stack</span> */}
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2016-2017</span>
                    <h3 className="timeline-title">SSC (10th)</h3>
                    <p className="timeline-company">Panchshil Madhyamik Shala,
                      Katosan Road</p>
                    <p className="timeline-description">
                      Completed 1oth from Panchshil Madhyamik Shala,
                      Katosan Road.
                    </p>
                    <div className="timeline-tags">
                      {/* <span className="tag">Maths</span>
                      <span className="tag">Camestry</span>
                      <span className="tag">Full Stack</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-header animate-on-scroll">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Recent Projects</h2>
        </div>

        <div className="projects-filter animate-on-scroll">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveFilter('featured')}
          >
            Featured
          </button>
          <button
            className={`filter-btn ${activeFilter === 'React' ? 'active' : ''}`}
            onClick={() => setActiveFilter('React')}
          >
            React
          </button>
          <button
            className={`filter-btn ${activeFilter === 'HTML5' ? 'active' : ''}`}
            onClick={() => setActiveFilter('HTML5')}
          >
            HTML5
          </button>
          <button
            className={`filter-btn ${activeFilter === 'Phaser' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Phaser')}
          >
            Phaser
          </button>
          <button
            className={`filter-btn ${activeFilter === 'Socket.io' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Socket.io')}
          >
            Socket.io
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.name}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card-inner">
                <div className="project-header" style={{ backgroundColor: project.color }}>
                  <img src={project_icon} alt="Project Icon" className="project-icon" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <Link to={`/project/${project.name.toLowerCase().replace(/\s+/g, '-')}`} className="view-project-btn">
                    <span>View Project</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container animate-on-scroll">
          <Link to="/portfolio" className="view-all-btn">
            <span>View All Projects</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-on-scroll">
        <div className="contact-card">
          <div className="contact-info">
            <h2 className="contact-title">Let's work <span className="gradient-text">together!</span></h2>
            <p className="contact-text">
              Have a project in mind or just want to say hello?
              I'm always open to new opportunities and challenges.
            </p>
            <Link to="/contact" className="contact-btn">
              <span>Contact Me</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/rajpatel1403?utm_source=share&utm_campaign=share_via&utm_content=profile" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">LI</div>
              <span className="social-name">LinkedIn</span>
            </a>
            <a href="https://github.com/Raj140302" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">GH</div>
              <span className="social-name">GitHub</span>
            </a>
            <a href="https://discord.com/users/1251574412965318708" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">DC</div>
              <span className="social-name">Discord</span>
            </a>
            <a href="https://www.instagram.com/rajlo_1403?igsh=MTRid25reTVwYTd2NA==" className="social-link" target="_blank" rel="noopener noreferrer">
              <div className="social-icon">IG</div>
              <span className="social-name">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;