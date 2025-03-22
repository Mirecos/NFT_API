import express from 'express';
import cors from 'cors';

export const app = express();

const jsonData = [
  {
      "name": "Starry Night",
      "description": "A beautiful depiction of a starry night by Vincent van Gogh.",
      "image": "https://mirecos.github.io/WEB3---Images/0.jpg"
  },
  {
      "name": "Crying eye",
      "description": "Filled with tears, this eye is a symbol of sadness and pain.",
      "image": "https://mirecos.github.io/WEB3---Images/1.jpg"
  },
  {
      "name": "Blue medusa",
      "description": "Two blue medasas with a white background.",
      "image": "https://mirecos.github.io/WEB3---Images/2.jpg"
  },
  {
      "name": "Fire skull",
      "description": "A skull on fire with a black background.",
      "image": "https://mirecos.github.io/WEB3---Images/3.jpg"
  },
  {
      "name": "Wiwiwi",
      "description": "A cat that proably said wiwiwi.",
      "image": "https://mirecos.github.io/WEB3---Images/4.jpg"
  },
  {
      "name": "Tournesols",
      "description": "A bunch of sunflowers by Vincent van Drugs.",
      "image": "https://mirecos.github.io/WEB3---Images/5.jpg"
  },
  {
      "name": "A cup of teeeea",
      "description": "English people be like.",
      "image": "https://mirecos.github.io/WEB3---Images/6.jpg"
  },
  {
      "name": "Papapa la caisse",
      "description": "A beautiful car driving on a road.",
      "image": "https://mirecos.github.io/WEB3---Images/7.jpg"
  },
  {
      "name": "Duck duck",
      "description": "This duck is a symbol of peace and tranquility.",
      "image": "https://mirecos.github.io/WEB3---Images/8.jpg"
  },
  {
      "name": "Inside the train",
      "description": "Life is a journey, enjoy the ride.",
      "image": "https://mirecos.github.io/WEB3---Images/9.jpg"
  },
  {
      "name": "Lava lamps",
      "description": "Lava lamps are really cool.",
      "image": "https://mirecos.github.io/WEB3---Images/10.jpg"
  }
];

const minecraftCollection = [
    {
        "name": "Trident",
        "description": "A legendary weapon forged in the depths of the ocean, capable of summoning the power of the seas.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/0.png"
    },
    {
        "name": "Golden apple",
        "description": "An enchanted fruit blessed by the gods, granting immense power and vitality to those who consume it.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/1.png"
    },
    {
        "name": "Compass",
        "description": "A mystical device that always points to the heart of the world, guiding adventurers on their epic quests.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/2.png"
    },
    {
        "name": "Dragon's breath",
        "description": "A rare and potent essence collected from the breath of a mighty dragon, used in powerful alchemical concoctions.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/3.png"
    },
    {
        "name": "Egg",
        "description": "A mysterious egg with the potential to hatch into a magical creature, holding untold secrets within.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/4.png"
    },
    {
        "name": "Netherite sword",
        "description": "A sword forged from the rarest materials found in the fiery depths of the Nether, unmatched in strength and durability.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/5.png"
    },
    {
        "name": "Snowball",
        "description": "A playful yet powerful projectile formed from enchanted snow, capable of freezing enemies in their tracks.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/6.png"
    },
    {
        "name": "Flint",
        "description": "A shard of ancient stone imbued with the power to ignite flames, essential for any adventurer's toolkit.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/7.png"
    },
    {
        "name": "Creeper's book",
        "description": "A forbidden tome containing the dark secrets of the Creepers, written in a language long forgotten.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/8.png"
    },
    {
        "name": "Wooden sword",
        "description": "A humble yet reliable weapon crafted from the finest enchanted wood, perfect for novice adventurers.",
        "image": "https://mirecos.github.io/WEB3---Images/minecraft/9.png"
    }
];


app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

app.get("/:id" , (req, res) => {
  const id = parseInt(req.params.id);
  if (jsonData[id]) {
      res.json(jsonData[id]);
  } else {
      res.status(404).send("NFT not found");
  }
});

// Add a new route for /minecraft/:id
app.get("/minecraft/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (minecraftCollection[id]) {
        res.json(minecraftCollection[id]);
    } else {
        res.status(404).send("NFT not found");
    }
});

const api = express.Router();

// Version the api
app.use('/api/v1', api);
