export const getImage = (character) =>
  `http://localhost:7000/images/${character.id}-${character.name
    .toLowerCase()
    .replace(" ", "-")}.jpg`;

export const searchCharacters = (_, { q }) =>
  fetch(`http://localhost:7000/api/search?q=${escape(q)}`).then((resp) =>
    resp.json()
  );

export const getCharacterById = (_, { id }) =>
  fetch(`http://localhost:7000/api/getById?id=${id}`).then((resp) =>
    resp.json()
  );


