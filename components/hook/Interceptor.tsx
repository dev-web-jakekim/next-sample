import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import commonStore from '@/store/commonStore';
import axiosInstance from '../../services/config/axiosConfig';

const Interceptor = (): null => {
  const reqHandler = (request: AxiosRequestConfig) => {
    if (commonStore.token && commonStore.token.length > 0) {
      request.headers.Authorization = `Bearer ${commonStore.token}`;
    }
    return request;
  };

  const resHandler = (response: AxiosResponse) => {
    return response;
  };

  const errHandler = (error: AxiosError) => {
    return Promise.reject(error);
  };

  const reqInterceptor = axiosInstance.interceptors.request.use(reqHandler);
  const resInterceptor = axiosInstance.interceptors.response.use(resHandler, errHandler);

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  return null;
};

export default Interceptor;
