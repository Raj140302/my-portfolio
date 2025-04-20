import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import project_icon from '../../assets/images/icons/project_icon.png';

const Projects = () => {
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

    // Projects data
    const [projects, setProjects] = useState([
        {
            id: 'project-alpha',
            name: 'Project Alpha',
            description: 'A dynamic web application with real-time data visualization.',
            fullDescription: 'Project Alpha is a comprehensive web application designed for real-time data analysis and visualization. Built with modern technologies, it offers users an intuitive interface to interact with complex datasets and derive meaningful insights through interactive charts and graphs.',
            technologies: ['React', 'Node.js', 'Socket.io', 'D3.js'],
            featured: true,
            color: '#4F46E5',
            images: ['project_alpha_1.jpg', 'project_alpha_2.jpg'],
            liveLink: 'https://project-alpha.example.com',
            codeLink: 'https://github.com/rajpatel/project-alpha',
            challenges: 'Implementing real-time data synchronization while maintaining high performance across devices was the biggest challenge. Optimized render cycles and WebSocket connections to ensure smooth user experience.',
            year: 2023
        },
        {
            id: 'game-portal',
            name: 'Game Portal',
            description: 'Browser-based gaming platform with multiplayer support.',
            fullDescription: 'Game Portal is an interactive gaming platform that allows users to play various browser-based games with multiplayer functionality. The platform includes user authentication, game matchmaking, leaderboards, and in-game chat features.',
            technologies: ['JavaScript', 'Phaser.js', 'Firebase', 'WebRTC'],
            featured: true,
            color: '#10B981',
            images: ['game_portal_1.jpg', 'game_portal_2.jpg'],
            liveLink: 'https://game-portal.example.com',
            codeLink: 'https://github.com/rajpatel/game-portal',
            challenges: 'Building a smooth multiplayer experience with minimal latency required careful architecture planning and optimization. Implemented custom state synchronization algorithms to ensure fair gameplay.',
            year: 2023
        },
        {
            id: 'finance-dashboard',
            name: 'Finance Dashboard',
            description: 'Interactive dashboard for financial data analysis.',
            fullDescription: 'The Finance Dashboard provides users with powerful tools to analyze financial data, track investments, and visualize market trends. Featuring customizable widgets, automated reports, and predictive analytics, it helps users make informed financial decisions.',
            technologies: ['React', 'D3.js', 'REST API', 'Redux'],
            featured: false,
            color: '#F59E0B',
            images: ['finance_dashboard_1.jpg', 'finance_dashboard_2.jpg'],
            liveLink: 'https://finance-dashboard.example.com',
            codeLink: 'https://github.com/rajpatel/finance-dashboard',
            challenges: 'Processing and visualizing large financial datasets without impacting performance was challenging. Implemented data chunking and progressive rendering techniques to optimize the user experience.',
            year: 2022
        },
        {
            id: 'mobile-app-ui',
            name: 'Mobile App UI',
            description: 'Clean, modern UI components for mobile applications.',
            fullDescription: 'Mobile App UI is a comprehensive library of reusable UI components designed specifically for mobile applications. The library includes navigation elements, form inputs, cards, modals, and various interactive elements, all built with performance and accessibility in mind.',
            technologies: ['React Native', 'Styled Components', 'Storybook'],
            featured: false,
            color: '#EC4899',
            images: ['mobile_ui_1.jpg', 'mobile_ui_2.jpg'],
            liveLink: 'https://mobile-ui.example.com',
            codeLink: 'https://github.com/rajpatel/mobile-app-ui',
            challenges: 'Creating consistent UI components that work across different device sizes and operating systems required extensive testing and refinement. Established a comprehensive design system to ensure consistency.',
            year: 2022
        },
        {
            id: 'e-commerce-platform',
            name: 'E-Commerce Platform',
            description: 'Full-featured online shopping platform with payment integration.',
            fullDescription: 'This e-commerce platform offers businesses a complete solution for selling products online. Features include product catalog management, shopping cart functionality, secure payment processing, order management, and customer accounts.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            featured: false,
            color: '#8B5CF6',
            images: ['ecommerce_1.jpg', 'ecommerce_2.jpg'],
            liveLink: 'https://shop-platform.example.com',
            codeLink: 'https://github.com/rajpatel/ecommerce-platform',
            challenges: 'Implementing secure payment processing while maintaining a smooth checkout flow required careful integration of third-party APIs and thorough security testing.',
            year: 2022
        },
        {
            id: 'weather-app',
            name: 'Weather App',
            description: 'Real-time weather forecasting with interactive maps.',
            fullDescription: 'The Weather App provides users with accurate, real-time weather information and forecasts for locations worldwide. The app features interactive maps, severe weather alerts, hourly and weekly forecasts, and customizable user preferences.',
            technologies: ['JavaScript', 'Weather API', 'MapBox', 'PWA'],
            featured: false,
            color: '#3B82F6',
            images: ['weather_app_1.jpg', 'weather_app_2.jpg'],
            liveLink: 'https://weather-now.example.com',
            codeLink: 'https://github.com/rajpatel/weather-app',
            challenges: 'Optimizing the app to work offline as a Progressive Web App while maintaining data accuracy required implementing sophisticated caching strategies.',
            year: 2021
        },
        {
            id: 'task-manager',
            name: 'Task Manager',
            description: 'Productivity tool for task and project management.',
            fullDescription: 'Task Manager is a productivity application designed to help individuals and teams organize tasks, manage projects, and track progress. The app includes features such as task creation, due dates, priority levels, project grouping, and collaborative features.',
            technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
            featured: false,
            color: '#06B6D4',
            images: ['task_manager_1.jpg', 'task_manager_2.jpg'],
            liveLink: 'https://task-manager.example.com',
            codeLink: 'https://github.com/rajpatel/task-manager',
            challenges: 'Building a real-time collaborative environment where multiple users can work simultaneously required careful state management and conflict resolution strategies.',
            year: 2021
        },
        {
            id: 'puzzle-game',
            name: 'Puzzle Game',
            description: 'Browser-based puzzle game with multiple difficulty levels.',
            fullDescription: 'Puzzle Game is an engaging browser-based game that challenges players with various types of puzzles across multiple difficulty levels. The game includes progress tracking, achievements, and a level editor for creating custom puzzles.',
            technologies: ['JavaScript', 'Canvas API', 'Phaser.js', 'Howler.js'],
            featured: false,
            color: '#D946EF',
            images: ['puzzle_game_1.jpg', 'puzzle_game_2.jpg'],
            liveLink: 'https://puzzle-fun.example.com',
            codeLink: 'https://github.com/rajpatel/puzzle-game',
            challenges: 'Creating a flexible puzzle generation system that could produce varied yet solvable puzzles required developing complex algorithms and extensive play-testing.',
            year: 2021
        }
    ]);

    const { projectId } = useParams();
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeSort, setActiveSort] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    // Filter projects
    const getFilteredProjects = () => {
        let filtered = [...projects];

        if (activeFilter === 'featured') {
            filtered = filtered.filter(project => project.featured);
        } else if (activeFilter !== 'all') {
            filtered = filtered.filter(project =>
                project.technologies.includes(activeFilter)
            );
        }

        // Sort projects
        if (activeSort === 'newest') {
            filtered.sort((a, b) => b.year - a.year);
        } else if (activeSort === 'oldest') {
            filtered.sort((a, b) => a.year - b.year);
        } else if (activeSort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (activeSort === 'name-desc') {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        }

        return filtered;
    };

    const filteredProjects = getFilteredProjects();

    // Pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    // Get unique technologies for filter
    const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero-section">
                <div className="hero-backdrop"></div>
                <div className="hero-content animate-on-scroll">
                    <h1 className="hero-title">My <span className="gradient-text">Projects</span></h1>
                    <p className="hero-description">
                        Explore my latest work spanning web applications, games, and UI/UX designs.
                        Each project represents my passion for creating engaging digital experiences.
                    </p>
                </div>
            </section>

            {/* Project Filters and Controls */}
            <section className="projects-control-section animate-on-scroll">
                <div className="filters-container">
                    <div className="filter-group">
                        <h3 className="filter-label">Filter:</h3>
                        <div className="filter-buttons">
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
                            {allTechnologies.slice(0, 3).map(tech => (
                                <button
                                    key={tech}
                                    className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(tech)}
                                >
                                    {tech}
                                </button>
                            ))}
                            <div className="filter-dropdown">
                                <button className="filter-dropdown-btn">
                                    More Filters
                                    <span className="dropdown-icon">▼</span>
                                </button>
                                <div className="filter-dropdown-content">
                                    {allTechnologies.slice(3).map(tech => (
                                        <button
                                            key={tech}
                                            className={`filter-dropdown-item ${activeFilter === tech ? 'active' : ''}`}
                                            onClick={() => setActiveFilter(tech)}
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-controls">
                        <div className="sort-control">
                            <label htmlFor="sort-select">Sort:</label>
                            <select
                                id="sort-select"
                                value={activeSort}
                                onChange={(e) => setActiveSort(e.target.value)}
                                className="sort-select"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                            </select>
                        </div>

                        <div className="view-mode-buttons">
                            <button
                                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid View"
                            >
                                <span className="grid-icon">□□</span>
                            </button>
                            <button
                                className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List View"
                            >
                                <span className="list-icon">≡</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Display */}
            <section className="projects-display-section">
                {currentProjects.length === 0 ? (
                    <div className="no-projects-message animate-on-scroll">
                        <h3>No projects match your current filters</h3>
                        <p>Try adjusting your filter criteria or browse all projects.</p>
                        <button
                            className="reset-filter-btn"
                            onClick={() => setActiveFilter('all')}
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className={`projects-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
                        {currentProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-item animate-on-scroll ${viewMode === 'list' ? 'list-item' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-card">
                                    <div className="project-header" style={{ backgroundColor: project.color }}>
                                        <img src={project_icon} alt="Project Icon" className="project-icon" />
                                        {project.featured && <span className="featured-badge">Featured</span>}
                                    </div>

                                    <div className="project-body">
                                        <h3 className="project-title">{project.name}</h3>
                                        <p className="project-description">
                                            {viewMode === 'list' ? project.fullDescription.substring(0, 120) + '...' : project.description}
                                        </p>
                                        <div className="project-meta">
                                            <span className="project-year">{project.year}</span>
                                        </div>
                                        <div className="project-tech">
                                            {project.technologies.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="tech-badge"
                                                    onClick={() => setActiveFilter(tech)}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-footer">
                                        <Link to={`/project/${project.id}`} className="view-project-btn">
                                            <span>View Details</span>
                                            <span className="arrow">→</span>
                                        </Link>
                                        {viewMode === 'list' && (
                                            <div className="project-links">
                                                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                                    Live Demo
                                                </a>
                                                <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                                    Source Code
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination-container animate-on-scroll">
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            ← Previous
                        </button>

                        <div className="pagination-numbers">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            className="pagination-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next →
                        </button>
                    </div>
                )}
            </section>

            {/* Project Showcase */}
            <section className="project-showcase-section animate-on-scroll">
                <div className="section-header">
                    <span className="section-subtitle">Featured Work</span>
                    <h2 className="section-title">Highlighted Projects</h2>
                </div>

                <div className="showcase-container">
                    {projects.filter(project => project.featured).map((project, index) => (
                        <div
                            key={project.id}
                            className="showcase-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="showcase-content">
                                <div className="showcase-image-placeholder" style={{ backgroundColor: project.color }}>
                                    <div className="project-preview">Project Preview</div>
                                </div>
                                <div className="showcase-info">
                                    <span className="showcase-category" style={{ color: project.color }}>
                                        {project.technologies[0]}
                                    </span>
                                    <h3 className="showcase-title">{project.name}</h3>
                                    <p className="showcase-description">
                                        {project.fullDescription.substring(0, 200)}...
                                    </p>
                                    <div className="showcase-tech">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="showcase-buttons">
                                        <Link to={`/project/${project.id}`} className="primary-btn">
                                            <span>View Details</span>
                                            <span className="btn-icon">→</span>
                                        </Link>
                                        <a href={project.liveLink} className="outline-btn" target="_blank" rel="noopener noreferrer">
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section animate-on-scroll">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">Have a project in mind?</h2>
                        <p className="cta-description">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                        <Link to="/contact" className="cta-button">
                            <span>Let's Talk</span>
                            <span className="btn-icon">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Project Detail Component for individual project pages
export const ProjectDetail = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Animation effect from main component
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

        // This would normally fetch project data from an API
        // For now, we'll simulate this with static data
        const projectsData = [
            {
                id: 'project-alpha',
                name: 'Project Alpha',
                description: 'A dynamic web application with real-time data visualization.',
                fullDescription: 'Project Alpha is a comprehensive web application designed for real-time data analysis and visualization. Built with modern technologies, it offers users an intuitive interface to interact with complex datasets and derive meaningful insights through interactive charts and graphs.',
                technologies: ['React', 'Node.js', 'Socket.io', 'D3.js'],
                featured: true,
                color: '#4F46E5',
                images: ['project_alpha_1.jpg', 'project_alpha_2.jpg'],
                liveLink: 'https://project-alpha.example.com',
                codeLink: 'https://github.com/rajpatel/project-alpha',
                challenges: 'Implementing real-time data synchronization while maintaining high performance across devices was the biggest challenge. Optimized render cycles and WebSocket connections to ensure smooth user experience.',
                solution: 'Designed a custom state management system that efficiently handles real-time updates while minimizing unnecessary re-renders. Implemented data throttling and compression techniques to reduce bandwidth usage.',
                features: [
                    'Real-time data visualization with interactive charts',
                    'Customizable dashboard with drag-and-drop widgets',
                    'Data filtering and advanced search capabilities',
                    'Export functionality for reports and visualizations',
                    'User authentication and role-based access control'
                ],
                year: 2023,
                client: 'Tech Solutions Inc.',
                role: 'Lead Developer',
                duration: '4 months'
            },
            // Add other projects here...
        ];

        const foundProject = projectsData.find(p => p.id === projectId);
        setProject(foundProject);

        return () => {
            animatedElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, [projectId]);

    if (!project) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading project details...</p>
            </div>
        );
    }

    return (
        <div className="project-detail-page">
            {/* Project Header */}
            <section className="project-header-section" style={{ backgroundColor: project.color + '20' }}>
                <div className="project-header-content animate-on-scroll">
                    <span className="back-link">
                        <Link to="/portfolio">
                            <span className="back-arrow">←</span> Back to Projects
                        </Link>
                    </span>
                    <h1 className="project-title">{project.name}</h1>
                    <p className="project-tagline">{project.description}</p>

                    <div className="project-meta-info">
                        <div className="meta-item">
                            <span className="meta-label">Year</span>
                            <span className="meta-value">{project.year}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Client</span>
                            <span className="meta-value">{project.client}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Role</span>
                            <span className="meta-value">{project.role}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Duration</span>
                            <span className="meta-value">{project.duration}</span>
                        </div>
                    </div>

                    <div className="project-tech-badges">
                        {project.technologies.map(tech => (
                            <span key={tech} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="project-actions">
                        <a href={project.liveLink} className="primary-btn" target="_blank" rel="noopener noreferrer">
                            <span>View Live Demo</span>
                            <span className="btn-icon">→</span>
                        </a>
                        <a href={project.codeLink} className="outline-btn" target="_blank" rel="noopener noreferrer">
                            <span>Source Code</span>
                            <span className="btn-icon">↗</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="project-gallery-section animate-on-scroll">
                <div className="gallery-container">
                    <div className="gallery-image-placeholder" style={{ backgroundColor: project.color + '40' }}>
                        <div className="project-preview">Project Screenshot</div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="project-details-section">
                <div className="details-container">
                    <div className="project-overview animate-on-scroll">
                        <h2 className="details-title">Project Overview</h2>
                        <p className="details-text">{project.fullDescription}</p>
                    </div>

                    <div className="details-grid">
                        <div className="challenges-column animate-on-scroll">
                            <h3 className="details-subtitle">Challenges</h3>
                            <p className="details-text">{project.challenges}</p>
                        </div>

                        <div className="solution-column animate-on-scroll">
                            <h3 className="details-subtitle">Solution</h3>
                            <p className="details-text">{project.solution}</p>
                        </div>
                    </div>

                    <div className="features-section animate-on-scroll">
                        <h3 className="details-subtitle">Key Features</h3>
                        <ul className="features-list">
                            {project.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <span className="feature-bullet" style={{ backgroundColor: project.color }}></span>
                                    <span className="feature-text">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Next/Previous Projects */}
            <section className="navigation-section animate-on-scroll">
                <div className="navigation-container">
                    <Link to="/project/previous-project" className="nav-link prev-link">
                        <span className="nav-direction">
                            <span className="nav-arrow">←</span> Previous Project
                        </span>
                        <span className="nav-title">Previous Project Title</span>
                    </Link>

                    <Link to="/project/next-project" className="nav-link next-link">
                        <span className="nav-direction">
                            Next Project <span className="nav-arrow">→</span>
                        </span>
                        <span className="nav-title">Next Project Title</span>
                    </Link>
                </div>
            </section>

            {/* Related Projects */}
            <section className="related-projects-section animate-on-scroll">
                <div className="section-header">
                    <h2 className="section-title">Related Projects</h2>
                </div>

                <div className="related-projects-grid">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="related-project-card">
                            <div className="related-project-header" style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>
                                <img src={project_icon} alt="Project Icon" className="project-icon" />
                            </div>
                            <div className="related-project-body">
                                <h3 className="related-project-title">Related Project {index + 1}</h3>
                                <p className="related-project-description">Brief description of the related project goes here.</p>
                            </div>
                            <div className="related-project-footer">
                                <Link to={`/project/related-${index + 1}`} className="view-project-btn">
                                    <span>View Project</span>
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section animate-on-scroll">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2 className="cta-title">Interested in working together?</h2>
                        <p className="cta-description">
                            I'm available for freelance projects and full-time positions.
                        </p>
                        <Link to="/contact" className="cta-button">
                            <span>Get In Touch</span>
                            <span className="btn-icon">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;