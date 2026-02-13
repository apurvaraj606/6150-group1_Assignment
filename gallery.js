// Gallery data structure
const galleryData = {
    facilities: [
        { src: 'assets/images/gallery/hospital-exterior.jpg', title: 'Modern Hospital Exterior', description: 'State-of-the-art facility' },
        { src: 'assets/images/gallery/emergency-room.jpg', title: 'Emergency Room', description: '24/7 emergency care' },
        { src: 'assets/images/gallery/patient-room.jpg', title: 'Patient Room', description: 'Comfortable accommodations' },
        { src: 'assets/images/gallery/operating-room.jpg', title: 'Operating Room', description: 'Advanced surgical suite' },
        { src: 'assets/images/gallery/waiting-area.jpg', title: 'Waiting Area', description: 'Comfortable patient lounge' },
        { src: 'assets/images/gallery/laboratory.jpg', title: 'Laboratory', description: 'Advanced diagnostic lab' }
    ],
    doctors: [
        { src: 'assets/images/gallery/doctor-sarah.jpg', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', experience: '15 years' },
        { src: 'assets/images/gallery/doctor-michael.jpg', name: 'Dr. Michael Chen', specialty: 'General Medicine', experience: '12 years' },
        { src: 'assets/images/gallery/doctor-emily.jpg', name: 'Dr. Emily Rodriguez', specialty: 'Dermatologist', experience: '10 years' },
        { src: 'assets/images/gallery/doctor-james.jpg', name: 'Dr. James Wilson', specialty: 'Pediatrician', experience: '18 years' }
    ],
    wellness: [
        { src: 'assets/images/gallery/yoga-class.jpg', title: 'Yoga & Meditation', description: 'Wellness programs' },
        { src: 'assets/images/gallery/nutrition.jpg', title: 'Nutrition Center', description: 'Dietary consultation' },
        { src: 'assets/images/gallery/fitness-center.jpg', title: 'Fitness Center', description: 'State-of-the-art gym' }
    ],
    technology: [
        { src: 'assets/images/gallery/ai-diagnosis.jpg', title: 'AI Diagnosis System', description: 'Advanced AI technology' },
        { src: 'assets/images/gallery/telemedicine.jpg', title: 'Telemedicine', description: 'Virtual consultations' },
        { src: 'assets/images/gallery/medical-equipment.jpg', title: 'Medical Equipment', description: 'Latest technology' }
    ]
};

// Initialize on page load
window.addEventListener('load', function() {
    handleImageErrors();
    countTotalImages();
    initializeLazyLoading();
});

/**
 * Handle image loading errors with fallbacks
 */
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            // Different fallbacks based on image class
            if (this.classList.contains('gallery-image')) {
                // Gallery image fallback
                this.src = createPlaceholderImage(300, 300, 'Gallery Image');
            } else if (this.classList.contains('doctor-photo')) {
                // Doctor photo fallback
                this.src = createPlaceholderImage(250, 250, 'Doctor');
            } else if (this.alt.includes('Logo')) {
                // Logo fallback
                this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text y="30" font-size="30">💚</text></svg>';
            } else {
                // Generic fallback
                this.src = createPlaceholderImage(100, 100, 'Image');
            }
        };
    });
}

/**
 * Create placeholder image using SVG
 */
function createPlaceholderImage(width, height, text) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="${width}" height="${height}" fill="url(#grad)"/>
            <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="60" font-family="Arial">📷</text>
            <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="16" font-family="Arial">${text}</text>
        </svg>
    `;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/**
 * Show image in modal
 */
function showImage(imageSrc, imageTitle) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalTitle');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = imageTitle;
}

/**
 * Count total images in gallery
 */
function countTotalImages() {
    const total = galleryData.facilities.length + 
                  galleryData.doctors.length + 
                  galleryData.wellness.length + 
                  galleryData.technology.length;
    
    const totalImagesEl = document.getElementById('totalImages');
    if (totalImagesEl) {
        animateValue(totalImagesEl, 0, total, 1000);
    }
}

/**
 * Animate number counting
 */
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Initialize lazy loading for images
 */
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Filter gallery by category
 */
function filterGallery(category) {
    console.log('Filtering gallery by:', category);
    // Additional filtering logic can be added here
}

/**
 * Download image
 */
function downloadImage(imageSrc, imageName) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Share image (placeholder for social sharing)
 */
function shareImage(imageSrc, imageTitle) {
    if (navigator.share) {
        navigator.share({
            title: imageTitle,
            text: 'Check out this image from VitalMind.ai',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        alert('Sharing not supported on this browser');
    }
}

/**
 * Initialize gallery statistics
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for tab switching
    const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(event) {
            const targetId = event.target.dataset.bsTarget;
            console.log('Switched to tab:', targetId);
        });
    });
});
