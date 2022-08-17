import {request} from './request'
import {Notice, MenuList} from '@caominhhung1991/components'
import {AxiosRequestConfig} from 'axios'

/** Nhận giao diện danh sách menu */
/** Provides the mock menu list to be shown in the navigation sidebar
 * */
export const getMenuList = (config: AxiosRequestConfig = {}) => {
  const data = request<MenuList>('get', '/user/menu', {}, config)

  return data
}

/** Nhận giao diện danh sách menu */
/** Provides the mock notification list to be shown
 * in the notification dropdown
 */
export const getNoticeList = (config: AxiosRequestConfig = {}) => {
  return request<Notice[]>('get', '/user/notice', {}, config)
}
