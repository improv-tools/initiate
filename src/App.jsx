import React, { useState, useEffect, useRef } from "react";

export const LISTS = {
  Locations: [
  { text: "Mountain peak" }, { text: "Abandoned warehouse" }, { text: "Space station" }, { text: "Underground bunker" },
  { text: "Rainforest" }, { text: "Crowded marketplace" }, { text: "Ancient temple" }, { text: "Subway station" },
  { text: "Desert oasis" }, { text: "Haunted mansion" }, { text: "Secluded cabin" }, { text: "Pirate ship" },
  { text: "Castle dungeon" }, { text: "Train station" }, { text: "Sunny beach" }, { text: "Volcano crater" },
  { text: "Secret laboratory" }, { text: "Treehouse" }, { text: "Skyscraper rooftop" }, { text: "Foggy forest" },
  { text: "Small-town diner" }, { text: "Boarding school" }, { text: "Ice hotel" }, { text: "Amusement park" },
  { text: "Back alley" }, { text: "Underground cave" }, { text: "Ski resort" }, { text: "Luxury yacht" },
  { text: "Airport terminal" }, { text: "Sunken shipwreck" }, { text: "Remote village" }, { text: "Jungle ruins" },
  { text: "Riverside dock" }, { text: "Police station" }, { text: "Cozy bookstore" }, { text: "Mountain cabin" },
  { text: "High school gym" }, { text: "Science classroom" }, { text: "Fire station" }, { text: "Aquarium" },
  { text: "Opera house" }, { text: "Sports stadium" }, { text: "Petting zoo" }, { text: "Theme park ride" },
  { text: "Coffee shop" }, { text: "Art museum" }, { text: "Clock tower" }, { text: "Creepy carnival" },
  { text: "Old-fashioned train" }, { text: "TV studio" }, { text: "Music festival" }, { text: "Ice rink" },
  { text: "Farmland barn" }, { text: "Bank vault" }, { text: "Suburban backyard" }, { text: "Zoo" },
  { text: "Medieval castle" }, { text: "Roller skating rink" }, { text: "Tropical island" }, { text: "Desert highway" },
  { text: "Antique shop" }, { text: "Sunflower field" }, { text: "Campsite" }, { text: "Lighthouse" },
  { text: "Cemetery" }, { text: "Comic book store" }, { text: "Bakery" }, { text: "Bowling alley" },
  { text: "Secret garden" }, { text: "Fishing pier" }, { text: "Canyon overlook" }, { text: "Planetarium" },
  { text: "Monastery" }, { text: "Spaceship bridge" }, { text: "Mountain lake" }, { text: "Botanical garden" },
  { text: "Candy store" }, { text: "Futuristic city" }, { text: "Construction site" }, { text: "Wedding chapel" },
  { text: "Science fair" }, { text: "Candy factory" }, { text: "Hospital ER" }, { text: "Ice cream parlor" },
  { text: "City bus" }, { text: "Jail cell" }, { text: "Rooftop pool" }, { text: "Cattle ranch" },
  { text: "Community center" }, { text: "Video game arcade" }, { text: "Horse stable" }, { text: "Theater stage" },
  { text: "Pumpkin patch" }, { text: "Parade route" }, { text: "Waterfall" }, { text: "Golf course" },
  { text: "Retirement home" }, { text: "Science museum" }, { text: "Rock concert" }, { text: "Observatory" },
  { text: "Beach boardwalk" }, { text: "Mountain pass" }, { text: "Airplane hangar" }, { text: "Underground subway" },
  { text: "Planet surface" }, { text: "Bus terminal" }, { text: "Abandoned amusement park" }, { text: "Cliffside cave" },
  { text: "Industrial factory" }, { text: "Iceberg" }, { text: "Quaint village square" }, { text: "Harbor" },
  { text: "Shipyard" }, { text: "Train tunnel" }, { text: "Penthouse suite" }, { text: "Sunken ruin" },
  { text: "Rooftop greenhouse" }, { text: "Old mill" }, { text: "Alleyway" }, { text: "Marketplace bazaar" },
  { text: "Observatory tower" }, { text: "Deserted island" }, { text: "Mountain ridge" }, { text: "Secret passage" },
  { text: "Forest clearing" }, { text: "Jungle canopy" }, { text: "Abandoned mineshaft" }, { text: "Sandy dune" },
  { text: "Desolate tundra" }, { text: "Arctic research base" }, { text: "Flooded street" }, { text: "Misty swamp" },
  { text: "Volcanic island" }, { text: "Luxury hotel" }, { text: "Deep cave" }, { text: "Windmill" },
  { text: "Ghost town" }, { text: "Mountain trail" }, { text: "Lavender field" }, { text: "Pet shop" },
  { text: "Diving bell" }, { text: "Secret hideout" }, { text: "Summit lodge" }, { text: "Mansion attic" },
  { text: "Stone bridge" }, { text: "Cathedral" }, { text: "Monument plaza" }, { text: "Ice palace" },
  { text: "Swamp shack" }, { text: "Gothic chapel" }, { text: "Windy pier" }, { text: "Aquatic dome" },
  { text: "Labyrinth" }, { text: "Sunset beach" }, { text: "Fortress wall" }, { text: "Boardwalk arcade" },
  { text: "Floating market" }, { text: "Deep forest" }, { text: "Desert fort" }, { text: "River delta" },
  { text: "Crystal cave" }, { text: "Arboretum" }, { text: "Sunken plaza" }, { text: "Rainy rooftop" },
  { text: "Jungle outpost" }, { text: "Ruined castle" }, { text: "Metro station" }, { text: "City square" },
  { text: "Mountain meadow" }, { text: "Cliffside path" }, { text: "Coral reef" }, { text: "Hidden glen" },
  { text: "Bamboo grove" }, { text: "Dune sea" }, { text: "Vineyard" }, { text: "Sunset overlook" },
  { text: "Water tower" }, { text: "High-rise office" }, { text: "Science lab" }, { text: "Dockyard" },
  { text: "Sky bridge" }, { text: "Cave mouth" }, { text: "Old fort" }, { text: "City rooftop" },
  { text: "Urban plaza" }, { text: "Open prairie" }, { text: "Cypress swamp" }, { text: "Gas station" },
  { text: "Schoolyard" }, { text: "Forest path" }, { text: "Seaside dock" }, { text: "Wheat field" },
  { text: "Country lane" }, { text: "Downtown alley" }, { text: "Suburban street" }, { text: "Jungle trail" },
  { text: "Hidden waterfall" }, { text: "Cloud forest" }, { text: "Pier" }, { text: "Rooftop bar" },
  { text: "Moon base" }, { text: "Oil rig" }, { text: "Railway bridge" }, { text: "Shipwreck" },
  { text: "Ruined observatory" }, { text: "Underground river" }, { text: "Beachside pier" }, { text: "Mountain spring" },
  { text: "Desert cliff" }, { text: "Metro tunnel" }, { text: "Druid circle" }, { text: "Castle keep" },
  { text: "Sunken temple" }, { text: "Fishing village" }, { text: "Watchtower" }, { text: "Enchanted forest" },
  { text: "Marshland" }, { text: "Stone quarry" }, { text: "Sculpture garden" }, { text: "Gondola lift" },
  { text: "Harbor master’s office" }, { text: "Library basement" }, { text: "Pirate cove" }, { text: "Magic portal" },
  { text: "Fire lookout tower" }, { text: "Cargo hold" }, { text: "Frosty fjord" }, { text: "Safari camp" },
  { text: "Desert plateau" }, { text: "Sunken crypt" }, { text: "Salt flat" }, { text: "Apple orchard" },
  { text: "Ferry terminal" }, { text: "Bridge underpass" }, { text: "Cliffside monastery" }, { text: "Military base" },
  { text: "Ski lift" }, { text: "Abandoned silo" }, { text: "Sawmill" }, { text: "Graffiti tunnel" },
  { text: "Elevated train" }, { text: "Desert village" }, { text: "Hot air balloon" }, { text: "Haunted funhouse" },
  { text: "Science outpost" }, { text: "Solar farm" }, { text: "Frozen lake" }, { text: "Bison range" },
  { text: "Desert canyon" }, { text: "Salt mine" }, { text: "Old shipyard" }, { text: "Water reservoir" },
  { text: "Mausoleum" }, { text: "Greenhouse" }, { text: "Geyser field" }, { text: "Marina" },
  { text: "Fruit stand" }, { text: "Aqueduct" }, { text: "Terraced rice field" }, { text: "Maze garden" },
  { text: "Power station" }, { text: "Mountain pass lodge" }, { text: "Open-air theater" }, { text: "Moonlit clearing" },
  { text: "Helipad" }, { text: "Observation deck" }, { text: "Undersea habitat" }, { text: "Urban skatepark" },
  { text: "Public library" }, { text: "Chapel ruins" }, { text: "Forest fire lookout" }, { text: "Town square" },
  { text: "Marketplace stall" }, { text: "Shipping dock" }, { text: "Canal lock" }, { text: "Medieval village" },
  { text: "Victorian greenhouse" }, { text: "Racing circuit" }, { text: "Mangrove swamp" }, { text: "Parliament building" },
  { text: "Synagogue" }, { text: "Hidden lagoon" }, { text: "Crystal grotto" }, { text: "Wildflower meadow" },
  { text: "Train platform" }, { text: "Zoo aviary" }, { text: "Farmhouse kitchen" }, { text: "Sculpture hall" },
  { text: "Sunken courtyard" }, { text: "Cliff dwelling" }, { text: "Tunnel entrance" }, { text: "Ferris wheel" },
  { text: "Basement vault" }, { text: "Ship bridge" }, { text: "Lake pier" }, { text: "Floating island" },
  { text: "Concert hall" }, { text: "Ice cave" }, { text: "Brewery" }, { text: "Hydroelectric dam" },
  { text: "Mountain monastery" }, { text: "Antarctic station" }, { text: "Subterranean lake" }, { text: "Dinosaur dig site" },
  { text: "Vintage train car" }, { text: "Underground city" }, { text: "Tree nursery" }, { text: "City landfill" },
  { text: "Mine shaft" }, { text: "Solar observatory" }, { text: "Water park" }, { text: "Cabin in the woods" },
  { text: "Volcanic vent" }, { text: "Storm shelter" }, { text: "Farm silo" }, { text: "High school auditorium" },
  { text: "Casino" }, { text: "Festival ground" }, { text: "Carnival tent" }, { text: "Train graveyard" },
  { text: "Grain elevator" }, { text: "Observation balloon" }, { text: "Firehouse" }, { text: "Old city wall" },
  { text: "Winery cellar" }, { text: "Aquaponics farm" }, { text: "Wind farm" }, { text: "Jungle research lab" },
  { text: "Hilltop fort" }, { text: "Historic battlefield" }, { text: "Catacombs" }, { text: "Prison yard" },
  { text: "Motel parking lot" }, { text: "River barge" }, { text: "Old barn" }, { text: "Subway tunnel" },
  { text: "Magic library" }, { text: "Enchanted castle" }, { text: "Asteroid base" }, { text: "Biosphere dome" },
  { text: "Port authority" }, { text: "Fishing dock" }, { text: "Snowy hilltop" }, { text: "Quarry pit" },
  { text: "Hangar bay" }, { text: "Crater lake" }, { text: "Foggy cemetery" }, { text: "Bird sanctuary" },
  { text: "Playground" }, { text: "Cricket field" }, { text: "Deserted airport" }, { text: "Dune field" },
  { text: "Tropical lagoon" }, { text: "Sky lounge" }, { text: "Deep jungle" }, { text: "Observation post" },
  { text: "Marsh boardwalk" }, { text: "Farmers market" }, { text: "Water purification plant" }, { text: "Sunken plaza" }

  ],
   Occupations: [
     { text: "Firefighter" }, { text: "Teacher" }, { text: "Detective" }, { text: "Chef" }, { text: "Astronaut" },
  { text: "Painter" }, { text: "Librarian" }, { text: "Gardener" }, { text: "Mechanic" }, { text: "Pilot" },
  { text: "Scientist" }, { text: "Nurse" }, { text: "Magician" }, { text: "Photographer" }, { text: "Veterinarian" },
  { text: "Baker" }, { text: "Police officer" }, { text: "News anchor" }, { text: "Musician" }, { text: "Farmer" },
  { text: "Architect" }, { text: "Plumber" }, { text: "Carpenter" }, { text: "Zookeeper" }, { text: "Waiter" },
  { text: "Barista" }, { text: "Sculptor" }, { text: "Taxi driver" }, { text: "Fashion designer" }, { text: "Journalist" },
  { text: "Surgeon" }, { text: "Cashier" }, { text: "Janitor" }, { text: "Professional gamer" }, { text: "Electrician" },
  { text: "Coach" }, { text: "Travel agent" }, { text: "Flight attendant" }, { text: "Bus driver" }, { text: "Park ranger" },
  { text: "Choreographer" }, { text: "Film director" }, { text: "Tour guide" }, { text: "Actor" }, { text: "Tailor" },
  { text: "Paramedic" }, { text: "Engineer" }, { text: "Butcher" }, { text: "Wedding planner" }, { text: "Realtor" },
  { text: "Blacksmith" }, { text: "Dentist" }, { text: "Psychologist" }, { text: "Pharmacist" }, { text: "Biologist" },
  { text: "Astronomer" }, { text: "Translator" }, { text: "Judge" }, { text: "Marine biologist" }, { text: "Private investigator" },
  { text: "Social worker" }, { text: "Delivery driver" }, { text: "Dog walker" }, { text: "Tattoo artist" }, { text: "DJ" },
  { text: "Yoga instructor" }, { text: "Dog trainer" }, { text: "Game developer" }, { text: "Lifeguard" }, { text: "Stunt double" },
  { text: "Comic artist" }, { text: "Ice cream vendor" }, { text: "Forensic analyst" }, { text: "Nutritionist" }, { text: "Therapist" },
  { text: "Book editor" }, { text: "Podcaster" }, { text: "Meteorologist" }, { text: "Florist" }, { text: "Mall security guard" },
  { text: "Locksmith" }, { text: "Antique dealer" }, { text: "Bouncer" }, { text: "Pizza delivery person" }, { text: "Makeup artist" },
  { text: "Chocolatier" }, { text: "Auctioneer" }, { text: "Wildlife photographer" }, { text: "Stagehand" }, { text: "Radio host" },
  { text: "Dog groomer" }, { text: "Toy designer" }, { text: "Optician" }, { text: "Balloon artist" }, { text: "Pastry chef" },
  { text: "Acrobat" }, { text: "Ballet dancer" }, { text: "Calligrapher" }, { text: "Sound engineer" }, { text: "Wine maker" },
  { text: "Furniture maker" }, { text: "Cobbler" }, { text: "Court reporter" }, { text: "Tattoo designer" }, { text: "Horticulturist" },
  { text: "Film critic" }, { text: "Barber" }, { text: "Sous chef" }, { text: "Composer" }, { text: "Data analyst" },
  { text: "Drone operator" }, { text: "Ethicist" }, { text: "Game tester" }, { text: "Hotel manager" }, { text: "Interpreter" },
  { text: "Jeweler" }, { text: "Lab technician" }, { text: "Lighting designer" }, { text: "Museum curator" }, { text: "Naval officer" },
  { text: "Oceanographer" }, { text: "Paleontologist" }, { text: "Parkour instructor" }, { text: "Perfumer" }, { text: "Pet sitter" },
  { text: "Phlebotomist" }, { text: "Puppeteer" }, { text: "Quilter" }, { text: "Robotics engineer" }, { text: "Set designer" },
  { text: "Ship captain" }, { text: "Sign language interpreter" }, { text: "Sommelier" }, { text: "Statistician" }, { text: "Street artist" },
  { text: "Toy inventor" }, { text: "Travel blogger" }, { text: "Urban planner" }, { text: "Valet" }, { text: "Voice actor" },
  { text: "Web developer" }, { text: "Zoologist" }, { text: "Ice sculptor" }, { text: "Sports coach" }, { text: "Bookbinder" },
  { text: "Fire eater" }, { text: "Graffiti artist" }, { text: "Hypnotist" }, { text: "Illusionist" }, { text: "Juggler" },
  { text: "Karate instructor" }, { text: "Makeup consultant" }, { text: "News producer" }, { text: "Opera singer" }, { text: "Puppy raiser" },
  { text: "Quizmaster" }, { text: "Referee" }, { text: "Sand sculptor" }, { text: "Swordsmith" }, { text: "Uber driver" },
  { text: "Vlogger" }, { text: "Wildlife rehabilitator" }, { text: "X-ray technician" }, { text: "Yacht captain" }, { text: "Zamboni driver" },
  { text: "Perfume tester" }, { text: "Costume designer" }, { text: "Fireworks technician" }, { text: "Wedding photographer" }, { text: "Freelance writer" },
       { text: "Voice coach" }, { text: "Pet detective" }, { text: "Escape room designer" }, { text: "Museum guide" },
  { text: "Robot operator" }, { text: "Mobile app developer" }, { text: "Cartoonist" }, { text: "House sitter" },
  { text: "Children's author" }, { text: "Fortune teller" }, { text: "Food stylist" }, { text: "Ice fisherman" },
  { text: "Street vendor" }, { text: "Tattoo remover" }, { text: "Drone pilot" }, { text: "Ethnomusicologist" },
  { text: "Professional surfer" }, { text: "YouTuber" }, { text: "Podcaster" }, { text: "Life coach" },
  { text: "Event planner" }, { text: "Crisis negotiator" }, { text: "Comic book writer" }, { text: "Meme creator" },
  { text: "Quiz show host" }, { text: "Park attendant" }, { text: "Brand strategist" }, { text: "Urban farmer" },
  { text: "Genealogist" }, { text: "Astrologer" }, { text: "Courtroom artist" }, { text: "Garden designer" },
  { text: "Rescue diver" }, { text: "Tree surgeon" }, { text: "Street musician" }, { text: "Appraiser" },
  { text: "Patent attorney" }, { text: "Legal consultant" }, { text: "Aquarist" }, { text: "Voiceover artist" },
  { text: "Habitat restoration specialist" }, { text: "Talent agent" }, { text: "Biotech researcher" },
  { text: "Antique restorer" }, { text: "Recycling coordinator" }, { text: "Sound designer" },
  { text: "UX designer" }, { text: "Game streamer" }, { text: "Nutrition consultant" }, { text: "Disaster relief worker" },
  { text: "Parkour athlete" }, { text: "Scenic painter" }, { text: "Wildlife tracker" }, { text: "Fiction ghostwriter" },
  { text: "Ornithologist" }, { text: "Herpetologist" }, { text: "Gemologist" }, { text: "Cultural anthropologist" },
  { text: "Documentary filmmaker" }, { text: "Court clerk" }, { text: "Sports statistician" }, { text: "Prosthetist" },
  { text: "Cytotechnologist" }, { text: "CNC machinist" }, { text: "Puppy socializer" }, { text: "Social media manager" },
  { text: "Podcast editor" }, { text: "Stained glass artist" }, { text: "Lighting technician" }, { text: "Vineyard manager" },
  { text: "Tattoo model" }, { text: "Foley artist" }, { text: "Stage manager" }, { text: "Concert promoter" },
  { text: "Animal behaviorist" }, { text: "Theme park designer" }, { text: "Children's party entertainer" },
  { text: "Park naturalist" }, { text: "Livestream host" }, { text: "Reenactor" }, { text: "Auction house staff" },
  { text: "Brand ambassador" }, { text: "Voiceover director" }, { text: "Event MC" }, { text: "Haunted house actor" },
  { text: "Reptile handler" }, { text: "Cider maker" }, { text: "Holiday decorator" }, { text: "Waste management specialist" },
  { text: "Aquarium diver" }, { text: "Tattoo supply manager" }, { text: "Balloon sculptor" }, { text: "Costumed mascot" },
  { text: "Tour bus driver" }, { text: "Gondolier" }, { text: "Cultural festival organizer" }, { text: "Lighting board operator" },
  { text: "Hairstylist" }, { text: "Makeup tester" }, { text: "Chocolatier apprentice" }, { text: "Rodeo clown" },
  { text: "Dog show judge" }, { text: "Zoo educator" }, { text: "Field ecologist" }, { text: "Fishmonger" },
  { text: "Comedian" }, { text: "Digital marketer" }, { text: "Sideshow performer" }, { text: "Ballroom dance instructor" },
  { text: "Glassblower" }, { text: "Boat builder" }, { text: "Soundboard operator" }, { text: "Tattoo parlor receptionist" },
  { text: "Carnival game operator" }, { text: "Ski instructor" }, { text: "Candle maker" }, { text: "Surf instructor" },
  { text: "Field archaeologist" }, { text: "Radio producer" }, { text: "Wine taster" }, { text: "Festival organizer" },
  { text: "Fantasy map artist" }, { text: "Cartography assistant" }, { text: "Vintage shop owner" }, { text: "Acrobatics coach" },
  { text: "Skateboard designer" }, { text: "Street magician" }, { text: "Escape room host" }, { text: "Museum exhibit designer" },
      { text: "Animal keeper" },  { text: "Sex worker" },  { text: "Pimp" }, { text: "Pornstar" },
  { text: "Barkeeper" },
  { text: "Beautician" },
  { text: "Bee-keeper" },
  { text: "Bicycle messenger" },
  { text: "Bookseller" },
  { text: "Boxer" },
  { text: "Bricklayer" },
  { text: "Call-centre agent" },
  { text: "Cameraman" }, // or "Camerawoman"
  { text: "Captain" },
  { text: "Cemetery gardener" },
  { text: "Chancellor" },
  { text: "Chemist" },
  { text: "Chimney sweep" },
  { text: "Chorister" },
  { text: "Circus artist" },
  { text: "Equilibrist" },
  { text: "Coder" },
  { text: "Comedy author" },
  { text: "Computer scientist" },
  { text: "Concrete worker" },
  { text: "Creative director" },
  { text: "Diet counsellor" },
  { text: "Doorkeeper" },
  { text: "Dressmaker" },
  { text: "Driving instructor" },
  { text: "Educator" },
  { text: "Energy consultant" },
  { text: "Estate agent" },
  { text: "Goldsmith" },
  { text: "Headhunter" },
  { text: "Domestic Engineer" },
  { text: "Human resources manager" },
  { text: "Hunter" },
  { text: "Interior designer" },
  { text: "Jazz musician" },
  { text: "Legal expert" },
  { text: "Mail carrier" },
  { text: "Market researcher" },
  { text: "Marriage counsellor" },
  { text: "Masseur" },
  { text: "Minister of defense" },
  { text: "Model" },
  { text: "Mountaineer" },
  { text: "Music teacher" },
  { text: "Obstetrician" },
  { text: "Pathologist" },
  { text: "Physician" },
  { text: "Physicist" },
  { text: "Piano maker" },
  { text: "Priest" },
  { text: "Prompter" },
  { text: "Psephologist" },
  { text: "Roofer" },
  { text: "Santa" },
  { text: "Shepherd" },
  { text: "Shipbuilder" },
  { text: "Soccer referee" },
  { text: "Speechwriter" },
  { text: "Sports instructor" },
  { text: "Stonemason" },
  { text: "Stuntman" },
{ text: "Swimming pool attendant" },
{ text: "Track welder" },
{ text: "Train driver" },
{ text: "Violin-maker" },
{ text: "Watchmaker" },
{ text: "Filer" },
{ text: "Dry cleaner" },
{ text: "Lamp lighter" },
{ text: "Bathroom attendant" },
{ text: "Recorder player" },
{ text: "Driller" },
{ text: "Sweeper" },
{ text: "Photocopier technician" },
{ text: "Tree cutter" },
{ text: "Roofer" },
{ text: "Dictator" }, 
{ text: "Conductor" },
{ text: "Printer" },
{ text: "Grape harvester" },
{ text: "Assembly line worker" },
{ text: "Ploughman" },
{ text: "Preacher" },           
{ text: "Plasterer" },
{ text: "Lecturer" },
],

Adjectives: [
{ text: "Mysterious" }, { text: "Cheerful" }, { text: "Ancient" }, { text: "Gigantic" }, { text: "Tiny" },
{ text: "Silly" }, { text: "Courageous" }, { text: "Lazy" }, { text: "Grumpy" }, { text: "Shiny" },
{ text: "Glowing" }, { text: "Wicked" }, { text: "Gentle" }, { text: "Brave" }, { text: "Clever" },
{ text: "Sneaky" }, { text: "Dramatic" }, { text: "Frosty" }, { text: "Noisy" }, { text: "Silent" },
{ text: "Elegant" }, { text: "Wild" }, { text: "Messy" }, { text: "Cautious" }, { text: "Restless" },
{ text: "Inventive" }, { text: "Bold" }, { text: "Eccentric" }, { text: "Charming" }, { text: "Suspicious" },
{ text: "Quirky" }, { text: "Enormous" }, { text: "Curious" }, { text: "Forgetful" }, { text: "Lively" },
{ text: "Energetic" }, { text: "Rough" }, { text: "Smooth" }, { text: "Stern" }, { text: "Playful" },
{ text: "Sleepy" }, { text: "Awkward" }, { text: "Graceful" }, { text: "Stubborn" }, { text: "Loyal" },
{ text: "Optimistic" }, { text: "Pessimistic" }, { text: "Colorful" }, { text: "Pale" }, { text: "Radiant" },
{ text: "Dark" }, { text: "Jumpy" }, { text: "Timid" }, { text: "Fierce" }, { text: "Obnoxious" },
{ text: "Kind" }, { text: "Patient" }, { text: "Irritable" }, { text: "Spooky" }, { text: "Lucky" },
{ text: "Resourceful" }, { text: "Absent-minded" }, { text: "Whimsical" }, { text: "Impulsive" }, { text: "Generous" },
{ text: "Ruthless" }, { text: "Tough" }, { text: "Caring" }, { text: "Joyful" }, { text: "Reluctant" },
{ text: "Swift" }, { text: "Bashful" }, { text: "Reliable" }, { text: "Adventurous" }, { text: "Witty" },
{ text: "Sincere" }, { text: "Competitive" }, { text: "Trustworthy" }, { text: "Suspenseful" }, { text: "Vain" },
{ text: "Ambitious" }, { text: "Confident" }, { text: "Diligent" }, { text: "Overconfident" }, { text: "Determined" },
{ text: "Meticulous" }, { text: "Clumsy" }, { text: "Persuasive" }, { text: "Worried" }, { text: "Dashing" },
{ text: "Careless" }, { text: "Persistent" }, { text: "Foolish" }, { text: "Imaginative" }, { text: "Luminous" },
{ text: "Intense" }, { text: "Hesitant" }, { text: "Spirited" }, { text: "Passionate" }, { text: "Gracious" },
{ text: "Blunt" }, { text: "Worrisome" }, { text: "Obedient" }, { text: "Reckless" }, { text: "Tactful" },
{ text: "Genuine" }, { text: "Daring" }, { text: "Flaky" }, { text: "Transparent" }, { text: "Opaque" },
{ text: "Studious" }, { text: "Carefree" }, { text: "Reserved" }, { text: "Composed" }, { text: "Distracted" },
{ text: "Pensive" }, { text: "Vivid" }, { text: "Boisterous" }, { text: "Melancholy" }, { text: "Sprightly" },
{ text: "Rosy" }, { text: "Vigilant" }, { text: "Solitary" }, { text: "Welcoming" }, { text: "Demanding" },
{ text: "Tense" }, { text: "Airy" }, { text: "Dense" }, { text: "Artful" }, { text: "Cheery" },
{ text: "Gloomy" }, { text: "Content" }, { text: "Jealous" }, { text: "Creative" }, { text: "Unusual" },
{ text: "Majestic" }, { text: "Regal" }, { text: "Uptight" }, { text: "Dreamy" }, { text: "Practical" },
{ text: "Comical" }, { text: "Frantic" }, { text: "Drowsy" }, { text: "Eager" }, { text: "Inquisitive" },{ text: "Orderly" }, { text: "Proud" }, { text: "Smug" }, { text: "Determined" }, { text: "Distraught" },
{ text: "Balanced" }, { text: "Mellow" }, { text: "Exuberant" }, { text: "Innocent" }, { text: "Crafty" },
{ text: "Stern" }, { text: "Rebellious" }, { text: "Perky" }, { text: "Sly" }, { text: "Sarcastic" },
{ text: "Tactless" }, { text: "Chipper" }, { text: "Peppy" }, { text: "Ecstatic" }, { text: "Hopeful" },
{ text: "Flamboyant" }, { text: "Compassionate" }, { text: "Radiant" }, { text: "Frosty" }, { text: "Agile" },
{ text: "Magnetic" }, { text: "Turbulent" }, { text: "Venomous" }, { text: "Radiant" }, { text: "Astute" },
{ text: "Elusive" }, { text: "Exotic" }, { text: "Brooding" }, { text: "Savage" }, { text: "Obedient" },
{ text: "Sinister" }, { text: "Sparkling" }, { text: "Dilapidated" }, { text: "Hospitable" }, { text: "Merciful" },
{ text: "Benevolent" }, { text: "Ferocious" }, { text: "Gargantuan" }, { text: "Lethargic" }, { text: "Luminous" },
{ text: "Ominous" }, { text: "Noble" }, { text: "Weary" }, { text: "Enchanting" }, { text: "Valiant" },
{ text: "Voracious" }, { text: "Cautious" }, { text: "Tremulous" }, { text: "Dauntless" }, { text: "Frugal" },
{ text: "Wistful" }, { text: "Downcast" }, { text: "Dogged" }, { text: "Subtle" }, { text: "Refined" },
{ text: "Sheepish" }, { text: "Dapper" }, { text: "Resilient" }, { text: "Splendid" }, { text: "Majestic" },
{ text: "Nimble" }, { text: "Zealous" }, { text: "Frivolous" }, { text: "Ravenous" }, { text: "Enthusiastic" },
{ text: "Arrogant" }, { text: "Lyrical" }, { text: "Doubtful" }, { text: "Reserved" }, { text: "Oblivious" },
{ text: "Tranquil" }, { text: "Winsome" }, { text: "Animated" }, { text: "Serene" }, { text: "Grotesque" },
{ text: "Uncanny" }, { text: "Stoic" }, { text: "Luxurious" }, { text: "Rough-hewn" }, { text: "Delirious" },
{ text: "Rugged" }, { text: "Wistful" }, { text: "Sturdy" }, { text: "Hearty" }, { text: "Dreary" },
{ text: "Imposing" }, { text: "Obscure" }, { text: "Tenacious" }, { text: "Radiant" }, { text: "Tattered" },
{ text: "Dreamlike" }, { text: "Shadowy" }, { text: "Fanciful" }, { text: "Sinful" }, { text: "Pensive" },
{ text: "Polished" }, { text: "Desolate" }, { text: "Opulent" }, { text: "Jovial" }, { text: "Meek" },
{ text: "Serendipitous" }, { text: "Mirthful" }, { text: "Capricious" }, { text: "Stalwart" }, { text: "Intrepid" },
{ text: "Vivacious" }, { text: "Sensible" }, { text: "Furtive" }, { text: "Boastful" }, { text: "Harmonious" },
{ text: "Fragrant" }, { text: "Industrious" }, { text: "Quaint" }, { text: "Jubilant" }, { text: "Tedious" },
{ text: "Sorrowful" }, { text: "Dismal" }, { text: "Steadfast" }, { text: "Obsolete" }, { text: "Prodigious" },
{ text: "Auspicious" }, { text: "Melodious" }, { text: "Effervescent" }, { text: "Mature" }, { text: "Sanguine" },
{ text: "Callous" }, { text: "Ambivalent" }, { text: "Diligent" }, { text: "Obtrusive" }, { text: "Naive" }
],

Genres: [
{ text: "Fantasy" }, { text: "Science Fiction" }, { text: "Mystery" }, { text: "Romance" }, { text: "Thriller" },
{ text: "Horror" }, { text: "Comedy" }, { text: "Drama" }, { text: "Action" }, { text: "Adventure" },
{ text: "Crime" }, { text: "Noir" }, { text: "Western" }, { text: "Historical" }, { text: "Satire" },
{ text: "Parody" }, { text: "Urban Fantasy" }, { text: "Space Opera" }, { text: "Dystopian" }, { text: "Utopian" },
{ text: "Cyberpunk" }, { text: "Steampunk" }, { text: "Biopunk" }, { text: "Alternate History" }, { text: "Dark Fantasy" },
{ text: "Sword and Sorcery" }, { text: "Magical Realism" }, { text: "Supernatural" }, { text: "Gothic" }, { text: "Psychological Thriller" },
{ text: "Legal Drama" }, { text: "Medical Drama" }, { text: "Political Thriller" }, { text: "Spy Fiction" }, { text: "Espionage" },
{ text: "Military Science Fiction" }, { text: "Apocalyptic" }, { text: "Post-Apocalyptic" }, { text: "Coming-of-Age" }, { text: "Young Adult" },
{ text: "Children’s" }, { text: "Family Saga" }, { text: "Epic" }, { text: "Short Story" }, { text: "Fairy Tale" },
{ text: "Fable" }, { text: "Mythology" }, { text: "Folklore" }, { text: "Detective" }, { text: "Whodunit" },
{ text: "Hard-Boiled" }, { text: "Cozy Mystery" }, { text: "Chick Lit" }, { text: "Gothic Horror" }, { text: "Slasher" },
{ text: "Monster" }, { text: "Survival" }, { text: "Disaster" }, { text: "Creature Feature" }, { text: "Eco-Fiction" },
{ text: "Techno-thriller" }, { text: "Speculative Fiction" }, { text: "Cli-Fi" }, { text: "Afrofuturism" }, { text: "Historical Romance" },
{ text: "Contemporary Romance" }, { text: "Paranormal Romance" }, { text: "Romantic Comedy" }, { text: "Romantic Suspense" }, { text: "Erotica" },
{ text: "High Fantasy" }, { text: "Low Fantasy" }, { text: "Grimdark" }, { text: "Superhero" }, { text: "Sword and Planet" },
{ text: "GameLit" }, { text: "LitRPG" }, { text: "Psychological Horror" }, { text: "Body Horror" }, { text: "Weird Fiction" },
{ text: "Bizarro" }, { text: "Transgressive" }, { text: "Slice of Life" }, { text: "Sports" }, { text: "Martial Arts" },
{ text: "Detective Comedy" }, { text: "Mockumentary" }, { text: "Found Footage" }, { text: "Docudrama" }, { text: "True Crime" },
{ text: "Courtroom Drama" }, { text: "Procedural" }, { text: "Road Movie" }, { text: "Heist" }, { text: "Caper" },
{ text: "Buddy Comedy" }, { text: "Ensemble Cast" }, { text: "Musical" }, { text: "Rock Opera" }, { text: "Jukebox Musical" },
{ text: "Concert Film" }, { text: "Anthology" }, { text: "Biographical" }, { text: "Docuseries" }, { text: "Sports Drama" },
{ text: "Game Show" }, { text: "Reality TV" }, { text: "Dating Show" }, { text: "Cooking Show" }, { text: "Travelogue" },
{ text: "Wildlife Documentary" }, { text: "Nature Documentary" }, { text: "Science Documentary" }, { text: "History Documentary" }, { text: "Political Satire" },
{ text: "Sketch Comedy" }, { text: "Stand-Up Comedy" }, { text: "Improv Comedy" }, { text: "Hidden Camera" }, { text: "Talent Show" },
{ text: "Variety Show" }, { text: "Panel Show" }, { text: "Talk Show" }, { text: "Soap Opera" }, { text: "Telenovela" },
{ text: "Teen Drama" }, { text: "College Comedy" }, { text: "Workplace Comedy" }, { text: "Workplace Drama" }, { text: "Political Drama" },
{ text: "Medical Comedy" }, { text: "Legal Comedy" }, { text: "Satirical News" }, { text: "Paranormal" }, { text: "Occult" },
{ text: "Demonic Possession" }, { text: "Ghost Story" }, { text: "Vampire" }, { text: "Werewolf" }, { text: "Zombie" },
{ text: "Alien Invasion" }, { text: "First Contact" }, { text: "Space Western" }, { text: "Planetary Romance" }, { text: "Time Travel" },
{ text: "Alternate Universe" }, { text: "Parallel Universe" }, { text: "Multiverse" }, { text: "Metafiction" }, { text: "Experimental Fiction" },
{ text: "Nonlinear Narrative" }, { text: "Puzzle Fiction" }, { text: "Interactive Fiction" }, { text: "Choose Your Own Adventure" }, { text: "Visual Novel" },
{ text: "Disaster Movie" }, { text: "Monster Movie" }, { text: "Buddy Cop" }, { text: "Coming-of-Age Comedy" }, { text: "Holiday Movie" },
{ text: "Family Movie" }, { text: "Children's Animation" }, { text: "Anime" }, { text: "Manga" }, { text: "Supernatural Thriller" },
{ text: "Period Drama" }, { text: "Costume Drama" }, { text: "Dance Movie" }, { text: "Musical Comedy" }, { text: "Romantic Drama" },
{ text: "Military Drama" }, { text: "Prison Drama" }, { text: "Prison Break" }, { text: "Espionage Thriller" }, { text: "Nature Survival" },
{ text: "Urban Drama" }, { text: "Rural Drama" }, { text: "Teen Romance" }, { text: "Satirical Comedy" }, { text: "Screwball Comedy" },
{ text: "Deadpan Comedy" }, { text: "Absurdist Comedy" }, { text: "Road Trip" }, { text: "Sports Comedy" }, { text: "Sports Romance" },
{ text: "Slapstick Comedy" }, { text: "Farce" }, { text: "Heist Thriller" }, { text: "Capers" }, { text: "Spy Comedy" },
{ text: "Mockumentary" }, { text: "Found Footage Horror" }, { text: "Psychological Drama" }, { text: "Historical Epic" }, { text: "Sword and Sandal" },
{ text: "Wuxia" }, { text: "Martial Arts Fantasy" }, { text: "Samurai Drama" }, { text: "Gangster Movie" }, { text: "Mob Drama" },
{ text: "Political Satire" }, { text: "Legal Thriller" }, { text: "Medical Thriller" }, { text: "Techno-Thriller" }, { text: "Spy Drama" },
{ text: "Paranormal Mystery" }, { text: "Dark Comedy" }, { text: "Black Comedy" }, { text: "Crime Comedy" }, { text: "Adventure Comedy" },
{ text: "Travel Comedy" }, { text: "Workplace Sitcom" }, { text: "Sitcom" }, { text: "Teen Sitcom" }, { text: "Adult Animation" },
{ text: "Sketch Show" }, { text: "Improvisational Show" }, { text: "Stand-Up Special" }, { text: "Game Show" }, { text: "Reality Competition" },
{ text: "Talent Competition" }, { text: "Makeover Show" }, { text: "Cooking Competition" }, { text: "Travel Documentary" }, { text: "Wildlife Series" },
{ text: "Nature Series" }, { text: "Science Series" }, { text: "History Series" }, { text: "Mystery Series" }, { text: "Detective Series" },
{ text: "Medical Series" }, { text: "Legal Series" }, { text: "Police Procedural" }, { text: "Firefighter Drama" }, { text: "Emergency Drama" },
{ text: "True Crime Documentary" }, { text: "Biopic" }, { text: "Autobiographical Fiction" }, { text: "Memoir" }, { text: "Epistolary Fiction" },
{ text: "Episodic Anthology" }, { text: "Serial Drama" }, { text: "Soap" }, { text: "Daytime Drama" }, { text: "Late Night Show" },
{ text: "Talk Show" }, { text: "Morning Show" }, { text: "Panel Comedy" }, { text: "Debate Show" }, { text: "Docuseries" },
{ text: "News Magazine" }, { text: "Satirical News Show" }, { text: "Political Talk Show" }, { text: "DIY Show" }, { text: "Home Renovation Show" },
{ text: "Travelogue Series" }, { text: "Food Documentary" }, { text: "Cooking Series" }, { text: "Baking Show" }, { text: "Gardening Show" },
{ text: "Traffic News" },
{ text: "Docu-soap" },
{ text: "Church Service / Televangelist" },
{ text: "Eurovision Contest" },
{ text: "Music Chart Show" },
{ text: "Infotainment" },
{ text: "Antiques Advice Show" },
{ text: "Open University" },
{ text: "TV Shopping (Infomercial)" },
{ text: "Election Studio" },
{ text: "Party Political Broadcast" },
{ text: "Weather Report" },
],
Polysemous: [
{ text: "Bank" }, { text: "Bark" }, { text: "Bat" }, { text: "Bear" }, { text: "Board" },
{ text: "Bolt" }, { text: "Can" }, { text: "Case" }, { text: "Charge" }, { text: "Chest" },
{ text: "Chip" }, { text: "Club" }, { text: "Coach" }, { text: "Clip" }, { text: "Cooler" },
{ text: "Couch" }, { text: "Crane" }, { text: "Crowd" }, { text: "Current" }, { text: "Date" },
{ text: "Deck" }, { text: "Dish" }, { text: "Draft" }, { text: "Drill" }, { text: "Duck" },
{ text: "Fan" }, { text: "Fast" }, { text: "Feather" }, { text: "File" }, { text: "Fine" },
{ text: "Firm" }, { text: "Fish" }, { text: "Fluke" }, { text: "Fly" }, { text: "Foil" },
{ text: "Glass" }, { text: "Ground" }, { text: "Gum" }, { text: "Hand" }, { text: "Hatch" },
{ text: "Head" }, { text: "Horn" }, { text: "Iron" }, { text: "Jack" }, { text: "Jam" },
{ text: "Kind" }, { text: "Lap" }, { text: "Leaf" }, { text: "Letter" }, { text: "Light" },
{ text: "Line" }, { text: "Log" }, { text: "Match" }, { text: "Mean" }, { text: "Mine" },
{ text: "Mole" }, { text: "Mug" }, { text: "Nail" }, { text: "Net" }, { text: "Order" },
{ text: "Pad" }, { text: "Page" }, { text: "Palm" }, { text: "Park" }, { text: "Pass" },
{ text: "Patch" }, { text: "Pen" }, { text: "Pitch" }, { text: "Pitcher" }, { text: "Plain" },
{ text: "Plane" }, { text: "Play" }, { text: "Plot" }, { text: "Point" }, { text: "Pole" },
{ text: "Pool" }, { text: "Port" }, { text: "Post" }, { text: "Pot" }, { text: "Present" },
{ text: "Press" }, { text: "Punch" }, { text: "Quarry" }, { text: "Race" }, { text: "Racket" },
{ text: "Range" }, { text: "Right" }, { text: "Ring" }, { text: "Rock" }, { text: "Rose" },
{ text: "Row" }, { text: "Sail" }, { text: "Saw" }, { text: "Scale" }, { text: "Seal" },
{ text: "Season" }, { text: "Set" }, { text: "Shower" }, { text: "Sign" }, { text: "Sink" },
{ text: "Skip" }, { text: "Slip" }, { text: "Spade" }, { text: "Spot" }, { text: "Spring" },
{ text: "Staff" }, { text: "Stamp" }, { text: "Star" }, { text: "State" }, { text: "Stalk" },
{ text: "Stick" }, { text: "Stock" }, { text: "Suit" }, { text: "Table" }, { text: "Tank" },
{ text: "Tap" }, { text: "Tear" }, { text: "Tie" }, { text: "Toast" }, { text: "Train" },
{ text: "Trunk" }, { text: "Trip" }, { text: "Watch" }, { text: "Wave" }, { text: "Well" },
{ text: "Whip" }, { text: "Yard" }, { text: "Subject" }, { text: "Bolt" }, { text: "Seal" },
{ text: "Pitch" }, { text: "Bark" }, { text: "Stream" }, { text: "Scale" }, { text: "Panel" },
{ text: "Light" }, { text: "Right" }, { text: "Jam" }, { text: "Order" }, { text: "Post" },
{ text: "Bill" }, { text: "Bass" }, { text: "Drum" }, { text: "Key" }, { text: "Slip" },
{ text: "Screen" }, { text: "Bowl" }, { text: "Box" }, { text: "Draft" }, { text: "Panel" },
{ text: "Mint" }, { text: "Mark" }, { text: "Block" }, { text: "Trunk" }, { text: "Coach" },
{ text: "Stream" }, { text: "Plot" }, { text: "Buckle" }, { text: "Quarry" }, { text: "Buckle" },
{ text: "Mold" }, { text: "Dock" }, { text: "Pound" }, { text: "Root" }, { text: "Table" },
{ text: "Nut" }, { text: "Ball" }, { text: "Leaves" }, { text: "Mug" }, { text: "Gum" },
{ text: "Lash" }, { text: "Lace" }, { text: "Dart" }, { text: "Jewel" }, { text: "Fence" },
{ text: "Base" }, { text: "Change" }, { text: "Patch" }, { text: "Shot" }, { text: "Boot" },
{ text: "Current" }, { text: "String" }, { text: "Scale" }, { text: "Horn" }, { text: "Lock" },
{ text: "Bug" }, { text: "Space" }, { text: "Tag" }, { text: "Sink" }, { text: "Panel" },
{ text: "Plaster" }, { text: "Belt" }, { text: "Stool" }, { text: "Cross" }, { text: "Kid" },
{ text: "Deck" }, { text: "Step" }, { text: "Panel" }, { text: "Crane" }, { text: "Spade" },
{ text: "Pupil" }, { text: "Fluke" }, { text: "Lap" }, { text: "Foil" }, { text: "Mole" },
{ text: "Bat" }, { text: "Spring" }, { text: "Cane" }, { text: "Roll" }, { text: "Bunk" },
{ text: "Bar" }, { text: "Mint" }, { text: "Pad" }, { text: "Coast" }, { text: "Pit" },
{ text: "Bore" }, { text: "Cracker" }, { text: "Bark" }, { text: "Jam" }, { text: "Fan" },
{ text: "Litter" }, { text: "March" }, { text: "Mace" }, { text: "Seal" }, { text: "Club" },
{ text: "Tap" }, { text: "Tie" }, { text: "Can" }, { text: "Toast" }, { text: "Match" },
{ text: "Light" }, { text: "Mug" }, { text: "Pike" }, { text: "Snap" }, { text: "Pad" },
{ text: "Spike" }, { text: "Crack" }, { text: "Bass" }, { text: "Pit" }, { text: "Mace" },
{ text: "Fair" }, { text: "Spray" }, { text: "Lead" }, { text: "Bass" }, { text: "Lap" },
{ text: "Tack" }, { text: "Wave" }, { text: "Case" }, { text: "Jack" }, { text: "Rose" },
{ text: "Pike" }, { text: "Pump" }, { text: "Sole" }, { text: "Bug" }, { text: "Panel" },
{ text: "Spade" }, { text: "March" }, { text: "Point" }, { text: "Litter" }, { text: "Bass" },
{ text: "Bill" }, { text: "Bore" }, { text: "Spring" }, { text: "Club" }, { text: "Coast" },
{ text: "Foil" }, { text: "Mark" }, { text: "Mint" }, { text: "Step" }, { text: "Snap" },
{ text: "Stool" }, { text: "Pump" }, { text: "Panel" }, { text: "Lace" }, { text: "Tag" },
{ text: "Lock" }, { text: "Pound" }, { text: "March" }, { text: "Crane" }, { text: "Block" },
{ text: "Base" }, { text: "Tie" }, { text: "Lap" }, { text: "Coast" }, { text: "Snap" },
{ text: "Seal" }, { text: "Roll" }, { text: "Deck" }, { text: "Panel" }, { text: "Bunk" },
{ text: "Coast" }, { text: "Belt" }, { text: "Foil" }, { text: "Bore" }, { text: "Club" },
{ text: "Pit" }, { text: "Mint" }, { text: "Panel" }, { text: "Pad" }, { text: "Pump" },
{ text: "Rinse" },
{ text: "Printer" },
{ text: "Brush" },
{ text: "Mow" },
{ text: "Cut" },
{ text: "Check" }

],
"More Nouns": [
{ text: "Umbrella" }, { text: "Lantern" }, { text: "Treasure map" }, { text: "Compass" }, { text: "Backpack" },
{ text: "Robot" }, { text: "Key" }, { text: "Mask" }, { text: "Bicycle" }, { text: "Book" },
{ text: "Clock" }, { text: "Sword" }, { text: "Mirror" }, { text: "Crystal ball" }, { text: "Potion" },
{ text: "Skateboard" }, { text: "Locket" }, { text: "Treasure chest" }, { text: "Magic wand" }, { text: "Puzzle" },
{ text: "Painting" }, { text: "Candle" }, { text: "Suitcase" }, { text: "Watch" }, { text: "Notebook" },
{ text: "Camera" }, { text: "Scroll" }, { text: "Violin" }, { text: "Microphone" }, { text: "Helmet" },
{ text: "Doll" }, { text: "Slingshot" }, { text: "Rocket" }, { text: "Spacesuit" }, { text: "Chessboard" },
{ text: "Diamond" }, { text: "Feather" }, { text: "Glove" }, { text: "Goggles" }, { text: "Flute" },
{ text: "Fossil" }, { text: "Envelope" }, { text: "Bell" }, { text: "Remote control" }, { text: "Ticket" },
{ text: "Sandcastle" }, { text: "Map" }, { text: "Shell" }, { text: "Coin" }, { text: "Telescope" },
{ text: "Paintbrush" }, { text: "Drum" }, { text: "Quill" }, { text: "Basket" }, { text: "Medal" },
{ text: "Star" }, { text: "Flag" }, { text: "Globe" }, { text: "Ribbon" }, { text: "Parachute" },
{ text: "Toy car" }, { text: "Snow globe" }, { text: "Mug" }, { text: "Poster" }, { text: "Balloon" },
{ text: "Crown" }, { text: "Badge" }, { text: "Binoculars" }, { text: "Sculpture" }, { text: "Cage" },
{ text: "Trapdoor" }, { text: "Swordfish" }, { text: "Hat" }, { text: "Crystal" }, { text: "Letter" },
{ text: "Diary" }, { text: "Medallion" }, { text: "Fan" }, { text: "Anchor" }, { text: "Sundial" },
{ text: "Flask" }, { text: "Maple leaf" }, { text: "Firework" }, { text: "Puzzle cube" }, { text: "Chalkboard" },
{ text: "Boomerang" }, { text: "Board game" }, { text: "Statuette" }, { text: "Trophy" }, { text: "Hourglass" },
{ text: "Paint palette" }, { text: "Playing card" }, { text: "Magnifying glass" }, { text: "Whistle" }, { text: "Yarn ball" },
{ text: "Toothbrush" }, { text: "Flashlight" }, { text: "Stapler" }, { text: "Snowflake" }, { text: "Scarf" },
{ text: "Wallet" }, { text: "Easel" }, { text: "Suit" }, { text: "Curtain" }, { text: "Ruler" },
{ text: "Earring" }, { text: "Thermometer" }, { text: "Guitar" }, { text: "Vase" }, { text: "Whisk" },
{ text: "Cabinet" }, { text: "Lock" }, { text: "Egg timer" }, { text: "Radio" }, { text: "Baton" },
{ text: "Pipe" }, { text: "Plush toy" }, { text: "Router" }, { text: "Shovel" }, { text: "Soap" },
{ text: "Pot" }, { text: "Torch" }, { text: "Walking stick" }, { text: "Apron" }, { text: "Pillow" },
{ text: "Spoon" }, { text: "Hairbrush" }, { text: "Comb" }, { text: "Bottle" }, { text: "Pen" },
{ text: "Candle holder" }, { text: "Basketball" }, { text: "Chess piece" }, { text: "Bookmark" }, { text: "Puzzle box" },
{ text: "Bin" }, { text: "Calendar" }, { text: "Headphones" }, { text: "Leaf" }, { text: "Crayon" },
{ text: "Lockbox" }, { text: "Keychain" }, { text: "Trinket" }, { text: "Pinwheel" }, { text: "String" },
{ text: "Chalk" }, { text: "Laptop" }, { text: "Origami crane" }, { text: "Sun dial" }, { text: "Puppet" }, { text: "Dice" }, { text: "Flash drive" },
{ text: "Incense" }, { text: "Magnolia" }, { text: "Helmet visor" }, { text: "Rubber duck" }, { text: "Marble" },
{ text: "Model train" }, { text: "Hourglass" }, { text: "Postcard" }, { text: "Glider" }, { text: "Chess clock" },
{ text: "Tuning fork" }, { text: "Pin" }, { text: "Corkscrew" }, { text: "Garden hose" }, { text: "Rollerblade" },
{ text: "Dreamcatcher" }, { text: "Tarot deck" }, { text: "Dartboard" }, { text: "Apple" }, { text: "Blueberry" },
{ text: "Saddle" }, { text: "Yo-yo" }, { text: "Gumball" }, { text: "Beach ball" }, { text: "Puzzle ring" },
{ text: "Water bottle" }, { text: "Lanternfish" }, { text: "Fireplace" }, { text: "Broomstick" }, { text: "Parchment" },
{ text: "Pencil" }, { text: "Boardwalk" }, { text: "Oven mitt" }, { text: "Paint roller" }, { text: "Pepper grinder" },
{ text: "Lunchbox" }, { text: "Hammock" }, { text: "Ocarina" }, { text: "Flagpole" }, { text: "Incubator" },
{ text: "Grapevine" }, { text: "Horseshoe" }, { text: "Parasol" }, { text: "Sewing machine" }, { text: "Vial" },
{ text: "Plush rabbit" }, { text: "Pocket watch" }, { text: "Music box" }, { text: "Snorkel" }, { text: "Surfboard" },
{ text: "Bulldozer" }, { text: "Gumball machine" }, { text: "Water wheel" }, { text: "Napkin" }, { text: "Suitcase lock" },
{ text: "Bellows" }, { text: "Ladder" }, { text: "Wind chime" }, { text: "Crossbow" }, { text: "Quiver" },
{ text: "Ice skate" }, { text: "Jigsaw puzzle" }, { text: "Periscope" }, { text: "Water gun" }, { text: "Dog whistle" },
{ text: "Miniature ship" }, { text: "Logbook" }, { text: "Soap bubble" }, { text: "Thimble" }, { text: "Charm bracelet" },
{ text: "Medallion" }, { text: "Squeegee" }, { text: "Metronome" }, { text: "Plant pot" }, { text: "Shuriken" },
{ text: "Remote" }, { text: "Toy train" }, { text: "Post-it note" }, { text: "Lanyard" }, { text: "Safety pin" },
{ text: "Breadbox" }, { text: "Plastic cup" }, { text: "Knapsack" }, { text: "Whirligig" }, { text: "Eraser" },
{ text: "Quilt" }, { text: "Bouquet" }, { text: "Magnifier" }, { text: "Chalk eraser" }, { text: "Trophy case" },
{ text: "Shamrock" }, { text: "Fire extinguisher" }, { text: "Wishbone" }, { text: "Mousetrap" }, { text: "Letter opener" },
{ text: "Bolo tie" }, { text: "Tea infuser" }, { text: "Zipper" }, { text: "Fire hydrant" }, { text: "Dart" },
{ text: "Spindle" }, { text: "Pencil sharpener" }, { text: "Harmonica" }, { text: "Popsicle stick" }, { text: "Pet leash" },
{ text: "Glow stick" }, { text: "Snow shovel" }, { text: "Duck call" }, { text: "Guitar pick" }, { text: "Ping pong ball" },
{ text: "Skeleton key" }, { text: "Velcro" }, { text: "Mousetrap car" }, { text: "Puzzle piece" }, { text: "Drinking straw" },
{ text: "Plastic egg" }, { text: "Water filter" }, { text: "Matchbox" }, { text: "Hot water bottle" }, { text: "Spray bottle" },
{ text: "Tape dispenser" }, { text: "Puzzle mat" }, { text: "Fishing net" }, { text: "Magic lantern" }, { text: "Maraca" },
{ text: "Cotton swab" }, { text: "Bandage" }, { text: "Pepper mill" }, { text: "Air freshener" }, { text: "Paper fan" },
{ text: "Bonsai tree" }, { text: "Sculpting clay" }, { text: "Tinsel" }, { text: "Locket" }, { text: "Sand dollar" },
{ text: "Fire alarm" }, { text: "Punch card" }, { text: "Doodle" }, { text: "Salt shaker" }, { text: "Pickle jar" },
{ text: "Name tag" }, { text: "Milk carton" }, { text: "Mousetrap cheese" }, { text: "Staple remover" }, { text: "Egg cup" },
{ text: "Cookie cutter" }, { text: "Bath bomb" }, { text: "Party hat" }, { text: "Confetti" }, { text: "Snowman" },
{ text: "Pie tin" }, { text: "Cake stand" }, { text: "Napkin ring" }, { text: "Toothpick" }, { text: "Lunch tray" },
{ text: "Spatula" }, { text: "Toaster" }, { text: "Stepladder" }, { text: "Basting brush" }, { text: "Ladle" },
{ text: "Measuring cup" }, { text: "Rolling pin" }, { text: "Blender" }, { text: "Thermos" }, { text: "Funnel" },
{ text: "Ice tray" }, { text: "Waffle iron" }, { text: "Pressure cooker" }, { text: "Rice cooker" }, { text: "Colander" },
{ text: "Tupperware" }, { text: "Mixing bowl" }, { text: "Spice rack" }, { text: "Meat tenderizer" }, { text: "Garlic press" },
{ text: "Dish rack" }, { text: "Bottle opener" }, { text: "Jar lid" }, { text: "Serving tray" }, { text: "Baking sheet" },
{ text: "Pot holder" }, { text: "Cutting board" }, { text: "Salad spinner" }, { text: "Cheese grater" }, { text: "Whisk broom" },
{ text: "Pastry bag" }, { text: "Cookie jar" }, { text: "Egg beater" }, { text: "Meat thermometer" }, { text: "Apple corer" },
{ text: "Pepper shaker" }, { text: "Egg slicer" }, { text: "Corn cob holder" }, { text: "Ice cream scoop" }, { text: "Milk frother" },
{ text: "Garlic keeper" }, { text: "Pizza cutter" }, { text: "Bottle cap" }, { text: "Mason jar" }, { text: "Beer stein" },
{ text: "Shot glass" }, { text: "Corkscrew opener" }, { text: "Wine glass" }, { text: "Champagne flute" }, { text: "Beer mug" },
{ text: "Canteen" }, { text: "Coffee mug" }, { text: "Espresso cup" }, { text: "Teacup" }, { text: "Travel mug" },
{ text: "Thermal carafe" }, { text: "Tea strainer" }, { text: "Sugar bowl" }, { text: "Creamer" }, { text: "Butter dish" },
{ text: "Salt cellar" }, { text: "Jam jar" }, { text: "Syrup dispenser" }, { text: "Honey dipper" }, { text: "Bread basket" },
{ text: "Pie server" }, { text: "Cake knife" }, { text: "Cookie scoop" }, { text: "Pizza stone" }, { text: "Gravy boat" },
{ text: "Oven rack" }, { text: "Kitchen timer" }, { text: "Food processor" }, { text: "Spice jar" }, { text: "Bread pan" },
{ text: "Loaf pan" }, { text: "Muffin tin" }, { text: "Cake pan" }, { text: "Springform pan" }, { text: "Brownie pan" },
{ text: "Cookie sheet" }, { text: "Roasting pan" }, { text: "Broiler pan" }, { text: "Cooling rack" }, { text: "Wire rack" },
{ text: "Pizza peel" }, { text: "Baking mat" }, { text: "Silicone spatula" }, { text: "Cookie press" }, { text: "Pastry wheel" },
{ text: "Joystick" }, { text: "Satellite" }, { text: "Turntable" }, { text: "Hourglass" }, { text: "Cyborg" },
{ text: "Hoverboard" }, { text: "Spaceship" }, { text: "Walkie-talkie" }, { text: "Glider" }, { text: "Magnet" },
{ text: "Puzzle cube" }, { text: "Dreamcatcher" }, { text: "Potion bottle" }, { text: "Laser pointer" }, { text: "Hologram" },
{ text: "Time capsule" }, { text: "Rocket launcher" }, { text: "Headset" }, { text: "Control panel" }, { text: "Drone" },
{ text: "Crash helmet" }, { text: "Skull" }, { text: "Typewriter" }, { text: "Blueprint" }, { text: "Game controller" },
{ text: "Mystery box" }, { text: "Magic carpet" }, { text: "Crystal shard" }, { text: "Treasure chest" }, { text: "Alarm clock" },
{ text: "Wishing well" }, { text: "Magic ring" }, { text: "Pocket watch" }, { text: "Mystic amulet" }, { text: "Solar panel" },
{ text: "Cannon" }, { text: "Map" }, { text: "Secret code" }, { text: "Genie lamp" }, { text: "Video cassette" },
{ text: "Arcade machine" }, { text: "Popcorn maker" }, { text: "Boombox" }, { text: "Cassette tape" }, { text: "VR goggles" },
{ text: "Robot dog" }, { text: "Flash drive" }, { text: "Spyglass" }, { text: "Jetpack" }, { text: "Robot arm" },
{ text: "Film reel" }, { text: "Light bulb" }, { text: "Dice tower" }, { text: "Tablet" }, { text: "Smartphone" },
{ text: "Booster pack" }, { text: "Pinball machine" }, { text: "Trophy" }, { text: "Mascot costume" }, { text: "Gumball machine" },
{ text: "Security camera" }, { text: "Mini-fridge" }, { text: "Magic stone" }, { text: "Game cartridge" }, { text: "Digital clock" },
{ text: "Wind-up toy" }, { text: "Marionette" }, { text: "Paper lantern" }, { text: "Go-kart" }, { text: "Pocketknife" },
{ text: "Matchbook" }, { text: "Secret diary" }, { text: "Ancient scroll" }, { text: "Treasure map" }, { text: "Smartwatch" },
{ text: "Trampoline" }, { text: "Weather vane" }, { text: "Microscope" }, { text: "Booster seat" }, { text: "Letter opener" },
{ text: "Pop socket" }, { text: "Stylus" }, { text: "Hand mirror" }, { text: "Fortune cookie" }, { text: "Walkman" },
{ text: "Tamagotchi" }, { text: "Lava lamp" }, { text: "Rubik's Cube" }, { text: "Cheat sheet" }, { text: "Soundboard" },
{ text: "Trading card" }, { text: "Remote control car" }, { text: "Zipline" }, { text: "Jet ski" }, { text: "Disco ball" },
{ text: "Boomerang" }, { text: "Milkshake" }, { text: "Weather balloon" }, { text: "Fidget spinner" }, { text: "Puzzle box" },
{ text: "Satellite dish" }, { text: "Meteorite" }, { text: "Music box" }, { text: "Pinwheel" }, { text: "Light saber" },
{ text: "Night vision goggles" }, { text: "Claw machine" }, { text: "Power glove" }, { text: "Telescope" }, { text: "Magic mirror" },
{ text: "Harp" }, { text: "Toy robot" }, { text: "Gadget" }, { text: "Trading token" }, { text: "Electric guitar" },
{ text: "Candy dispenser" }, { text: "Escape key" }, { text: "Hour marker" }, { text: "Lantern" }, { text: "Bug zapper" },
{ text: "Hovercraft" }, { text: "Board game" }, { text: "Windmill" }, { text: "VHS tape" }, { text: "Record player" },
{ text: "Magic dice" }, { text: "Sunglasses" }, { text: "Trophy cup" }, { text: "Luggage tag" }, { text: "Laser gun" },
{ text: "Name badge" }, { text: "Weather app" }, { text: "Clapperboard" }, { text: "Drum kit" }, { text: "Memory stick" },
{ text: "Puzzle globe" }, { text: "Flashlight" }, { text: "Goose feather" }, { text: "Stylish hat" }, { text: "Ice cube tray" },
{ text: "Parachute" }, { text: "Toy submarine" }, { text: "Easel" }, { text: "Plush dinosaur" }, { text: "Fortune wheel" },
{ text: "Skateboard ramp" }, { text: "Graffiti wall" }, { text: "Holographic card" }, { text: "Magic door" }, { text: "Pinata" }

],
Warmups : [
{
text: "Five Things",
description: "Name a category, quickly list five things in it. After each, group chants the number (“One!” “Two!” etc.), then all chant “Those are five things!” at the end.",
labels: ["Spontaneity", "Harmony"]
},
{
text: "Categories",
description: "Pick a category; go around naming items once; label the round.",
labels: ["Spontaneity", "Listening"]
},
{
text: "Sensei",
description: "Two face off, bow, silently mirror arms (up/down/out); sync ends round. Bow again.",
labels: ["Harmony", "Listening"]
},
{
text: "Whisky Mixer",
description: "Say “Whisky Mixer” (left), “Misty Vista” (right), or “Mr Whiskers” (to anyone). Pass fast.",
labels: ["Listening", "Spontaneity"]
},
{
text: "Mind Meld",
description: "On a three-count group chant, two say words together; try to converge on the same word by repeating with new partners.",
labels: ["Spontaneity", "Harmony"]
},
{
text: "Gift Giving",
description: "Mime giving a gift; receiver accepts/justifies what it is.",
labels: ["Spontaneity", "Harmony"]
},
{
text: "Eyes Closed Counting",
description: "Group counts up, eyes closed—restart if two speak at once.",
labels: ["Listening", "Harmony"]
},
{
text: "Name Game",
description: "Say name with a gesture; group repeats. Pass around circle.",
labels: ["Harmony", "Listening"]
},
{
text: "Zip Zap Zop",
description: "Say “Zip,” “Zap,” or “Zop” to anyone; keep the rhythm, no mistakes.",
labels: ["Listening", "Harmony"]
},
{
text: "Pass the Clap",
description: "Pass a synchronized clap around the circle quickly and precisely.",
labels: ["Listening", "Harmony"]
},
{
text: "One Word Story",
description: "Tell a story, one word at a time per person.",
labels: ["Harmony", "Listening"]
},
{
text: "Machines",
description: "Each steps in, adds a repeating sound/movement to build a group machine.",
labels: ["Harmony", "Spontaneity"]
},
{
text: "Yes, Let's!",
description: "Someone shouts “Let’s X!”; all do it. New leader suggests next.",
labels: ["Harmony", "Spontaneity"]
},
{
text: "Three Word Chant",
description: "Three people, one word each; form a phrase. Group chants it 3 times. Shift trio; repeat.",
labels: ["Harmony", "Listening"]
},
{
text: "John the Loquacious Gardener",
description: "Three give name, location, occupation; fourth does a short scene as that character. Rotate roles.",
labels: ["Spontaneity", "Harmony"]
},
{
text: "Sound Ball",
description: "Make a sound and toss an imaginary ball; receiver matches it, then creates and sends a new sound.",
labels: ["Listening", "Spontaneity"]
},
{
text: "Alphabet Game",
description: "Two play a scene; each line starts with the next letter of the alphabet.",
labels: ["Spontaneity", "Listening"]
},
{
text: "Freeze Tag",
description: "Two act a scene. Anyone can yell “freeze,” tag out a player, take their pose, start new scene.",
labels: ["Spontaneity", "Harmony"]
},
{
text: "Statue Tag",
description: "Two create a frozen pose. One watcher labels the tableau, another tags out the longest-standing player and takes their pose. Tableau continues with new label.",
labels: ["Harmony", "Spontaneity"]
},
{
text: "Bunny Bunny",
description: "In a circle, “bunny” puts hands on head (bunny ears), faces next, both say “bunny bunny” in sync (sending & receiving); neighbors do “tikky tokky”—forearms up, elbows in, bounce side to side with legs apart. Receiver becomes bunny. Four “bunny bunny”s per pass.",
labels: ["Harmony", "Listening"]
},
{
text: "Energy Circle",
description: "One person does a sound/movement; next person matches it, then creates and passes a new one down the circle. Continues around.",
labels: ["Harmony", "Listening"]
},
{
text: "Follow the Follower",
description: "Circle. Everyone copies a movement; anyone can change the movement at any time. No fixed leader—spontaneous changes.",
labels: ["Harmony", "Listening"]
}
]
}

// =======================================================

const LIST_KEYS = Object.keys(LISTS); // ["Locations", "Occupations", ...etc]

export default function IceBreakerApp() {
const [activeKey, setActiveKey] = useState(LIST_KEYS[0]);
const [currentPrompt, setCurrentPrompt] = useState(null);

const containerRef = useRef(null);

useEffect(() => {
if (containerRef.current) containerRef.current.focus();
}, []);

// Get a random prompt from the current list
const getRandomPrompt = () => {
const list = LISTS[activeKey];
if (!list || list.length === 0) return null;
return list[Math.floor(Math.random() * list.length)];
};

// Update prompt on category change
useEffect(() => {
setCurrentPrompt(getRandomPrompt());
// eslint-disable-next-line
}, [activeKey]);

const handleClick = () => {
setCurrentPrompt(getRandomPrompt());
};

return (
<div
ref={containerRef}
tabIndex={0}
role="button"
onClick={handleClick}
onKeyDown={(e) => {
if (e.key === "Enter" || e.key === " ") handleClick();
}}
style={{
        height: "100dvh",           // Modern fix
        minHeight: "100svh",        // Fallback for mobile
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f3f4f6",
	boxSizing: "border-box",
	outline: "none",
      }}
    >
      <div
  style={{
    backgroundColor: "white",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    padding: "1rem",
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
    width: "100%",                 // <-- this!
    boxSizing: "border-box"        // <-- this!
  }}
>
  {LIST_KEYS.map((key) => (
    <button
      key={key}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        border: activeKey === key ? "2px solid #2563eb" : "1px solid #d1d5db",
        backgroundColor: activeKey === key ? "#2563eb" : "white",
        color: activeKey === key ? "white" : "#4b5563",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: "1rem",
        userSelect: "none",
        minWidth: "120px",          // <-- keep a tap target, but NOT 'flex'
        margin: 0
      }}
      aria-pressed={activeKey === key}
      onClick={(e) => {
        e.stopPropagation();
        setActiveKey(key);
      }}
    >
      {key}
    </button>
  ))}
</div>


      <main
  style={{
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",
    textAlign: "center",
    userSelect: "none"
  }}
>
  {currentPrompt ? (
    <>
      <h1 style={{ fontSize: "2rem", fontWeight: "600", color: "#1f2937", maxWidth: "40rem" }}>
        {currentPrompt.text}
      </h1>
      {/* Description, if any */}
      {currentPrompt.description && (
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "1rem",
            color: "#6b7280",
            maxWidth: "34rem",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {currentPrompt.description}
        </p>
      )}
      {/* Labels, if any */}
      {currentPrompt.labels && currentPrompt.labels.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.5rem",
            marginBottom: "0.25rem"
          }}
        >
          {currentPrompt.labels.map((label) => (
            <span
              key={label}
              style={{
                background: "#e0e7ff",
                color: "#3730a3",
                borderRadius: "999px",
                padding: "0.2em 0.9em",
                fontSize: "0.85em",
                fontWeight: 600,
                letterSpacing: "0.04em",
                userSelect: "text",
                boxShadow: "0 1px 2px rgba(56,78,255,0.06)"
              }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
      <p
        style={{
          marginTop: "1rem",
          textTransform: "uppercase",
          fontWeight: "700",
          letterSpacing: "0.05em",
          color: "#6b7280",
          fontSize: "1rem"
        }}
      >
        {activeKey}
      </p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "#9ca3af", userSelect: "text" }}>
        (Click anywhere or press Enter/Space to see another prompt)
      </p>
    </>
  ) : (
    <p style={{ color: "#6b7280", marginTop: "1.5rem", userSelect: "text" }}>
      No prompts available for this category.
    </p>
  )}
</main>
    </div>
  );
}
