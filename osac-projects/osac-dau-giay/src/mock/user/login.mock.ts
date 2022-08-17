import {intercepter, mock} from '../config'
import {LoginResult} from '@caominhhung1991/components'

mock.mock('/user/login', 'post', (config: any) => {
  const body: LoginResult = JSON.parse(config?.body)
  return intercepter<LoginResult>({
    token: '123abcdefg',
    email: body?.email
  })
})
