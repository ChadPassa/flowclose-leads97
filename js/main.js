// FlowClose Main JavaScript - 2025-11-07

// ========== CALENDAR MODAL ==========
function openCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeCalendarModal() {
    const modal = document.getElementById('calendar-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCalendarModal();
    }
});

// Close modal on background click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('calendar-modal');
    if (e.target === modal) {
        closeCalendarModal();
    }
});

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ========== FAQ ACCORDION ==========
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    
    // Close all other answers
    allAnswers.forEach(a => {
        if (a !== answer) {
            a.classList.remove('active');
        }
    });
    
    // Toggle current answer
    answer.classList.toggle('active');
}

// ========== FAQ SEARCH ==========
function searchFAQ() {
    const searchInput = document.getElementById('faqSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Reset filter buttons if searching
    if (searchTerm) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    }
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========== FAQ CATEGORY FILTER ==========
function filterFAQ(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('faqSearch');
    
    // Clear search when filtering by category
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter items
    faqItems.forEach(item => {
        const itemCategory = item.dataset.category;
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== COOKIE CONSENT ==========
function showCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('show');
        }
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('show');
    }
}

// ========== FORM VALIDATION ==========
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#dc2626';
        } else {
            field.style.borderColor = '#e5e5e5';
        }
    });
    
    // Check consent checkbox
    const consentCheckbox = form.querySelector('input[type="checkbox"][required]');
    if (consentCheckbox && !consentCheckbox.checked) {
        isValid = false;
        alert('Please agree to the terms and conditions');
    }
    
    return isValid;
}

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function() {
    // Show cookie consent
    showCookieConsent();
    
    // Initialize FAQ search if present
    const faqSearch = document.getElementById('faq-search');
    if (faqSearch) {
        faqSearch.addEventListener('input', searchFAQ);
    }
    
    // Add calendar button listeners
    document.querySelectorAll('.btn-calendar').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openCalendarModal();
        });
    });
    
    // Log page view (placeholder for analytics)
    console.log('FlowClose page loaded:', window.location.pathname);
});

// ========== SCROLL ANIMATIONS (Optional) ==========
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Lead Calculator Functionality
function calculateLeads() {
    const input = document.getElementById('website-clicks');
    const resultsDiv = document.getElementById('calculator-results');
    const lowEstimateEl = document.getElementById('low-estimate');
    const highEstimateEl = document.getElementById('high-estimate');
    
    const clicks = parseInt(input.value);
    
    // Validation
    if (!clicks || clicks <= 0) {
        alert('Please enter a valid number of monthly website visitors');
        input.focus();
        return;
    }
    
    // Calculate estimates
    const lowEstimate = Math.round(clicks * 0.15);
    const highEstimate = Math.round(clicks * 0.25);
    
    // Animate the numbers
    animateValue(lowEstimateEl, 0, lowEstimate, 1000);
    animateValue(highEstimateEl, 0, highEstimate, 1000);
    
    // Show results with animation
    resultsDiv.style.display = 'block';
    
    // Scroll to results smoothly
    setTimeout(() => {
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Animate number counting up
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 16);
}

// Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('website-clicks');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateLeads();
            }
        });
    }
});

// ========================================
// INTERACTIVE CALCULATOR WIDGETS
// JavaScript Functionality
// ========================================

// Lead Calculator Widget Function
function calculateWidgetLeads() {
    const input = document.getElementById('widget-visitors');
    const visitors = parseInt(input.value);
    
    if (!visitors || visitors < 0) {
        // Add shake animation to input
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        alert('Please enter a valid number of monthly website visitors');
        return;
    }
    
    // Calculate estimates (15% and 25%)
    const lowEstimate = Math.round(visitors * 0.15);
    const highEstimate = Math.round(visitors * 0.25);
    
    // Calculate costs at $4/lead
    const lowCost = lowEstimate * 4;
    const highCost = highEstimate * 4;
    
    // Show results section
    const resultsSection = document.getElementById('widget-results');
    resultsSection.style.display = 'grid';
    
    // Animate the numbers
    animateWidgetValue('widget-low', 0, lowEstimate, 1200);
    animateWidgetValue('widget-high', 0, highEstimate, 1200);
    
    // Animate cost numbers
    const costLowEl = document.getElementById('cost-low');
    const costHighEl = document.getElementById('cost-high');
    if (costLowEl && costHighEl) {
        animateSimpleValue(costLowEl, 0, lowCost, 1200);
        animateSimpleValue(costHighEl, 0, highCost, 1200);
    }
    
    // Show CTA button
    const ctaSection = document.getElementById('widget-cta');
    if (ctaSection) {
        setTimeout(() => {
            ctaSection.style.display = 'block';
        }, 1200);
    }
    
    // Smooth scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Number animation function
function animateWidgetValue(id, start, end, duration) {
    const element = document.getElementById(id).querySelector('.number');
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = Math.round(end).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 16);
}

// Simple value animation for cost display
function animateSimpleValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = Math.round(end).toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
    }, 16);
}

// Allow Enter key to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    const widgetInput = document.getElementById('widget-visitors');
    if (widgetInput) {
        widgetInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateWidgetLeads();
            }
        });
    }
});

// Add shake animation CSS dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s;
        border-color: #ef4444 !important;
    }
`;
document.head.appendChild(shakeStyle);

