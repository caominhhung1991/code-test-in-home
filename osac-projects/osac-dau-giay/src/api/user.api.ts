import {request} from './request'
import {LoginParams, LoginResult, LogoutParams, LogoutResult} from '@caominhhung1991/components'

/** Giao diện đăng nhập */
export const apiLogin = (data: LoginParams) => {
  return request<LoginResult>('post', '/user/login', data)
}

/** Giao diện đăng xuất */
export const apiLogout = (data: LogoutParams) => {
  return request<LogoutResult>('post', '/user/logout', data)
}
