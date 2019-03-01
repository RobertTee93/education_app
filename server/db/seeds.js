use topics;
db.dropDatabase();

db.sharks.insertMany([
  {
    species: "Great White",
    diet: "Prey upon fish (e.g. tuna, rays, other sharks), cetaceans (i.e., dolphins, porpoises, whales), pinnipeds (e.g. seals, fur seals, and sea lions), sea turtles, sea otters and seabirds.",
    size: "Female: 4.5 – 6.4 m (Adult), Male: 3.5 – 4 m (Adult)",
    picture: "",
    habitat: "Great white sharks live in coastal and offshore water of between 12 to 24 degrees",
    Fact: "The great white is at the top of the food chain and has few threats in the ocean."
  },
  {
    species: "Great Hammerhead",
    diet: "Fish (including other sharks), squid, octopus, and crustaceans. Stingrays are their favorite.",
    size: "6m",
    picture: "",
    habitat: "In tropical and warm waters worldwide, inhabiting coastal areas.",
    Fact: "The Great Hammerhead weighs about the same as a piano."
  },
  {
    species: "Tiger",
    diet: "The Tiger shark has the widest diet of any sharks. This includes crustaceans, fish, seals, birds, squid, turtles, sea snakes, dolphins and sometimes smaller sharks",
    size: "5m",
    picture: "",
    habitat: "Tiger sharks found in tropical and warm water seas.",
    Fact: "Tiger sharks are named that way because of their tiger-like, black stripes that cover the body of young animals"
  },
  {
    species: "Whale",
    diet: "The Whale Shark is filter feeder. They only on plankton and small fishes",
    size: "10m",
    picture: "",
    habitat: "The whale shark inhabits all tropical and warm-temperate seas.",
    Fact: " Whale sharks have about 3,000 tiny teeth but they don't use those teeth to eat."
  },
  {
    species: "Bull",
    diet: "The Bull shark eats bony fish and small sharks and stingrays. ",
    size: "3.5",
    picture: "",
    habitat: "The bull shark is commonly found worldwide in coastal areas of warm oceans, in rivers and lakes.",
    Fact: "Bull sharks have the strongest bite of all the sharks"
  },
  {
    species: "Blue",
    diet: "Blue Sharks feed on small fish and squid",
    size: "3m",
    picture: "",
    habitat: "The blue shark is found worldwide in deep temperate and tropical water",
    Fact: "Blue sharks live in groups called Schools"
    }
]);
