// This JavaScript file can be imported in the Contact component
// or included as a separate script

/**
 * Initialize FAQ accordion functionality
 */
export function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const faqIcon = faqItem.querySelector('.plus-icon');
                if (faqIcon) faqIcon.textContent = '+';
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const icon = question.querySelector('.plus-icon');
                if (icon) icon.textContent = '−';
            }
        });
    });
}

/**
 * Intersection Observer for scroll animations
 */
export function initScrollAnimations() {
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
}

/**
 * Form validation
 */
export function validateContactForm(formData) {
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
}

/**
 * Submit form data to a backend API (mock implementation)
 */
export function submitContactForm(formData) {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            // Simulate a successful response (90% success rate for demo purposes)
            if (Math.random() > 0.1) {
                resolve({
                    success: true,
                    message: 'Message sent successfully!'
                });
            } else {
                // Simulate an error
                reject({
                    success: false,
                    message: 'Error sending message. Please try again.'
                });
            }
        }, 1500);
    });
}

/**
 * Initialize Contact Page
 */
export function initContactPage() {
    // Initialize all interactive elements when DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        initFaqAccordion();
        initScrollAnimations();

        // You can add more initializations here if needed
    });
}

// Automatically initialize if this script is included directly
if (typeof window !== 'undefined') {
    initContactPage();
}