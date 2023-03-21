import axios from 'axios';

let HOST = '';

const DEV_URL = 'https://kongmeta.dev/api/v1';
let BASE_URL = DEV_URL;

// webpack devserver proxy 설정을 통해 핸들링
if (typeof window !== 'undefined') {
  HOST = window.location.hostname;
}

const ENV = process.env.NODE_ENV;
ENV === 'development' ? (BASE_URL = `/api`) : (BASE_URL = `https://${HOST}/api`);

const config = {
  baseURL: BASE_URL,
  blockUI: true,
};

const instance = axios.create(config);

export default instance;
