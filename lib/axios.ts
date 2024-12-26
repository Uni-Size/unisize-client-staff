import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // API 기본 URL
  timeout: 10000, // 요청 타임아웃 설정 (10초)
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전 처리 (ex: 토큰 추가)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 오류 처리
    return Promise.reject(error);
  }
);

export default axiosInstance;
