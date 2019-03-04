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
    fact: "The great white is at the top of the food chain and has few threats in the ocean."
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
    fact: "Lions sleep upto 21 hours a day."
  },
  {
    category: "big_cat",
    species: "Tiger",
    diet: "Tiger's favourite food is deer and wild boar.",
    size: "3.3 metres - the biggest of the cat species",
    picture: "src/assets/big_cats/Tiger.jpg",
    habitat: "Wild tigers mostly roam forests and savannas.",
    fact: "A group of tigers is known as an ‘ambush'."
  },
  {
    category: "big_cat",
    species: "Leopard",
    diet: "Leopards eat whatever they can catch this includes boars, deers and gazelles. Sometimes they will eat fish, birds and rodents.",
    size: "1.6 metres",
    picture: "src/assets/big_cats/Leopard.jpeg",
    habitat: "These large cats can live in almost any type of habitat, including rainforests, deserts, woodlands, grassland savannas, forests, mountain habitats, coastal scrubs, shrub lands and swampy areas. In fact, leopards live in more places than any other large cat.",
    fact: "Leopards are super springy, too, and can leap 6m forward through the air – that’s the length of three adults lying head to toe!"
  },
  {
    category: "big_cat",
    species: "Cheetah",
    diet: "Cheetahs focus on prey that can be attacked at speed, their diet consists mainly of gazelles.",
    size: "1.5 metres",
    picture: "src/assets/big_cats/cheetah.jpeg",
    habitat: "Cheetah's habitats including shrublands, grasslands, savannahs, and temperate to hot deserts.",
    fact: "The Cheetah is fastest land animal in the world, it can reach 112km/h in just three seconds – that's faster than a sports car accelerates!"
  },
  {
    category: "big_cat",
    species: "Cougars",
    diet: "Cougars typically prey on deer, elk, moose, mountain goats, and wild sheep. Deer is their favourite prey.",
    size: "2.4 metres",
    picture: "src/assets/big_cats/cougar.jpg",
    habitat: "Cougars like forested areas in coastal swamps, rocky cliffs and mountain ranges as their habitat.",
    fact: "The Cougar cannot roar like other big cats."
  },
  {
    category: "big_cat",
    species: "Jaguar",
    diet: "Jaguars eat anything they can catch including crocodiles, snakes, monkeys, deer, turtles, eggs, frogs and fish.",
    size: "2 metres",
    picture: "src/assets/big_cats/jaguar.jpg",
    habitat: "Jaguars prefer wet lowland habitats, swampy savannas or tropical rain forests. ",
    fact: "The Jaguar is the 3rd largest of the big cats after the tiger and the lion."
    }
]);
db.cat_questions.insertMany([
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
