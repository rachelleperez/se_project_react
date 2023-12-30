import { BASE_URL } from "./constants";
import { request } from "./api";

const signup = ({ email, password, name, avatarUrl }) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      avatarUrl,
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
export const auth = {
  signup,
  signin,
};

export default auth;
