import * as axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f4a0f41b-5eca-43bf-b908-e05c3db59625'
  }
})

export const usersAPI = {

  unfollow(id) {
    return instanse.delete(`follow/${id}`);
  },

  follow(id) {
    return  instanse.post(`follow/${id}`);
  },
  getUsers(currentPage = 1, pageSize = 5) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`);
  }
}

export const profileAPI = {
  getProfile(id) {
    return instanse.get(`profile/${id}`);
  },
  getStatus(id) {
    return instanse.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, {status: status});
  }
}


export const authAPI = {
  me() {
    return instanse.get(`auth/me`);
  },
  login(formData) {
    return instanse.post(`auth/login`,{ email: formData.email, password: formData.password, rememberMe: formData.rememberMe });
  },
  logout() {
    return instanse.delete(`auth/login`)
  }
}
