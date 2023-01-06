import axios from "axios";

const urlAxios = "http://localhost:5000";

export function postSingInSingUp(path, body) {
  const promise = axios.post(`${urlAxios + path}`, body);
  return promise;
}

export function getPersistLogin(path, token) {
  const promise = axios.get(`${urlAxios + path}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function postPost(path, submitObject, token) {
  const promise = axios.post(`${urlAxios + path}`, submitObject, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

/*  */
