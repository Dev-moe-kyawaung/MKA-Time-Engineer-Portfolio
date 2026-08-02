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
