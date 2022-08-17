import { request } from '../request';
export type RoleStatus = 'enabled' | 'disabled';
export interface Role {
  name: {
    vi_VN: string;
    en_US: string;
  };
  code: string;
  id: number;
  status: RoleStatus;
}

export type GetRoleResult = Role[];

/** get role list api */
export const apiGetRoleList = () => request<GetRoleResult>('get', '/permission/role');
