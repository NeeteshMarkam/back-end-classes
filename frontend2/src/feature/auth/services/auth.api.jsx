import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function login(username, password) {
  try {
    const respone = await api.post("/login", {
      username,
      password,
    });
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    throw error;
  }
}

export async function register(username, email, password,bio) {
  try {
    const respone = await api.post("/register", {
      username,
      email,
      password,
      bio
    });
    console.log(respone.data);
    return respone.data;
  } catch (error) {
    throw error;
  }
}

export async function getMe() {
  try {
    const respone = await api.get("/get-me");
    return respone.data;
  } catch (error) {
    throw error;
  }
}
