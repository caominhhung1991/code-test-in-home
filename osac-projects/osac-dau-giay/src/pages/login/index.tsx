import './index.less'
import React, {FC} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Button, Col, Row} from 'antd'
import {ClockCircleOutlined, LoginOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {MyForm, MyFormItem, useLocale} from '@caominhhung1991/components'
import {useForm} from 'antd/lib/form/Form'
import {accountConstants} from 'pages/QuanLyTaiKhoan/Account/account.constants'
import {onSignInWithEmailAndPassword} from 'pages/QuanLyTaiKhoan/Account/account.store'
import {IAccount} from 'pages/QuanLyTaiKhoan/Account/Account'

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const {formatMessage} = useLocale()
  const {search} = useLocation()
  const navigate = useNavigate()

  const {loading} = useAppState(state => state.account)

  const [form] = useForm<IAccount>()

  async function onLogin() {
    const validatedValue = await form.validateFields()
    const {email, password} = validatedValue

    dispatch(onSignInWithEmailAndPassword({email, password, search, navigate, formatMessage}))
  }

  return (
    <div>
      <div className='login-page'>
        <h2 className='login-page-title'>WEBSITE NỘI BỘ OSAC SERVICE</h2>

        <div className={'login-page-content'}>
          <MyForm
            className={'login-page-form'}
            options={[]}
            form={form}
            labelCol={{span: 6}}
            wrapperCol={{span: 18}}
          >
            <MyFormItem
              label={accountConstants.email.name}
              name={accountConstants.email.id}
              type={accountConstants.email?.form?.type}
              rules={accountConstants.email?.form?.rules || []}
            />

            <MyFormItem
              label={accountConstants.password.name}
              name={accountConstants.password.id}
              type={accountConstants.password?.form?.type}
              rules={accountConstants.password?.form?.rules || []}
              innerProps={{onPressEnter: onLogin}}
            />
          </MyForm>
          <Row gutter={5}>
            <Col sm={6} />
            <Col sm={18}>
              <Button type='primary' onClick={onLogin} icon={<LoginOutlined />} loading={loading}>Đăng Nhập</Button>

              <Button
                onClick={() => navigate('/xem-cong-lam-viec')}
                icon={<ClockCircleOutlined />}
                loading={loading}
              >Xem công làm việc</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
