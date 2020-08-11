export const getCartItems = () =>
	fetch("http://localhost:7001/api/cart").then((resp) => resp.json());

export const select = (character) =>
	fetch("http://localhost:7001/api/add", {
		method: "POST",
		body: JSON.stringify({
			character,
		}),
		headers: {
			"content-type": "application/json",
		},
	}).then((resp) => resp.json());

export const checkout = () =>
	fetch("http://localhost:7001/api/checkout", {
		method: "POST",
		body: JSON.stringify({}),
		headers: {
			"content-type": "application/json",
		},
	}).then((resp) => resp.json());
