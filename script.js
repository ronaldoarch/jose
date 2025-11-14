// Função para criar estrelas animadas
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Posição aleatória
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Delay de animação aleatório
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Duração de animação aleatória
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        starsContainer.appendChild(star);
    }
}

// Função de redirecionamento
function redirectToOffer() {
    // Adiciona um pequeno efeito antes de redirecionar
    const button = document.querySelector('.cta-button');
    button.style.transform = 'scale(0.95)';
    
    // Dispara o evento de Lead do Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead');
    }
    
    setTimeout(() => {
        window.location.href = 'https://p20bet3.xyz/?t=1&d=qujjBCfF';
    }, 300);
}

// Efeito de partículas ao mover o mouse
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(236, 72, 153, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.8)';
    
    document.body.appendChild(particle);
    
    // Animação da partícula
    let opacity = 1;
    let yPos = y;
    const interval = setInterval(() => {
        opacity -= 0.02;
        yPos -= 2;
        particle.style.opacity = opacity;
        particle.style.top = yPos + 'px';
        
        if (opacity <= 0) {
            clearInterval(interval);
            particle.remove();
        }
    }, 20);
}

let lastParticleTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastParticleTime > 50) {
        createParticle(e.clientX, e.clientY);
        lastParticleTime = now;
    }
});

// Inicializar ao carregar a página
window.addEventListener('load', () => {
    createStars();
});

// Efeito de hover nos benefícios
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

