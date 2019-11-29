import axios from "axios";

export function getsousuo(val: any) {
  const url = "/sousuonewslist";
  return axios.post(url, { val });
}
