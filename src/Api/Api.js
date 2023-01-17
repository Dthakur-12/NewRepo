import axios from 'axios';
import AUTH_CONFIG from "../Constant/Constant";

export function userLogin(email, password) {
	return axios.post(AUTH_CONFIG.BASE_URL + 'api/v1/admin/auth/login', { "email": email, "password": password }).then(res => res.data)
}

export function customerRegister(data) {
	return axios.post(AUTH_CONFIG.BASE_URL + 'api/v1/admin/auth/register', data);
}

export function advisorRegister(data) {
	return axios.post(AUTH_CONFIG.BASE_URL + 'api/v1/admin/auth/registerAdvisor', data);
}

export function userList(page,per_page) {  
	return axios.get(AUTH_CONFIG.BASE_URL +'api/v1/admin/auth/users',{"page": page,"per_page": per_page}).then(res => res.data)
}