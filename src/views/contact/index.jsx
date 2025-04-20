import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { initFaqAccordion, initScrollAnimations, validateContactForm, submitContactForm } from './contect';
import { toast } from 'react-toastify';
import { ReactToastify } from '../../shared/utils';

const Contact = () => {
    // Use useEffect to call these functions when the component mounts
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const formRef = useRef(null);
    useEffect(() => {
        initFaqAccordion();
        initScrollAnimations();
    }, []);

    // For form validation within your handleSubmit function
    // Inside your Contact component

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateContactForm(formData);

        if (Object.keys(errors).length === 0) {
            // setIsSubmitting(true);
            // setTimeout(() => {
            //     setIsSubmitting(false);
            console.log('Form submitted successfully!');
            ReactToastify('Form submitted successfully!', 'success');
            console.log('Form data:', formData);

            // }, 1000);

            // submitContactForm(formData)
            // .then(response => {
            //         setIsSubmitting(false);
            //         setSubmitSuccess(true);
            //         // Reset form
            //         setFormData({
            //             name: '',
            //             email: '',
            //             subject: '',
            //             message: ''
            //         });
            //         // Reset success message after 5 seconds
            //         setTimeout(() => {
            //             setSubmitSuccess(false);
            //         }, 5000);
            //     })
            //     .catch(error => {
            //         setIsSubmitting(false);
            //         console.error("Error submitting form:", error);
            //         // Handle error (e.g., show an error message)
            //     });
        } else {
            setFormErrors(errors);
        }
    };

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

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const errors = validateForm();
    //     setFormErrors(errors);

    //     if (Object.keys(errors).length === 0) {
    //         setIsSubmitting(true);

    //         // Simulate API call
    //         setTimeout(() => {
    //             setIsSubmitting(false);
    //             setSubmitSuccess(true);

    //             // Reset form after success
    //             setFormData({
    //                 name: '',
    //                 email: '',
    //                 subject: '',
    //                 message: ''
    //             });

    //             // Reset success message after 5 seconds
    //             setTimeout(() => {
    //                 setSubmitSuccess(false);
    //             }, 5000);
    //         }, 1500);
    //     } else {
    //         // Scroll to first error
    //         const firstErrorField = Object.keys(errors)[0];
    //         const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
    //         if (errorElement) {
    //             errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //             errorElement.focus();
    //         }
    //     }
    // };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-backdrop"></div>
                <div className="hero-content">
                    <div className="hero-text animate-on-scroll">
                        <span className="page-subtitle">Get In Touch</span>
                        <h1>Contact <span className="gradient-text">Me</span></h1>
                        <p className="hero-description">
                            Have a project in mind or want to discuss a potential collaboration?
                            I'm always open to new opportunities and challenges. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-subtitle">Reach Out</span>
                        <h2 className="section-title">Contact Information</h2>
                        <p className="section-description">
                            Feel free to get in touch with me through any of the following methods.
                            I typically respond within 24 hours.
                        </p>
                    </div>

                    <div className="contact-cards">
                        <div className="contact-card animate-on-scroll">
                            <div className="card-icon">
                                <MapPin size={28} />
                            </div>
                            <div className="card-content">
                                <h3>Location</h3>
                                <p>Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>

                        <div className="contact-card animate-on-scroll">
                            <div className="card-icon">
                                <Mail size={28} />
                            </div>
                            <div className="card-content">
                                <h3>Email</h3>
                                <p>raj.patel@example.com</p>
                            </div>
                        </div>

                        <div className="contact-card animate-on-scroll">
                            <div className="card-icon">
                                <Phone size={28} />
                            </div>
                            <div className="card-content">
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="contact-card animate-on-scroll">
                            <div className="card-icon">
                                <Clock size={28} />
                            </div>
                            <div className="card-content">
                                <h3>Working Hours</h3>
                                <p>Mon - Fri: 9AM - 6PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-media-container animate-on-scroll">
                        <h3>Find Me On</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon-link" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            {/* <a href="#" className="social-icon-link" aria-label="GitHub">
                                <GitHub size={22} />
                            </a> */}
                            <a href="#" className="social-icon-link" aria-label="Instagram">
                                <Instagram size={22} />
                            </a>
                            <a href="#" className="social-icon-link" aria-label="Facebook">
                                <Facebook size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-form-container">
                        <div className="form-header animate-on-scroll">
                            <h2>Send Me a Message</h2>
                            <p>Have a question or want to work together? Drop me a message!</p>
                        </div>

                        {submitSuccess ? (
                            <div className="success-message animate-on-scroll">
                                <div className="success-icon">✓</div>
                                <h3>Message Sent Successfully!</h3>
                                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    className="new-message-btn"
                                    onClick={() => setSubmitSuccess(false)}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="contact-form animate-on-scroll">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={formErrors.name ? 'error' : ''}
                                            placeholder="John Doe"
                                        />
                                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={formErrors.email ? 'error' : ''}
                                            placeholder="john@example.com"
                                        />
                                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={formErrors.subject ? 'error' : ''}
                                        placeholder="Project Inquiry"
                                    />
                                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className={formErrors.message ? 'error' : ''}
                                        placeholder="Hello, I'd like to discuss a potential project..."
                                    ></textarea>
                                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                                </div>

                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="loading-spinner"></span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-subtitle">Questions & Answers</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-container">
                        <div className="faq-item animate-on-scroll">
                            <div className="question">
                                <h3>What services do you offer?</h3>
                                <span className="plus-icon">+</span>
                            </div>
                            <div className="answer">
                                <p>
                                    I specialize in web development, interactive applications, and browser-based games.
                                    My services include front-end development with React.js, JavaScript game development
                                    using Phaser.js and Pixi.js, responsive design, and UI/UX implementation.
                                </p>
                            </div>
                        </div>

                        <div className="faq-item animate-on-scroll">
                            <div className="question">
                                <h3>What is your typical project timeline?</h3>
                                <span className="plus-icon">+</span>
                            </div>
                            <div className="answer">
                                <p>
                                    Project timelines vary depending on complexity and scope. A simple website might take
                                    2-3 weeks, while a more complex web application or game can take 1-3 months. I'll provide
                                    a detailed timeline during our initial consultation based on your specific requirements.
                                </p>
                            </div>
                        </div>

                        <div className="faq-item animate-on-scroll">
                            <div className="question">
                                <h3>Do you offer maintenance after project completion?</h3>
                                <span className="plus-icon">+</span>
                            </div>
                            <div className="answer">
                                <p>
                                    Yes, I provide ongoing maintenance and support for all projects. This includes bug fixes,
                                    updates, and minor feature additions. We can discuss a maintenance plan that suits your needs
                                    once the project is completed.
                                </p>
                            </div>
                        </div>

                        <div className="faq-item animate-on-scroll">
                            <div className="question">
                                <h3>How do we get started on a project?</h3>
                                <span className="plus-icon">+</span>
                            </div>
                            <div className="answer">
                                <p>
                                    The process begins with an initial consultation where we discuss your requirements, goals, and vision.
                                    After that, I'll prepare a proposal including timeline, deliverables, and cost estimate. Once approved,
                                    we'll establish milestones and begin development with regular check-ins and updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2>Ready to bring your ideas to life?</h2>
                            <p>Let's collaborate on your next project and create something amazing together.</p>
                            <Link to="/portfolio" className="cta-btn">
                                <span>View My Work</span>
                                <span className="btn-icon">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Script for FAQ accordion */}
            <script type="text/javascript">
                {`
          document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
              const question = item.querySelector('.question');
              
              question.addEventListener('click', () => {
                // Toggle active class
                item.classList.toggle('active');
                
                // Change plus/minus icon
                const icon = question.querySelector('.plus-icon');
                if (item.classList.contains('active')) {
                  icon.textContent = '−';
                } else {
                  icon.textContent = '+';
                }
              });
            });
          });
        `}
            </script>
        </div>
    );
};

export default Contact;