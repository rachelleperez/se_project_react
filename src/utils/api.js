const BASE_URL = "http://localhost:3001";

export const handleServerResponse = (res) => {
  // console.log("reached handleServerResponse");
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getItemList = () => {
  // console.log("reached getItemList");

  return request(`${BASE_URL}/items`, {
    // REST, default method = 'GET
    headers: {
      "Content-type": "application/json",
    },
  });
};

const addItem = ({ name, weather, imageUrl }) => {
  return request(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
};

const removeItem = (id) => {
  return request(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const api = {
  getItemList,
  addItem,
  removeItem,
};

export default api;
