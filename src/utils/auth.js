import { BASE_URL } from "./constants";
import { request } from "./api";

const signup = ({ email, password, name, avatar }) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      avatar,
    }),
  });
};

const signin = ({ email, password }) => {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

const getUserInfo = () => {
  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export const auth = {
  signup,
  signin,
  getUserInfo,
};

export default auth;
