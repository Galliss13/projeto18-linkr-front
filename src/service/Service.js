import axios from "axios";

export const urlAxios = "https://projeto18-linkr-back-1ssc.onrender.com/";

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


export function editPost(path, editObject, token) {
  const promise = axios.put(`${urlAxios + path}`, editObject, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function deletePost(path, token) {
  const promise = axios.delete(`${urlAxios + path}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;

export function getSearchUsers(path, params){
  const promise = axios.get(`${urlAxios+path}/${params}`)
  return promise

}

/*  */
