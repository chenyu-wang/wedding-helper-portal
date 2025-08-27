// Chenyu & Ping Wedding Helper Portal JavaScript

// Wedding Helper Data based on the official documents
const weddingHelpers = {
    // Holy Matrimony Coordinators
    "Like Johanes": {
        role: "Holy Matrimony Coordinator (IC)",
        tasks: [
            "Event overseeing and coordinating",
            "Coordinate bride and bridesmaid entry",
            "Ensure ceremony runs smoothly"
        ]
    },
    "Marini Angouw": {
        role: "Holy Matrimony Coordinator",
        tasks: [
            "Assist with event coordination",
            "Support bride and bridesmaid entry coordination"
        ]
    },

    // MC and Worship Team
    "Reynard Chan": {
        role: "Holy Matrimony MC",
        tasks: [
            "Announce photo taking order at 4:15pm",
            "Lead ceremony proceedings",
            "Make announcements during ceremony"
        ]
    },
    "Intan Chen": {
        role: "Worship Leader",
        tasks: [
            "Lead praise and worship at 2:45pm",
            "Be ready for worship team position at 2:30pm",
            "Coordinate with musicians"
        ]
    },

    // Ushers - Sanctuary
    "Priscilla Suwarno": {
        role: "Sanctuary Ushers (IC)",
        tasks: [
            "Be in position at 2:20pm",
            "Ensure guests are seated by 2:45pm",
            "Coordinate with Jean Gao, Jacquelyn Chong, William Yong, Kok Yee Wee"
        ]
    },
    "Jean Gao": {
        role: "Sanctuary Usher",
        tasks: [
            "Help with guest seating",
            "Follow instructions from Priscilla Suwarno",
            "Be in position at 2:20pm"
        ]
    },
    "Jacquelyn Chong": {
        role: "Sanctuary Usher",
        tasks: [
            "Help with guest seating",
            "Lead pastors and parents to seats at dinner reception",
            "Support sanctuary ushering duties"
        ]
    },
    "William Yong": {
        role: "Sanctuary Usher & Setup Coordinator",
        tasks: [
            "Setup sanctuary tables & Tiffany chairs",
            "Help with guest seating during ceremony",
            "Transport items to dinner reception (Photo Canvas and reception decorations)"
        ]
    },
    "Kok Yee Wee": {
        role: "Sanctuary Usher & Car Park Coordinator",
        tasks: [
            "Help with sanctuary guest seating",
            "Car park ushering at dinner reception (IC) - be at the front",
            "Transport 8 Tiffany chairs to dinner reception"
        ]
    },

    // Car Park Ushers
    "Didier Michel": {
        role: "Car Park Ushers (IC)",
        tasks: [
            "Be in position at 2:00pm",
            "Coordinate car park team: Rudy Rusli, Rudy Suwarno, Kocdal Antipas, Thomas Aguda, Benny Suwarno, Harry Chen"
        ]
    },
    "Rudy Rusli": {
        role: "Car Park Usher",
        tasks: [
            "Assist with car park coordination",
            "Follow instructions from Didier Michel",
            "Be in position at 2:00pm"
        ]
    },
    "Rudy Suwarno": {
        role: "Car Park Usher",
        tasks: [
            "Assist with car park coordination",
            "Follow instructions from Didier Michel",
            "Be in position at 2:00pm"
        ]
    },
    "Benny Suwarno": {
        role: "Car Park Usher & Grace Prayer",
        tasks: [
            "Assist with car park coordination",
            "Lead grace prayer at dinner reception at 7:20pm"
        ]
    },
    "Harry Chen": {
        role: "Car Park Usher",
        tasks: [
            "Assist with car park coordination at ceremony",
            "Car park ushering at dinner reception - upstairs outside the lift"
        ]
    },

    // Transport Team
    "Tze Ong": {
        role: "Transport Driver (IC)",
        tasks: [
            "Drive bride and maid of honour from hotel to Cana House",
            "Coordinate bridal cars leaving Cana House at 2:00pm",
            "Drive bridal cars from Westin Hotel at 2:30pm",
            "Drive bride & groom to photo taking and reception"
        ]
    },
    "Senjaya Tresna": {
        role: "Transport Driver",
        tasks: [
            "Drive bridesmaids and mums from hotel to Cana House",
            "Drive bridal party (7 seats car) to dinner reception"
        ]
    },

    // Sound and Technical Team
    "Lyndon Win": {
        role: "Sound System (IC)",
        tasks: [
            "Setup sound system at ceremony",
            "Setup sound system at dinner reception",
            "Play entrance songs, first dance song, couple dance songs",
            "Play dance song list during reception"
        ]
    },
    "Hendra Wijaya": {
        role: "Sound System Assistant",
        tasks: [
            "Assist with sound system setup and operation",
            "Support Lyndon Win with technical requirements"
        ]
    },
    "Sonia Suputri": {
        role: "Projection Coordinator",
        tasks: [
            "Setup projection and TVs at 2:00pm",
            "Play waiting songs & slides at 2:20pm"
        ]
    },
    "Lina Han": {
        role: "Translator",
        tasks: [
            "Be in position at 2:45pm",
            "Provide translation services during ceremony"
        ]
    },

    // Decoration Team
    "Leena Chai": {
        role: "Sanctuary Decoration (Saturday IC)",
        tasks: [
            "Coordinate Saturday sanctuary decoration",
            "Setup stage background, staircase, chairs, flower stand, 4 pillars"
        ]
    },
    "IeChi Suen": {
        role: "Sanctuary Decoration Coordinator",
        tasks: [
            "Saturday decoration with Leena Chai, Natalie Tan, and bridal party",
            "Sunday decoration (IC) - touch up, stage table deco",
            "Dinner reception ushering duties"
        ]
    },
    "Natalie Tan": {
        role: "Decoration Assistant & Flower Coordinator",
        tasks: [
            "Saturday and Sunday sanctuary decoration",
            "Pick up flowers before Sunday service (Bridal bouquet & groom's buttonhole)",
            "Dinner reception setup assistance"
        ]
    },

    // Setup Team
    "Tiffany Tan": {
        role: "Reception Setup Coordinator",
        tasks: [
            "Setup wedding photo easel at 2:00pm",
            "Cana foyer reception setup and decoration (IC)",
            "Reception guest sign in coordination"
        ]
    },
    "Joanne Yeung": {
        role: "Reception Coordinator",
        tasks: [
            "Reception setup and decoration",
            "Receptionists coordination (IC) - be in position at 6:00pm",
            "Transport reception decorations to dinner venue",
            "Bring Angpao to Chenyu's mum"
        ]
    },
    "Ivana Win": {
        role: "Unity Candle & Communion Setup",
        tasks: [
            "Setup unity candle and communion at 2:00pm",
            "Prepare communion bread"
        ]
    },

    // Food and Gift Distribution
    "Dwi Yoehanes": {
        role: "Food Distribution (IC)",
        tasks: [
            "Distribute food to all Aflamers after Sunday service",
            "Coordinate with Helen Cheong and Lily Gao",
            "No food for kids below 3 years old",
            "Keep some food for bridal party"
        ]
    },
    "Helen Cheong": {
        role: "Food Distribution Assistant",
        tasks: [
            "Assist with food distribution after Sunday service",
            "Help Grace Win (flower girl) with hair styling"
        ]
    },
    "Lily Gao": {
        role: "Gift Distribution (IC)",
        tasks: [
            "Distribute gifts to all guests at 4:30pm",
            "Coordinate with George Yuan and Julia Schisas",
            "One gift per family"
        ]
    },
    "George Yuan": {
        role: "Gift Distribution & Food Coordinator",
        tasks: [
            "Gift table setup including table cloth",
            "Order and pickup food for pastors after Sunday service",
            "Transport 4 flower pillars to dinner reception"
        ]
    },
    "Julia Schisas": {
        role: "Gift Distribution Assistant",
        tasks: [
            "Assist with gift distribution to guests"
        ]
    },

    // Pickup and Transport Coordinators
    "Andrew Chan": {
        role: "Food Pickup & Photography Coordinator",
        tasks: [
            "Pick up food before Sunday service (200 Bahn Mi from Ben Thanh Lunch Bar)",
            "Photographers briefing at 2:30pm - coordinate 3 people overall"
        ]
    },
    "Ernest Wijaya": {
        role: "Groomsman & Mannequin Coordinator",
        tasks: [
            "Pick up mannequin on Friday 5:30-6:30pm (Josephine 0451993108, Como)",
            "Groomsman duties with Chenyu, Roger, and Lester at 2:30pm"
        ]
    },
    "Roger Chuang": {
        role: "Best Man & Multi-Role Coordinator",
        tasks: [
            "Best man duties",
            "Pick up matrimony pillars on Saturday morning (TMI Studio, Joyce 0433555567)",
            "Unity-candle attendant during ceremony",
            "Wedding game coordination at 9:15pm dinner reception",
            "Groomsman position at 2:30pm"
        ]
    },
    "Monica Yaw": {
        role: "Bridesmaid & Easel Coordinator",
        tasks: [
            "Bridesmaid duties",
            "Pick up easel on Saturday (Anne Ibanez 0416596169, Harrisdale)",
            "Cut and distribute cakes to tables at 9:30pm"
        ]
    },

    // Dinner Reception Team
    "Jenny Sophian": {
        role: "Reception Coordinator (IC)",
        tasks: [
            "Event overseeing and time keeping at dinner reception",
            "Coordinate with vendors and bridal party entry",
            "Setup welcome sign & wedding photo easel at 5:00pm",
            "Direct bride and groom table photos at 8:00pm",
            "Ball room opening and guest entry at 6:45pm"
        ]
    },
    "Maria Gunawan": {
        role: "Reception Coordinator Assistant",
        tasks: [
            "Assist with event coordination",
            "Help direct bride and groom table photos at 8:00pm"
        ]
    },
    "Daniel Gunawan": {
        role: "Reception MC",
        tasks: [
            "Welcome announcement at 7:00pm",
            "Announce bridal party entrance at 7:10pm",
            "Announce grace prayer, speeches, cake cutting",
            "Time keeping throughout reception",
            "Announce first dance and dance floor opening"
        ]
    },

    // Vendors and External Coordinators
    "Jefferson Karim": {
        role: "Pastor Transportation",
        tasks: [
            "Ensure pastors arrive at dinner reception at 6:45pm",
            "Drop pastors home at 10:30pm"
        ]
    },
    "Stephanie Kho": {
        role: "Legal Documents & Food Coordinator",
        tasks: [
            "Handle legal documents",
            "Order food for pastors",
            "Check belongings after dinner reception"
        ]
    },

    // Cleanup Team
    "Edward Guan": {
        role: "Cana House Cleanup (IC)",
        tasks: [
            "Lead cleanup of foyer, toilet, and sanctuary",
            "Coordinate with JAG and YA4 groups",
            "Car park ushering at dinner reception - next to lift"
        ]
    },
    "Renaldy Chian": {
        role: "Cana House Security",
        tasks: [
            "Lock up Cana House at 5:00pm"
        ]
    },

    // Additional Reception Team
    "Peter Kartosudiro": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "Car park ushering at dinner reception - next to lift with Edward"
        ]
    },
    "Alex Wei": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "Car park ushering at dinner reception - upstairs outside the lift"
        ]
    },
    "Harry Li": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "Car park ushering at dinner reception - upstairs outside the lift"
        ]
    },

    // Bridal Party
    "Sabrina Zhou": {
        role: "Maid of Honour",
        tasks: [
            "Support bride throughout the day",
            "Cut and distribute cakes to tables at 9:30pm",
            "Post-dinner tidy up duties"
        ]
    },
    "Angela Fong": {
        role: "Bridesmaid",
        tasks: [
            "Bridesmaid duties and support",
            "Cut and distribute cakes to tables at 9:30pm",
            "Post-dinner tidy up duties"
        ]
    },
    "Lester Aguda": {
        role: "Groomsman",
        tasks: [
            "Groomsman duties with Chenyu, Roger, and Ernest at 2:30pm",
            "Cut and distribute cakes to tables at 9:30pm",
            "Post-dinner tidy up duties"
        ]
    },

    // Special Roles
    "Harrison Clark": {
        role: "Ring Bearer",
        tasks: [
            "Carry rings during ceremony entrance",
            "Follow ceremony instructions"
        ]
    },
    "Grace Win": {
        role: "Flower Girl",
        tasks: [
            "Flower girl entrance during ceremony",
            "Helen helps with hair styling"
        ]
    },
    "Andrew Chan": {
        role: "Marriage Certificate Witness",
        tasks: [
            "Witness and sign marriage certificate",
            "Photography briefing coordination"
        ]
    },
    "Vianny Chan": {
        role: "Marriage Certificate Witness",
        tasks: [
            "Witness and sign marriage certificate"
        ]
    }
};

// Google Docs URLs
const documentUrls = {
    runsheet: "https://docs.google.com/document/d/1bjHkp6Isy0Y5vtlA9ffmskrmnI79rLGREyzwOXy4Kh0/edit?usp=sharing",
    roles: "https://docs.google.com/document/d/1hBAxPbhZWKcIRaPYr3uxY4y1DMpFcDR4I1d7UgwlMXs/edit?usp=sharing"
};

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

    // Add search functionality with Enter key support
    const nameInput = document.getElementById('helperName');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchHelper();
            }
        });
        
        // Add autocomplete suggestions
        nameInput.addEventListener('input', function() {
            showSuggestions(this.value);
        });
    }

    // Add fade-in animation to document cards
    const documentCards = document.querySelectorAll('.document-card');
    
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

    documentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Search Helper Function
function searchHelper() {
    const nameInput = document.getElementById('helperName');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    
    if (!nameInput || !searchResults || !noResults) return;
    
    const searchName = nameInput.value.trim();
    
    // Clear previous results
    searchResults.classList.add('hidden');
    noResults.classList.add('hidden');
    
    if (!searchName) {
        return;
    }
    
    // Search for exact match or partial match
    let foundHelper = null;
    let foundName = '';
    
    // First try exact match
    if (weddingHelpers[searchName]) {
        foundHelper = weddingHelpers[searchName];
        foundName = searchName;
    } else {
        // Try partial match (case insensitive)
        const searchLower = searchName.toLowerCase();
        for (const [name, helper] of Object.entries(weddingHelpers)) {
            if (name.toLowerCase().includes(searchLower)) {
                foundHelper = helper;
                foundName = name;
                break;
            }
        }
    }
    
    if (foundHelper) {
        displayResults(foundName, foundHelper);
    } else {
        displayNoResults();
    }
}

// Display Search Results
function displayResults(name, helper) {
    const searchResults = document.getElementById('searchResults');
    
    const tasksHTML = helper.tasks.map(task => `<li>${task}</li>`).join('');
    
    searchResults.innerHTML = `
        <h3>Hello ${name}!</h3>
        <div class="role-badge">${helper.role}</div>
        <h4>Your Wedding Day Tasks:</h4>
        <ul class="tasks-list">
            ${tasksHTML}
        </ul>
        <div style="text-align: center; margin-top: 2rem;">
            <p><strong>Need more details?</strong> Check the full documents below ⬇️</p>
        </div>
    `;
    
    searchResults.classList.remove('hidden');
    
    // Smooth scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Display No Results
function displayNoResults() {
    const noResults = document.getElementById('noResults');
    noResults.classList.remove('hidden');
    noResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Show Suggestions (Basic Autocomplete)
function showSuggestions(input) {
    // This could be expanded with a dropdown of suggestions
    // For now, just highlight if there's a partial match
    const nameInput = document.getElementById('helperName');
    if (!input || input.length < 2) return;
    
    const searchLower = input.toLowerCase();
    for (const name of Object.keys(weddingHelpers)) {
        if (name.toLowerCase().startsWith(searchLower)) {
            // Could show suggestions dropdown here
            break;
        }
    }
}

// Open Document Function
function openDocument(docType) {
    let url = '';
    let windowName = '';
    
    switch(docType) {
        case 'runsheet':
            url = documentUrls.runsheet;
            windowName = 'WeddingRunSheet';
            break;
        case 'roles':
            url = documentUrls.roles;
            windowName = 'WeddingRoles';
            break;
        default:
            console.log('Unknown document type');
            return;
    }
    
    // Open in new window/tab
    window.open(url, windowName, 'noopener,noreferrer');
}