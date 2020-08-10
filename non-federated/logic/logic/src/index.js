const getImage = (character) =>
  `http://localhost:7000/images/${character.id}-${character.name
    .toLowerCase()
    .replace(" ", "-")}.jpg`;

const searchCharacters = (_, { q }) =>
  fetch(`http://localhost:7000/api/search?q=${escape(q)}`).then((resp) =>
    resp.json()
  );

const getCharacterById = (_, { id }) =>
  fetch(`http://localhost:7000/api/getById?id=${id}`).then((resp) =>
    resp.json()
  );

const getCartItems = () =>
  fetch("http://localhost:7001/api/cart").then((resp) => resp.json());

const addToCart = (character) =>
  fetch("http://localhost:7001/api/add", {
    method: "POST",
    body: JSON.stringify({
      character,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

const checkout = () =>
  fetch("http://localhost:7001/api/checkout", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

module.exports = {
  getImage,
  checkout,
  searchCharacters,
  getCharacterById,
  getCartItems,
  addToCart,
};
