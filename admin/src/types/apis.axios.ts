import axios from 'axios';
import { IAccount, IBackendRes, IGetAccount, IUser } from './interface-data';


/**
 *
Module Auth
 */
// export const callRegister = (name: string, email: string, password: string, phoneNumber: string) => {
//   return axios.post<IBackendRes<IUser>>('/api/v1/auth/register', { name, email, password, phoneNumber })
// }

// export const callLogin = (username: string, password: string) => {
//   return axios.post<IBackendRes<IAccount>>('/api/v1/auth/login', { username, password })
// }
export const callLogin = () => {

}
export const callFetchAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>('/api/v1/auth/account')
}
export const register = (user: IUser) => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3001/auth/register',
    headers: {
      'Content-Type': 'application/json'
    },
    data: user
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

}
export const callGetUsers = () => {
}

