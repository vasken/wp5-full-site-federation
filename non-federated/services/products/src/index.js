const express = require("express");

const characters = require("./dc");

const getCharacterPower = ({ powerstats }) =>
  Math.round(Object.values(powerstats).reduce((a, n) => a + n) / 6);

const charactersWithPower = characters.map((p) => ({
  ...p,
  power: getCharacterPower(p),
}));

const app = express();
const port = 7000;

app.use(require("body-parser").json());
app.use(require("cors")());
app.use("/images", express.static("public"));

app.get("/api/getById", function (req, res) {
  const qId = parseInt(req.query.id);
  res.send(charactersWithPower.find(({ id }) => id === qId) || null);
});

app.get("/api/search", function (req, res) {
  const q = (req.query.q || "").toLowerCase();
  res.send(
    charactersWithPower
      .filter(({ name }) => name.toLowerCase().includes(q))
      .map((characters) => ({
        ...characters,
      }))
      .slice(0, 20)
  );
});

app.get("/api/cart", function (req, res) {
  res.send(cart);
});

app.listen(port, () =>
  console.log(`Product service listening at http://localhost:${port}`)
);
