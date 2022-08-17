import {request} from './request'
import {PageData, BuniesssUser} from '@caominhhung1991/components'

export const getBusinessUserList = (params: any) => request<PageData<BuniesssUser>>('get', '/business/list', params)
