use topics;
db.dropDatabase();

db.sharks.insertMany([
  {
    species: "Great White",
    diet: "Prey upon fish (e.g. tuna, rays, other sharks), cetaceans (i.e., dolphins, porpoises, whales), pinnipeds (e.g. seals, fur seals, and sea lions), sea turtles, sea otters and seabirds.",
    population: 3500,
    size: "Female: 4.5 – 6.4 m (Adult), Male: 3.5 – 4 m (Adult)",
    picture:,
    location: "USA, South Africa, Japan, Oceania, Chile, and the Mediterranean",
    Fact: "The great white is at the top of the food chain and has few threats in the ocean."
  },
  {
    species: "Great Hammerhead",
    diet: "Fish (including other sharks), squid, octopus, and crustaceans",
    population:,
    size: "6m",
    picture:,
    location: "Colombia, Costa Rica (Cocos Island), and Hawaii.",
    Fact: "The Great Hammerhead weighs about the same as a piano."
  },
  {
    species: "Tiger",
    diet: "",
    population:,
    size: "",
    picture:,
    location: "",
    Fact: ""
  },
  {
    species: "Whale",
    diet: "",
    population:,
    size: "",
    picture:,
    location: "",
    Fact: ""
  },
  {
    species: "Bull",
    diet: "",
    population:,
    size: "",
    picture:,
    location: "",
    Fact: ""
  },
  {
    species: "Blue",
    diet: "",
    population:,
    size: "",
    picture:,
    location: "",
    Fact: ""
    }
]);
