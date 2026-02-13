/**
 * Dashboard System
 * Author: Member 3 - Harshitha Kasu
 * Description: Handles dashboard functionality, session management, and image fallbacks
 */

// Check authentication on page load
window.addEventListener('load', function() {
    checkAuthentication();
    loadUserData();
    handleImageErrors();
});

/**
 * Check if user is authenticated
 */
function checkAuthentication() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Not logged in - redirect to login page
        alert('Please login to access the dashboard');
        window.location.href = 'index.html';
        return;
    }
}

/**
 * Load and display user data
 */
function loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // Extract first name from full name
        const firstName = currentUser.name ? currentUser.name.split(' ')[0] : 'User';
        
        // Update all user name displays
        const welcomeNameEl = document.getElementById('welcomeName');
        const navUserNameEl = document.getElementById('navUserName');
        const dropdownUserNameEl = document.getElementById('dropdownUserName');
        const dropdownUserEmailEl = document.getElementById('dropdownUserEmail');
        
        if (welcomeNameEl) welcomeNameEl.textContent = firstName;
        if (navUserNameEl) navUserNameEl.textContent = firstName;
        if (dropdownUserNameEl) dropdownUserNameEl.textContent = currentUser.name || 'User';
        if (dropdownUserEmailEl) dropdownUserEmailEl.textContent = currentUser.email || '';
    }
}

/**
 * Handle image loading errors - provide fallbacks
 */
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            // Different fallbacks based on image type
            if (this.alt.includes('Logo')) {
                // Logo fallback
                this.style.display = 'inline';
                this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text y="30" font-size="30">💚</text></svg>';
            } else if (this.classList.contains('banner-image')) {
                // Banner fallback
                this.style.display = 'none';
                const overlay = this.nextElementSibling;
                if (overlay) {
                    overlay.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }
            } else if (this.classList.contains('stat-icon-img')) {
                // Stat icon fallback - show Font Awesome icon
                const wrapper = this.parentElement;
                wrapper.innerHTML = '<i class="fas fa-chart-bar fa-2x text-white"></i>';
            } else if (this.classList.contains('doctor-image')) {
                // Doctor image fallback
                const container = this.parentElement;
                container.innerHTML = '<i class="fas fa-user-md fa-4x text-white"></i>';
            } else if (this.classList.contains('doctor-thumb')) {
                // Doctor thumbnail fallback
                this.style.display = 'none';
                const wrapper = document.createElement('div');
                wrapper.className = 'doctor-thumb-fallback';
                wrapper.innerHTML = '<i class="fas fa-user-md"></i>';
                this.parentElement.insertBefore(wrapper, this);
            } else if (this.classList.contains('action-image')) {
                // Action button image fallback
                const wrapper = this.parentElement;
                wrapper.innerHTML = '<i class="fas fa-plus-circle fa-2x text-white"></i>';
            } else if (this.classList.contains('activity-icon')) {
                // Activity icon fallback
                const wrapper = this.parentElement;
                wrapper.innerHTML = '<i class="fas fa-circle-notch fa-lg text-white"></i>';
            } else if (this.classList.contains('user-avatar-img')) {
                // User avatar fallback
                this.style.display = 'none';
            } else {
                // Generic fallback
                this.style.display = 'none';
            }
        };
    });
}
