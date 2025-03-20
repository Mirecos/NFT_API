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

const api = express.Router();

// Version the api
app.use('/api/v1', api);
