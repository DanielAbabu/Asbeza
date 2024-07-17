// chapa-backend/index.js
const express = require("express");
const Chapa = require("chapa-node");
const cors = require("cors");

const app = express();
const chapa = new Chapa("chapaKey");

app.use(cors());
app.use(express.json());

chapa.customize({
  logo: "logo url",
  description: "description about the app",
  title: "my app title",
});

app.post("/initialize", (req, res) => {
  const initializeInfo = {
    amount: req.body.amount,
    currency: "ETB",
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    tx_ref: req.body.tx_ref,
    return_url: req.body.return_url,
    callback_url: "https://myapp.com/my-verify-endpoint/:tx_ref",
  };

  chapa
    .initialize(initializeInfo)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.get("/verify/:tx_ref", (req, res) => {
  const tx_ref = req.params.tx_ref;

  chapa
    .verify(tx_ref)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
