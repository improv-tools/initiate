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
    { text: "Fountain park" }, { text: "Mountain meadow" }, { text: "Cliffside path" }, { text: "Coral reef" },
    { text: "Hidden glen" }, { text: "Bamboo grove" }, { text: "Dune sea" }, { text: "Vineyard" },
    { text: "Sunset overlook" }, { text: "Water tower" }, { text: "High-rise office" }, { text: "Science lab" },
    { text: "Dockyard" }, { text: "Sky bridge" }, { text: "Cave mouth" }, { text: "Old fort" },
    { text: "City rooftop" }, { text: "Urban plaza" }, { text: "Open prairie" }, { text: "Cypress swamp" },
    { text: "Gas station" }, { text: "Schoolyard" }, { text: "Forest path" }, { text: "Seaside dock" },
    { text: "Mountain pass" }, { text: "Wheat field" }, { text: "Country lane" }, { text: "Downtown alley" },
    { text: "Suburban street" }, { text: "Jungle trail" }, { text: "Hidden waterfall" }, { text: "Cloud forest" }
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
    { text: "Quizmaster" }, { text: "Referee" }, { text: "Sand sculptor" }, { text: "Swordsmith" }, { text: "Travel agent" },
    { text: "Uber driver" }, { text: "Vlogger" }, { text: "Wildlife rehabilitator" }, { text: "X-ray technician" }, { text: "Yacht captain" },
    { text: "Zamboni driver" }, { text: "Perfume tester" }, { text: "Costume designer" }, { text: "Fireworks technician" }, { text: "Wedding photographer" },
    { text: "Freelance writer" }, { text: "Voice coach" }, { text: "Pet detective" }, { text: "Escape room designer" }, { text: "Museum guide" },
    { text: "Robot operator" }, { text: "Mobile app developer" }, { text: "Cartoonist" }, { text: "House sitter" }, { text: "Children's author" },
    { text: "Fortune teller" }, { text: "Food stylist" }, { text: "Ice fisherman" }, { text: "Street vendor" }, { text: "Tattoo remover" }
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
    { text: "Intense" }, { text: "Resourceful" }, { text: "Elegant" }, { text: "Hesitant" }, { text: "Spirited" },
    { text: "Gentle" }, { text: "Passionate" }, { text: "Gracious" }, { text: "Blunt" }, { text: "Worrisome" },
    { text: "Obedient" }, { text: "Reckless" }, { text: "Tactful" }, { text: "Genuine" }, { text: "Daring" },
    { text: "Flaky" }, { text: "Transparent" }, { text: "Opaque" }, { text: "Studious" }, { text: "Carefree" },
    { text: "Reserved" }, { text: "Composed" }, { text: "Distracted" }, { text: "Radiant" }, { text: "Pensive" },
    { text: "Vivid" }, { text: "Boisterous" }, { text: "Melancholy" }, { text: "Sprightly" }, { text: "Rosy" },
    { text: "Vigilant" }, { text: "Solitary" }, { text: "Welcoming" }, { text: "Demanding" }, { text: "Tense" },
    { text: "Airy" }, { text: "Dense" }, { text: "Artful" }, { text: "Cheery" }, { text: "Gloomy" },
    { text: "Content" }, { text: "Jealous" }, { text: "Creative" }, { text: "Unusual" }, { text: "Majestic" },
    { text: "Regal" }, { text: "Uptight" }, { text: "Dreamy" }, { text: "Practical" }, { text: "Lively" },
    { text: "Comical" }, { text: "Frantic" }, { text: "Drowsy" }, { text: "Eager" }, { text: "Inquisitive" },
    { text: "Orderly" }, { text: "Proud" }, { text: "Smug" }, { text: "Playful" }, { text: "Determined" },
    { text: "Distraught" }, { text: "Balanced" }, { text: "Mellow" }, { text: "Exuberant" }, { text: "Innocent" },
    { text: "Crafty" }, { text: "Stern" }, { text: "Rebellious" }, { text: "Perky" }, { text: "Sly" },
    { text: "Sarcastic" }, { text: "Tactless" }, { text: "Chipper" }, { text: "Peppy" }, { text: "Ecstatic" },
    { text: "Elegant" }, { text: "Hopeful" }, { text: "Flamboyant" }, { text: "Compassionate" }, { text: "Wicked" }
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
    { text: "Intense" }, { text: "Resourceful" }, { text: "Elegant" }, { text: "Hesitant" }, { text: "Spirited" },
    { text: "Gentle" }, { text: "Passionate" }, { text: "Gracious" }, { text: "Blunt" }, { text: "Worrisome" },
    { text: "Obedient" }, { text: "Reckless" }, { text: "Tactful" }, { text: "Genuine" }, { text: "Daring" },
    { text: "Flaky" }, { text: "Transparent" }, { text: "Opaque" }, { text: "Studious" }, { text: "Carefree" },
    { text: "Reserved" }, { text: "Composed" }, { text: "Distracted" }, { text: "Radiant" }, { text: "Pensive" },
    { text: "Vivid" }, { text: "Boisterous" }, { text: "Melancholy" }, { text: "Sprightly" }, { text: "Rosy" },
    { text: "Vigilant" }, { text: "Solitary" }, { text: "Welcoming" }, { text: "Demanding" }, { text: "Tense" },
    { text: "Airy" }, { text: "Dense" }, { text: "Artful" }, { text: "Cheery" }, { text: "Gloomy" },
    { text: "Content" }, { text: "Jealous" }, { text: "Creative" }, { text: "Unusual" }, { text: "Majestic" },
    { text: "Regal" }, { text: "Uptight" }, { text: "Dreamy" }, { text: "Practical" }, { text: "Lively" },
    { text: "Comical" }, { text: "Frantic" }, { text: "Drowsy" }, { text: "Eager" }, { text: "Inquisitive" },
    { text: "Orderly" }, { text: "Proud" }, { text: "Smug" }, { text: "Playful" }, { text: "Determined" },
    { text: "Distraught" }, { text: "Balanced" }, { text: "Mellow" }, { text: "Exuberant" }, { text: "Innocent" },
    { text: "Crafty" }, { text: "Stern" }, { text: "Rebellious" }, { text: "Perky" }, { text: "Sly" },
    { text: "Sarcastic" }, { text: "Tactless" }, { text: "Chipper" }, { text: "Peppy" }, { text: "Ecstatic" },
    { text: "Elegant" }, { text: "Hopeful" }, { text: "Flamboyant" }, { text: "Compassionate" }, { text: "Wicked" }
  ],
    "Other Nouns": [
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
    { text: "Helmet" }, { text: "Star" }, { text: "Flag" }, { text: "Globe" }, { text: "Ribbon" },
    { text: "Parachute" }, { text: "Toy car" }, { text: "Snow globe" }, { text: "Mug" }, { text: "Poster" },
    { text: "Balloon" }, { text: "Crown" }, { text: "Badge" }, { text: "Binoculars" }, { text: "Sculpture" },
    { text: "Cage" }, { text: "Trapdoor" }, { text: "Swordfish" }, { text: "Hat" }, { text: "Crystal" },
    { text: "Letter" }, { text: "Diary" }, { text: "Medallion" }, { text: "Fan" }, { text: "Anchor" },
    { text: "Sundial" }, { text: "Flask" }, { text: "Maple leaf" }, { text: "Firework" }, { text: "Mask" },
    { text: "Puzzle cube" }, { text: "Chalkboard" }, { text: "Boomerang" }, { text: "Board game" }, { text: "Statuette" },
    { text: "Trophy" }, { text: "Hourglass" }, { text: "Paint palette" }, { text: "Playing card" }, { text: "Magnifying glass" },
    { text: "Whistle" }, { text: "Yarn ball" }, { text: "Toothbrush" }, { text: "Flashlight" }, { text: "Stapler" },
    { text: "Snowflake" }, { text: "Scarf" }, { text: "Wallet" }, { text: "Easel" }, { text: "Suit" },
    { text: "Envelope" }, { text: "Curtain" }, { text: "Ruler" }, { text: "Earring" }, { text: "Thermometer" },
    { text: "Guitar" }, { text: "Vase" }, { text: "Whisk" }, { text: "Cabinet" }, { text: "Lock" },
    { text: "Egg timer" }, { text: "Radio" }, { text: "Baton" }, { text: "Pipe" }, { text: "Plush toy" },
    { text: "Notebook" }, { text: "Router" }, { text: "Shovel" }, { text: "Soap" }, { text: "Pot" },
    { text: "Torch" }, { text: "Walking stick" }, { text: "Apron" }, { text: "Pillow" }, { text: "Spoon" },
    { text: "Hairbrush" }, { text: "Helmet" }, { text: "Comb" }, { text: "Bottle" }, { text: "Pen" },
    { text: "Candle holder" }, { text: "Basketball" }, { text: "Chess piece" }, { text: "Bookmark" }, { text: "Puzzle box" },
    { text: "Bin" }, { text: "Calendar" }, { text: "Backpack" }, { text: "Headphones" }, { text: "Leaf" },
    { text: "Crayon" }, { text: "Glove" }, { text: "Lockbox" }, { text: "Keychain" }, { text: "Trinket" },
    { text: "Pinwheel" }, { text: "String" }, { text: "Chalk" }, { text: "Laptop" }, { text: "Umbrella" }
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
    { text: "Kind" }, { text: "Lap" }, { text: "Leaves" }, { text: "Leaf" }, { text: "Letter" },
    { text: "Light" }, { text: "Line" }, { text: "Log" }, { text: "Match" }, { text: "Mean" },
    { text: "Mine" }, { text: "Mole" }, { text: "Mug" }, { text: "Nail" }, { text: "Net" },
    { text: "Order" }, { text: "Pad" }, { text: "Page" }, { text: "Palm" }, { text: "Park" },
    { text: "Pass" }, { text: "Patch" }, { text: "Pen" }, { text: "Pitch" }, { text: "Pitcher" },
    { text: "Plain" }, { text: "Plane" }, { text: "Play" }, { text: "Plot" }, { text: "Point" },
    { text: "Pole" }, { text: "Pool" }, { text: "Port" }, { text: "Post" }, { text: "Pot" },
    { text: "Present" }, { text: "Press" }, { text: "Punch" }, { text: "Quarry" }, { text: "Race" },
    { text: "Racket" }, { text: "Range" }, { text: "Right" }, { text: "Ring" }, { text: "Rock" },
    { text: "Rose" }, { text: "Row" }, { text: "Sail" }, { text: "Saw" }, { text: "Scale" },
    { text: "Seal" }, { text: "Season" }, { text: "Set" }, { text: "Shower" }, { text: "Sign" },
    { text: "Sink" }, { text: "Skip" }, { text: "Slip" }, { text: "Spade" }, { text: "Spot" },
    { text: "Spring" }, { text: "Staff" }, { text: "Stamp" }, { text: "Star" }, { text: "State" },
    { text: "Stalk" }, { text: "Stick" }, { text: "Stock" }, { text: "Suit" }, { text: "Table" },
    { text: "Tank" }, { text: "Tap" }, { text: "Tear" }, { text: "Tie" }, { text: "Toast" },
    { text: "Train" }, { text: "Trunk" }, { text: "Trip" }, { text: "Watch" }, { text: "Wave" },
    { text: "Well" }, { text: "Whip" }, { text: "Yard" }
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f3f4f6"
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
    flexWrap: "wrap", // <-- add this!
    gap: "0.5rem",
    justifyContent: "center"
  }}
>
  {LIST_KEYS.map((key) => (
    <button
      key={key}
      // ...rest is the same
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
        flex: "1 1 120px",    // <-- makes buttons shrink/grow
        minWidth: "110px",    // <-- ensures minimum tap area
        maxWidth: "180px",    // <-- keeps things readable
        margin: "0"
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
          padding: "1.5rem",
          textAlign: "center",
          userSelect: "none"
        }}
      >
        {currentPrompt ? (
          <>
            <h1 style={{ fontSize: "2rem", fontWeight: "600", color: "#1f2937", maxWidth: "40rem" }}>
              {currentPrompt.text}
            </h1>
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
