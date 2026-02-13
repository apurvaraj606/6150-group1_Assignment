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
