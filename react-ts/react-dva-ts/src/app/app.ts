import axios from "axios";
export function getBannerList() {
  const url = "/getbannerlist";
  return axios.get(url);
}

export function geticonlist() {
  const url = "/geticonlist";
  return axios.get(url);
}

export function getlist(pageSize: number, pageCount: number) {
  const url = "/getlist";
  return axios.post(url, { pageSize, pageCount });
}
