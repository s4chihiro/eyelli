import * as axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f4a0f41b-5eca-43bf-b908-e05c3db59625'
  }
})

export const getUsersAPI = (currentPage = 1, pageSize = 5) => {
  return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => ( response.data ));
};

export const followDelete = (id) => {
  return instanse.delete(`follow/${id}`).then(response => ( response.data ));
};

export const followPost = (id) => {
  return instanse.post(`follow/${id}`).then(response => ( response.data ));
};

export const getAuthAPI = () => {
  return instanse.get(`auth/me`).then(response => ( response.data ));
};

export const getProfileAPI = (id) => {
  return instanse.get(`profile/${id}`).then(response => ( response.data ));
}

