export interface RequestConfig<dataT, paramsT = {}> {
  responseType: string;
  method: string;
  url: string;
  data?: dataT;
  params?: paramsT;
}

const makeRequestConfig = <T, Q>(url: string, method: string, data?: T, params?: Q): RequestConfig<T, Q> => {
  const requestConfig: RequestConfig<T, Q> = {
    responseType: 'json',
    url,
    method,
  };

  if (data) {
    requestConfig.data = data;
  }

  if (params) {
    requestConfig.params = params;
  }

  return requestConfig;
};

export default {
  makeRequestConfig,
};
