/* 
 * validation.js
 * Provides form validation functions for user input including email, password, and other fields.
 */

/*
 * Form Validation System
 * Author: Member 2 - Gowri Chandran
 * Description: Comprehensive form validation with password strength indicator
 */

// Global validation state
let validationState = {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    terms: false
};

// Initialize on page load
window.addEventListener('load', function() {
    handleImageErrors();
});

/**
 * Handle image loading errors - fallback to icons
 */
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            if (this.classList.contains('avatar-image')) {
                const parent = this.parentElement;
                parent.innerHTML = '<i class="fas fa-user-plus fa-4x text-white"></i>';
            } else if (this.alt.includes('Logo')) {
                this.style.display = 'inline';
                this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text y="30" font-size="30">💚</text></svg>';
            }
        };
    });
}

/**
 * Update progress bar based on form completion
 */
function updateProgress() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    let filledFields = 0;
    const totalFields = 5;
    
    if (fullName.length >= 3) filledFields++;
    if (email && validateEmail(email)) filledFields++;
    if (password.length >= 8) filledFields++;
    if (confirmPassword && confirmPassword === password) filledFields++;
    if (agreeTerms) filledFields++;
    
    const progress = (filledFields / totalFields) * 100;
    
    const progressBar = document.getElementById('formProgress');
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
}

/**
 * Toggle password visibility
 */
function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

/**
 * Handle password input - check strength and update progress
 */
function handlePasswordInput() {
    const password = document.getElementById('password').value;
    checkPasswordStrength(password);
    updateProgress();
}

/**
 * Check password strength
 */
function checkPasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    if (!password) {
        strengthBar.className = 'password-strength-bar';
        strengthText.textContent = '';
        return;
    }
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Character variety checks
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    // Update UI based on strength
    if (strength <= 2) {
        strengthBar.className = 'password-strength-bar strength-weak';
        strengthText.textContent = 'Weak password';
        strengthText.className = 'text-danger small';
    } else if (strength <= 4) {
        strengthBar.className = 'password-strength-bar strength-medium';
        strengthText.textContent = 'Medium password';
        strengthText.className = 'text-warning small';
    } else {
        strengthBar.className = 'password-strength-bar strength-strong';
        strengthText.textContent = 'Strong password';
        strengthText.className = 'text-success small';
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
 * Show error message
 */
function showError(message) {
    const errorAlert = document.getElementById('errorAlert');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    errorAlert.classList.remove('d-none');
    errorAlert.classList.add('show');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Hide success message
 */
function hideSuccess() {
    const successAlert = document.getElementById('successAlert');
    successAlert.classList.remove('show');
    setTimeout(() => {
        successAlert.classList.add('d-none');
    }, 300);
}
