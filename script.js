// Chenyu & Ping Wedding Helper Portal JavaScript
// Built from Run Sheet V2.1 (Latest Update)

// Bridal Party Mapping
const bridalParty = {
    bride: "Ping Li",
    groom: "Chenyu Wang",
    maidOfHonour: "Sabrina Zhou",
    bestMan: "Roger Chuang",
    bridesmaids: ["Monica Yaw", "Angela Fong"],
    groomsmen: ["Ernest Wijaya", "Lester Aguda"]
};

// Wedding Helper Data based on the official run sheet V2.0-8
const weddingHelpers = {
    // Bridal Party
    "Ping Li": {
        role: "Bride",
        summary: "Participates in ceremony, reception activities, and thanks guests throughout the day",
        tasks: [
            "8:30am - Bridesmaids arrive Westin Perth",
            "9:30am - Groom arrives Westin Perth",
            "10:30am - Mums arrive Westin Perth",
            "2:45pm - Bridal cars leaves Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "4:15pm - Bride and groom thank and shake hands with all guests",
            "6:00pm - Bride makeup touchup",
            "7:10pm - Bridal party in position for dinner reception",
            "8:45pm - Bride and groom cut cake",
            "8:45pm - Bride and groom speech",
            "9:30pm - First dance",
            "10:00pm - Thanking guests"
        ],
        taskDetails: [
            "<strong>Location:</strong> Westin Perth<br><strong>Makeup Artist:</strong> Yuko 0430239540<br><strong>Activity:</strong> Makeup starts for bride and bridesmaids",
            "<strong>Tasks:</strong><br>• Hair styling<br>• Get the room key for Ping's parents",
            "<strong>Parents arrival:</strong><br>• Lijiang Yu (Toyota RAV4 White Rego: 1HUQ923)<br>• Qiuzhi Chen (Lexus RX350 Black Rego: P1NGL)",
            "<strong>Transportation:</strong> From Hotel to Cana<br>• Tze's car: Ping & Sabrina<br>• Senjaya's car: Mums, Monica and Angela",
            "<strong>Ceremony entrance coordination:</strong><br><strong>Coordinators:</strong> Like Johanes and Reynard Chan<br><strong>Order:</strong><br>• Angela Fong<br>• Monica Yaw<br>• Sabrina Zhou<br>• Ping Li with her Father",
            "<strong>After ceremony photo taking:</strong><br>• Thank all guests before leaving for reception",
            "<strong>Location:</strong> Bridal salon at dinner venue<br><strong>Makeup Artist:</strong> Yuko 0430239540<br><strong>Purpose:</strong> Makeup touchup before reception",
            "<strong>Reception entrance:</strong><br>• MC (Daniel Gunawan) announces bridal party entrance<br>• Daniel coordinates with entrance music",
            "<strong>Cake cutting ceremony:</strong><br>• Cut wedding cake with Chenyu<br>• Give speech together after cake cutting",
            "<strong>After gift presentation:</strong><br>• Give bride and groom speech together with Chenyu",
            "<strong>First dance:</strong><br>• Dance with Chenyu<br>• Sound system coordinated by Lyndon Win and Hendra Wijaya",
            "<strong>Reception closing:</strong><br>• Final thank you to all guests before reception ends"
        ]
    },

    "Chenyu Wang": {
        role: "Groom",
        summary: "Manages reception item drop-off, participates in ceremony and reception activities",
        tasks: [
            "Friday - Drop off reception items",
            "9:30am - Groom arrives Westin Perth",
            "2:30pm - Groom and groomsmen in position",
            "4:15pm - Bride and groom thank and shake hands with all guests",
            "7:10pm - Bridal party in position for dinner reception",
            "8:45pm - Bride and groom cut cake",
            "8:45pm - Bride and groom speech",
            "9:30pm - First dance",
            "10:00pm - Thanking guests"
        ],
        taskDetails: [
            "<strong>Location:</strong> From Chenyu's Place to Beaumonde on the Point<br><strong>Contact:</strong> Nadine Wellinger 0892188088<br><strong>Items to drop:</strong><br>• Table Numbers<br>• Guest Name Cards<br>• Reception Gifts (Adults and Kids)<br>• Welcome sign<br>• Blue Flower Stand<br>• Seating plan<br>• Gifts for parents + pastors<br><strong>Drop location:</strong> Vendor office in second floor",
            "<strong>Tasks:</strong><br>• Hair styling<br>• Get the room key for Ping's parents",
            "<strong>Location:</strong> Sanctuary<br><strong>Team:</strong> Chenyu, Roger Chuang, Ernest Wijaya, Lester Aguda<br><strong>Coordinate with:</strong> Like Johanes",
            "<strong>After ceremony photo taking:</strong><br>• Thank all guests with Ping<br>• Prepare to leave for reception",
            "<strong>Reception entrance:</strong><br>• MC (Daniel Gunawan) will announce bridal party entrance<br>• Follow Jenny Sophian's coordination",
            "<strong>Cake cutting ceremony:</strong><br>• Cut wedding cake with Ping<br>• Give speech together after cake cutting",
            "<strong>After gift presentation:</strong><br>• Give bride and groom speech with Ping",
            "<strong>First dance:</strong><br>• Dance with Ping<br>• Music coordinated by Lyndon Win<br>• Sound assistance by Hendra Wijaya",
            "<strong>Reception closing:</strong><br>• Final thank you to all guests before reception ends"
        ]
    },

    "Sabrina Zhou": {
        role: "Maid of Honour",
        summary: "Coordinates bridal party, gives speech, manages bridal car coordination",
        tasks: [
            "8:30am - Bridesmaids arrive Westin Perth",
            "2:45pm - Bridal cars leave Westin Perth",
            "2:45pm - Bridal cars arrive Cana",
            "2:55pm - Bride and bridesmaid in position",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Activity:</strong> Makeup session with other bridesmaids<br><strong>Makeup Artist:</strong> Yuko<br><strong>Contact:</strong> 0430239540<br><strong>Location:</strong> With bridal party preparation area",
            "<strong>Transportation:</strong> Tze drives Ping & Sabrina from Westin to Cana House<br><strong>Route:</strong> Hotel to ceremony venue<br><strong>Passengers:</strong> Bride and Maid of Honour",
            "<strong>Coordination:</strong> Sabrina contacts Like upon arrival<br><strong>Timing:</strong> Like will inform when to enter Cana House<br><strong>Purpose:</strong> Coordinate ceremony entrance timing",
            "<strong>Entrance Coordination:</strong> Like Johanes and Reynard Chan<br><strong>Processional Order:</strong><br>• Angela Fong<br>• Monica Yaw<br>• Sabrina Zhou<br>• Ping Li with her father",
            "<strong>Reception Coordination:</strong> Jenny Sophian<br><strong>Activity:</strong> Bridal party entrance at dinner reception<br><strong>Location:</strong> Reception venue entrance",
            "<strong>Speech Delivery:</strong> Bridesmaids speech<br><strong>Coordination:</strong> Work with MC Daniel Gunawan for proper timing<br><strong>Preparation:</strong> Rehearse speech and confirm timing during reception",
            "<strong>Items to Transport:</strong><br>• Extra gifts<br>• Table numbers<br>• Welcome sign<br>• Photo canvas<br><strong>Destination:</strong> Bridal salon"
        ]
    },

    "Roger Chuang": {
        role: "Best Man",
        summary: "Picks up ceremony items, gives speech, coordinates wedding games, Unity-Candle attendant",
        tasks: [
            "Saturday morning - Pick up Tiffany chairs and flower pillars",
            "2:30pm - Groom and groomsmen in position",
            "3:00pm - Unity-Candle attendant",
            "8:30pm - Groomsmen speech(es) and toast",
            "9:15pm - Wedding game",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Pickup coordination:</strong> IC with Lester Aguda<br><strong>Time:</strong> Saturday Morning<br><strong>Items:</strong><br>• Flower Pillars x 4<br>• Tiffany Chairs x 14<br><strong>Vendor:</strong> TMI Studio<br><strong>Contact:</strong> Joyce Jiao 0433 555 567<br><strong>Address:</strong> 2/14 Shields Cr, Booragoon<br><strong>Delivery:</strong> Drop off at Cana House",
            "<strong>Location:</strong> Sanctuary<br><strong>Team:</strong> Chenyu, Ernest, and Lester<br><strong>Coordinate with:</strong> Like Johanes",
            "<strong>Special role:</strong> Unity-Candle attendant during holy matrimony ceremony",
            "<strong>Speech coordination:</strong><br>• Deliver groomsmen speech and lead toast<br>• Coordinate with MC Daniel Gunawan",
            "<strong>Entertainment:</strong><br>• Lead wedding game coordination for bride and groom<br>• During dessert service",
            "<strong>Cleanup:</strong><br>• Help with post-dinner cleanup and organization"
        ]
    },

    "Monica Yaw": {
        role: "Bridesmaid",
        summary: "Picks up easels, participates in ceremony and reception activities",
        tasks: [
            "Saturday - Pick up 2 easels",
            "8:30am - Bridesmaids arrive Westin Perth",
            "2:45pm - Bridal cars leave Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Pickup:</strong> 2 easels<br><strong>Drop off location:</strong> Cana<br><strong>Contact:</strong> Anne Ibanez 0416596169<br><strong>Address:</strong> Harrisdale",
            "<strong>Activity:</strong> Makeup session with other bridesmaids<br><strong>Makeup Artist:</strong> Yuko<br><strong>Contact:</strong> 0430239540<br><strong>Location:</strong> With bridal party preparation area",
            "<strong>Transportation:</strong> Senjaya drives from Westin to Cana<br><strong>Passengers:</strong><br>• Lijiang Yu (Chenyu's mum)<br>• Qiuzhi Chen (Ping's mum)<br>• Monica Yaw<br>• Angela Fong",
            "<strong>Entrance Coordination:</strong> Like Johanes and Reynard Chan<br><strong>Processional Order:</strong><br>• Angela Fong<br>• Monica Yaw<br>• Sabrina Zhou<br>• Ping Li with her father",
            "<strong>Reception Coordination:</strong> Jenny Sophian<br><strong>Activity:</strong> Bridal party entrance at dinner reception<br><strong>Location:</strong> Reception venue entrance",
            "<strong>Speech Delivery:</strong> Bridesmaids speech with other bridesmaids<br><strong>Coordination:</strong> MC Daniel Gunawan coordinates timing<br><strong>Preparation:</strong> Rehearse speech and coordinate with MC",
            "<strong>Cleanup Activities:</strong><br>• Post-dinner cleanup<br>• Wedding items organization<br><strong>Team:</strong> Work with other bridesmaids and helpers"
        ]
    },

    "Angela Fong": {
        role: "Bridesmaid",
        summary: "Manages gift presentation, participates in ceremony and reception",
        tasks: [
            "8:30am - Bridesmaids arrive Westin Perth",
            "2:45pm - Bridal cars leave Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "8:45pm - MC announce presentation of gifts",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Activity:</strong> Makeup session with other bridesmaids<br><strong>Makeup Artist:</strong> Yuko<br><strong>Contact:</strong> 0430239540<br><strong>Location:</strong> With bridal party preparation area",
            "<strong>Transportation:</strong> Senjaya drives from Westin to Cana<br><strong>Passengers:</strong><br>• Lijiang Yu (Chenyu's mum)<br>• Qiuzhi Chen (Ping's mum)<br>• Monica Yaw<br>• Angela Fong",
            "<strong>Entrance Coordination:</strong> Like Johanes and Reynard Chan<br><strong>Processional Order:</strong><br>• Angela Fong (first)<br>• Monica Yaw<br>• Sabrina Zhou<br>• Ping Li with her father",
            "<strong>Reception Coordination:</strong> Jenny Sophian<br><strong>Activity:</strong> Bridal party entrance at dinner reception<br><strong>Location:</strong> Reception venue entrance",
            "<strong>Speech Delivery:</strong> Bridesmaids speech with other bridesmaids<br><strong>Coordination:</strong> MC Daniel Gunawan coordinates timing<br><strong>Preparation:</strong> Rehearse speech and coordinate with MC",
            "<strong>Gift Presentation:</strong> Pass gifts to bride & groom during MC announcement<br><strong>Special Note:</strong> Gifts for pastors and parents will be passed from Jenny after bridal party entry<br><strong>Coordination:</strong> Wait for MC Daniel Gunawan's cue",
            "<strong>Cleanup Activities:</strong><br>• Post-dinner cleanup<br>• Wedding items organization<br><strong>Team:</strong> Work with other bridesmaids and helpers"
        ]
    },

    "Ernest Wijaya": {
        role: "Groomsman",
        summary: "Coordinates gift and item transport, participates in ceremony and reception",
        tasks: [
            "Friday 5:30-6:30pm - Pick up mannequin",
            "Saturday - Drop off holy matrimony items",
            "2:30pm - Groom and groomsmen in position",
            "8:30pm - Groomsmen speech(es) and toast",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Pickup:</strong> Mannequin<br><strong>Drop off location:</strong> Ping's House<br><strong>Time:</strong> 5:30pm to 6:30pm<br><strong>Contact:</strong> Josephine 0451993108<br><strong>Address:</strong> Como",
            "<strong>Coordination:</strong> IC (In Charge)<br><strong>Route:</strong> From Chenyu's Place to Cana House<br><strong>Items to transport:</strong><br>• Buttonholes for Pastor<br>• Buttonholes for Chenyu's father<br>• Buttonholes for Groomsmen<br>• Holy Matrimony Guest Gifts<br>• Bottled Water",
            "<strong>Position:</strong> Stand with Chenyu, Roger, and Lester at sanctuary<br><strong>Coordination:</strong> Work with Like Johanes<br><strong>Role:</strong> Support groom's party during ceremony",
            "<strong>Speech Delivery:</strong> Groomsmen speech with Roger and Lester<br><strong>Coordination:</strong> MC Daniel Gunawan coordinates timing<br><strong>Team:</strong> Work with Roger Chuang and Lester Aguda",
            "<strong>Cleanup Activities:</strong><br>• Post-dinner cleanup<br>• Wedding items organization<br><strong>Team:</strong> Work with groomsmen and other helpers"
        ]
    },

    "Lester Aguda": {
        role: "Groomsman",
        summary: "Assists with Tiffany chair pickup, participates in ceremony and reception activities",
        tasks: [
            "Saturday - Pick up Tiffany chairs and flower pillars",
            "2:30pm - Groom and groomsmen in position",
            "8:30pm - Groomsmen speech(es) and toast",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "<strong>Coordination:</strong> With Roger Chuang (IC)<br><strong>Time:</strong> Saturday Morning<br><strong>Items:</strong><br>• Flower Pillars x 4<br>• Tiffany Chairs x 14<br><strong>Vendor:</strong> TMI Studio<br><strong>Contact:</strong> Joyce Jiao 0433 555 567<br><strong>Address:</strong> 2/14 Shields Cr, Booragoon<br><strong>Delivery:</strong> Drop off at Cana House",
            "<strong>Position:</strong> Stand with Chenyu, Roger, and Ernest at sanctuary<br><strong>Coordination:</strong> Work with Like Johanes<br><strong>Role:</strong> Support groom's party during ceremony",
            "<strong>Speech Delivery:</strong> Groomsmen speech with Roger and Ernest<br><strong>Coordination:</strong> MC Daniel Gunawan coordinates timing<br><strong>Team:</strong> Work with Roger Chuang and Ernest Wijaya",
            "<strong>Cleanup Activities:</strong><br>• Post-dinner cleanup<br>• Wedding items organization<br><strong>Team:</strong> Work with groomsmen and other helpers"
        ]
    },

    // Holy Matrimony Coordinators
    "Like Johanes": {
        role: "Holy Matrimony Coordinator (IC)",
        summary: "Manages bridal party entrance, timing, and ceremony logistics",
        tasks: [
            "2:45pm - Bridal cars arrive Cana",
            "2:55pm - Ring bearer and flower girl in position",
            "2:55pm - Bride and bridesmaid in position"
        ],
        taskDetails: [
            "<strong>Car arrival coordination:</strong><br>• Sabrina will contact Like once cars arrive<br>• Like will inform Sabrina when to come in to Cana House",
            "<strong>Processional coordination:</strong><br><strong>Ring Bearer:</strong> Harrison Clark<br><strong>Flower Girl:</strong> Grace Win<br><strong>Coordinate with:</strong> Reynard Chan",
            "<strong>Bridal party entrance order:</strong><br><strong>Coordinator:</strong> Reynard Chan<br><strong>Order:</strong><br>1. Angela Fong<br>2. Monica Yaw<br>3. Sabrina Zhou<br>4. Ping Li with her father"
        ]
    },

    "Marini Angouw": {
        role: "Holy Matrimony Coordinator",
        summary: "Supports Like Johanes with ceremony coordination",
        tasks: [
            "<strong>Coordination Role:</strong> Assist Like Johanes<br><strong>Activities:</strong><br>• Holy matrimony ceremony coordination<br>• Support ceremony logistics<br><strong>Team:</strong> Work under Like Johanes (IC)"
        ],
        taskDetails: [
            "<strong>Support Role:</strong> Assist Like Johanes (IC)<br><strong>Activities:</strong><br>• All ceremony coordination<br>• Ceremony logistics<br><strong>Location:</strong> Sanctuary and ceremony areas"
        ]
    },

    // MC and Worship Team
    "Reynard Chan": {
        role: "MC",
        summary: "Leads ceremony proceedings and announcements",
        tasks: [
            "2:30pm - MC in position",
            "2:55pm - Ring bearer and flower girl in position",
            "2:55pm - Bride and bridesmaid in position",
            "3:00pm - Holy matrimony commence"
        ],
        taskDetails: [
            "<strong>Position:</strong> MC in position at sanctuary<br><strong>Role:</strong> Lead ceremony proceedings<br><strong>Location:</strong> Sanctuary podium",
            "<strong>Coordination:</strong> Work with Like Johanes<br><strong>Ring Bearer:</strong> Harrison Clark<br><strong>Flower Girl:</strong> Grace Win<br><strong>Activity:</strong> Coordinate processional entrance",
            "<strong>Coordination:</strong> Work with Like Johanes<br><strong>Activity:</strong> Coordinate bride and bridesmaid entrance<br><strong>Timing:</strong> Follow processional order",
            "<strong>Ceremony Leadership:</strong><br>• Announcement start<br>• Introduce marriage celebrant<br>• Introduce bridegroom and groomsmen<br>• Announce bridesmaids entrance<br>• Announce ring bearer entrance<br>• Announce flower girl entrance<br>• Announce bride entrance"
        ]
    },

    "Intan Chen": {
        role: "Worship Leader (IC)",
        summary: "Manages worship team and leads praise during ceremony",
        tasks: [
            "2:30pm - Worship team in position",
            "2:45pm - Praise and worship to be ready",
            "3:00pm - Praise and worship during ceremony"
        ],
        taskDetails: [
            "<strong>Position:</strong> Worship team in position at sanctuary<br><strong>Role:</strong> Lead worship during ceremony<br><strong>Coordination:</strong> Work with ceremony schedule",
            "<strong>Preparation:</strong> Be ready for praise and worship<br><strong>Timing:</strong> When ceremony begins<br><strong>Activity:</strong> Lead worship music",
            "<strong>Leadership:</strong> Lead praise and worship<br><strong>Event:</strong> Holy matrimony ceremony<br><strong>Duration:</strong> Throughout ceremony as scheduled"
        ]
    },

    // Technical Team
    "Lyndon Win": {
        role: "Sound System (IC)",
        summary: "Manages all audio/visual systems for ceremony and reception",
        tasks: [
            "2:00pm - Setup sound system",
            "5:00pm - Setup sound system (reception)",
            "6:15pm - Play background music",
            "7:10pm - Play entrance songs",
            "9:30pm - Sound system play first dance song",
            "9:40pm - Sound system play dance song list",
            "10:10pm - Packup and drop sound system back to Cana House"
        ],
        taskDetails: [
            "<strong>Ceremony setup:</strong><br>• Setup sound system with Hendra Wijaya<br>• 4 translation sets for both sides of parents",
            "<strong>Reception setup:</strong><br>• Setup sound system at dinner reception<br>• Sound system table is provided by vendor",
            "<strong>Pre-reception music:</strong><br>• Play background music during pre-drinks and canapes service",
            "<strong>Entrance music:</strong><br>• Play entrance songs for bridesmaids and groomsmen<br>• Play entrance songs for bride and groom<br>• Coordinate with Daniel Gunawan",
            "<strong>First dance coordination:</strong><br>• Play first dance song for bride and groom<br>• Work with Hendra Wijaya<br>• Coordinate with MC announcements",
            "<strong>General dancing:</strong><br>• Play dance song list for general dancing<br>• Start after MC announces dance floor open",
            "<strong>Packup:</strong><br>• Pack up with Hendra and groomsmen<br>• Return sound system to Cana House"
        ]
    },

    "Hendra Wijaya": {
        role: "Sound System Assistant",
        summary: "Assists with audio setup and music coordination",
        tasks: [
            "2:00pm - Setup sound system",
            "5:00pm - Setup sound system (reception)",
            "9:30pm - Sound system play first dance song",
            "10:10pm - Packup and drop sound system back to Cana House"
        ],
        taskDetails: [
            "<strong>Ceremony setup:</strong><br>• Assist Lyndon Win with sound system setup<br>• 4 translation sets for both sides of parents",
            "<strong>Reception setup:</strong><br>• Assist Lyndon Win with sound system setup<br>• Sound system table is provided by vendor",
            "<strong>First dance coordination:</strong><br>• Assist with first dance music coordination<br>• Work with Lyndon Win",
            "<strong>Packup:</strong><br>• Help pack up sound system with Lyndon Win<br>• Return to Cana House with groomsmen"
        ]
    },

    "Sonia Suputri": {
        role: "Projection Coordinator",
        summary: "Manages projection screens and ceremony slides",
        tasks: [
            "2:00pm - Setup projection and TVs",
            "2:20pm - Play waiting songs & slides"
        ],
        taskDetails: [
            "<strong>Equipment setup:</strong><br>• Setup projection and TVs<br>• Chenyu provides PPT slides",
            "<strong>Pre-ceremony:</strong><br>• Play waiting songs and slides before ceremony begins"
        ]
    },

    "Lina Han": {
        role: "Translator",
        summary: "Provides translation services during ceremony",
        tasks: [
            "2:45pm - Translator in position",
            "3:00pm - Translation services during ceremony"
        ],
        taskDetails: [
            "<strong>Position:</strong> Translator in position for ceremony<br><strong>Role:</strong> Provide translation services<br><strong>Language:</strong> Support non-English speakers",
            "<strong>Service:</strong> Provide translation services<br><strong>Event:</strong> Holy matrimony ceremony<br><strong>Purpose:</strong> Assist guests who need language support"
        ]
    },

    // Car Park Ushers
    "Didier Michel": {
        role: "Carpark Ushers (IC) - Holy Matrimony",
        summary: "Manages parking team and reserves spaces for VIP vehicles",
        tasks: [
            "2:00pm - Carpark ushers in position",
            "<strong>VIP Parking:</strong> Reserve 5 parking bays<br><strong>Purpose:</strong> VIP vehicles (parents, bridal cars, photographer)<br><strong>Coordination:</strong> Direct carpark team"
        ],
        taskDetails: [
            "<strong>Carpark team coordination:</strong><br>• Rudy Rusli<br>• Rudy Suwarno<br>• Kocdal Antipas<br>• Tomas Aguda<br>• Benny Suwarno<br>• Harry Chen",
            "<strong>Reserved parking for VIP vehicles:</strong><br><strong>Parents Cars:</strong><br>• White Toyota RAV4 (Rego: 1HUQ923)<br>• Black Lexus RX350 (Rego: P1NGL)<br><strong>Bridal Cars:</strong><br>• White Tesla Model Y (Rego: 1IOD288)<br>• Grey Mitsubishi Outlander (Rego: 1GYL921)<br><strong>Photographer's Car:</strong><br>• White Honda Accord (Rego: 1EUB613)"
        ]
    },

    "Rudy Rusli": {
        role: "Carpark Usher (Holy Matrimony)",
        summary: "Helps direct guests to parking spaces during ceremony",
        tasks: ["2:00pm - Carpark ushers in position"],
        taskDetails: ["<strong>Coordination:</strong> Assist Didier Michel<br><strong>Activities:</strong><br>• Carpark coordination<br>• Guest parking directions<br><strong>Location:</strong> Ceremony venue parking area"]
    },

    "Rudy Suwarno": {
        role: "Carpark Usher (Holy Matrimony)", 
        summary: "Helps direct guests to parking spaces during ceremony",
        tasks: ["2:00pm - Carpark ushers in position"],
        taskDetails: ["<strong>Coordination:</strong> Assist Didier Michel<br><strong>Activities:</strong><br>• Carpark coordination<br>• Guest parking directions<br><strong>Location:</strong> Ceremony venue parking area"]
    },

    "Kocdal Antipas": {
        role: "Carpark Usher (Holy Matrimony)",
        summary: "Helps with parking coordination during ceremony",
        tasks: ["2:00pm - Carpark ushers in position"],
        taskDetails: ["<strong>Coordination:</strong> Assist Didier Michel<br><strong>Activity:</strong> Carpark coordination<br><strong>Location:</strong> Ceremony venue parking area"]
    },

    "Tomas Aguda": {
        role: "Carpark Usher (Holy Matrimony)",
        summary: "Helps with parking coordination during ceremony",
        tasks: ["2:00pm - Carpark ushers in position"],
        taskDetails: ["<strong>Coordination:</strong> Assist Didier Michel<br><strong>Activity:</strong> Carpark coordination<br><strong>Location:</strong> Ceremony venue parking area"]
    },

    "Benny Suwarno": {
        role: "Carpark Usher (Holy Matrimony) & Grace Prayer",
        summary: "Helps with parking coordination and leads dinner prayer",
        tasks: [
            "2:00pm - Carpark ushers in position",
            "7:20pm - Grace prayer"
        ],
        taskDetails: [
            "<strong>Coordination:</strong> Assist Didier Michel<br><strong>Activity:</strong> Carpark coordination<br><strong>Location:</strong> Ceremony venue parking area",
            "<strong>Prayer Leadership:</strong> Lead grace prayer at dinner reception<br><strong>Coordination:</strong> Wait for MC Daniel Gunawan's announcement<br><strong>Timing:</strong> Before meal service begins"
        ]
    },

    "Harry Chen": {
        role: "Carpark Usher (Holy Matrimony)",
        summary: "Helps with parking coordination during ceremony only",
        tasks: [
            "2:00pm - Carpark ushers in position"
        ],
        taskDetails: [
            "<strong>Ceremony Duties:</strong> Assist Didier Michel with carpark coordination<br><strong>Location:</strong> Ceremony venue parking area<br><strong>Activity:</strong> Direct guest parking<br><strong>Team:</strong> Didier Michel (IC), Rudy Rusli, Rudy Suwarno, Kocdal Antipas, Tomas Aguda, Benny Suwarno, Harry Chen"
        ]
    },

    // Sanctuary Ushers and Setup
    "Priscilla Suwarno": {
        role: "Sanctuary Ushers (IC) + Dinner Reception Ushers (IC)",
        summary: "Manages guest seating and reception setup verification",
        tasks: [
            "2:20pm - Sanctuary ushers in position",
            "2:45pm - Guests to be seated",
            "5:00pm - Check reception setup",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "<strong>Sanctuary ushers team:</strong><br>• Jean Gao<br>• Jacquelyn Chong<br>• William Yong<br>• Kok Yee Wee",
            "<strong>Ceremony responsibility:</strong><br>• Ensure all guests are seated before ceremony begins",
            "<strong>Reception setup check:</strong><br>• Table number, guest names & guest gifts are setup according to the seating plan",
            "<strong>Dinner reception ushers coordination:</strong> IC (In Charge)<br><strong>Team:</strong><br>• IeChi Suen<br>• Jacquelyn Chong<br><strong>Special note:</strong> Jacquelyn leads pastors and parents to the seats"
        ]
    },

    "Jean Gao": {
        role: "Sanctuary Usher",
        summary: "Assists with guest seating during ceremony only",
        tasks: [
            "2:20pm - Sanctuary ushers in position"
        ],
        taskDetails: [
            "<strong>Sanctuary usher duties:</strong><br><strong>Coordinator:</strong> Priscilla Suwarno (IC)<br><strong>Team:</strong><br>• Jean Gao<br>• Jacquelyn Chong<br>• William Yong<br>• Kok Yee Wee<br><strong>Responsibility:</strong> Assist with guest seating during ceremony"
        ]
    },

    "IeChi Suen": {
        role: "Decoration & Reception Setup + Dinner Reception Usher",
        summary: "Manages sanctuary decorations, signing table setup, and reception coordination",
        tasks: [
            "Saturday - Sanctuary decoration",
            "2:00pm - Signing table & touch up",
            "5:00pm - Guest register table setup & deco",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "<strong>Saturday decoration:</strong><br><strong>Team:</strong> Leena Chai (IC), IeChi Suen, Natalie Tan, Tiffany Tan (after 1pm), bridesmaids and groomsmen<br><strong>Setup:</strong><br>• Stage background<br>• Staircase<br>• Sanctuary chairs<br>• Flower pillars",
            "<strong>Coordination:</strong> IC (In Charge)<br><strong>Setup tasks:</strong><br>• Set up signing table decoration<br>• Touch up Saturday decoration<br><strong>Team:</strong> Work with Natalie Tan and Priscilla Suwarno",
            "<strong>Guest register setup:</strong> IC (In Charge)<br><strong>Team:</strong> Joanne Yeung, Tiffany Tan<br><strong>Special items to bring:</strong><br>• Guest Signing Tree<br>• Guest Seat Lookup QR code",
            "<strong>Reception ushers:</strong><br><strong>Coordinator:</strong> Priscilla Suwarno (IC)<br><strong>Team:</strong> IeChi Suen, Jacquelyn Chong<br><strong>Note:</strong> Jacquelyn leads pastors and parents to the seats"
        ]
    },

    "Jacquelyn Chong": {
        role: "Sanctuary Usher + Dinner Reception Usher",
        summary: "Assists with guest seating at ceremony and leads pastors/parents at reception",
        tasks: [
            "2:20pm - Sanctuary ushers in position",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "<strong>Sanctuary usher duties:</strong><br><strong>Team:</strong> Priscilla Suwarno (IC), Jean Gao, Jacquelyn Chong, William Yong, Kok Yee Wee",
            "<strong>Reception usher duties:</strong><br><strong>Team:</strong> Priscilla Suwarno (IC), IeChi Suen, Jacquelyn Chong<br><strong>Special responsibility:</strong> Jacquelyn leads pastors and parents to seats at dinner reception"
        ]
    },

    "William Yong": {
        role: "Sanctuary Usher & Setup + Carpark Usher (Reception)",
        summary: "Manages ceremony setup and reception item transport",
        tasks: [
            "2:00pm - Setup stage tables & chairs",
            "2:20pm - Sanctuary ushers in position",
            "4:30pm - Transport items to dinner reception",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "<strong>Setup coordination:</strong><br><strong>Items to setup:</strong><br>• Signing table<br>• Candle table<br>• Communion table<br>• Tiffany chairs<br><strong>Team partner:</strong> Kok Yee Wee",
            "<strong>Sanctuary usher duties:</strong><br><strong>Team:</strong> Priscilla Suwarno (IC), Jean Gao, Jacquelyn Chong, William Yong, Kok Yee Wee",
            "<strong>Item transport:</strong><br><strong>Items:</strong><br>• Photo canvas<br>• Easels x 2<br>• Reception decorations<br><strong>Team:</strong> William & Joanne Yeung",
            "<strong>Reception carpark duties:</strong><br>• At the front with Kok Yee Wee<br>• Coordinate guest parking at dinner reception"
        ]
    },

    "Kok Yee Wee": {
        role: "Sanctuary Usher & Setup + Carpark Usher (Reception)",
        summary: "Assists with ceremony setup and chairs transport",
        tasks: [
            "2:00pm - Setup stage tables & chairs", 
            "2:20pm - Sanctuary ushers in position",
            "4:30pm - Transport items to dinner reception",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "<strong>Setup coordination:</strong><br><strong>Items to setup:</strong><br>• Signing table<br>• Candle table<br>• Communion table<br>• Tiffany chairs<br><strong>Team partner:</strong> William Yong",
            "<strong>Sanctuary usher duties:</strong><br><strong>Team:</strong> Priscilla Suwarno (IC), Jean Gao, Jacquelyn Chong, William Yong, Kok Yee Wee", 
            "<strong>Item transport:</strong><br>• Flower pillars x 4<br>• Pass them on to Jenny Sophian at reception venue",
            "<strong>Reception carpark duties:</strong><br>• IC (In Charge) at the front with William<br>• Coordinate guest parking at dinner reception"
        ]
    },

    "Ivana Win": {
        role: "Unity Candle & Communion Setup",
        summary: "Prepares unity candle and communion elements",
        tasks: [
            "2:00pm - Setup unity candle and communion"
        ],
        taskDetails: [
            "<strong>Setup Requirements:</strong><br><strong>Bride provides:</strong><br>• Candles<br>• Holders<br><strong>Ivana brings:</strong><br>• Communion bread<br><strong>Purpose:</strong> Unity candle and communion ceremony"
        ]
    },

    // Transport Team
    "Tze Ong": {
        role: "Bridal Cars (IC)",
        summary: "Drives bride and manages all wedding party transportation",
        tasks: [
            "2:00pm - Bridal cars leaves Cana House",
            "2:45pm - Bridal cars leaves Westin Perth",
            "4:30pm - Bride, groom and bridal party leave Cana",
            "6:00pm - Bridal party cars arrive dinner reception"
        ],
        taskDetails: [
            "<strong>Departure coordination:</strong><br>• Coordinate bridal cars departure from Cana House<br>• Work with Senjaya Tresna",
            "<strong>Hotel to Cana transport:</strong><br><strong>Tze's car:</strong> Ping & Sabrina<br><strong>Senjaya's car:</strong> Mums (Lijiang Yu & Qiuzhi Chen), Monica and Angela",
            "<strong>Cana to reception transport:</strong><br><strong>Tze's car:</strong> Bride & Groom<br><strong>Senjaya's car:</strong> Bridal Party",
            "<strong>Reception arrival:</strong><br><strong>Tze:</strong> Bride & Groom<br><strong>Senjaya:</strong> Bridal Party"
        ]
    },

    "Senjaya Tresna": {
        role: "Bridal Cars Driver",
        summary: "Drives parents and bridesmaids between venues",
        tasks: [
            "2:45pm - Bridal cars leaves Westin Perth",
            "4:30pm - Bride, groom and bridal party leave Cana",  
            "6:00pm - Bridal party cars arrive dinner reception"
        ],
        taskDetails: [
            "<strong>Transportation:</strong> Senjaya drives from Westin to Cana<br><strong>Passengers:</strong><br>• Mums (Lijiang Yu & Qiuzhi Chen)<br>• Monica Yaw<br>• Angela Fong",
            "<strong>Transportation:</strong> Senjaya drives bridal party<br><strong>Route:</strong> From Cana to phototaking and reception<br><strong>Passengers:</strong> Bridal party members",
            "<strong>Transportation:</strong> Senjaya drives bridal party<br><strong>Destination:</strong> Dinner reception<br><strong>Purpose:</strong> Ensure timely arrival for reception"
        ]
    },

    // Decoration Team
    "Leena Chai": {
        role: "Sanctuary Decoration (IC)",
        summary: "Manages Saturday ceremony decoration setup",
        tasks: [
            "Saturday - Sanctuary decoration"
        ],
        taskDetails: [
            "<strong>Saturday decoration coordination:</strong> IC (In Charge)<br><strong>Setup areas:</strong><br>• Stage background<br>• Staircase<br>• Sanctuary chairs<br>• Flower pillars<br><strong>Team:</strong><br>• IeChi Suen<br>• Natalie Tan<br>• Tiffany Tan (after 1pm)<br>• Bridesmaids<br>• Groomsmen"
        ]
    },

    "Natalie Tan": {
        role: "Decoration & Flowers",
        summary: "Manages ceremony decorations and flower arrangements",
        tasks: [
            "Saturday - Sanctuary decoration",
            "Before Sunday Service - Pick up bouquet & buttonhole", 
            "2:00pm - Signing table & touch up",
            "5:00pm - Check reception setup"
        ],
        taskDetails: [
            "<strong>Saturday decoration:</strong><br><strong>Coordinator:</strong> Leena Chai (IC)<br><strong>Team:</strong> Natalie Tan, IeChi Suen, Tiffany Tan (after 1pm), bridesmaids and groomsmen",
            "<strong>Flower pickup:</strong><br><strong>Items:</strong><br>• Bridal bouquet x 1<br>• Groom's buttonhole x 1<br><strong>Vendor:</strong> Chatsworth Flowers<br><strong>Contact:</strong> Jacqueline 0400784248<br><strong>Address:</strong> 96 Beaufort Street, Perth<br><strong>Drop off location:</strong> Photocopy room",
            "<strong>Signing table setup:</strong><br>• Set up signing table decoration<br>• Touch up Saturday decoration<br><strong>Team:</strong> IeChi Suen and Priscilla Suwarno",
            "<strong>Reception setup check:</strong><br>• Check reception setup<br><strong>Team:</strong> Priscilla Suwarno and Jacquelyn Chong"
        ]
    },

    // Food Distribution and Coordination
    "Andrew Chan": {
        role: "Food Pickup & Photography Coordinator",
        summary: "Manages meal pickup and coordinates with photography team",
        tasks: [
            "<strong>Food Pickup:</strong> Before Sunday Service<br><strong>Items:</strong> Lunch for Aflamers<br><strong>Destination:</strong> MC side drop-off",
            "2:00pm - Photographer and videographer briefing"
        ],
        taskDetails: [
            "<strong>Food pickup:</strong><br><strong>Drop off location:</strong> MC side<br><strong>Items:</strong><br>• Pork Bánh Mì x 100<br>• Chicken Bánh Mì x 100<br><strong>Vendor:</strong> Ben Thanh Lunch Bar<br><strong>Contact:</strong> 0434589117<br><strong>Address:</strong> 4/73 Honeywell Blvd, Mirrabooka",
            "<strong>Photography briefing:</strong><br><strong>Vendor:</strong> Allseasons Photo<br><strong>Contact:</strong> Rio Yapari 0434150762<br><strong>Team:</strong> 1 photographer + 2 videographers"
        ]
    },

    "Dwi Yoehanes": {
        role: "Food Distributing (IC)",
        summary: "Manages distribution of meals to all wedding attendees",
        tasks: [
            "<strong>Food Distribution:</strong> After Sunday Service<br><strong>Recipients:</strong> All Aflamers<br><strong>Coordination:</strong> Work with distribution team"
        ],
        taskDetails: [
            "<strong>Food distribution coordination:</strong> IC (In Charge)<br><strong>Distribution rules:</strong><br>• One Bánh Mì per person<br>• Half Bánh Mì for children in Sunday School (Restaurant pre-cut and packed)<br>• No food for children under 3 years old<br><strong>Team:</strong> Coordinate with Helen Cheong and Lily Gao"
        ]
    },

    "Helen Cheong": {
        role: "Food Distribution Assistant",
        tasks: [
            "<strong>Food Distribution:</strong> After Sunday Service<br><strong>Recipients:</strong> All Aflamers<br><strong>Coordination:</strong> Work with distribution team"
        ],
        taskDetails: [
            "<strong>Food Distribution:</strong> Assist Dwi Yoehanes<br><strong>Recipients:</strong> All Aflamers<br><strong>Activity:</strong> Distribute meals after Sunday service"
        ]
    },

    "Lily Gao": {
        role: "Food Distribution Assistant & Gift Distribution",
        summary: "Assists with meal distribution and leads guest gift distribution",
        tasks: [
            "<strong>Food Distribution:</strong> After Sunday Service<br><strong>Recipients:</strong> All Aflamers<br><strong>Coordination:</strong> Work with distribution team",
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "<strong>Food Distribution:</strong> Assist Dwi Yoehanes<br><strong>Activity:</strong> Help distribute meals to Aflamers<br><strong>Timing:</strong> After Sunday service",
            "<strong>Gift distribution coordination:</strong> IC (In Charge)<br><strong>Setup requirements:</strong><br>• George: Set up 2 tables, including tablecloths<br><strong>Distribution:</strong><br>• 1 Gift per person<br>• Any extra gifts go back to box and store in the room next to lift<br><strong>Team:</strong> Coordinate with George Yuan and Julia Schisas"
        ]
    },

    "George Yuan": {
        role: "Food & Gift Distribution",
        tasks: [
            "<strong>Pastor Meals:</strong> After Sunday Service<br><strong>Coordination:</strong> Order and pickup food for pastors<br><strong>Team:</strong> Stephanie orders, George picks up",
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "<strong>Food Coordination:</strong><br><strong>Order:</strong> Stephanie Kho<br><strong>Pick up:</strong> George Yuan<br><strong>Recipients:</strong> Pastors",
            "<strong>Setup responsibilities:</strong><br>• Set up 2 tables, including tablecloths<br><strong>Distribution:</strong><br>• 1 Gift per person<br>• Any extra gifts go back to box and store in the room next to lift"
        ]
    },

    "Julia Schisas": {
        role: "Gift Distribution",
        tasks: [
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "<strong>Distribution Rule:</strong> 1 gift per person<br><strong>Extra Gifts:</strong> Return to box and store in room next to lift<br><strong>Team:</strong> Assist Lily Gao and George Yuan<br><strong>Activity:</strong> Guest gift distribution"
        ]
    },

    "Stephanie Kho": {
        role: "Food Coordinator & Documents",
        tasks: [
            "<strong>Pastor Meals:</strong> After Sunday Service<br><strong>Coordination:</strong> Order and pickup food for pastors<br><strong>Team:</strong> Stephanie orders, George picks up",
            "10:10pm - Check belongings"
        ],
        taskDetails: [
            "<strong>Food Coordination:</strong><br><strong>Order:</strong> Stephanie Kho<br><strong>Pick up:</strong> George Yuan<br><strong>Recipients:</strong> Pastors",
            "<strong>Final Check:</strong> Check belongings after dinner reception<br><strong>Activity:</strong> Ensure all items are collected<br><strong>Location:</strong> Reception venue"
        ]
    },

    // Reception Coordinators
    "Jenny Sophian": {
        role: "Reception Coordinator (IC)",
        summary: "Manages reception setup, guest flow, and bridal party coordination",
        tasks: [
            "5:00pm - Setup welcome sign, wedding photo easel, flower pillars and blue flower stand",
            "6:45pm - Ball room opens and guest entry",
            "7:10pm - Bridal party in position",
            "8:00pm - Direct bride and groom to assigned table for photo taking"
        ],
        taskDetails: [
            "<strong>Setup coordination:</strong> IC with Maria Gunawan<br><strong>Items to collect from Function manager Des:</strong><br>• Welcome Sign<br>• Blue Flower Stand<br>• Gifts for Pastors and Parents<br><em>(Pass gifts to Angela Fong after Bridal Party Entry)</em><br><strong>Items to transport from Cana:</strong><br>• Photo Canvas<br>• Easel x 2<br>• Flower Pillars x 4",
            "<strong>Venue Coordination:</strong> Work with Function Manager<br><strong>Activities:</strong><br>• Ball room opening<br>• Guest entry coordination<br><strong>Location:</strong> Dinner reception venue", 
            "<strong>Entrance Coordination:</strong> Bridal party in position<br><strong>Activity:</strong> Coordinate bridal party entrance<br><strong>Timing:</strong> Reception entrance sequence",
            "<strong>Photo Coordination:</strong> Direct bride and groom to assigned tables<br><strong>Activity:</strong> Photo taking with guests<br><strong>Team:</strong> Work with Maria Gunawan<br><strong>Purpose:</strong> Systematic guest photos"
        ]
    },

    "Maria Gunawan": {
        role: "Reception Coordinator",
        tasks: [
            "5:00pm - Setup welcome sign, wedding photo easel, flower pillars and blue flower stand",
            "8:00pm - Direct bride and groom to assigned table for photo taking"
        ],
        taskDetails: [
            "<strong>Setup Coordination:</strong> Work with Jenny Sophian (IC)<br><strong>Items to Setup:</strong><br>• Welcome sign<br>• Wedding photo easel<br>• Flower pillars<br>• Blue flower stand",
            "<strong>Photo Coordination:</strong> Work with Jenny Sophian<br><strong>Activity:</strong> Direct bride and groom to assigned tables<br><strong>Purpose:</strong> Systematic photos with guests<br><strong>Role:</strong> Support coordination"
        ]
    },

    "Daniel Gunawan": {
        role: "Reception MC",
        summary: "Manages reception timeline, announcements, and coordination",
        tasks: [
            "7:00pm - MC welcome announcement",
            "7:10pm - MC to announce bridal party entrance", 
            "7:20pm - MC announce grace prayer",
            "7:45pm - MC announce bridesmaids speech(es)",
            "8:00pm - MC announcement",
            "8:30pm - MC announce groomsmen speech(es)",
            "8:45pm - MC announce cake cutting",
            "8:45pm - MC invite pastors to present marriage certificate",
            "8:45pm - MC announce presentation of gifts",
            "9:15pm - MC announce dessert and wedding game",
            "9:30pm - MC announce first dance",
            "9:30pm - MC encourage married couples to dance",
            "9:40pm - MC announce dance floor open"
        ],
        taskDetails: [
            "<strong>Welcome announcement:</strong><br>• Introduction<br>• Emergency exits<br>• Nearest toilets<br>• Time keeping: MC",
            "<strong>Bridal party entrance:</strong><br>• Introduce bridesmaids and groomsmen<br>• Announce entrance of bride and groom",
            "<strong>Grace prayer:</strong><br>• Announce grace prayer<br>• Led by Benny Suwarno",
            "<strong>Bridesmaids speeches:</strong><br>• Announce bridesmaids speech(es) coordination",
            "<strong>Main course announcement:</strong><br>• Main course will be served<br>• Bride and groom will take photos with guests",
            "<strong>Groomsmen speeches:</strong><br>• Announce groomsmen speech(es) and toast",
            "<strong>Cake cutting:</strong><br>• Announce cake cutting ceremony",
            "<strong>Marriage certificate:</strong><br>• Invite pastors to present marriage certificate",
            "<strong>Gift presentation:</strong><br>• Announce gifts for Pastors and Parents<br>• Angela Fong passes the gifts to bride & groom",
            "<strong>Dessert and games:</strong><br>• Dessert will be served<br>• Wedding game for bride and groom",
            "<strong>First dance:</strong><br>• Announce first dance for bride and groom",
            "<strong>Couples dancing:</strong><br>• Encourage married couples to dance",
            "<strong>Open dancing:</strong><br>• Encourage all guests to participate in dancing"
        ]
    },

    "Joanne Yeung": {
        role: "Reception Setup & Coordination",
        summary: "Manages reception coordination and gift handling",
        tasks: [
            "2:00pm - Reception setup & deco",
            "4:30pm - Pass gifts from guests to Chenyu's parents",
            "4:30pm - Transport items to dinner reception",
            "5:00pm - Guest register table setup & deco",
            "6:00pm - Receptionists in position"
        ],
        taskDetails: [
            "<strong>Reception setup:</strong><br>• Setup reception table<br>• Setup wedding photo canvas<br><strong>Team partner:</strong> Tiffany Tan",
            "<strong>Gift coordination:</strong><br>• Pass gifts from guests to Chenyu's parents after ceremony",
            "<strong>Item transport:</strong><br><strong>Items:</strong><br>• Photo canvas<br>• Easels x 2<br>• Reception decorations<br><strong>Team:</strong> William & Joanne",
            "<strong>Guest register table:</strong><br>• Setup and decoration<br><strong>Team:</strong> IeChi Suen (IC) and Tiffany Tan",
            "<strong>Reception coordination:</strong> IC (In Charge)<br><strong>Team partner:</strong> Tiffany Tan<br><strong>Tasks:</strong><br>• Pack away table decoration after bride & groom entry<br>• Move gifts from guests to bridal salon<br>• Pass Angpao to Chenyu's mum after bride & groom entry"
        ]
    },

    "Tiffany Tan": {
        role: "Decoration & Reception Setup",
        summary: "Manages Saturday ceremony decoration and reception setup coordination",
        tasks: [
            "Saturday afternoon - Sanctuary decoration (after 1pm)",
            "2:00pm - Reception setup & deco",
            "5:00pm - Guest register table setup & deco",
            "6:00pm - Receptionists in position"
        ],
        taskDetails: [
            "<strong>Saturday decoration:</strong> After 1pm<br><strong>Coordinator:</strong> Leena Chai (IC)<br><strong>Team:</strong> IeChi Suen, Natalie Tan, Tiffany Tan, bridesmaids and groomsmen<br><strong>Setup areas:</strong><br>• Stage background<br>• Staircase<br>• Sanctuary chairs<br>• Flower pillars",
            "<strong>Reception setup coordination:</strong> IC (In Charge)<br><strong>Setup tasks:</strong><br>• Setup reception table<br>• Setup wedding photo canvas<br><strong>Team partner:</strong> Joanne Yeung",
            "<strong>Guest register table:</strong><br>• Setup and decoration<br><strong>Team:</strong> IeChi Suen (IC) and Joanne Yeung",
            "<strong>Reception coordination:</strong><br><strong>IC coordinator:</strong> Joanne Yeung<br><strong>Tasks:</strong><br>• Pack away table decoration after bride & groom entry<br>• Move gifts from guests to bridal salon"
        ]
    },

    // Cleanup Team
    "Edward Guan": {
        role: "Cana House Clean-up (IC) & Carpark Usher (Reception)",
        summary: "Manages post-ceremony cleanup and reception parking duties",
        tasks: [
            "4:30pm - Cana house clean-up",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "<strong>Cleanup coordination:</strong> IC (In Charge)<br><strong>Areas to clean:</strong><br>• Foyer<br>• Toilet<br>• Sanctuary only<br><strong>Team:</strong> JAG, JETS and YA4",
            "<strong>Reception carpark duties:</strong><br>• Next to lift with Peter Kartosudiro<br>• Coordinate guest parking at dinner reception"
        ]
    },

    "Renaldy Chian": {
        role: "Cana House Lock-up",
        tasks: [
            "5:00pm - Cana house lock-up"
        ],
        taskDetails: [
            "<strong>Security:</strong> Lock up Cana House<br><strong>Timing:</strong> After ceremony and cleanup completion<br><strong>Responsibility:</strong> Ensure venue is secure"
        ]
    },

    // Additional Reception Staff
    "Peter Kartosudiro": {
        role: "Carpark Usher (Reception)",
        tasks: [
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Next to lift with Edward Guan at dinner reception"
        ]
    },

    "Alex Wei": {
        role: "Carpark Usher (Reception)",  
        tasks: [
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Upstairs outside the lift with Harry Li"
        ]
    },

    "Harry Li": {
        role: "Carpark Usher (Reception)",
        tasks: [
            "6:00pm - Carpark ushers at dinner reception"
        ], 
        taskDetails: [
            "Upstairs outside the lift with Alex Wei"
        ]
    },

    // Special Ceremony Roles
    "Harrison Clark": {
        role: "Ring Bearer",
        summary: "Carries rings during wedding ceremony processional",
        tasks: [
            "2:55pm - Ring bearer and flower girl in position"
        ],
        taskDetails: [
            "Ring Bearer entrance during ceremony. Coordinate with Like Johanes and Reynard Chan"
        ]
    },

    "Grace Win": {
        role: "Flower Girl", 
        summary: "Participates in wedding ceremony processional",
        tasks: [
            "2:55pm - Ring bearer and flower girl in position"
        ],
        taskDetails: [
            "Flower Girl entrance during ceremony. Coordinate with Like Johanes and Reynard Chan"
        ]
    },

    // Parents
    "Lijiang Yu": {
        role: "Chenyu's Mum",
        summary: "Participates in ceremony and reception activities",
        tasks: [
            "10:30am - Mums arrive Westin Perth",
            "2:45pm - Travel from Westin to Cana"
        ],
        taskDetails: [
            "Parents will drive to hotel. Toyota RAV4 White Rego: 1HUQ923",
            "Senjaya drives mums, Monica and Angela from Westin to Cana. Joanne brings Angpao to Chenyu's mum at reception"
        ]
    },

    "Qiuzhi Chen": {
        role: "Ping's Mum",
        summary: "Participates in ceremony and reception activities",
        tasks: [
            "10:30am - Mums arrive Westin Perth", 
            "2:45pm - Travel from Westin to Cana"
        ],
        taskDetails: [
            "Parents will drive to hotel. Lexus RX350 Black Rego: P1NGL",
            "Senjaya drives mums, Monica and Angela from Westin to Cana"
        ]
    },

    // Vendors and External Services
    "Joyce Jiao": {
        role: "Reception Decoration (TMI Studio)",
        summary: "Sets up reception decorations and ceremonial items",
        tasks: [
            "Prior to 5:00pm - Reception decoration"
        ],
        taskDetails: [
            "<strong>Vendor details:</strong><br><strong>Company:</strong> TMI Studio<br><strong>Contact:</strong> 0433555567<br><strong>Address:</strong> 2/14 Shields Cr, Booragoon<br><strong>Items to setup:</strong><br>• LOVE LED letters x 1<br>• Centerpiece x 17<br><strong>Bridal table setup:</strong><br>• 1x1.5m Artificial flower arrangement<br>• 2x1m LED Candles"
        ]
    },

    "Sotoudeh Keivani": {
        role: "Wedding Cake (Sotoudehcake)",
        tasks: [
            "Setup wedding cake"
        ],
        taskDetails: [
            "Vendor: Sotoudehcake, Contact: 0439538378. 3 layers wedding cake"
        ]
    },

    "Chris Pelajic": {
        role: "Dance Floor (Lumin8 Events)",
        tasks: [
            "Setup dance floor"
        ],
        taskDetails: [
            "Vendor: Lumin8 Events, Contact: 0404881525. White gloss dance floor: 5m x 5m"
        ]
    },

    "Nadine Wellinger": {
        role: "Venue Coordinator (Beaumonde)",
        tasks: [
            "Prior to 5:00pm - Setup reception tables"
        ],
        taskDetails: [
            "<strong>Reception Setup:</strong> Place table number, guest name cards and gifts according to seating plan<br><strong>Vendor:</strong> Beaumonde on the Point<br><strong>Contact:</strong> 0892188088"
        ]
    },

    "Des": {
        role: "Function Manager (Beaumonde on the Point)",
        summary: "Manages venue services and food service during reception - provides items to coordinators",
        tasks: [
            "5:00pm - Provide items to Jenny Sophian",
            "6:15pm - Serve canapes",
            "6:30pm - Soft drink package commence",
            "7:20pm - Serve entree",
            "8:00pm - Serve main course", 
            "9:15pm - Serve dessert",
            "9:15pm - Serve wedding cake"
        ],
        taskDetails: [
            "<strong>Items to provide to Jenny Sophian:</strong><br>• Welcome Sign<br>• Blue Flower Stand<br>• Gifts for Pastors and Parents<br><strong>Note:</strong> Pass gifts to Angela Fong after Bridal Party Entry",
            "<strong>Service:</strong> Serve canapes during pre-reception period<br><strong>Venue:</strong> Beaumonde on the Point<br><strong>Timing:</strong> Pre-dinner service",
            "<strong>Package Service:</strong> Soft drink package commences<br><strong>Duration:</strong> Water will be provided to end of event<br><strong>Venue:</strong> Beaumonde on the Point",
            "<strong>Food Service:</strong> Serve entree<br><strong>Special Note:</strong> Wait until prayer finishes<br><strong>Venue:</strong> Beaumonde on the Point",
            "<strong>Food Service:</strong> Serve main course<br><strong>Coordination:</strong> During guest photo taking<br><strong>Venue:</strong> Beaumonde on the Point",
            "<strong>Dessert Service:</strong> Serve dessert to all guests<br><strong>Venue:</strong> Beaumonde on the Point<br><strong>Timing:</strong> After speeches",
            "<strong>Cake Service:</strong> Serve wedding cake<br><strong>Distribution:</strong> Table 9 only initially<br><strong>Extra Cake:</strong> Cut by vendor and leave on side table for guests<br><strong>Venue:</strong> Beaumonde on the Point"
        ]
    },

    "Rio Yapari": {
        role: "Photographer (Allseasons Photo)",
        summary: "Captures ceremony and reception moments, coordinates photo sessions",
        tasks: [
            "4:00pm - Photo taking",
            "4:30pm - Take outdoor wedding photos"
        ],
        taskDetails: [
            "MC announce photo taking order. Order: Family, pastors, friends and colleagues (Ping side first), and all Aflamers",
            "Take outdoor wedding photos with bridal party"
        ]
    },

    "Jefferson Karim": {
        role: "Pastor Transportation",
        summary: "Manages pastor transportation to and from events",
        tasks: [
            "6:45pm - Pastors arrive dinner reception",
            "10:10pm - Drop pastors home"
        ],
        taskDetails: [
            "Ensure pastors arrive at dinner reception",
            "Transport pastors home after dinner reception"
        ]
    },

    // Additional ceremony staff
    "Ps.Jimmy Goh": {
        role: "Marriage Celebrant",
        tasks: [
            "3:00pm - Marriage ceremony"
        ],
        taskDetails: [
            "Lead marriage ceremony: Marriage as defined by GOD, declaration of consent giving of the bride, praise and worship, pastors message, marriage blessing, marriage vow, rings exchange, prayers of blessing, signing of marriage certificates, holy communion, lighting of unity candles, announcement of marriage. Marriage certificate witnesses: Andrew & Vianny Chan. Unity‑candle attendant: Roger Chuang"
        ]
    },

    "Ps.Evelin Goh": {
        role: "Marriage Celebrant", 
        tasks: [
            "3:00pm - Marriage ceremony"
        ],
        taskDetails: [
            "Co-lead marriage ceremony with Ps.Jimmy Goh"
        ]
    },

    "Andrew Chan": {
        role: "Marriage Certificate Witness",
        tasks: [
            "3:00pm - Marriage certificate witness"
        ],
        taskDetails: [
            "Marriage certificate witness with Vianny Chan during ceremony"
        ]
    },

    "Vianny Chan": {
        role: "Marriage Certificate Witness",
        tasks: [
            "3:00pm - Marriage certificate witness"
        ],
        taskDetails: [
            "Marriage certificate witness with Andrew Chan during ceremony"
        ]
    }
};

// Google Docs URLs (updated for V2.1)
const documentUrls = {
    runsheet: "https://docs.google.com/document/d/1bjHkp6Isy0Y5vtlA9ffmskrmnI79rLGREyzwOXy4Kh0/edit?usp=sharing",
    roles: "https://docs.google.com/document/d/1hBAxPbhZWKcIRaPYr3uxY4y1DMpFcDR4I1d7UgwlMXs/edit?usp=sharing"
};

// Group tasks by date function
function groupTasksByDate(tasks, taskDetails) {
    const groups = {
        'friday': { label: 'Friday 19th September 2025', tasks: [] },
        'saturday': { label: 'Saturday 20th September 2025', tasks: [] },
        'sunday': { label: 'Sunday 21st September 2025', tasks: [] }
    };
    
    tasks.forEach((task, index) => {
        const taskItem = {
            task: task,
            detail: taskDetails && taskDetails[index] ? taskDetails[index] : null
        };
        
        // Categorize by task content
        const taskLower = task.toLowerCase();
        if (taskLower.includes('friday') || 
            taskLower.includes('pick up mannequin') || 
            taskLower.includes('drop off reception items')) {
            groups.friday.tasks.push(taskItem);
        } else if (taskLower.includes('saturday') || 
                   taskLower.includes('sanctuary decoration') ||
                   taskLower.includes('pick up 2 easels') ||
                   taskLower.includes('pick up tiffany chairs') ||
                   taskLower.includes('drop off holy matrimony')) {
            groups.saturday.tasks.push(taskItem);
        } else {
            // Default to Sunday (wedding day) - all ceremony and reception tasks
            groups.sunday.tasks.push(taskItem);
        }
    });
    
    // Remove empty groups
    Object.keys(groups).forEach(key => {
        if (groups[key].tasks.length === 0) {
            delete groups[key];
        }
    });
    
    return groups;
}

// Simple, clean implementation
let searchInput, searchBtn, clearBtn, dropdown, results, noMatch, suggestions;
let helperNameDisplay, roleDisplay, summaryDisplay, tasksList;

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    clearBtn = document.getElementById('clearBtn');
    dropdown = document.getElementById('dropdown');
    results = document.getElementById('results');
    noMatch = document.getElementById('noMatch');
    suggestions = document.getElementById('suggestions');
    
    // Get display elements
    helperNameDisplay = document.getElementById('helperNameDisplay');
    roleDisplay = document.getElementById('roleDisplay');
    summaryDisplay = document.getElementById('summaryDisplay');
    tasksList = document.getElementById('tasksList');
    
    // Bind events
    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('keydown', handleKeydown);
    searchBtn.addEventListener('click', handleSearch);
    clearBtn.addEventListener('click', clearAll);
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            hideDropdown();
        }
    });
});

// Handle input changes
function handleInput() {
    const query = searchInput.value.trim();
    hideResults();
    
    if (query.length < 2) {
        hideDropdown();
        return;
    }
    
    showDropdown(query);
}

// Handle keydown events
function handleKeydown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
    }
}

// Handle search button click or Enter key
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    hideDropdown();
    
    // Find exact or partial match
    const match = findHelper(query);
    
    if (match) {
        showHelper(match.name, match.data);
    } else {
        showNoMatch(query);
    }
}

// Show dropdown with matching names
function showDropdown(query) {
    const matches = findMatches(query);
    
    if (matches.length === 0) {
        hideDropdown();
        return;
    }
    
    dropdown.innerHTML = '';
    
    matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'search-result';
        div.innerHTML = `
            <div class="result-name">${match.name}</div>
            <div class="result-details">${match.data.role}</div>
        `;
        div.addEventListener('click', () => {
            searchInput.value = match.name;
            hideDropdown();
            showHelper(match.name, match.data);
        });
        dropdown.appendChild(div);
    });
    
    dropdown.style.display = 'block';
}

// Hide dropdown
function hideDropdown() {
    dropdown.style.display = 'none';
}

// Show helper information
function showHelper(name, helper) {
    hideResults();
    
    // Populate display elements
    helperNameDisplay.textContent = `Hello ${name}!`;
    roleDisplay.textContent = helper.role;
    
    if (helper.summary) {
        summaryDisplay.textContent = helper.summary;
        summaryDisplay.style.display = 'block';
    } else {
        summaryDisplay.style.display = 'none';
    }
    
    // Clear and populate tasks grouped by date
    tasksList.innerHTML = '';
    
    // Group tasks by date
    const tasksByDate = groupTasksByDate(helper.tasks, helper.taskDetails);
    
    // Create date groups
    Object.keys(tasksByDate).forEach(dateKey => {
        const dateGroup = tasksByDate[dateKey];
        
        // Create date header
        const dateHeader = document.createElement('li');
        dateHeader.className = 'date-header';
        
        // Add special note for Sunday tasks
        if (dateKey === 'sunday') {
            dateHeader.innerHTML = `
                <h4>${dateGroup.label}</h4>
                <p class="date-note">All times below refer to Sunday 21st September 2025</p>
            `;
        } else {
            dateHeader.innerHTML = `<h4>${dateGroup.label}</h4>`;
        }
        
        tasksList.appendChild(dateHeader);
        
        // Add tasks for this date
        dateGroup.tasks.forEach(taskItem => {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            const taskMain = document.createElement('div');
            taskMain.className = 'task-main';
            taskMain.textContent = taskItem.task;
            li.appendChild(taskMain);
            
            // Add task details if available
            if (taskItem.detail) {
                const taskDetail = document.createElement('div');
                taskDetail.className = 'task-detail hidden';
                taskDetail.innerHTML = taskItem.detail;
                li.appendChild(taskDetail);
                
                const expandIcon = document.createElement('div');
                expandIcon.className = 'task-expand-icon';
                expandIcon.textContent = '▼';
                li.appendChild(expandIcon);
                
                li.classList.add('clickable');
                li.addEventListener('click', () => toggleTaskDetail(li));
            }
            
            tasksList.appendChild(li);
        });
    });
    
    // Show results
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth' });
    
    // Clear search input
    searchInput.value = '';
}

// Show no match message
function showNoMatch(query) {
    hideResults();
    
    const possibleMatches = findMatches(query, true);
    
    suggestions.innerHTML = '';
    
    if (possibleMatches.length > 0) {
        const p = document.createElement('p');
        p.textContent = 'Did you mean one of these?';
        suggestions.appendChild(p);
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.style.marginTop = '15px';
        
        possibleMatches.slice(0, 5).forEach(match => {
            const btn = document.createElement('button');
            btn.textContent = match.name;
            btn.className = 'doc-btn';
            btn.style.margin = '5px';
            btn.addEventListener('click', () => {
                showHelper(match.name, match.data);
            });
            buttonsDiv.appendChild(btn);
        });
        
        suggestions.appendChild(buttonsDiv);
    }
    
    noMatch.classList.remove('hidden');
    noMatch.scrollIntoView({ behavior: 'smooth' });
}

// Hide all results
function hideResults() {
    results.classList.add('hidden');
    noMatch.classList.add('hidden');
}

// Clear all and reset
function clearAll() {
    searchInput.value = '';
    hideDropdown();
    hideResults();
    searchInput.focus();
}

// Find helper by name
function findHelper(query) {
    const lowerQuery = query.toLowerCase();
    
    // Try exact match first
    for (const [name, data] of Object.entries(weddingHelpers)) {
        if (name.toLowerCase() === lowerQuery) {
            return { name, data };
        }
    }
    
    // Try partial match
    for (const [name, data] of Object.entries(weddingHelpers)) {
        if (name.toLowerCase().includes(lowerQuery)) {
            return { name, data };
        }
    }
    
    return null;
}

// Find matching names for dropdown
function findMatches(query, allowAll = false) {
    const lowerQuery = query.toLowerCase();
    const matches = [];
    
    for (const [name, data] of Object.entries(weddingHelpers)) {
        if (allowAll || name.toLowerCase().includes(lowerQuery)) {
            matches.push({ name, data });
        }
    }
    
    return matches.slice(0, 8);
}

// Toggle task detail display
function toggleTaskDetail(taskElement) {
    const detail = taskElement.querySelector('.task-detail');
    const icon = taskElement.querySelector('.task-expand-icon');
    
    if (detail && icon) {
        const isHidden = detail.classList.contains('hidden');
        
        if (isHidden) {
            detail.classList.remove('hidden');
            icon.textContent = '▲';
        } else {
            detail.classList.add('hidden');
            icon.textContent = '▼';
        }
        
        taskElement.classList.toggle('expanded');
    }
}

// Open document function
function openDocument(docType) {
    const url = documentUrls[docType];
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}