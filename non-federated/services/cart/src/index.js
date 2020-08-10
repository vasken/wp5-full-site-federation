const express = require("express");
const app = express();
const port = 7001;

app.use(require("body-parser").json());
app.use(require("cors")());

const cart = {
  items: [],
};

app.post("/api/checkout", function (req, res) {
  cart.items = [];
  res.send(cart);
});

app.post("/api/add", function (req, res) {
  const character = req.body.character;
  let found = false;
  cart.items.forEach((item) => {
    if (item.character.name === character.name) {
      item.count += 1;
      found = true;
    }
  });
  if (!found) {
    cart.items.push({
      character,
      count: 1,
    });
  }
  res.send(cart);
});

app.get("/api/cart", function (req, res) {
  res.send(cart);
});

app.listen(port, () =>
  console.log(`Cart service listening at http://localhost:${port}`)
);
