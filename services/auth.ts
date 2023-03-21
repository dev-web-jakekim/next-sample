import { AxiosResponse, RawAxiosRequestConfig } from 'axios';
import axiosInstance from './config/axiosConfig';
import serviceConfig, { RequestConfig } from './config/serviceConfig';

const api = {
  login: ['post', '/login'],
};

interface ILogin {
  email: string;
  password: string;
  auth_type: string;
}

const login = (data: ILogin): Promise<AxiosResponse> => {
  const [method, url] = api.login;
  const requestConfig: RequestConfig<ILogin> = serviceConfig.makeRequestConfig(url, method, data);

  return axiosInstance.request<ILogin>(requestConfig as RawAxiosRequestConfig);
};

export default {
  login,
};
