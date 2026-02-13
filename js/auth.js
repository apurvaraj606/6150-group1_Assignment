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