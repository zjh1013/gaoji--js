import axios from "axios";

export function getzuo() {
  return axios.get("/getzuo");
}

export function getyou() {
  return axios.get("/getyou");
}
