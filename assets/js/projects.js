'use strict';

// Projects data - 30+ projects
const projectsData = [
    {
        id: 1,
        title: 'Social Dashboard',
        category: 'web',
        icon: '📊',
        description: 'Complete social media analytics dashboard with real-time updates, follower tracking, and engagement metrics visualization.',
        tech: ['React', 'Firebase', 'Charts.js', 'Tailwind'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/social-dashboard',
        demo: 'https://moekyawaung-tech.github.io/social-dashboard',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763536/preview_ls5ptn.webp'
    },
    {
        id: 2,
        title: 'PWA Application',
        category: 'web',
        icon: '⚡',
        description: 'Progressive Web App with offline capabilities, push notifications, installable experience, and lightning-fast performance.',
        tech: ['PWA', 'Service Workers', 'IndexedDB', 'Workbox'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/pwa-app',
        demo: 'https://moekyawaung-tech.github.io/pwa-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png'
    },
    {
        id: 3,
        title: 'Video Player Pro',
        category: 'app',
        icon: '🎯',
        description: 'Advanced video player with custom controls, playlists, subtitle support, and adaptive streaming capabilities.',
        tech: ['HTML5', 'React', 'Redux', 'Video.js'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/video-player',
        demo: 'https://moekyawaung-tech.github.io/video-player',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png'
    },
    {
        id: 4,
        title: 'Game Collection',
        category: 'game',
        icon: '🎮',
        description: 'Collection of 10+ classic games reimagined with modern graphics, leaderboards, and multiplayer features.',
        tech: ['JavaScript', 'Canvas', 'WebGL', 'Node.js'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/game-collection',
        demo: 'https://moekyawaung-tech.github.io/game-collection',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_18_syk2ou.jpg'
    },
    {
        id: 5,
        title: 'POS Full System',
        category: 'pos',
        icon: '🏪',
        description: 'Complete Point of Sale system with inventory management, billing, receipt generation, and customer database.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/POS-Full-Version',
        demo: 'https://moekyawaung-tech.github.io/pos-full-version',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp'
    },
    {
        id: 6,
        title: 'Job Portal App',
        category: 'web',
        icon: '💼',
        description: 'Comprehensive job portal with recruiter dashboard, applicant tracking, resume builder, and matching algorithm.',
        tech: ['MERN Stack', 'JWT', 'Socket.io'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/Job-Portal-App',
        demo: 'https://moekyawaung-tech.github.io/job-portal-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795815/copilot_image_1778794626112_ega7kk.png'
    },
    {
        id: 7,
        title: 'Weather App',
        category: 'app',
        icon: '🌤️',
        description: 'Accurate weather application with 7-day forecasts, severe weather alerts, and customizable location tracking.',
        tech: ['OpenWeather API', 'Geolocation', 'Charts', 'PWA'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/Weather-app',
        demo: 'https://moekyawaung-tech.github.io/weather-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image-1_f6zlmk.jpg'
    },
    {
        id: 8,
        title: 'Casino App',
        category: 'game',
        icon: '🎰',
        description: 'Virtual casino experience with slot machines, card games, roulette, and real-time multiplayer betting.',
        tech: ['React Native', 'WebSocket', 'Blockchain'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/casino-app',
        demo: 'https://moekyawaung-tech.github.io/casino-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png'
    },
    {
        id: 9,
        title: 'Snake Game',
        category: 'game',
        icon: '🐍',
        description: 'Classic Snake game with modern graphics, power-ups, global leaderboards, and social sharing.',
        tech: ['Canvas', 'JavaScript', 'Node.js'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/Snake-Game-App',
        demo: 'https://moekyawaung-tech.github.io/snake-game-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795801/MKA_22_felevo.webp'
    },
    {
        id: 10,
        title: 'Daily Planner',
        category: 'app',
        icon: '📝',
        description: 'Smart daily planning tool with calendar integration, task management, reminders, and productivity insights.',
        tech: ['PWA', 'Calendar API', 'Notifications'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/Daily-planner-app',
        demo: 'https://moekyawaung-tech.github.io/daily-planner-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747391/image_mplr5r.png'
    },
    {
        id: 11,
        title: 'Lens Lite Editor',
        category: 'app',
        icon: '📷',
        description: 'Professional photo editor with 50+ filters, advanced adjustments, AI enhancement, and instant sharing.',
        tech: ['Canvas', 'WebGL', 'TensorFlow.js'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/Lens-lite',
        demo: 'https://moekyawaung-tech.github.io/lens-lite',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png'
    },
    {
        id: 12,
        title: 'Thailand Travel',
        category: 'web',
        icon: '🏝️',
        description: 'Complete travel guide for Thailand with attractions, hotels, restaurants, itinerary builder, and offline maps.',
        tech: ['Google Maps', 'MongoDB', 'React'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/thailand-travel',
        demo: 'https://moekyawaung-tech.github.io/thailand-travel',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795675037_heh9xk.png'
    },
    {
        id: 13,
        title: 'Hospital Directory',
        category: 'web',
        icon: '🏥',
        description: 'Comprehensive hospital directory with location tracking, services filtering, and booking system.',
        tech: ['React', 'Maps API', 'Auth'],
        year: '2023',
        github: 'https://github.com/Moekyawaung-cyber/Hospital-Lists',
        demo: 'https://moekyawaung-cyber.github.io/hospital-lists',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778831816/Content_65_oayzj3.jpg'
    },
    {
        id: 14,
        title: 'Postcode Finder',
        category: 'app',
        icon: '📍',
        description: 'Global postcode search and validation system with autocomplete, area information, and GPS integration.',
        tech: ['API Integration', 'Autocomplete'],
        year: '2023',
        github: 'https://github.com/Moekyawaung-cyber/My_postcode-My-web_project',
        demo: 'https://moekyawaung-cyber.github.io/my-postcode',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795847/copilot_image_1778795115579_acfm5j.png'
    },
    {
        id: 15,
        title: 'Stock Market App',
        category: 'web',
        icon: '📈',
        description: 'Real-time stock tracking with charts, portfolio management, news feed, and trading alerts.',
        tech: ['Alpha Vantage API', 'Charts', 'React'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/stock-market-app',
        demo: 'https://moekyawaung-tech.github.io/stock-market',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795856/copilot_image_1778795000722_eo96gj.png'
    },
    {
        id: 16,
        title: 'Music Player',
        category: 'app',
        icon: '🎵',
        description: 'Feature-rich music player with playlists, equalizer, visualizer, sleep timer, and social features.',
        tech: ['Audio API', 'React', 'UI/UX'],
        year: '2022',
        github: 'https://github.com/moekyawaung-tech/music-player',
        demo: 'https://moekyawaung-tech.github.io/music-player',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp'
    },
    {
        id: 17,
        title: 'Chat Application',
        category: 'web',
        icon: '💬',
        description: 'Real-time chat with private messages, group chats, voice notes, video calls, and file sharing.',
        tech: ['Socket.io', 'WebRTC', 'Firebase'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/chat-app',
        demo: 'https://moekyawaung-tech.github.io/chat-app',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778763531/MKA_3_zqrhhr.webp'
    },
    {
        id: 18,
        title: 'E-commerce Platform',
        category: 'web',
        icon: '🛒',
        description: 'Full-featured e-commerce with product management, payment gateway, recommendations, and reviews.',
        tech: ['Stripe', 'React', 'Express'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/ecommerce',
        demo: 'https://moekyawaung-tech.github.io/ecommerce',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795829/copilot_image_1778795000722_okryxj.png'
    },
    {
        id: 19,
        title: 'Crypto Tracker',
        category: 'web',
        icon: '💰',
        description: 'Cryptocurrency portfolio tracker with price alerts, market analysis, and trading simulator.',
        tech: ['Binance API', 'WebSocket', 'D3.js'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/crypto-tracker',
        demo: 'https://moekyawaung-tech.github.io/crypto-tracker',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795853/copilot_image_1778794781671_kytvkc.png'
    },
    {
        id: 20,
        title: 'Todo Productivity',
        category: 'app',
        icon: '✅',
        description: 'Minimalist todo app with kanban board, labels, filters, night mode, and offline sync.',
        tech: ['IndexedDB', 'Vanilla JS'],
        year: '2022',
        github: 'https://github.com/moekyawaung-tech/javascript-todo',
        demo: 'https://moekyawaung-tech.github.io/javascript-todo',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778747384/image_1_buwgls.png'
    },
    {
        id: 21,
        title: 'Admin Dashboard',
        category: 'web',
        icon: '📊',
        description: 'Modern admin dashboard with analytics, user management, settings, and role-based access.',
        tech: ['Bootstrap', 'Chart.js', 'Ajax'],
        year: '2022',
        github: 'https://github.com/moekyawaung-tech/admin-dashboard',
        demo: 'https://moekyawaung-tech.github.io/admin-dashboard',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795800/2024119_12_sqhcat.jpg'
    },
    {
        id: 22,
        title: 'World Cup 2024',
        category: 'web',
        icon: '⚽',
        description: 'World Cup tracker with live scores, lineups, player statistics, and tournament brackets.',
        tech: ['Sports API', 'React', 'Timeline'],
        year: '2024',
        github: 'https://github.com/moekyawaung-tech/world-cup',
        demo: 'https://moekyawaung-tech.github.io/world-cup',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1779031816/Content_65_oayzj3.jpg'
    },
    {
        id: 23,
        title: 'Money Tracker',
        category: 'app',
        icon: '💸',
        description: 'Personal finance tracking with category analysis, budget planner, and financial reports.',
        tech: ['React', 'D3.js', 'LocalStorage'],
        year: '2023',
        github: 'https://github.com/moekyawaung-tech/money-tracker',
        demo: 'https://moekyawaung-tech.github.io/money-tracker',
        image: 'https://res.cloudinary.com/dye5qpwii/image/upload/v1778795801/MKA_22_felevo.webp'
    },
    {
       


မပြည့်စုံသေးပါဘူး။ ဒါပေမယ့် **GitHub Pages တင်ဖို့ လိုအပ်တဲ့ အဓိက files တွေအားလုံး** ပေးပြီးပါပြီ။ အောက်မှာ အကျဉ်းချုပ်ပြီး ဘာတွေ လိုနေသေးလဲ ရှင်းပြပေးပါမယ်။

---

## ✅ **ပြီးပြီးသား Files များ**

| File | အခြေအနေ |
|------|----------|
| **index.html** | ✅ ပြီးပြီး (Output 1 မှာ ပါတယ်) |
| **README.md** | ✅ ပြီးပြီး |
| **LICENSE** | ✅ MIT License |
| **404.html** | ✅ ပြီးပြီး |
| **robots.txt** | ✅ ပြီးပြီး |
| **sitemap.xml** | ✅ ပြီးပြီး |
| **manifest.json** | ✅ PWA manifest |
| **sw.js** | ✅ Service Worker |
| **_config.yml** | ✅ GitHub Pages Jekyll config |
| **assets/css/style.css** | ✅ CSS အားလုံး (Long) |
| **assets/js/main.js** | ✅ Main logic |
| **assets/js/projects.js** | ✅ Projects data (ပထမပိုင်း) |
| **assets/js/ai-assistant.js** | ❌ **လိုနေသေး** |
| **assets/js/timeline.js** | ❌ **လိုနေသေး** |
| **assets/data/projects.json** | ❌ Optional |
| **assets/data/emails.json** | ❌ Optional |
| **assets/data/github-accounts.json** | ❌ Optional |

---

## 📋 **လိုနေသေးတဲ့ Files �ျား**

အောက်ပါ JavaScript files တွေကို ဖြည့်ပေးပါမယ်။

### **📄 assets/js/ai-assistant.js**

```javascript
'use strict';

// Time Navigator AI (CHRONO) Logic
class ChronoAssistant {
    constructor() {
        this.chat = document.getElementById('aiChat');
        this.input = document.getElementById('aiInput');
        this.isOpen = false;
        this.init();
    }

    init() {
        document.getElementById('aiInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggle() {
        const assistant = document.getElementById('aiAssistant');
        this.isOpen = !this.isOpen;
        assistant.classList.toggle('open');
        if (this.isOpen) {
            setTimeout(() => this.input.focus(), 500);
        }
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        this.displayMessage(message, 'user');
        this.input.value = '';

        setTimeout(() => {
            const response = this.getResponse(message);
            this.displayMessage(response, 'bot');
        }, 500);
    }

    displayMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message \${sender}`;
        messageDiv.textContent = text;
        this.chat.appendChild(messageDiv);
        this.chat.scrollTop = this.chat.scrollHeight;
    }

    getResponse(question) {
        const q = question.toLowerCase();
        
        const responses = {
            hello: "Hello traveler! 🕐 Welcome to Moe's time tunnel. Ask me anything about his work!",
            hi: "Hi there! Ready to explore the timeline? ",
            project: "Moe has built 30+ amazing projects including POS systems, PWA apps, game collections and more. Check out the Time Capsules section below! 🚀",
            skill: "Moe's tech arsenal includes JavaScript, React, Node.js, MongoDB, TypeScript, and many more. He's also exploring AI/ML! ⚡",
            contact: "You can reach Moe at +95 9 889 000 889 or moekyawaung@programmer.net. Check the Contact section for full details! 🎯",
            github: "Moe has 30+ GitHub accounts exploring different niches. Check the GitHub Multiverse section! 🐙",
            timeline: "Moe's journey started in 2020 with HTML basics and he's now building advanced POS systems and PWA apps. Check the timeline section for the full story! 📅",
            pwa: "Moe has built sophisticated PWA apps with offline support, notifications, and installable experiences! Check moekyawaung-tech/pwa-app! ⚡",
            pos: "Moe has created 4 POS system versions - from basic to Ultimate Pro Max with AI insights! Available in the projects section! 🏪",
            game: "Moe developed snake games, casino apps, and a collection of 10+ games. Check game-collection repository! 🎮",
            email: "You can reach Moe at moekyawaung@programmer.net or explore the Email Archive section for more options! ✉️",
            video: "Check out the Showreel Archive for Moe's video creations and motion graphics projects! 🎬",
            lovable: "Moe has built 30+ apps on Lovable platform. Check the Lovable Labs section! 💜",
            weather: "Moe has a weather app with 7-day forecasts and severe weather alerts. Check Weather-app repository! 🌤️",
            salary: "For project inquiries and collaboration, contact Moe directly via phone or email! 💼",
            default: "Great question! I can help you explore projects, skills, or get in touch with Moe. Try asking about: projects, skills, contact, GitHub, timeline, or specific tech like PWA or POS!"
        };

        // Check for keywords
        if (q.includes('hello') || q.includes('hi')) return responses.hello;
        if (q.includes('project') || q.includes('work') || q.includes('app')) return responses.project;
        if (q.includes('skill') || q.includes('technolog') || q.includes('stack')) return responses.skill;
        if (q.includes('contact') || q.includes('phone') || q.includes('reach')) return responses.contact;
        if (q.includes('github')) return responses.github;
        if (q.includes('timeline') || q.includes('journey') || q.includes('history')) return responses.timeline;
        if (q.includes('pwa') || q.includes('progressive')) return responses.pwa;
        if (q.includes('pos') || q.includes('point of sale')) return responses.pos;
        if (q.includes('game') || q.includes('gaming')) return responses.game;
        if (q.includes('email') || q.includes('mail')) return responses.email;
        if (q.includes('video') || q.includes('showreel')) return responses.video;
        if (q.includes('lovable')) return responses.lovable;
        if (q.includes('weather')) return responses.weather;
        
        return responses.default;
    }
}

// Initialize assistant
document.addEventListener('DOMContentLoaded', () => {
    window.chronoAssistant = new ChronoAssistant();
});

// Global functions
function toggleAI() {
    window.chronoAssistant.toggle();
}

function sendAIMessage() {
    window.chronoAssistant.sendMessage();
}

function handleAIEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        window.chronoAssistant.sendMessage();
    }
}
