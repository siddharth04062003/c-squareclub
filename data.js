
// Dynamic content management for C-Square Club
class ContentManager {
    constructor() {
        this.events = this.loadEvents();
        this.teamMembers = this.loadTeamMembers();
        this.init();
    }
    
    loadEvents() {
        // Try to load from localStorage first, then fall back to default data
        const stored = localStorage.getItem('c-square-events');
        if (stored) {
            return JSON.parse(stored);
        }
        
        // Default events data
        return [
            {
                type: 'upcoming',
                date: 'Dec 15, 2024 - Dec 17, 2024',
                title: 'Winter Hackathon 2024',
                description: 'Join us for our biggest hackathon of the year! Build innovative solutions, learn new technologies, and compete for amazing prizes.',
                link: 'https://forms.google.com/hackathon2024',
                linkText: 'Register Now'
            },
            {
                type: 'upcoming',
                date: 'Jan 10, 2025',
                title: 'AI/ML Workshop',
                description: 'Dive deep into Artificial Intelligence and Machine Learning with hands-on workshops led by industry experts.',
                link: 'https://forms.google.com/ai-workshop',
                linkText: 'Register Now'
            },
            {
                type: 'upcoming',
                date: 'Jan 25, 2025',
                title: 'Tech Talk Series',
                description: 'Learn from senior developers and tech leaders about the latest trends in software development and career growth.',
                link: 'https://forms.google.com/tech-talk',
                linkText: 'Register Now'
            },
            {
                type: 'upcoming',
                date: 'Feb 8, 2025',
                title: 'Open Source Contribution Day',
                description: 'Contribute to open source projects, learn Git workflows, and collaborate with developers worldwide.',
                link: 'https://forms.google.com/opensource-day',
                linkText: 'Register Now'
            },
            {
                type: 'past',
                date: 'Nov 15, 2024',
                title: 'Web Development Bootcamp',
                description: 'Intensive 3-day bootcamp covering modern web development technologies including React, Node.js, and databases.',
                link: 'https://blog.c-square.club/web-dev-bootcamp-recap',
                linkText: 'View Recap'
            },
            {
                type: 'past',
                date: 'Oct 22, 2024',
                title: 'Coding Competition',
                description: 'Annual competitive programming contest with challenging algorithmic problems and exciting prizes.',
                link: 'https://blog.c-square.club/coding-competition-results',
                linkText: 'View Results'
            },
            {
                type: 'past',
                date: 'Sep 30, 2024',
                title: 'Industry Meetup',
                description: 'Networking event with tech professionals, career guidance sessions, and company presentations.',
                link: 'https://blog.c-square.club/industry-meetup-highlights',
                linkText: 'View Highlights'
            },
            {
                type: 'past',
                date: 'Aug 18, 2024',
                title: 'Summer Project Showcase',
                description: 'Members presented their summer projects, sharing innovations and learning experiences with the community.',
                link: 'https://blog.c-square.club/summer-showcase-2024',
                linkText: 'View Projects'
            }
        ];
    }
    
    loadTeamMembers() {
        // Try to load from localStorage first, then fall back to default data
        const stored = localStorage.getItem('c-square-team');
        if (stored) {
            return JSON.parse(stored);
        }
        
        // Default team data - organized in slides of 3
        return [
            // Slide 1
            [
                {
                    name: 'Alex Smith',
                    position: 'President',
                    bio: 'Leading C-Square with vision for innovation and community growth in the tech space.',
                    initials: 'AS',
                    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
                },
                {
                    name: 'Maria Johnson',
                    position: 'Vice President',
                    bio: 'Coordinating events and fostering member engagement across all club activities.',
                    initials: 'MJ',
                    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face'
                },
                {
                    name: 'David Lee',
                    position: 'Technical Lead',
                    bio: 'Overseeing technical projects and mentoring developers in cutting-edge technologies.',
                    initials: 'DL',
                    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
                }
            ],
            // Slide 2
            [
                {
                    name: 'Sarah Rodriguez',
                    position: 'Event Coordinator',
                    bio: 'Organizing workshops, hackathons, and community events for skill development.',
                    initials: 'SR'
                },
                {
                    name: 'John Wilson',
                    position: 'Web Developer',
                    bio: 'Building and maintaining club\'s digital presence with modern web technologies.',
                    initials: 'JW'
                },
                {
                    name: 'Emily Brown',
                    position: 'UI/UX Designer',
                    bio: 'Creating beautiful and user-friendly interfaces for all club projects.',
                    initials: 'EB'
                }
            ],
            // Slide 3
            [
                {
                    name: 'Robert Davis',
                    position: 'Backend Developer',
                    bio: 'Building robust server-side applications and APIs for scalable solutions.',
                    initials: 'RD'
                },
                {
                    name: 'Lisa Miller',
                    position: 'Data Scientist',
                    bio: 'Analyzing data and building ML models for intelligent insights and automation.',
                    initials: 'LM'
                },
                {
                    name: 'Kevin Taylor',
                    position: 'Mobile Developer',
                    bio: 'Creating innovative mobile applications for iOS and Android platforms.',
                    initials: 'KT'
                }
            ]
        ];
    }
    
    init() {
        this.renderEvents();
        this.renderTeamMembers();
        this.updateToastEvent();
    }
    
    renderEvents() {
        const upcomingEvents = this.events.filter(event => event.type === 'upcoming');
        const pastEvents = this.events.filter(event => event.type === 'past');
        
        this.renderEventSlider('upcoming', upcomingEvents);
        this.renderEventSlider('past', pastEvents);
    }
    
    renderEventSlider(type, events) {
        const slider = document.getElementById(type);
        if (!slider) return;
        
        slider.innerHTML = events.map(event => `
            <div class="event-card">
                <div class="event-date">${event.date}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                ${event.link ? `
                    <div class="event-link">
                        <a href="${event.link}" target="_blank" class="event-btn">
                            ${event.linkText || 'Learn More'} →
                        </a>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
    
    renderTeamMembers() {
        const teamSlider = document.getElementById('teamSlider');
        if (!teamSlider) return;
        
        // Convert flat array to slides of 3 if needed
        let slides = this.teamMembers;
        if (this.teamMembers.length > 0 && !Array.isArray(this.teamMembers[0])) {
            slides = this.chunkArray(this.teamMembers, 3);
        }
        
        teamSlider.innerHTML = slides.map((slide, slideIndex) => `
            <div class="team-slide ${slideIndex === 0 ? 'active' : ''}">
                ${slide.map(member => `
                    <div class="team-card">
                        <div class="team-photo ${member.photo ? 'has-image' : ''}">
                            ${member.photo ? 
                                `<img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${member.initials}'; this.parentElement.classList.remove('has-image');">` : 
                                member.initials
                            }
                        </div>
                        <h3>${member.name}</h3>
                        <div class="team-position">${member.position}</div>
                        <div class="team-bio">${member.bio}</div>
                    </div>
                `).join('')}
            </div>
        `).join('');
        
        // Update dots
        this.updateSliderDots(slides.length);
    }
    
    updateSliderDots(totalSlides) {
        const dotsContainer = document.querySelector('.slider-dots');
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = Array.from({length: totalSlides}, (_, i) => 
            `<span class="dot ${i === 0 ? 'active' : ''}" onclick="currentSlide(${i + 1})"></span>`
        ).join('');
    }
    
    updateToastEvent() {
        const upcomingEvents = this.events.filter(event => event.type === 'upcoming');
        if (upcomingEvents.length === 0) return;
        
        const nextEvent = upcomingEvents[0];
        const toast = document.getElementById('eventToast');
        if (!toast) return;
        
        toast.querySelector('.toast-event-date').textContent = nextEvent.date;
        toast.querySelector('.toast-event-title').textContent = nextEvent.title;
        toast.querySelector('.toast-event-description').textContent = nextEvent.description;
    }
    
    chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }
    
    // API methods for external updates
    addEvent(event) {
        this.events.push(event);
        localStorage.setItem('c-square-events', JSON.stringify(this.events));
        this.renderEvents();
        this.updateToastEvent();
    }
    
    removeEvent(index) {
        this.events.splice(index, 1);
        localStorage.setItem('c-square-events', JSON.stringify(this.events));
        this.renderEvents();
        this.updateToastEvent();
    }
    
    addTeamMember(member, slideIndex = null) {
        if (slideIndex !== null && this.teamMembers[slideIndex]) {
            this.teamMembers[slideIndex].push(member);
        } else {
            // Add to a flat array and reorganize into slides
            if (!Array.isArray(this.teamMembers[0])) {
                this.teamMembers.push(member);
                this.teamMembers = this.chunkArray(this.teamMembers, 3);
            } else {
                // Find the last slide with less than 3 members
                let targetSlide = this.teamMembers.find(slide => slide.length < 3);
                if (targetSlide) {
                    targetSlide.push(member);
                } else {
                    this.teamMembers.push([member]);
                }
            }
        }
        localStorage.setItem('c-square-team', JSON.stringify(this.teamMembers));
        this.renderTeamMembers();
    }
    
    removeTeamMember(slideIndex, memberIndex) {
        if (this.teamMembers[slideIndex] && this.teamMembers[slideIndex][memberIndex]) {
            this.teamMembers[slideIndex].splice(memberIndex, 1);
            // Remove empty slides
            this.teamMembers = this.teamMembers.filter(slide => slide.length > 0);
            localStorage.setItem('c-square-team', JSON.stringify(this.teamMembers));
            this.renderTeamMembers();
        }
    }
    
    importData(data) {
        if (data.events) {
            this.events = data.events;
            localStorage.setItem('c-square-events', JSON.stringify(this.events));
        }
        if (data.teamMembers) {
            this.teamMembers = data.teamMembers;
            localStorage.setItem('c-square-team', JSON.stringify(this.teamMembers));
        }
        this.init();
    }
}

// Initialize content manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contentManager = new ContentManager();
});

// Export for admin panel
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentManager;
}
