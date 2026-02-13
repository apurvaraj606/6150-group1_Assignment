// Initialize on page load
window.addEventListener('load', function() {
    initializeDemoUser();
    checkExistingSession();
    handleImageErrors();
});

/**
 * Handle image loading errors - fallback to icons
 */
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            // Hide broken image
            this.style.display = 'none';
            
            // Show fallback based on alt text or class
            if (this.classList.contains('avatar-image')) {
                const parent = this.parentElement;
                parent.innerHTML = '<i class="fas fa-user-circle fa-4x text-white"></i>';
            } else if (this.alt.includes('Logo')) {
                this.style.display = 'inline';
                this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text y="30" font-size="30">💚</text></svg>';
            }
        };
    });
}

/**
 * Initialize demo user in localStorage
 */
function initializeDemoUser() {
    const users = JSON.parse(localStorage.getItem('vitalMindUsers') || '[]');
    
    // Check if demo user already exists
    const demoExists = users.some(user => user.email === 'demo@vitalmind.ai');
    
    if (!demoExists) {
        const demoUser = {
            id: 'demo_' + Date.now(),
            name: 'Demo User',
            email: 'demo@vitalmind.ai',
            password: 'Demo@123',
            createdAt: new Date().toISOString()
        };
        
        users.push(demoUser);
        localStorage.setItem('vitalMindUsers', JSON.stringify(users));
        console.log('Demo user initialized successfully');
    }
}

/**
 * Check if user is already logged in
 */
function checkExistingSession() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User already logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}

/**
 * Toggle password visibility
 */
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password length
 */
function validatePassword(password) {
    return password.length >= 8;
}

/**
 * Show error message
 */
function showError(message) {
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorAlert.classList.remove('d-none');
    errorAlert.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

/**
 * Hide error message
 */
function hideError() {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.classList.remove('show');
    setTimeout(() => {
        errorAlert.classList.add('d-none');
    }, 300);
}

/**
 * Show success message
 */
function showSuccess(message) {
    const successAlert = document.getElementById('successAlert');
    const successMessage = document.getElementById('successMessage');
    
    successMessage.textContent = message;
    successAlert.classList.remove('d-none');
    successAlert.classList.add('show');
}