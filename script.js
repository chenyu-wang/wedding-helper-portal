// Wedding Helper Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current navigation item
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Tool functionality (placeholder for future development)
function showTool(toolType) {
    switch(toolType) {
        case 'guestlist':
            showGuestListTool();
            break;
        case 'budget':
            showBudgetTool();
            break;
        case 'timeline':
            showTimelineTool();
            break;
        default:
            console.log('Tool not implemented yet');
    }
}

function showGuestListTool() {
    alert('Guest List Manager - Coming Soon!\n\nThis tool will help you:\n• Add and manage wedding guests\n• Track RSVPs\n• Organize seating arrangements\n• Send invitations');
}

function showBudgetTool() {
    alert('Budget Tracker - Coming Soon!\n\nThis tool will help you:\n• Set wedding budget categories\n• Track expenses\n• Monitor spending vs budget\n• Generate budget reports');
}

function showTimelineTool() {
    alert('Timeline Planner - Coming Soon!\n\nThis tool will help you:\n• Create wedding day timeline\n• Schedule vendor activities\n• Coordinate with wedding party\n• Set reminders for important tasks');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    toolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});