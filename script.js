// Particle Background
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, radius: 100 };
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        this.resizeCanvas();
        
        // Create particles
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: `rgba(0, 243, 255, ${Math.random() * 0.5})`
            });
        }
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Wrap around edges
            if (p.x > this.canvas.width) p.x = 0;
            if (p.x < 0) p.x = this.canvas.width;
            if (p.y > this.canvas.height) p.y = 0;
            if (p.y < 0) p.y = this.canvas.height;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
            
            // Mouse interaction
            const mouseDistance = Math.sqrt((p.x - this.mouse.x) ** 2 + (p.y - this.mouse.y) ** 2);
            if (mouseDistance < this.mouse.radius) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(255, 0, 255, ${0.3 * (1 - mouseDistance / this.mouse.radius)})`;
                this.ctx.lineWidth = 1;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = 0;
            this.mouse.y = 0;
        });
    }
}

// Counter Animation
class Counter {
    constructor(element) {
        this.element = element;
        this.target = parseInt(element.getAttribute('data-target'));
        this.duration = 2000;
        this.startTime = null;
        
        this.animate();
    }
    
    animate(timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        
        const progress = Math.min((timestamp - this.startTime) / this.duration, 1);
        const current = Math.floor(progress * this.target);
        
        this.element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame((ts) => this.animate(ts));
        } else {
            this.element.textContent = this.target;
        }
    }
}

// Theme Toggle
class ThemeManager {
    constructor() {
        this.theme = 'dark';
        this.toggleBtn = document.getElementById('themeToggle');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.toggleBtn.addEventListener('click', () => this.toggleTheme());
    }
    
    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.theme);
        
        // Update button text
        const btnText = this.toggleBtn.querySelector('.btn-text');
        btnText.textContent = this.theme === 'dark' ? 'DARK' : 'LIGHT';
    }
}

// Scroll Animations
class ScrollAnimator {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupObservers();
    }
    
    setupObservers() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);
        
        // Observe elements to animate
        document.querySelectorAll('.violation-card, .finding-card, .stat-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// Navigation Smooth Scroll
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    new ParticleBackground();
    
    // Initialize counters
    document.querySelectorAll('.stat-value').forEach(el => {
        new Counter(el);
    });
    
    // Initialize theme manager
    new ThemeManager();
    
    // Initialize scroll animations
    new ScrollAnimator();
    
    // Initialize smooth scroll
    new SmoothScroll();
    
    // Add CSS for scroll animations
    const style = document.createElement('style');
    style.textContent = `
        .violation-card, .finding-card, .stat-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .violation-card.animate-in, .finding-card.animate-in, .stat-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        [data-theme="light"] {
            --dark: #f0f0f0;
            --darker: #e0e0e0;
            --light: #0a0a1a;
            --gray: #4a4a5a;
        }
    `;
    document.head.appendChild(style);
});

// Add bar animation CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .bar.pre { --target-height: 52%; }
        .bar-group:nth-child(1) .bar.post { --target-height: 96%; }
        .bar-group:nth-child(2) .bar.pre { --target-height: 17.5%; }
        .bar-group:nth-child(2) .bar.post { --target-height: 32.7%; }
        .bar-group:nth-child(3) .bar.pre { --target-height: 12.2%; }
        .bar-group:nth-child(3) .bar.post { --target-height: 22.3%; }
    </style>
`);