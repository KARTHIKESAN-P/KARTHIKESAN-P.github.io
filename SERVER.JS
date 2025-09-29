function createLogo() {
    const logoContainer = document.querySelector('.logo');
    
    // Clear any existing content
    logoContainer.innerHTML = '';
    
    // Create DWG text
    const dwgText = document.createElement('div');
    dwgText.className = 'dwg';
    dwgText.textContent = 'DWG';
    
    // Create DREAM WORLD text
    const dreamWorldText = document.createElement('div');
    dreamWorldText.className = 'dream-world';
    dreamWorldText.textContent = 'DREAM WORLD';
    
    // Create GAMING text
    const gamingText = document.createElement('div');
    gamingText.className = 'gaming';
    gamingText.textContent = 'GAMING';
    
    // Create text container
    const textContainer = document.createElement('div');
    textContainer.className = 'logo-text';
    textContainer.appendChild(dwgText);
    textContainer.appendChild(dreamWorldText);
    textContainer.appendChild(gamingText);
    
    // Add to logo container
    logoContainer.appendChild(textContainer);
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', createLogo);