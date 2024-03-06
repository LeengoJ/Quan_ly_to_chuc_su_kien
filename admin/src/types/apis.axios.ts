import axios from 'src/configs/axios-customize';
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

export async function CallAPI(data: any, apiPath: string, method: string) {
  const axios = require('axios');

  let config = {
    method: method,
    maxBodyLength: Infinity,
    url: "http://localhost:3001/api/v1" + apiPath,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  console.log(config);
  try {
    return await axios.request(config)
  } catch (error) {
    console.log("error");
    return error
  }


  // .then((response: any) => {

  //   console.log(JSON.stringify(response.data));
  //
  //   return response;
  // })
  // .catch((error: any) => {
  //   console.log(error);
  //   return error
  // });
}

export const callLogin = async (email: string, password: string, method: any) => {

  let data = JSON.stringify({
    "email": email,
    "password": password
  });
  const apiPath = "/auth/login"
  return await CallAPI(data, apiPath, method);
  // return axios.post<IBackendRes<IAccount>>('/api/v1', { email, password })

}
export const callLogout = () => {

}
export const callRegister = async (email: any, password: any, method: any) => {
  let data = JSON.stringify({
    "email": email,
    "password": password
  });
  const apiPath = "/auth/register"
  return await CallAPI(data, apiPath, method);

}
export const callDeletePermission = async (id: string) => {
  let data = ""
  let method = "DELETE"
  let apiPath = "/permissions/?id=" + id
  return await CallAPI(data, apiPath, method);
  // return axios.delete<IBackendRes<IPermission>>(`/api/v1/permissions/${id}`);
}
export const callGetAllUsers = async () => {
  let data = ""
  let method = "GET"
  let apiPath = "/user/getAll"
  return await CallAPI(data, apiPath, method);
}
export const callGetAllEvent = async () => {
  const data = ""
  let method = "GET"
  let path = "/event/get-all-event"
  return await CallAPI(data, path, method);
}
export const callGetAllLocation = async () => {
  const data = ""
  let method = "GET"
  let path = "/location/get-all"
  return await CallAPI(data, path, method);
}
export const callFetchAccount = () => {
  return axios.get<IBackendRes<IGetAccount>>('/api/v1/auth/account')
}
export const getRoleById = async (id: string) => {
  const data = id;
  let method = "GET"
  let path = "/role/:" + id;
  return
}
