import axios, {AxiosRequestConfig} from 'axios'
import {message as $message} from 'antd'

const axiosInstance = axios.create({
  timeout: 6000
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  config => {
    if (config?.data?.message) {
      // $message.success(config.data.message)
    }
    return config?.data
  },
  error => {
    // if needs to navigate to login page when request exception
    // history.replace('/login');
    let errorMessage = 'Hệ thống bất thường'
    if (error?.message?.includes('Network Error')) {
      errorMessage = 'Lỗi mạng, vui lòng kiểm tra mạng của bạn'
    } else {
      errorMessage = error?.message
    }
    console.dir(error)
    error.message && $message.error(errorMessage)
    return {
      status: false,
      message: errorMessage,
      result: null
    }
  }
)

export type Response<T = any> = {
  status: boolean;
  message: string;
  result: T;
};

type Method = 'get' | 'post';

export type MyResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(method: Method, url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
  // const prefix = '/api'
  const prefix = ''
  url = prefix + url
  if (method === 'post') {
    return axiosInstance.post(url, data, config)
  } else {
    return axiosInstance.get(url, {params: data, ...config})
  }
}
