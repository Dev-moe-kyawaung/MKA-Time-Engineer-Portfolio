
'use strict';

// Timeline data
const timelineData = [
    {
        year: '2019',
        title: 'The Awakening',
        description: 'Discovered the power of HTML and CSS. Built my first static website and fell in love with web development.',
        tech: ['HTML5', 'CSS3', 'Notepad++'],
        icon: '💡'
    },
    {
        year: '2020',
        title: 'First Commit',
        description: 'Started JavaScript journey. Created interactive pages and learned about DOM manipulation.',
        tech: ['JavaScript', 'jQuery', 'Chrome DevTools'],
        icon: '🚀'
    },
    {
        year: '2021',
        title: 'Framework Era',
        description: 'Dived into React and modern JS ecosystem. Built SPAs with state management.',
        tech: ['React', 'Redux', 'Webpack'],
        icon: '⚛️'
    },
    {
        year: '2022',
        title: 'Full-Stack Mastery',
        description: 'Mastered backend development with Node.js. Built complete apps with MongoDB and Express.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        icon: '🔧'
    },
    {
        year: '2023',
        title: 'Pro Level Projects',
        description: 'Launched 15+ production-ready apps. Specialized in POS systems and data dashboards.',
        tech: ['React', 'Firebase', 'Tailwind CSS'],
        icon: '🏆'
    },
    {
        year: '2024',
        title: 'PWA & Games',
        description: 'Developed Progressive Web Apps and game collections. Focus on offline-first architecture.',
        tech: ['PWA', 'Canvas', 'Service Workers'],
        icon: '🎮'
    },
    {
        year: '2025',
        title: 'AI Integration',
        description: 'Exploring AI/ML. Building intelligent assistants and integrating ChatGPT API into real projects.',
        tech: ['ChatGPT API', 'TensorFlow.js', 'Python'],
        icon: '🤖'
    }
];

// Load timeline
function loadTimeline() {
    const container = document.querySelector('.timeline-container');
    
    timelineData.forEach((item, index) => {
        const timelineEl = document.createElement('div');
        timelineEl.className = 'timeline-item';
        timelineEl.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        timelineEl.innerHTML = `
            <div class="timeline-content" onclick="openTimelineItem(this)">
                <span class="timeline-icon">\${item.icon}</span>
                <div class="timeline-year">\${item.year}</div>
                <div class="timeline-title">\${item.title}</div>
                <div class="timeline-desc">\${item.description}</div>
                <div class="timeline-tech">
                    \${item.tech.map(t => `<span class="tech-tag">\${t}</span>`).join('')}
                </div>
            </div>
        `;
        container.appendChild(timelineEl);
    });

    // Add scroll animation observer
    observeTimelineItems();
}

function observeTimelineItems() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Open timeline item
function openTimelineItem(element) {
    element.classList.toggle('expanded');
    const desc = element.querySelector('.timeline-desc');
    desc.classList.toggle('hidden');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTimeline();
});
