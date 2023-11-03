const BASE_URL = "http://localhost:3001";

const handleServerResponse = (res) => {
  // console.log("reached handleServerResponse");
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItemList = () => {
  // console.log("reached getItemList");

  return fetch(`${BASE_URL}/items`, {
    // REST, default method = 'GET
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => handleServerResponse(res));
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${BASE_URL}/items`, {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const removeItem = (id) => {
  return fetch(`${BASE_URL}/items`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  }).then(handleServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
