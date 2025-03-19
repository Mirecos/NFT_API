import express from 'express';
import cors from 'cors';

export const app = express();

const jsonData = [
  {
      "name": "Starry Night",
      "description": "A beautiful depiction of a starry night by Vincent van Gogh.",
      "image": "https://drive.google.com/file/d/1COrN2fb8_Tcwc-3V9GERtLlhUwAte42l/view?usp=sharing"
  },
  {
      "name": "Crying eye",
      "description": "Filled with tears, this eye is a symbol of sadness and pain.",
      "image": "https://drive.google.com/file/d/1TwZY5gnCyiB2MBEWxz6uC1HOcygNFakx/view?usp=sharing"
  },
  {
      "name": "Blue medusa",
      "description": "Two blue medasas with a white background.",
      "image": "https://drive.google.com/file/d/1P3ogrdrvP4SbLvjZHrx7Oj9JXcIJxNsi/view?usp=sharing"
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
