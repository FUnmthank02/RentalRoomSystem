import STORAGE from "./storage";

/* get Bearer token */
export const getBearerToken = () => {
  return `Bearer ${localStorage.getItem(STORAGE.token)}`;
};

const api = {
  login: (data) => http.post("/user/signin", data),
};

export default api;
