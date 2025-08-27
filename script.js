// Chenyu & Ping Wedding Helper Portal JavaScript
// Updated from Run Sheet V2.0-3

// Bridal Party Mapping
const bridalParty = {
    bride: "Ping Li",
    groom: "Chenyu Wang",
    maidOfHonour: "Sabrina Zhou",
    bestMan: "Roger Chuang",
    bridesmaids: ["Monica Yaw", "Angela Fong"],
    groomsmen: ["Ernest Wijaya", "Lester Aguda"]
};

// Wedding Helper Data based on the official run sheet
const weddingHelpers = {
    // Bridal Party
    "Ping Li": {
        role: "Bride",
        tasks: [
            "9:00am - Make up starts at Westin Perth (Makeup Artist: Yuko 0430239540)",
            "6:15pm - Bride makeup touchup at dinner venue bridal salon",
            "7:10pm - Bridal party entrance at dinner reception",
            "8:45pm - Cut wedding cake with groom",
            "8:45pm - Receive gifts from pastors and parents",
            "8:45pm - Give bride and groom speech",
            "9:30pm - First dance with groom",
            "10:00pm - Thank guests before end of reception"
        ]
    },
    "Chenyu Wang": {
        role: "Groom",
        tasks: [
            "2:30pm - Groom and groomsmen in position at sanctuary",
            "7:10pm - Bridal party entrance at dinner reception",
            "8:45pm - Cut wedding cake with bride",
            "8:45pm - Receive gifts from pastors and parents",
            "8:45pm - Give bride and groom speech",
            "9:30pm - First dance with bride",
            "10:00pm - Thank guests before end of reception"
        ]
    },
    "Sabrina Zhou": {
        role: "Maid of Honour",
        tasks: [
            "9:00am - Bridesmaids arrive at Westin Perth for makeup",
            "2:30pm - Travel from Westin to Cana with Tze (bride & maid of honour)",
            "2:45pm - Contact Like Johanes when bridal cars arrive at Cana",
            "7:10pm - Bridal party entrance at dinner reception",
            "7:45pm - Bridesmaids speech at dinner reception",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties (bring extra gifts, table numbers, welcome sign, photo canvas to bridal salon)"
        ],
        taskDetails: [
            "Makeup Artist: Yuko 0430239540. Coordinate with Monica Yaw and Angela Fong for arrival and makeup schedule.",
            "Tze drives Ping & Sabrina from Westin to Cana House. Coordinate timing with Senjaya who drives mums and other bridesmaids.",
            "Contact Like Johanes when bridal cars arrive at Cana House. Like will inform when to come into Cana House for ceremony.",
            "Enter with other bridal party members. Follow ceremony coordinator instructions for positioning and timing.",
            "Deliver bridesmaids speech during dinner reception. Coordinate timing with MC Daniel Gunawan.",
            "Work with other bridal party to cut wedding cake and distribute pieces to all guest tables. Check with Nadine at venue.",
            "Collect extra gifts, table numbers, welcome sign, and photo canvas. Bring all items to the bridal salon after dinner reception."
        ]
    },
    "Roger Chuang": {
        role: "Best Man",
        tasks: [
            "Saturday morning - Pick up matrimony pillars (TMI Studio, Joyce 0433 555 567, 2/14 Shields Cr, Booragoon)",
            "2:30pm - Groom and groomsmen in position at sanctuary",
            "3:00pm - Unity-candle attendant during ceremony",
            "7:10pm - Bridal party entrance at dinner reception", 
            "8:30pm - Groomsmen speech and toast at dinner reception",
            "9:15pm - Wedding game coordination for bride and groom",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties"
        ],
        taskDetails: [
            "Vendor: TMI Studio, Joyce Jiao 0433 555 567. Address: 2/14 Shields Cr, Booragoon. Pick up 4 matrimony pillars and drop at Cana House.",
            "Stand with Chenyu, Ernest, and Lester at sanctuary. Coordinate timing with ceremony schedule and Like Johanes.",
            "Unity-candle attendant role during ceremony. Assist bride and groom with candle lighting ritual.",
            "Enter with groomsmen and other bridal party. Follow Jenny Sophian's coordination for reception entrance.",
            "Deliver groomsmen speech and lead toast. Coordinate with MC Daniel Gunawan for timing during dinner.",
            "Lead wedding game coordination for bride and groom entertainment. Plan and execute games during dessert service.",
            "Work with bridal party to cut and distribute wedding cake pieces to all guest tables.",
            "Help collect and organize extra items for cleanup. Assist with general post-dinner tidy up duties."
        ]
    },
    "Monica Yaw": {
        role: "Bridesmaid",
        tasks: [
            "Saturday - Pick up easel (Anne Ibanez 0416596169, Harrisdale) - 3 easels",
            "9:00am - Bridesmaids arrive at Westin Perth for makeup",
            "2:30pm - Travel from Westin to Cana with Senjaya (mums, Monica and Angela)",
            "7:10pm - Bridal party entrance at dinner reception",
            "7:45pm - Bridesmaids speech at dinner reception",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties"
        ]
    },
    "Angela Fong": {
        role: "Bridesmaid",
        tasks: [
            "9:00am - Bridesmaids arrive at Westin Perth for makeup",
            "2:30pm - Travel from Westin to Cana with Senjaya (mums, Monica and Angela)",
            "7:10pm - Bridal party entrance at dinner reception",
            "7:45pm - Bridesmaids speech at dinner reception",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties"
        ]
    },
    "Ernest Wijaya": {
        role: "Groomsman",
        tasks: [
            "Friday 5:30-6:30pm - Pick up mannequin (Josephine 0451993108, Como)",
            "Saturday - Drop off holy matrimony gifts from Chenyu's place to Cana House (IC with Lester)",
            "Saturday - Drop off reception gifts from Chenyu's place to Beaumonde on the Point (IC with Lester, Nadine Wellinger 0892188088)",
            "2:30pm - Groom and groomsmen in position at sanctuary",
            "7:10pm - Bridal party entrance at dinner reception",
            "8:30pm - Groomsmen speech and toast at dinner reception",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties"
        ]
    },
    "Lester Aguda": {
        role: "Groomsman",
        tasks: [
            "Saturday - Drop off holy matrimony gifts from Chenyu's place to Cana House (with Ernest)",
            "Saturday - Drop off reception gifts from Chenyu's place to Beaumonde on the Point (with Ernest)",
            "2:30pm - Groom and groomsmen in position at sanctuary",
            "7:10pm - Bridal party entrance at dinner reception",
            "8:30pm - Groomsmen speech and toast at dinner reception",
            "9:30pm - Cut and distribute cakes to tables",
            "10:10pm - Post-dinner tidy up duties"
        ]
    },

    // Holy Matrimony Coordinators
    "Like Johanes": {
        role: "Holy Matrimony Coordinator (IC)",
        tasks: [
            "2:45pm - Coordinate bridal cars arrival at Cana House",
            "Overall event overseeing and coordination during ceremony",
            "Coordinate bride and bridesmaid entry",
            "Ensure ceremony runs smoothly"
        ],
        taskDetails: [
            "Sabrina will contact Like once the cars arrive. Like will info Sabrina when to come in to Cana House.",
            "Primary coordinator for all ceremony activities. Work with Marini Angouw to ensure smooth operations.",
            "Coordinate the processional order: Bridesmaids → Ring Bearer → Flower Girl → Bride entrance.",
            "Monitor ceremony timeline and coordinate with MC Reynard Chan and other coordinators."
        ]
    },
    "Marini Angouw": {
        role: "Holy Matrimony Coordinator",
        tasks: [
            "Assist Like Johanes with event coordination",
            "Support bride and bridesmaid entry coordination"
        ]
    },

    // MC and Worship Team
    "Reynard Chan": {
        role: "Holy Matrimony MC",
        tasks: [
            "2:30pm - MC in position at sanctuary",
            "3:00pm - Lead ceremony proceedings and announcements",
            "4:00pm - Announce photo taking order (Family, Pastors, Friends and Colleagues - Ping side first, then All Aflamers)"
        ]
    },
    "Intan Chen": {
        role: "Worship Leader",
        tasks: [
            "2:30pm - Worship team in position at sanctuary",
            "2:45pm - Be ready for praise and worship",
            "3:00pm - Lead praise and worship during ceremony",
            "Coordinate with musicians"
        ]
    },

    // Sound and Technical Team
    "Lyndon Win": {
        role: "Sound System (IC)",
        tasks: [
            "2:00pm - Setup sound system at ceremony",
            "6:00pm - Setup sound system at dinner reception",
            "6:15pm - Play background music during pre-drinks",
            "7:10pm - Play entrance songs for bridesmaids and groomsmen, bride and groom",
            "9:30pm - Play first dance song and couple dance songs",
            "9:40pm - Play dance song list during reception"
        ],
        taskDetails: [
            "Setup sound system at Cana House sanctuary. Ensure microphones, speakers, and music system are ready for ceremony.",
            "Setup sound system at Beaumonde on the Point dinner reception venue. Test all equipment before guests arrive.",
            "Play background music during pre-drinks and canapes service. Coordinate volume with venue staff.",
            "Play entrance songs for bridal party entrance. Coordinate timing with MC Daniel Gunawan and Jenny Sophian.",
            "Play first dance song for bride and groom, then couple dance songs for married couples. Coordinate with MC announcements.",
            "Play dance song list for general dancing. Manage volume and song selection for guest entertainment."
        ]
    },
    "Hendra Wijaya": {
        role: "Sound System Assistant",
        tasks: [
            "2:00pm - Assist with sound system setup at ceremony",
            "Support Lyndon Win with technical requirements",
            "9:30pm - Assist with first dance music",
            "10:10pm - Pack up and drop sound system back to Cana House"
        ]
    },
    "Sonia Suputri": {
        role: "Projection Coordinator",
        tasks: [
            "2:00pm - Setup projection and TVs",
            "2:20pm - Play waiting songs & slides",
            "Continue projection support throughout ceremony"
        ]
    },
    "Lina Han": {
        role: "Translator",
        tasks: [
            "2:45pm - Translator in position",
            "3:00pm - Provide translation services during ceremony"
        ]
    },

    // Car Park Ushers
    "Didier Michel": {
        role: "Car Park Ushers (IC)",
        tasks: [
            "2:00pm - Car park ushers in position",
            "Coordinate car park team: Rudy Rusli, Rudy Suwarno, Kocdal Antipas, Tomas Aguda, Benny Suwarno, Harry Chen",
            "Reserve 5 parking bays for parents cars and bridal cars",
            "Manage parking for: White Toyota RAV4 (1HUQ923), Black Lexus RX350 (P1NGL), White Tesla Model Y (1IOD288), Grey Mitsubishi Outlander (1GYL921), White Honda Accord (1EUB613)"
        ],
        taskDetails: [
            "Lead car park coordinator. Ensure all team members are in position and managing traffic flow efficiently.",
            "Team includes: Rudy Rusli, Rudy Suwarno, Kocdal Antipas, Tomas Aguda, Benny Suwarno, Harry Chen. Coordinate positioning and guest direction.",
            "Priority parking for family vehicles: White Toyota RAV4 (1HUQ923) - parents, Black Lexus RX350 (P1NGL) - parents.",
            "Additional reserved parking: White Tesla Model Y (1IOD288) - bridal car, Grey Mitsubishi Outlander (1GYL921) - bridal car, White Honda Accord (1EUB613) - photographer's car."
        ]
    },
    "Rudy Rusli": {
        role: "Car Park Usher",
        tasks: [
            "2:00pm - Car park usher in position",
            "Assist Didier Michel with car park coordination",
            "Help manage parking flow and guest directions"
        ]
    },
    "Rudy Suwarno": {
        role: "Car Park Usher",
        tasks: [
            "2:00pm - Car park usher in position",
            "Assist Didier Michel with car park coordination",
            "Help manage parking flow and guest directions"
        ]
    },
    "Kocdal Antipas": {
        role: "Car Park Usher",
        tasks: [
            "2:00pm - Car park usher in position",
            "Assist Didier Michel with car park coordination"
        ]
    },
    "Tomas Aguda": {
        role: "Car Park Usher",
        tasks: [
            "2:00pm - Car park usher in position",
            "Assist Didier Michel with car park coordination"
        ]
    },
    "Benny Suwarno": {
        role: "Car Park Usher & Grace Prayer",
        tasks: [
            "2:00pm - Car park usher in position",
            "Assist Didier Michel with car park coordination",
            "7:20pm - Lead grace prayer at dinner reception"
        ],
        taskDetails: [
            "Car park usher team member. Follow Didier Michel's coordination and help direct guest parking at ceremony venue.",
            "Support car park operations during ceremony. Assist with traffic flow and guest directions as needed.",
            "Lead grace prayer at dinner reception. Wait for MC Daniel Gunawan's announcement before beginning prayer. Ensure all guests are ready."
        ]
    },
    "Harry Chen": {
        role: "Car Park Usher",
        tasks: [
            "2:00pm - Car park usher in position at ceremony",
            "6:00pm - Car park ushering at dinner reception - upstairs outside the lift"
        ]
    },

    // Sanctuary Ushers
    "Priscilla Suwarno": {
        role: "Sanctuary Ushers (IC)",
        tasks: [
            "2:20pm - Sanctuary ushers in position",
            "2:45pm - Ensure guests are seated",
            "Coordinate sanctuary ushering with IeChi Suen, Jacquelyn Chong, William Yong, Kok Yee Wee",
            "5:00pm - Check guest names & gifts according to seating plan map at dinner reception"
        ],
        taskDetails: [
            "Lead sanctuary ushering team. Ensure all ushers (IeChi Suen, Jacquelyn Chong, William Yong, Kok Yee Wee) are positioned and ready.",
            "Ensure all guests are seated before ceremony begins at 3:00pm. Coordinate with Like Johanes for ceremony start timing.",
            "Primary coordinator for sanctuary ushering team. Assign positions, manage guest seating flow, and handle any seating issues.",
            "At dinner reception, verify guest names against seating plan and check guest gifts are properly placed according to map."
        ]
    },
    "IeChi Suen": {
        role: "Sanctuary Usher & Decoration Coordinator",
        tasks: [
            "Saturday - Sanctuary decoration with Leena Chai, Natalie Tan, and bridal party",
            "2:00pm - Sanctuary setup & decoration (IC) - stage table deco and Saturday deco touch up",
            "2:20pm - Sanctuary usher in position",
            "6:00pm - Dinner reception usher in position"
        ]
    },
    "Jacquelyn Chong": {
        role: "Sanctuary Usher",
        tasks: [
            "2:20pm - Sanctuary usher in position",
            "Help with guest seating during ceremony",
            "6:00pm - Dinner reception usher in position",
            "6:00pm - Lead pastors and parents to seats at dinner reception"
        ]
    },
    "William Yong": {
        role: "Sanctuary Usher & Setup Coordinator",
        tasks: [
            "2:00pm - Setup sanctuary tables & Tiffany chairs (IC with Kok Yee Wee)",
            "2:20pm - Sanctuary usher in position",
            "4:30pm - Transport photo canvas and reception decorations to dinner reception",
            "6:00pm - Car park usher at dinner reception (at the front with Kok Yee Wee)"
        ]
    },
    "Kok Yee Wee": {
        role: "Sanctuary Usher & Car Park Coordinator",
        tasks: [
            "2:00pm - Setup sanctuary tables & Tiffany chairs (with William Yong)",
            "2:20pm - Sanctuary usher in position",
            "4:30pm - Transport 8 Tiffany chairs to dinner reception",
            "6:00pm - Car park ushering at dinner reception (IC at the front with William)"
        ]
    },

    // Transport Team
    "Tze Ong": {
        role: "Transport Driver (IC)",
        tasks: [
            "2:00pm - Coordinate bridal cars leaving Cana House",
            "2:30pm - Drive bridal cars from Westin Hotel",
            "2:30pm - Drive bride & maid of honour from hotel to Cana House",
            "4:30pm - Drive bride & groom from Cana to photo taking and reception",
            "6:00pm - Drive bridal party cars to dinner reception"
        ],
        taskDetails: [
            "Lead transport coordinator. Coordinate timing with ceremony schedule and other drivers.",
            "From Hotel to Cana: Tze drives Ping & Sabrina. Coordinate departure with Senjaya who drives mums, Monica and Angela.",
            "Primary driver for bride and maid of honour. Ensure on-time arrival for ceremony preparation.",
            "Transport bride & groom from Cana to photo location, then to Beaumonde on the Point for reception.",
            "Final transport coordination. Tze: Bride & Groom, Senjaya: Bridal Party (7 seats car)."
        ]
    },
    "Senjaya Tresna": {
        role: "Transport Driver",
        tasks: [
            "2:30pm - Drive bridesmaids and mums from hotel to Cana House",
            "4:30pm - Drive bridal party (7 seats car) to dinner reception",
            "6:00pm - Bridal party cars arrive at dinner reception"
        ]
    },

    // Decoration Team
    "Leena Chai": {
        role: "Sanctuary Decoration (Saturday IC)",
        tasks: [
            "Saturday - Coordinate sanctuary decoration (IC)",
            "Saturday - Setup stage background, staircase, flower stand, 4 matrimony pillars",
            "Work with IeChi Suen, Natalie Tan, bridesmaids and groomsmen"
        ]
    },
    "Natalie Tan": {
        role: "Decoration & Flower Coordinator",
        tasks: [
            "Saturday - Sanctuary decoration with Leena Chai and IeChi Suen",
            "Before Sunday service - Pick up flowers (Bridal bouquet x1, Groom's buttonhole x1, Chatsworth Flowers, Jacqueline: 0400784248, 96 Beaufort Street, Perth)",
            "2:00pm - Sanctuary setup & decoration with IeChi Suen"
        ],
        taskDetails: [
            "Saturday decoration team with Leena Chai (IC), IeChi Suen, and bridal party. Setup stage background, staircase, flower stand, 4 matrimony pillars.",
            "Vendor: Chatsworth Flowers, Contact: Jacqueline 0400784248, Address: 96 Beaufort Street, Perth. Drop flowers at photocopy room after pickup.",
            "Sunday decoration coordination with IeChi Suen. Stage table decoration and touch up Saturday decoration work."
        ]
    },

    // Setup Team
    "Tiffany Tan": {
        role: "Reception Setup Coordinator",
        tasks: [
            "2:00pm - Reception setup & decoration (IC with Joanne Yeung)",
            "2:00pm - Setup wedding photo easel",
            "6:00pm - Receptionist in position",
            "Pack away table deco after bride & groom entry"
        ]
    },
    "Joanne Yeung": {
        role: "Reception Coordinator",
        tasks: [
            "2:00pm - Reception setup & decoration with Tiffany Tan",
            "4:30pm - Transport reception decorations to dinner venue",
            "6:00pm - Receptionists coordination (IC) - be in position",
            "6:00pm - Bring Angpao to Chenyu's mum",
            "Guest register table setup & decoration at dinner reception"
        ]
    },
    "Ivana Win": {
        role: "Unity Candle & Communion Setup",
        tasks: [
            "2:00pm - Setup unity candle and communion",
            "Prepare communion bread (bride will provide candles)"
        ]
    },

    // Food and Gift Distribution
    "Dwi Yoehanes": {
        role: "Food Distribution (IC)",
        tasks: [
            "After Sunday service - Distribute food to all Aflamers (IC)",
            "One Bánh Mì per person, no food for children under 3 years old",
            "Half Bánh Mì for children in Sunday School",
            "Keep some food for the bridal party and drivers",
            "Coordinate with Helen Cheong and Lily Gao"
        ],
        taskDetails: [
            "Lead food distribution coordinator. Manage distribution of 200 Bánh Mì (100 Pork, 100 Chicken) picked up by Andrew Chan.",
            "Distribution rule: One full Bánh Mì per person. No food for children under 3 years old to avoid waste.",
            "Special rule for children: Half Bánh Mì for children in Sunday School only (children 3+ who attend Sunday School).",
            "Reserve portions: Keep some food specifically for bridal party members and transport drivers before general distribution.",
            "Team coordination: Work with Helen Cheong and Lily Gao for efficient distribution flow and crowd management."
        ]
    },
    "Helen Cheong": {
        role: "Food Distribution Assistant",
        tasks: [
            "After Sunday service - Assist with food distribution",
            "Help Grace Win (flower girl) with hair styling"
        ]
    },
    "Lily Gao": {
        role: "Gift Distribution (IC)",
        tasks: [
            "4:30pm - Distribute gifts to all guests (IC)",
            "One gift per family",
            "Proactively approach guests and present gifts",
            "Coordinate with George Yuan and Julia Schisas"
        ]
    },
    "George Yuan": {
        role: "Gift Distribution & Transport Coordinator",
        tasks: [
            "After Sunday service - Order and pickup food for pastors (Stephanie orders, George picks up)",
            "4:30pm - Gift table setup including table cloth (set up 2 tables)",
            "4:30pm - Assist with gift distribution",
            "4:30pm - Transport 3 flower pillars to dinner reception"
        ]
    },
    "Julia Schisas": {
        role: "Gift Distribution Assistant",
        tasks: [
            "4:30pm - Assist with gift distribution to guests",
            "Help with proactive guest approach and gift presentation"
        ]
    },

    // Food Pickup and Photography Coordination
    "Andrew Chan": {
        role: "Food Pickup & Photography Coordinator",
        tasks: [
            "Before Sunday service - Pick up lunch for Aflamers (Pork Bánh Mì x100, Chicken Bánh Mì x100, Ben Thanh Lunch Bar 0434589117, 4/73 Honeywell Blvd, Mirrabooka)",
            "2:00pm - Photographer and videographer briefing (Allseasons Photo, Rio Yapari 0434150762)",
            "Marriage certificate witness - sign marriage certificate"
        ],
        taskDetails: [
            "Contact: Ben Thanh Lunch Bar 0434589117. Address: 4/73 Honeywell Blvd, Mirrabooka. Drop off at MC side for distribution after Sunday service.",
            "Vendor: Allseasons Photo, Rio Yapari 0434150762. Coordinate 3 people overall for photography team briefing.",
            "Witness signing during ceremony with Vianny Chan. Both Andrew & Vianny Chan are the official marriage certificate witnesses."
        ]
    },
    "Vianny Chan": {
        role: "Marriage Certificate Witness",
        tasks: [
            "3:00pm - Marriage certificate witness - sign marriage certificate during ceremony"
        ]
    },

    // Dinner Reception Team
    "Jenny Sophian": {
        role: "Reception Coordinator (IC)",
        tasks: [
            "5:00pm - Setup welcome sign & wedding photo easel",
            "6:45pm - Ball room opening and guest entry",
            "7:00pm - Event overseeing and time keeping at dinner reception",
            "7:00pm - Coordinate with vendors and bridal party entry",
            "7:10pm - Bridal party in position",
            "8:00pm - Direct bride and groom table photos"
        ],
        taskDetails: [
            "Set up at dinner reception venue. Check guest names & guest gifts according to the seating plan map.",
            "Main coordinator for reception opening. Ensure all guests can enter smoothly.",
            "Primary time keeper and coordinator. Work with Maria Gunawan for assistance.",
            "Coordinate with Beaumonde on the Point staff and bridal party for smooth entrance.",
            "Ensure all bridal party members are in correct positions for entrance announcements.",
            "Work with Maria Gunawan to direct bride and groom to assigned tables for photo taking with guests."
        ]
    },
    "Maria Gunawan": {
        role: "Reception Coordinator Assistant",
        tasks: [
            "Assist Jenny Sophian with event coordination",
            "8:00pm - Help direct bride and groom table photos"
        ]
    },
    "Daniel Gunawan": {
        role: "Reception MC",
        tasks: [
            "7:00pm - Welcome announcement (introduction, emergency exits, nearest toilets)",
            "7:10pm - Announce bridal party entrance (introduce bridesmaids and groomsmen, announce bride and groom entrance)",
            "7:20pm - Announce grace prayer",
            "7:45pm - Announce bridesmaids speech(es)",
            "8:00pm - Announce main course service and bride/groom table photos",
            "8:30pm - Announce groomsmen speech(es)",
            "8:45pm - Announce cake cutting, marriage certificate presentation, gifts presentation",
            "9:15pm - Announce dessert service and wedding game",
            "9:30pm - Announce first dance",
            "9:40pm - Announce dance floor open",
            "Time keeping throughout reception"
        ],
        taskDetails: [
            "Welcome all guests to dinner reception. Provide safety information: emergency exits, nearest toilets, and venue guidelines.",
            "Introduce bridesmaids and groomsmen individually, then announce the entrance of bride and groom. Coordinate with Lyndon for music.",
            "Announce grace prayer to be led by Benny Suwarno. Ensure all guests are ready before prayer begins.",
            "Announce bridesmaids speech(es). Coordinate timing with bridesmaids and ensure microphone is ready.",
            "Announce main course service will begin. Also announce that bride and groom will take photos with guests at designated tables.",
            "Announce groomsmen speech(es) and toast. Ensure drinks are ready for toast and coordinate with venue staff.",
            "Announce cake cutting ceremony, presentation of marriage certificate by pastors, and gift presentation from pastors and parents.",
            "Announce dessert service and wedding game coordination by Roger Chuang. Ensure smooth transition between activities.",
            "Announce first dance for bride and groom. Coordinate with Lyndon for music and lighting if needed.",
            "Announce dance floor is open for all guests. Encourage participation and maintain energy throughout evening.",
            "Primary time keeper for entire reception. Coordinate with Jenny Sophian and ensure all activities stay on schedule."
        ]
    },

    // Vendors and External Coordinators
    "Jefferson Karim": {
        role: "Pastor Transportation",
        tasks: [
            "6:45pm - Ensure pastors arrive at dinner reception",
            "10:10pm - Drop pastors home"
        ]
    },
    "Stephanie Kho": {
        role: "Legal Documents & Food Coordinator",
        tasks: [
            "After Sunday service - Order food for pastors (George picks up)",
            "Handle legal documents",
            "10:10pm - Check belongings after dinner reception"
        ]
    },

    // Cleanup Team
    "Edward Guan": {
        role: "Cana House Cleanup (IC)",
        tasks: [
            "5:00pm - Lead cleanup of foyer, toilet, and sanctuary",
            "Coordinate with JAG, JETS and YA4 groups",
            "6:00pm - Car park ushering at dinner reception (next to lift with Peter)"
        ],
        taskDetails: [
            "Lead cleanup coordinator for Cana House after ceremony ends. Focus on foyer, toilet areas, and sanctuary spaces.",
            "Team coordination: Work with JAG, JETS, and YA4 groups for efficient cleanup. Assign areas and supervise work.",
            "After Cana cleanup, proceed to dinner reception for car park ushering duties. Position next to lift with Peter Kartosudiro."
        ]
    },
    "Renaldy Chian": {
        role: "Cana House Security",
        tasks: [
            "5:00pm - Lock up Cana House"
        ]
    },

    // Additional Reception Car Park Team
    "Peter Kartosudiro": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "6:00pm - Car park ushering at dinner reception (next to lift with Edward)"
        ]
    },
    "Alex Wei": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "6:00pm - Car park ushering at dinner reception (upstairs outside the lift with Harry Li)"
        ]
    },
    "Harry Li": {
        role: "Car Park Usher (Reception)",
        tasks: [
            "6:00pm - Car park ushering at dinner reception (upstairs outside the lift with Alex Wei)"
        ]
    },

    // Special Roles
    "Harrison Clark": {
        role: "Ring Bearer",
        tasks: [
            "3:00pm - Ring bearer entrance during ceremony",
            "Carry rings during ceremony entrance"
        ],
        taskDetails: [
            "Ring bearer entrance follows the bridesmaids and precedes the flower girl. Walk slowly down the aisle.",
            "Carry the rings on a pillow or ring bearer box. Follow instructions from Like Johanes and ceremony coordinators."
        ]
    },
    "Grace Win": {
        role: "Flower Girl",
        tasks: [
            "3:00pm - Flower girl entrance during ceremony",
            "Helen Cheong helps with hair styling"
        ]
    },

    // Parents (for reference)
    "Lijiang Yu": {
        role: "Chenyu's Mum",
        tasks: [
            "10:30am - Arrive at Westin Perth (Toyota RAV4 White Rego: 1HUQ923)",
            "2:30pm - Travel from Westin to Cana with Senjaya",
            "Receive Angpao from Joanne Yeung at dinner reception"
        ]
    },
    "Qiuzhi Chen": {
        role: "Ping's Mum", 
        tasks: [
            "10:30am - Arrive at Westin Perth (Lexus RX350 Black Rego: P1NGL)",
            "2:30pm - Travel from Westin to Cana with Senjaya"
        ]
    },

    // Vendors (for completeness)
    "Rio Yapari": {
        role: "Photographer",
        tasks: [
            "2:00pm - Photographer briefing with Andrew Chan",
            "4:00pm - Photo taking (families, pastors, friends, colleagues - Ping side first, then all Aflamers)",
            "5:00pm - Take outdoor wedding photos with bridal party"
        ],
        taskDetails: [
            "Vendor: Allseasons Photo, Rio Yapari 0434150762. Coordinate with Andrew Chan for photographer and videographer briefing (3 people overall).",
            "MC Reynard Chan announces photo taking order: Family, Pastors, Friends and Colleagues (Ping side first), then All Aflamers.",
            "Take outdoor wedding photos with bridal party after ceremony. Coordinate timing with Like Johanes and transport team."
        ]
    },

    // Additional helpers from foyer ushers mention
    "Foyer Ushers": {
        role: "Foyer Ushers",
        tasks: [
            "12:00pm - Drop off Tiffany chairs to Cana House foyer",
            "Store chairs in room next to the lift"
        ]
    }
};

// Google Docs URLs (updated)
const documentUrls = {
    runsheet: "https://docs.google.com/document/d/1bjHkp6Isy0Y5vtlA9ffmskrmnI79rLGREyzwOXy4Kh0/edit?usp=sharing",
    roles: "https://docs.google.com/document/d/1hBAxPbhZWKcIRaPYr3uxY4y1DMpFcDR4I1d7UgwlMXs/edit?usp=sharing"
};

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('helperName');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchHelper();
            }
        });
        
        nameInput.addEventListener('input', function() {
            clearResults();
        });
    }
});

function clearResults() {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    
    if (searchResults) searchResults.classList.add('hidden');
    if (noResults) noResults.classList.add('hidden');
}

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
    
    // Check if this helper has any task details
    const hasAnyDetails = helper.taskDetails && helper.taskDetails.some(detail => detail && detail.trim() !== '');
    
    const tasksHTML = helper.tasks.map((task, index) => {
        const taskDetail = helper.taskDetails && helper.taskDetails[index] ? helper.taskDetails[index] : '';
        return `
            <li class="task-item" data-task-index="${index}">
                <div class="task-main">${task}</div>
                ${taskDetail ? `<div class="task-detail hidden">${taskDetail}</div>` : ''}
                ${taskDetail ? '<div class="task-expand-icon">▼</div>' : ''}
            </li>
        `;
    }).join('');
    
    searchResults.innerHTML = `
        <h3>Hello ${name}!</h3>
        <div class="role-badge">${helper.role}</div>
        <h4 style="color: #333; margin: 20px 0 15px 0; font-weight: 400;">Your Wedding Day Tasks:</h4>
        ${hasAnyDetails ? '<p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 15px; font-style: italic;">Click on tasks to see detailed information</p>' : ''}
        <ul class="tasks-list">
            ${tasksHTML}
        </ul>
        <div style="text-align: center; margin-top: 2rem; padding: 15px; background: #f8f9fa; border-radius: 4px; border: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;"><strong>Need more details?</strong> Check the full run sheet document below for complete timeline and vendor contacts.</p>
        </div>
    `;
    
    searchResults.classList.remove('hidden');
    
    // Add click event listeners to task items that have details
    const taskItems = searchResults.querySelectorAll('.task-item');
    taskItems.forEach(taskItem => {
        const hasDetail = taskItem.querySelector('.task-detail');
        if (hasDetail) {
            taskItem.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Task item clicked:', this); // Debug log
                toggleTaskDetail(this);
            });
            // Add a class to indicate this task is clickable
            taskItem.classList.add('clickable');
        }
    });
    
    // Smooth scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Toggle task detail expansion
function toggleTaskDetail(taskElement) {
    console.log('toggleTaskDetail called'); // Debug log
    
    const detail = taskElement.querySelector('.task-detail');
    const icon = taskElement.querySelector('.task-expand-icon');
    
    console.log('Detail element:', detail); // Debug log
    console.log('Icon element:', icon); // Debug log
    
    if (detail) {
        const isHidden = detail.classList.contains('hidden');
        
        if (isHidden) {
            detail.classList.remove('hidden');
            detail.style.display = 'block';
        } else {
            detail.classList.add('hidden');
            detail.style.display = 'none';
        }
        
        if (icon) {
            icon.textContent = isHidden ? '▲' : '▼';
        }
        
        taskElement.classList.toggle('expanded');
        
        console.log('Task clicked, detail now visible:', !detail.classList.contains('hidden'));
    } else {
        console.log('No task detail found for this task');
    }
}

// Display No Results
function displayNoResults() {
    const noResults = document.getElementById('noResults');
    noResults.classList.remove('hidden');
    noResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
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