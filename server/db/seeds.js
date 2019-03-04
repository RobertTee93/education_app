use topics;
db.dropDatabase();

db.sharks.insertMany([
  {
    category: "shark",
    species: "Great White",
    diet: "Prey upon fish (e.g. tuna, rays, other sharks), cetaceans (i.e., dolphins, porpoises, whales), pinnipeds (e.g. seals, fur seals, and sea lions), sea turtles, sea otters and seabirds.",
    size: "Female: 4.5 – 6.4 m (Adult), Male: 3.5 – 4 m (Adult)",
    picture: "src/assets/shark_pictures/Great_white_shark.jpg",
    habitat: "Great white sharks live in coastal and offshore water of between 12 to 24 degrees",
    fact: "The great white is at the top of the food chain and has few threats in the ocean.",
    markers:[[-35.327345,136.1008431],[34.5849117,19.3348983],[29.0185055,-118.4330882],[-46.986053,167.558006],[26.004858,-81.5987127]]
  },
  {
    category: "shark",
    species: "Great Hammerhead",
    diet: "Fish (including other sharks), squid, octopus, and crustaceans. Stingrays are their favorite.",
    size: "6m",
    picture: "src/assets/shark_pictures/great_hammerhead.jpg",
    habitat: "In tropical and warm waters worldwide, inhabiting coastal areas.",
    fact: "The Great Hammerhead weighs about the same as a piano."
  },
  {
    category: "shark",
    species: "Tiger",
    diet: "The Tiger shark has the widest diet of any sharks. This includes crustaceans, fish, seals, birds, squid, turtles, sea snakes, dolphins and sometimes smaller sharks",
    size: "5m",
    picture: "src/assets/shark_pictures/tiger_shark.jpg",
    habitat: "Tiger sharks found in tropical and warm water seas.",
    fact: "Tiger sharks are named that way because of their tiger-like, black stripes that cover the body of young animals"
  },
  {
    category: "shark",
    species: "Whale",
    diet: "The Whale Shark is filter feeder. They only on plankton and small fishes",
    size: "10m",
    picture: "src/assets/shark_pictures/whale_shark.jpg",
    habitat: "The whale shark inhabits all tropical and warm-temperate seas.",
    fact: " Whale sharks have about 3,000 tiny teeth but they don't use those teeth to eat."
  },
  {
    category: "shark",
    species: "Bull",
    diet: "The Bull shark eats bony fish and small sharks and stingrays. ",
    size: "3.5m",
    picture: "src/assets/shark_pictures/bull_shark.jpg",
    habitat: "The bull shark is commonly found worldwide in coastal areas of warm oceans, in rivers and lakes.",
    fact: "Bull sharks have the strongest bite of all the sharks"
  },
  {
    category: "shark",
    species: "Blue",
    diet: "Blue Sharks feed on small fish and squid",
    size: "3m",
    picture: "src/assets/shark_pictures/blue_shark.jpg",
    habitat: "The blue shark is found worldwide in deep temperate and tropical water",
    fact: "Blue sharks live in groups called Schools"
    }
]);
db.shark_questions.insertMany([
  {
    category: "shark",
    question:"What does the Great Hammerhead shark weigh the same as? ",
    correct_answer: "Piano",
    incorrect_answers: [
      "Feather",
      "Brick",
      "Chair"
    ]
  },
  {
    category: "shark",
    question:"What do you call a group of Blue Sharks?",
    correct_answer: "School",
    incorrect_answers: [
      "Team",
      "Class",
      "Pack"
    ]
  },
  {
    category: "shark",
    question:"Which shark has the strongest bite?",
    correct_answer: "Bull Shark",
    incorrect_answers: [
      "Whale Shark",
      "Great White Shark",
      "Tiger Shark"
    ]
  },
  {
    category: "shark",
    question:"Which shark is top of the food chain?",
    correct_answer: "Great White Shark",
    incorrect_answers: [
      "Bull Shark",
      "Blue Shark",
      "Whale Shark"
    ]
  },
  {
    category: "shark",
    question:"How may teeth does the Whale Shark have?",
    correct_answer: "3000",
    incorrect_answers: [
      "3",
      "30",
      "300"
    ]
  },
  {
    category: "shark",
    question:"What is a Great Hammerhead's favourite food?",
    correct_answer: "Stingrays",
    incorrect_answers: [
      "Cheese",
      "Garbage",
      "Squid"
    ]
  },
  {
    category: "shark",
    question:"Where in the world can Blue Shark be found?",
    correct_answer: "Worldwide",
    incorrect_answers: [
      "Africa",
      "North America",
      "Europe"
    ]
  },
  {
    category: "shark",
    question:"Which shark is the biggest?",
    correct_answer: "Whale Shark",
    incorrect_answers: [
      "Tiger Shark",
      "Great White",
      "Blue Shark"
    ]
  },
  {
    category: "shark",
    question:"Where does the Tiger Shark get it's name?",
    correct_answer: "It has black stripes on it's body when it is young",
    incorrect_answers: [
      "It is orange",
      "It has whiskers",
      "It has a loud roar"
    ]
  },
  {
    category: "shark",
    question:"What type of feeder is a Whale Shark?",
    correct_answer: "Filter",
    incorrect_answers: [
      "Angry",
      "Frantic",
      "Lazy"
    ]
  }
]);
db.big_cats.insertMany([
  {
    category: "big_cat",
    species: "Lion",
    diet: "Lions usually hunt at night. Their prey includes antelopes, buffaloes, zebras, young elephants, rhinos, hippos, wild hogs, crocodiles and giraffes",
    size: "2.5 metres",
    picture: "src/assets/big_cats/Lion.jpeg",
    habitat: "Lions live in a variety of habitats but prefer grassland, savanna, dense scrub, and open woodland.",
    fact: "Lions sleep upto 21 hours a day.",
    markers:[[-11.1691341,13.2820659],[-22.2706745,20.1926113],[-18.400794,26.7758232],[-6.3424199,30.4926098],[6.6112383,16.4392346],[7.8496852,25.197542],[21.1330012,70.7843614]]
  },
  {
    category: "big_cat",
    species: "Tiger",
    diet: "Tiger's favourite food is deer and wild boar.",
    size: "3.3 metres - the biggest of the cat species",
    picture: "src/assets/big_cats/Tiger.jpg",
    habitat: "Wild tigers mostly roam forests and savannas.",
    fact: "A group of tigers is known as an ‘ambush'.",
    markers:[[20.7708612,73.7235274],[49.7971019,68.7730145],[-2.2761626,99.469767],
    [4.1389113,105.1205635],[28.3838381,81.8863335],[13.0110467,96.9932673],
    [23.4956277,88.1003508],[27.472449,89.314613],[34.4526073,86.0604216],
    [15.7583278,101.4137798],[18.1674931,99.3631491]]
  },
  {
    category: "big_cat",
    species: "Leopard",
    diet: "Leopards eat whatever they can catch this includes boars, deers and gazelles. Sometimes they will eat fish, birds and rodents.",
    size: "1.6 metres",
    picture: "src/assets/big_cats/Leopard.jpeg",
    habitat: "These large cats can live in almost any type of habitat, including rainforests, deserts, woodlands, grassland savannas, forests, mountain habitats, coastal scrubs, shrub lands and swampy areas. In fact, leopards live in more places than any other large cat.",
    fact: "Leopards are super springy, too, and can leap 6m forward through the air – that’s the length of three adults lying head to toe!",
    markers:[[27.8194451,-7.3504867],[15.4114369,14.2385165],[26.8447929,26.3828145],
    [11.8141204,42.0668988],[9.9308345,-13.7042942],[7.9039257,-3.2748003],
    [17.5565521,3.5842581],[-22.8935941,13.8713943],[-1.9421909,29.3199604],
    [14.4736139,-16.7611677],[5.2419987,41.8065454],[-26.5153368,30.9023259],
    [-3.9615075,12.6858127],[8.6093398,-1.4119526],[1.372604,30.0588161],
    [-18.9968794,26.9087779],[33.8615883,63.2114539],[34.4526073,86.0604216],
    [23.4956277,88.1003508],[20.7708612,73.7235274],[18.1674931,99.3631491],
    [18.801744,87.6391293],[4.1389113,105.1205635],[28.3838381,81.8863335],
    [21.3968936,51.6566536],[30.2919588,64.8550108]]
  },
  {
    category: "big_cat",
    species: "Cheetah",
    diet: "Cheetahs focus on prey that can be attacked at speed, their diet consists mainly of gazelles.",
    size: "1.5 metres",
    picture: "src/assets/big_cats/cheetah.jpeg",
    habitat: "Cheetah's habitats including shrublands, grasslands, savannahs, and temperate to hot deserts.",
    fact: "The Cheetah is fastest land animal in the world, it can reach 112km/h in just three seconds – that's faster than a sports car accelerates!",
    markers:[[-11.1691341,13.2820659],[-22.8935941,13.8713943],[-18.9968794,26.9087779],
    [-22.2706745,20.1926113],[-34.2790647,18.2524283],[-18.400794,26.7758232]]
  },
  {
    category: "big_cat",
    species: "Cougars",
    diet: "Cougars typically prey on deer, elk, moose, mountain goats, and wild sheep. Deer is their favourite prey.",
    size: "2.4 metres",
    picture: "src/assets/big_cats/cougar.jpg",
    habitat: "Cougars like forested areas in coastal swamps, rocky cliffs and mountain ranges as their habitat.",
    fact: "The Cougar cannot roar like other big cats.",
    markers:[[50.885088,-130.1181112],[36.2480024,-113.711586],
    [-3.214841,-68.7640281]]
  },
  {
    category: "big_cat",
    species: "Jaguar",
    diet: "Jaguars eat anything they can catch including crocodiles, snakes, monkeys, deer, turtles, eggs, frogs and fish.",
    size: "2 metres",
    picture: "src/assets/big_cats/jaguar.jpg",
    habitat: "Jaguars prefer wet lowland habitats, swampy savannas or tropical rain forests. ",
    fact: "The Jaguar is the 3rd largest of the big cats after the tiger and the lion.",
    markers:[[36.2480024,-113.711586],[23.3140013,-111.6453834],
    [-3.7630989,-69.4451362]]
    }
]);
db.big_cat_questions.insertMany([
  {
    category: "big_cat",
    question:"Which big cat cannot roar?",
    correct_answer: "Jaguar",
    incorrect_answers: [
      "Tiger",
      "Lion",
      "Cheetah"
    ]
  },
  {
    category: "big_cat",
    question:"Which big cat is the fastest animal in the world?",
    correct_answer: "Cheetah",
    incorrect_answers: [
      "Snail",
      "Hare",
      "Lion"
    ]
  },
  {
    category: "big_cat",
    question:"Which is the biggest of the cat species? ",
    correct_answer: "Tiger",
    incorrect_answers: [
      "Lion",
      "Jaguar",
      "Leopard"
    ]
  },
  {
    category: "big_cat",
    question:"What are a group of Tigers called?",
    correct_answer: "Ambush",
    incorrect_answers: [
      "Clan",
      "Pride",
      "Club"
    ]
  },
  {
    category: "big_cat",
    question:"What is the Cougars favourite thing to eat?",
    correct_answer: "Deer",
    incorrect_answers: [
      "Cheese",
      "Crisps",
      "Fish"
    ]
  },
  {
    category: "big_cat",
    question:"What is the longest time a Lion can sleep in a day?",
    correct_answer: "21 hours",
    incorrect_answers: [
      "2 hours",
      "12 hours",
      "18 hours"
    ]
  },
  {
    category: "big_cat",
    question:"How far can Leopards jump in the air?",
    correct_answer: "6 metres",
    incorrect_answers: [
      "6 centimetres",
      "60 centimetres",
      "1 metre"
    ]
  },
  {
    category: "big_cat",
    question:"Which big cat lives in the widest variety of places around the world?",
    correct_answer: "Leopard",
    incorrect_answers: [
      "Lion",
      "Tiger",
      "Cheetah"
    ]
  },
  {
    category: "big_cat",
    question:"When do Lions usually hunt?",
    correct_answer: "Night-time",
    incorrect_answers: [
      "Lunch-time",
      "Morning",
      "Afternoon"
    ]
  },
  {
    category: "big_cat",
    question:"Which big cat is the 3rd largest after the Tiger and Lion?",
    correct_answer: "Jaguar",
    incorrect_answers: [
      "Cheetah",
      "Leopard",
      "Cougar"
    ]
  }
]);
db.math_questions.insertMany([
  {
    category: "math",
    question:"6 X 7 ",
    correct_answer: "42",
    incorrect_answers: [
      "46",
      "35",
      "49"
    ]
  },
  {
    category: "math",
    question:"8 X 8 ",
    correct_answer: "64",
    incorrect_answers: [
      "56",
      "72",
      "68"
    ]
  },
  {
    category: "math",
    question:"5 X 9 ",
    correct_answer: "45",
    incorrect_answers: [
      "50",
      "40",
      "43"
    ]
  },
  {
    category: "math",
    question:"7 X 3 ",
    correct_answer: "21",
    incorrect_answers: [
      "27",
      "32",
      "34"
    ]
  },
  {
    category: "math",
    question:"4 X 8",
    correct_answer: "32",
    incorrect_answers: [
      "20",
      "28",
      "36"
    ]
  },
  {
    category: "math",
    question:"6 X 6",
    correct_answer: "36",
    incorrect_answers: [
      "25",
      "49",
      "32"
    ]
  },
  {
    category: "math",
    question:"11 x 11",
    correct_answer: "121",
    incorrect_answers: [
      "111",
      "101",
      "122"
    ]
  },
  {
    category: "math",
    question:"4 x 12",
    correct_answer: "48",
    incorrect_answers: [
      "36",
      "42",
      "60"
    ]
  },
  {
    category: "math",
    question:"10 x 10",
    correct_answer: "100",
    incorrect_answers: [
      "90",
      "80",
      "110"
    ]
  },
  {
    category: "math",
    question:"9 x 7",
    correct_answer: "63",
    incorrect_answers: [
      "61",
      "69",
      "79"
    ]
  }
  ]);
