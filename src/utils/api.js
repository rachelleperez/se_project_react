import { BASE_URL } from "./constants";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

const getItemList = () => {
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
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
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
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const addCardLike = ({ _id }) => {
  return request(`${BASE_URL}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const removeCardLike = ({ _id }) => {
  return request(`${BASE_URL}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const api = {
  getItemList,
  addItem,
  removeItem,
  addCardLike,
  removeCardLike,
};

export default api;
