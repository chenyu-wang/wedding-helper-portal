// Chenyu & Ping Wedding Helper Portal JavaScript
// Built from Run Sheet V2.0-6

// Bridal Party Mapping
const bridalParty = {
    bride: "Ping Li",
    groom: "Chenyu Wang",
    maidOfHonour: "Sabrina Zhou",
    bestMan: "Roger Chuang",
    bridesmaids: ["Monica Yaw", "Angela Fong"],
    groomsmen: ["Ernest Wijaya", "Lester Aguda"]
};

// Wedding Helper Data based on the official run sheet V2.0-6
const weddingHelpers = {
    // Bridal Party
    "Ping Li": {
        role: "Bride",
        summary: "Participates in ceremony, reception activities, and thanks guests throughout the day",
        tasks: [
            "9:00am - Bridesmaids arrive Westin Perth",
            "10:30am - Mums arrive Westin Perth",
            "2:30pm - Bridal cars leave Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "4:15pm - Bride and groom thank and shake hands with all guests",
            "6:15pm - Bride makeup touchup",
            "7:10pm - Bridal party in position for dinner reception",
            "8:45pm - Bride and groom cut cake",
            "9:15pm - Bride and groom speech",
            "9:30pm - First dance",
            "10:00pm - Thanking guests"
        ],
        taskDetails: [
            "Make up starts for bride and bridesmaids at Westin Perth. Makeup Artist: Yuko 0430239540",
            "Parents arrive: Lijiang Yu (Toyota RAV4 White 1HUQ923) and Qiuzhi Chen (Lexus RX350 Black P1NGL)",
            "From Hotel to Cana. Tze: Ping & Sabrina, Senjaya: Mums, Monica and Angela",
            "Work with Like Johanes and Reynard Chan. Angela Fong, Monica Yaw, Sabrina Zhou, Ping Li with her father",
            "After ceremony photo taking, thank all guests before leaving for reception",
            "Bridal salon at dinner venue. Yuko 0430239540 for makeup touchup before reception",
            "MC to announce bridal party entrance. Daniel Gunawan coordinates with entrance music",
            "Cake cutting ceremony with Chenyu. Coordinate with reception staff for distribution",
            "Bride and groom speech together. Coordinate timing with MC Daniel Gunawan",
            "First dance with Chenyu. Sound system coordinated by Lyndon Win and Hendra Wijaya",
            "Final thank you to all guests before reception ends"
        ]
    },

    "Chenyu Wang": {
        role: "Groom",
        summary: "Participates in ceremony, reception activities, and thanks guests with bride",
        tasks: [
            "2:30pm - Groom and groomsmen in position",
            "4:15pm - Bride and groom thank and shake hands with all guests",
            "7:10pm - Bridal party in position for dinner reception",
            "8:45pm - Bride and groom cut cake",
            "9:15pm - Bride and groom speech",
            "9:30pm - First dance",
            "10:00pm - Thanking guests"
        ],
        taskDetails: [
            "Groom and groomsmen (Roger Chuang, Ernest Wijaya, Lester Aguda) in position at sanctuary",
            "After ceremony photo taking, thank all guests with Ping before leaving for reception",
            "MC to announce bridal party entrance. Follow Jenny Sophian's coordination",
            "Cut wedding cake with Ping. Work with bridal party for distribution to tables",
            "Bride and groom speech with Ping. MC Daniel Gunawan coordinates timing",
            "First dance with Ping. Lyndon Win coordinates music, Hendra Wijaya assists with sound",
            "Thank all guests before reception ends"
        ]
    },

    "Sabrina Zhou": {
        role: "Maid of Honour",
        summary: "Coordinates bridal party, gives speech, manages post-reception cleanup",
        tasks: [
            "9:00am - Bridesmaids arrive Westin Perth",
            "2:30pm - Bridal cars leave Westin Perth", 
            "2:55pm - Bridal cars arrive Cana",
            "2:55pm - Bride and bridesmaid in position",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "Makeup starts with other bridesmaids. Makeup Artist: Yuko 0430239540",
            "Tze drives Ping & Sabrina from Westin to Cana House",
            "Sabrina will contact Like once cars arrive. Like will inform when to come into Cana House",
            "Like Johanes and Reynard Chan coordinate entrance: Angela, Monica, Sabrina, then Ping with father",
            "Jenny Sophian coordinates bridal party entrance at dinner reception",
            "Deliver bridesmaids speech. Coordinate with MC Daniel Gunawan for timing",
            "Bring extra gifts, table numbers, welcome sign, and photo canvas to bridal salon"
        ]
    },

    "Roger Chuang": {
        role: "Best Man",
        summary: "Picks up ceremony items, gives speech, coordinates wedding games",
        tasks: [
            "Saturday morning - Pick up matrimony pillars",
            "2:30pm - Groom and groomsmen in position",
            "8:30pm - Groomsmen speech(es) and toast",
            "9:15pm - Wedding game",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "TMI Studio, Joyce Jiao 0433 555 567, Address: 2/14 Shields Cr, Booragoon. Pick up 4 matrimony pillars and drop at Cana House",
            "Stand with Chenyu, Ernest, and Lester at sanctuary. Coordinate with Like Johanes",
            "Deliver groomsmen speech and lead toast. Coordinate with MC Daniel Gunawan",
            "Lead wedding game coordination for bride and groom entertainment during dessert service",
            "Help with post-dinner cleanup and organization"
        ]
    },

    "Monica Yaw": {
        role: "Bridesmaid",
        summary: "Picks up easels, participates in ceremony and reception activities",
        tasks: [
            "Saturday - Pick up 3 easels",
            "9:00am - Bridesmaids arrive Westin Perth",
            "2:30pm - Bridal cars leave Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "Anne Ibanez 0416596169, Address: Harrisdale. 1 to be dropped off at Cana House, 2 to be dropped off at Beaumonde on the Point",
            "Makeup starts with other bridesmaids. Makeup Artist: Yuko 0430239540",
            "Senjaya drives mums (Lijiang Yu & Qiuzhi Chen), Monica and Angela from Westin to Cana",
            "Like Johanes and Reynard Chan coordinate entrance: Angela, Monica, Sabrina, then Ping with father",
            "Jenny Sophian coordinates bridal party entrance at dinner reception",
            "Deliver bridesmaids speech with other bridesmaids. MC Daniel Gunawan coordinates timing",
            "Assist with post-dinner cleanup and wedding items organization"
        ]
    },

    "Angela Fong": {
        role: "Bridesmaid",
        summary: "Manages gift collection and distribution, participates in ceremony and reception",
        tasks: [
            "9:00am - Bridesmaids arrive Westin Perth",
            "2:30pm - Bridal cars leave Westin Perth",
            "2:55pm - Bride and bridesmaid in position",
            "5:00pm - Setup welcome sign & wedding photo easel",
            "7:10pm - Bridal party in position",
            "7:45pm - Bridesmaids speech(es)",
            "9:15pm - MC announce presentation of gifts",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "Makeup starts with other bridesmaids. Makeup Artist: Yuko 0430239540",
            "Senjaya drives mums (Lijiang Yu & Qiuzhi Chen), Monica and Angela from Westin to Cana",
            "Like Johanes and Reynard Chan coordinate entrance: Angela enters first, then Monica, Sabrina, Ping",
            "Collect welcome sign from BOTP. Collect gifts for pastors & parents from BOTP",
            "Jenny Sophian coordinates bridal party entrance at dinner reception",
            "Deliver bridesmaids speech with other bridesmaids. MC Daniel Gunawan coordinates timing",
            "Angela Fong pass the gifts to bride & groom during MC announcement",
            "Assist with post-dinner cleanup and wedding items organization"
        ]
    },

    "Ernest Wijaya": {
        role: "Groomsman",
        summary: "Coordinates gift and item transport, participates in ceremony and reception",
        tasks: [
            "Friday 5:30-6:30pm - Pick up mannequin",
            "Saturday - Drop off holy matrimony gifts",
            "Saturday - Drop off reception gifts and items",
            "2:30pm - Groom and groomsmen in position",
            "8:30pm - Groomsmen speech(es) and toast",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "Josephine 0451993108, Address: Como. Drop off at Ping's House",
            "IC with Lester Aguda. From Chenyu's Place to Cana House",
            "IC with Lester Aguda. From Chenyu's Place to Beaumonde on the Point. Nadine Wellinger 0892188088. Drop to vendor office second floor: Table Numbers, Guest Name Cards, Reception Gifts, Reception Deco box, Welcome sign, Seating plan, Gifts for parents + pastors",
            "Stand with Chenyu, Roger, and Lester at sanctuary. Coordinate with Like Johanes",
            "Deliver groomsmen speech with Roger and Lester. MC Daniel Gunawan coordinates timing",
            "Assist with post-dinner cleanup and organization"
        ]
    },

    "Lester Aguda": {
        role: "Groomsman",
        summary: "Assists with gift transport, participates in ceremony and reception activities",
        tasks: [
            "Saturday - Drop off holy matrimony gifts",
            "Saturday - Drop off reception gifts and items",
            "2:30pm - Groom and groomsmen in position",
            "8:30pm - Groomsmen speech(es) and toast",
            "10:10pm - Post-dinner tidy"
        ],
        taskDetails: [
            "With Ernest Wijaya. From Chenyu's Place to Cana House",
            "With Ernest Wijaya. From Chenyu's Place to Beaumonde on the Point. Nadine Wellinger 0892188088",
            "Stand with Chenyu, Roger, and Ernest at sanctuary. Coordinate with Like Johanes",
            "Deliver groomsmen speech with Roger and Ernest. MC Daniel Gunawan coordinates timing",
            "Assist with post-dinner cleanup and organization"
        ]
    },

    // Holy Matrimony Coordinators
    "Like Johanes": {
        role: "Holy Matrimony Coordinator (IC)",
        summary: "Manages bridal party entrance, timing, and ceremony logistics",
        tasks: [
            "2:55pm - Bridal cars arrive Cana",
            "2:55pm - Ring bearer and flower girl in position",
            "2:55pm - Bride and bridesmaid in position"
        ],
        taskDetails: [
            "Sabrina will contact Like once cars arrive. Like will info Sabrina when to come in to Cana House",
            "Ring Bearer: Harrison Clark, Flower Girl: Grace Win. Coordinate with Reynard Chan",
            "Coordinate with Reynard Chan. Angela Fong, Monica Yaw, Sabrina Zhou, Ping Li with her father"
        ]
    },

    "Marini Angouw": {
        role: "Holy Matrimony Coordinator",
        summary: "Supports Like Johanes with ceremony coordination",
        tasks: [
            "Assist Like Johanes with holy matrimony coordination"
        ],
        taskDetails: [
            "Support Like Johanes with all ceremony coordination and logistics"
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
            "MC in position at sanctuary for ceremony",
            "Coordinate Ring Bearer: Harrison Clark, Flower Girl: Grace Win with Like Johanes",
            "Coordinate bride and bridesmaid entrance with Like Johanes",
            "Lead ceremony proceedings including announcement start, introduce marriage celebrant/bridegroom and groomsmen, bridesmaids entrance, ring bearer entrance, flower girl entrance, bride entrance"
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
            "Worship team in position at sanctuary",
            "Be ready for praise and worship when ceremony begins",
            "Lead praise and worship during holy matrimony ceremony"
        ]
    },

    // Technical Team
    "Lyndon Win": {
        role: "Sound System (IC)",
        summary: "Manages all audio/visual systems for ceremony and reception",
        tasks: [
            "Setup sound system",
            "Setup projection and TVs",
            "6:15pm - Play background music",
            "7:10pm - Play entrance songs",
            "9:30pm - Sound system play first dance song",
            "9:40pm - Sound system play dance song list",
            "10:10pm - Packup and drop sound system back to Cana House"
        ],
        taskDetails: [
            "Setup sound system at ceremony and dinner reception. Include 4 translation sets for both sides of parents",
            "Chenyu provides PPT slides for projection setup",
            "Play background music during pre-drinks and canapes service",
            "Play entrance songs for bridesmaids and groomsmen, bride and groom. Coordinate with Daniel Gunawan",
            "Play first dance song for bride and groom. Coordinate with MC announcements",
            "Play dance song list for general dancing after MC announces dance floor open",
            "Packup with Hendra and groomsmen, return sound system to Cana House"
        ]
    },

    "Hendra Wijaya": {
        role: "Sound System Assistant",
        summary: "Assists with audio setup and music coordination",
        tasks: [
            "Setup sound system",
            "9:30pm - Sound system play first dance song",
            "10:10pm - Packup and drop sound system back to Cana House"
        ],
        taskDetails: [
            "Assist Lyndon Win with sound system setup at ceremony and reception",
            "Assist with first dance music coordination",
            "Help packup sound system and return to Cana House with groomsmen"
        ]
    },

    "Sonia Suputri": {
        role: "Projection Coordinator",
        summary: "Manages projection screens and ceremony slides",
        tasks: [
            "Setup projection and TVs",
            "2:20pm - Play waiting songs & slides"
        ],
        taskDetails: [
            "Setup projection and TVs. Chenyu provides PPT slides",
            "Play waiting songs and slides before ceremony begins"
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
            "Translator in position for ceremony",
            "Provide translation services during holy matrimony ceremony"
        ]
    },

    // Car Park Ushers
    "Didier Michel": {
        role: "Carpark Ushers (IC)",
        summary: "Manages parking team and reserves spaces for VIP vehicles",
        tasks: [
            "Carpark ushers in position",
            "Reserve 5 parking bays"
        ],
        taskDetails: [
            "Coordinate carpark team: Rudy Rusli, Rudy Suwarno, Kocdal Antipas, Tomas Aguda, Benny Suwarno, Harry Chen",
            "Parents Cars: White Toyota RAV4 Rego: 1HUQ923, Black Lexus RX350 Rego: P1NGL. Bridal Cars: White Tesla Model Y Rego: 1IOD288, Grey Mitsubishi Outlander Rego:1GYL921. Photographer's Car: White Honda Accord Rego: 1EUB613"
        ]
    },

    "Rudy Rusli": {
        role: "Carpark Usher",
        summary: "Helps direct guests to parking spaces during ceremony",
        tasks: ["Carpark ushers in position"],
        taskDetails: ["Assist Didier Michel with carpark coordination and guest parking directions"]
    },

    "Rudy Suwarno": {
        role: "Carpark Usher", 
        summary: "Helps direct guests to parking spaces during ceremony",
        tasks: ["Carpark ushers in position"],
        taskDetails: ["Assist Didier Michel with carpark coordination and guest parking directions"]
    },

    "Kocdal Antipas": {
        role: "Carpark Usher",
        summary: "Helps with parking coordination during ceremony",
        tasks: ["Carpark ushers in position"],
        taskDetails: ["Assist Didier Michel with carpark coordination"]
    },

    "Tomas Aguda": {
        role: "Carpark Usher",
        summary: "Helps with parking coordination during ceremony",
        tasks: ["Carpark ushers in position"],
        taskDetails: ["Assist Didier Michel with carpark coordination"]
    },

    "Benny Suwarno": {
        role: "Carpark Usher & Grace Prayer",
        summary: "Helps with parking coordination and leads dinner prayer",
        tasks: [
            "Carpark ushers in position",
            "7:20pm - Grace prayer"
        ],
        taskDetails: [
            "Assist Didier Michel with carpark coordination",
            "Lead grace prayer at dinner reception. Wait for MC Daniel Gunawan's announcement"
        ]
    },

    "Harry Chen": {
        role: "Carpark Usher",
        summary: "Manages parking at ceremony and reception venues",
        tasks: [
            "Carpark ushers in position",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Assist Didier Michel with carpark coordination at ceremony",
            "Upstairs outside the lift at dinner reception with Alex Wei and Harry Li"
        ]
    },

    // Sanctuary Ushers and Setup
    "Priscilla Suwarno": {
        role: "Sanctuary Ushers (IC)",
        summary: "Manages guest seating and reception setup verification",
        tasks: [
            "2:20pm - Sanctuary ushers in position",
            "2:45pm - Guests to be seated",
            "5:00pm - Check reception setup",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "Sanctuary ushers team: IeChi Suen, Jacquelyn Chong, William Yong, Kok Yee Wee",
            "Ensure all guests are seated before ceremony begins",
            "Guest names & guest gifts are setup according to the seating plan map",
            "Dinner reception ushers coordination"
        ]
    },

    "IeChi Suen": {
        role: "Sanctuary Usher & Decoration",
        summary: "Manages sanctuary decorations and guest seating",
        tasks: [
            "Saturday - Sanctuary decoration",
            "Signing table & touch up",
            "2:20pm - Sanctuary ushers in position",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "Saturday decoration with Leena Chai, Natalie Tan. Stage background, staircase, sanctuary chairs, matrimony pillars",
            "Setup signing table, touch up Saturday deco with Natalie Tan and Priscilla Suwano",
            "Sanctuary usher duties during ceremony",
            "Dinner reception usher duties"
        ]
    },

    "Jacquelyn Chong": {
        role: "Sanctuary Usher",
        tasks: [
            "2:20pm - Sanctuary ushers in position",
            "6:00pm - Dinner reception ushers in position"
        ],
        taskDetails: [
            "Sanctuary usher duties during ceremony",
            "Jacquelyn leads pastors and parents to seats at dinner reception"
        ]
    },

    "William Yong": {
        role: "Sanctuary Usher & Setup",
        summary: "Manages ceremony setup and reception item transport",
        tasks: [
            "Setup stage tables & chairs",
            "2:20pm - Sanctuary ushers in position",
            "4:30pm - Transport items to dinner reception",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Setup signing table, candle table, communion table & Tiffany chairs (2 for communion, 12 front row) with Kok Yee Wee",
            "Sanctuary usher duties during ceremony",
            "William & Joanne: Photo canvas easel x 3 and reception decorations",
            "At the front with Kok Yee Wee for dinner reception carpark duties"
        ]
    },

    "Kok Yee Wee": {
        role: "Sanctuary Usher & Setup",
        summary: "Assists with ceremony setup and chairs transport",
        tasks: [
            "Setup stage tables & chairs", 
            "2:20pm - Sanctuary ushers in position",
            "4:30pm - Transport items to dinner reception",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Setup signing table, candle table, communion table & Tiffany chairs with William Yong",
            "Sanctuary usher duties during ceremony", 
            "Wee: Flower pillars x 4 to dinner reception",
            "IC at the front with William for dinner reception carpark duties"
        ]
    },

    "Ivana Win": {
        role: "Unity Candle & Communion Setup",
        summary: "Prepares unity candle and communion elements",
        tasks: [
            "Setup unity candle and communion"
        ],
        taskDetails: [
            "Bride will provide candles & holders. Ivana Win will bring communion bread"
        ]
    },

    // Transport Team
    "Tze Ong": {
        role: "Bridal Cars (IC)",
        summary: "Drives bride and manages all wedding party transportation",
        tasks: [
            "2:00pm - Bridal cars leaves Cana House",
            "2:30pm - Bridal cars leaves Westin Perth",
            "4:30pm - Bride, groom and bridal party leave Cana",
            "6:00pm - Bridal party cars arrive dinner reception"
        ],
        taskDetails: [
            "Coordinate bridal cars departure from Cana House for photo and reception venue",
            "From Hotel to Cana. Tze: Ping & Sabrina, Senjaya: Mums, Monica and Angela",
            "From Cana to phototaking and reception. Tze: Bride & Groom, Senjaya: Bridal Party",
            "Tze: Bride & Groom, Senjaya: Bridal Party arrive at dinner reception"
        ]
    },

    "Senjaya Tresna": {
        role: "Bridal Cars Driver",
        summary: "Drives parents and bridesmaids between venues",
        tasks: [
            "2:30pm - Bridal cars leaves Westin Perth",
            "4:30pm - Bride, groom and bridal party leave Cana",  
            "6:00pm - Bridal party cars arrive dinner reception"
        ],
        taskDetails: [
            "Senjaya: Mums, Monica and Angela from Westin to Cana",
            "Senjaya: Bridal Party from Cana to phototaking and reception",
            "Senjaya drives bridal party to dinner reception"
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
            "Saturday decoration IC. Stage background, staircase, sanctuary chairs, matrimony pillars. Work with IeChi Suen, Natalie Tan"
        ]
    },

    "Natalie Tan": {
        role: "Decoration & Flowers",
        summary: "Manages ceremony decorations and flower arrangements",
        tasks: [
            "Saturday - Sanctuary decoration",
            "Pick up bouquet & buttonhole", 
            "Signing table & touch up"
        ],
        taskDetails: [
            "Saturday decoration with Leena Chai and IeChi Suen",
            "Drop off at photocopy room. Bridal bouquet x 1, Groom's buttonhole x 1. Chatsworth Flowers, Jacqueline: 0400784248, Address: 96 Beaufort Street, Perth",
            "Setup signing table, touch up Saturday deco with IeChi Suen and Priscilla Suwano"
        ]
    },

    // Food Distribution and Coordination
    "Andrew Chan": {
        role: "Food Pickup & Photography Coordinator",
        summary: "Manages meal pickup and coordinates with photography team",
        tasks: [
            "Pick up lunch for Aflamers",
            "Photographer and videographer briefing"
        ],
        taskDetails: [
            "Drop off at MC side. Pork Bánh Mì x 100, Chicken Bánh Mì x 100. Ben Thanh Lunch Bar, Contact: 0434589117, Address: 4/73 Honeywell Blvd, Mirrabooka",
            "Vendor: Allseasons Photo, Rio Yapari 0434150762. 1 photographer + 2 videographers"
        ]
    },

    "Dwi Yoehanes": {
        role: "Food Distributing (IC)",
        summary: "Manages distribution of meals to all wedding attendees",
        tasks: [
            "Food distributing to all Aflamers"
        ],
        taskDetails: [
            "One Bánh Mì per person, Half Bánh Mì for children in Sunday School, No food for children under 3 years old. Coordinate with Helen Cheong and Lily Gao"
        ]
    },

    "Helen Cheong": {
        role: "Food Distribution Assistant",
        tasks: [
            "Food distributing to all Aflamers"
        ],
        taskDetails: [
            "Assist Dwi Yoehanes with food distribution to all Aflamers"
        ]
    },

    "Lily Gao": {
        role: "Food Distribution Assistant & Gift Distribution",
        summary: "Assists with meal distribution and leads guest gift distribution",
        tasks: [
            "Food distributing to all Aflamers",
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "Assist Dwi Yoehanes with food distribution",
            "IC for gift distribution. One gift per person. Coordinate with George Yuan and Julia Schisas"
        ]
    },

    "George Yuan": {
        role: "Food & Gift Distribution",
        tasks: [
            "Order and pickup food for pastors",
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "Stephanie orders, George picks up food for pastors",
            "George: Set up 2 tables, including tablecloths. George: Flower pillars x 4. Assist with gift distribution"
        ]
    },

    "Julia Schisas": {
        role: "Gift Distribution",
        tasks: [
            "4:30pm - Distribute gifts to all guests"
        ],
        taskDetails: [
            "1 Gift per person. Assist Lily Gao and George Yuan with gift distribution"
        ]
    },

    "Stephanie Kho": {
        role: "Food Coordinator & Documents",
        tasks: [
            "Order and pickup food for pastors",
            "10:10pm - Check belongings"
        ],
        taskDetails: [
            "Order food: Stephanie, Pick up: George Yuan",
            "Check belongings after dinner reception"
        ]
    },

    // Reception Coordinators
    "Jenny Sophian": {
        role: "Reception Coordinator (IC)",
        summary: "Manages reception setup, guest flow, and bridal party coordination",
        tasks: [
            "5:00pm - Setup welcome sign & wedding photo easel",
            "6:45pm - Ball room opens and guest entry",
            "7:10pm - Bridal party in position",
            "8:00pm - Direct bride and groom to assigned table for photo taking"
        ],
        taskDetails: [
            "Setup wedding photo easel and collect welcome sign from BOTP",
            "Ball room opens for guest entry at dinner reception venue", 
            "Bridal party in position for entrance coordination",
            "Direct bride and groom to assigned tables for photo taking with guests. Work with Maria Gunawan"
        ]
    },

    "Maria Gunawan": {
        role: "Reception Coordinator",
        tasks: [
            "8:00pm - Direct bride and groom to assigned table for photo taking"
        ],
        taskDetails: [
            "Work with Jenny Sophian to direct bride and groom to assigned tables for photos with guests"
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
            "9:15pm - MC announce presentation of gifts",
            "9:15pm - MC announce dessert and wedding game",
            "9:30pm - MC announce first dance",
            "9:30pm - MC encourage married couples to dance",
            "9:40pm - MC announce dance floor open"
        ],
        taskDetails: [
            "Introduction, Emergency exits, Nearest toilets. Time keeping: MC",
            "Introduce bridesmaids and groomsmen, Announce entrance of bride and groom",
            "Announce grace prayer to be led by Benny Suwarno",
            "Announce bridesmaids speech(es) coordination",
            "Main course will be served, Bride and groom will take photos with guests",
            "Announce groomsmen speech(es) and toast",
            "Announce cake cutting ceremony",
            "Invite pastors to present marriage certificate",
            "Pastors, Parents - Angela Fong pass the gifts to bride & groom",
            "Dessert will be served, Wedding game for bride and groom",
            "Announce first dance for bride and groom",
            "Encourage married couples to dance",
            "Encourage all guests to participate in dancing"
        ]
    },

    "Joanne Yeung": {
        role: "Reception Setup & Coordination",
        tasks: [
            "Reception setup & deco",
            "4:30pm - Transport items to dinner reception",
            "6:00pm - Receptionists in position",
            "Guest register table setup & deco"
        ],
        taskDetails: [
            "Reception setup & decoration with Tiffany Tan",
            "William & Joanne: Photo canvas easel x 3 and reception decorations transport",
            "IC receptionists coordination. Joanne: Bring Angpao to Chenyu's mum. Pack away table deco after bride & groom entry",
            "Guest register table setup & decoration at dinner reception"
        ]
    },

    "Tiffany Tan": {
        role: "Reception Setup",
        tasks: [
            "2:00pm - Reception setup & deco",
            "6:00pm - Receptionists in position"
        ],
        taskDetails: [
            "IC reception setup & decoration. Setup wedding photo easel with Joanne Yeung",
            "Receptionists in position. Pack away table deco after bride & groom entry"
        ]
    },

    // Cleanup Team
    "Edward Guan": {
        role: "Cana House Clean-up (IC)",
        summary: "Manages post-ceremony cleanup and reception parking duties",
        tasks: [
            "5:00pm - Cana house clean-up",
            "6:00pm - Carpark ushers at dinner reception"
        ],
        taskDetails: [
            "Foyer, toilet, sanctuary only. Coordinate with JAG, JETS and YA4",
            "Next to lift with Peter Kartosudiro at dinner reception"
        ]
    },

    "Renaldy Chian": {
        role: "Cana House Lock-up",
        tasks: [
            "5:00pm - Cana house lock-up"
        ],
        taskDetails: [
            "Lock up Cana House after ceremony and cleanup completion"
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
            "2:30pm - Travel from Westin to Cana"
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
            "2:30pm - Travel from Westin to Cana"
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
            "Vendor: TMI Studio, Contact: 0433555567, Address: 2/14 Shields Cr, Booragoon. Matrimony pillars x 4, Tiffany chairs x 8, LOVE LED letters x 1, Centerpiece x 17. Bridal table setup: 1x1.5m Artificial flower arrangement, 2x1m LED Candles"
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
            "Prior to 5:00pm - Setup reception tables",
            "6:15pm - Serve pre-drinks and canapes",
            "7:20pm - Serve entree",
            "8:00pm - Serve main course", 
            "9:15pm - Serve dessert"
        ],
        taskDetails: [
            "Place table number, guest name cards and gifts according to seating plan. Vendor: Beaumonde on the Point, Contact: 0892188088",
            "RT (Beaumonde on the Point) serve pre-drinks and canapes",
            "RT (Beaumonde on the Point) serve entree (wait until prayer finishes)",
            "RT (Beaumonde on the Point) serve main course",
            "RT (Beaumonde on the Point) serve dessert"
        ]
    },

    "Rio Yapari": {
        role: "Photographer (Allseasons Photo)",
        summary: "Captures ceremony and reception moments, coordinates photo sessions",
        tasks: [
            "4:00pm - Photo taking",
            "5:00pm - Take outdoor wedding photos"
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
            "3:00pm - Marriage as defined by GOD, declaration of consent giving of the bride, pastors message, marriage blessing, marriage vow, rings exchange, prayers of blessing, signing of marriage certificates, holy communion, lighting of unity candles, announcement of marriage"
        ],
        taskDetails: [
            "Lead marriage ceremony with Ps.Evelin Goh. Marriage certificate witnesses: Andrew & Vianny Chan. Unity‑candle attendant: Roger Chuang"
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

// Google Docs URLs (updated for V2.0-6)
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
        ${helper.summary ? `<p style="color: #666; font-size: 16px; text-align: center; margin: 15px 0; font-style: italic;">${helper.summary}</p>` : ''}
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