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


/**
 * Validate registration form
 */
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Get input elements
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirmPassword');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');
    
    // Reset validation states
    nameInput.classList.remove('is-invalid', 'is-valid');
    emailInput.classList.remove('is-invalid', 'is-valid');
    passwordInput.classList.remove('is-invalid', 'is-valid');
    confirmInput.classList.remove('is-invalid', 'is-valid');
    
    let isValid = true;
    
    // Validate name
    if (!fullName) {
        nameError.textContent = 'Full name is required';
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else if (fullName.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        nameError.textContent = 'Name can only contain letters and spaces';
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.add('is-valid');
        validationState.fullName = true;
    }
    
    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        // Check if email already exists
        const users = JSON.parse(localStorage.getItem('vitalMindUsers') || '[]');
        if (users.some(u => u.email === email)) {
            emailError.textContent = 'Email is already registered';
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else {
            emailInput.classList.add('is-valid');
            validationState.email = true;
        }
    }
    
    // Validate password
    if (!password) {
        passwordError.textContent = 'Password is required';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.textContent = 'Password must contain a lowercase letter';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password must contain an uppercase letter';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = 'Password must contain a number';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
        passwordError.textContent = 'Password must contain a special character';
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordInput.classList.add('is-valid');
        validationState.password = true;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
        confirmPasswordError.textContent = 'Please confirm your password';
        confirmInput.classList.add('is-invalid');
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmInput.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmInput.classList.add('is-valid');
        validationState.confirmPassword = true;
    }
    
    // Validate terms
    if (!agreeTerms) {
        termsError.textContent = 'You must agree to the terms and conditions';
        termsError.style.display = 'block';
        isValid = false;
    } else {
        termsError.style.display = 'none';
        validationState.terms = true;
    }
    
    return isValid;
}

/**
 * Generate unique user ID
 */
function generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Handle registration form submission
 */
function handleRegister(event) {
    event.preventDefault();
    
    // Hide any existing alerts
    hideError();
    hideSuccess();
    
    // Validate form
    if (!validateForm()) {
        showError('Please fix all validation errors before submitting');
        return;
    }
    
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.disabled = true;
    registerBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creating Account...';
    
    // Simulate API call delay
    setTimeout(() => {
        try {
            // Get existing users
            const users = JSON.parse(localStorage.getItem('vitalMindUsers') || '[]');
            
            // Create new user object
            const newUser = {
                id: generateUserId(),
                name: document.getElementById('fullName').value.trim(),
                email: document.getElementById('email').value.trim(),
                password: document.getElementById('password').value,
                createdAt: new Date().toISOString()
            };
            
            // Add to users array
            users.push(newUser);
            
            // Save to localStorage
            localStorage.setItem('vitalMindUsers', JSON.stringify(users));
            
            // Show success message
            showSuccess('Account created successfully! Redirecting to login...');
            
            // Redirect to login page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
            
        } catch (error) {
            registerBtn.disabled = false;
            registerBtn.innerHTML = '<i class="fas fa-user-plus me-2"></i>Create Account';
            showError('An error occurred during registration. Please try again.');
            console.error('Registration error:', error);
        }
    }, 1500);
}