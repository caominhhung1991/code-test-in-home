import React, {FC} from 'react'
import {LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from '@ant-design/icons'
import {Dropdown, Layout, Menu} from 'antd'
import {useNavigate} from 'react-router-dom'
import {ReactComponent as LanguageSvg} from 'assets/header/language.svg'
import {ReactComponent as ViVnSvg} from 'assets/header/vi_VN.svg'
import {ReactComponent as EnUsSvg} from 'assets/header/en_US.svg'
import {LocaleFormatter, useLocale} from '@caominhhung1991/components'
import OsacPNG from 'assets/logo/osac192.png'
import {logoutAsync, setUserItem} from 'stores/user.store'
import {useAppDispatch, useAppState} from 'stores'

const {Header} = Layout

interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

type Action = 'userInfo' | 'userSetting' | 'logout';

const HeaderComponent: FC<HeaderProps> = ({collapsed, toggle}) => {
  const {logged, locale, device} = useAppState(state => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {formatMessage} = useLocale()

  const onActionClick = async (action: Action) => {
    switch (action) {
      case 'userInfo':
        return
      case 'userSetting':
        return
      case 'logout':
        return await dispatch(logoutAsync())
    }
  }

  async function onSignOut() {
    navigate('/login')
  }

  const selectLocale = ({key}: {key: any}) => {
    dispatch(setUserItem({locale: key}))
    localStorage.setItem('locale', key)
  }
  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <span>
          <UserOutlined />
          <span className='ml-1' onClick={() => navigate('/dashboard')}>
            <LocaleFormatter id='header.avator.account' />
          </span>
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2'>
        <span>
          <LogoutOutlined />
          <span className='ml-1' onClick={() => onActionClick('logout')}>
            <LocaleFormatter id='header.avator.logout' />
          </span>
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className='layout-page-header'>
      {
        device !== 'MOBILE' && <div className='logo' style={{width: collapsed ? 80 : 200}}>
          <img src={OsacPNG} alt='' style={{marginRight: collapsed ? '2px' : '20px'}} />
        </div>
      }

      <div className='layout-page-header-main'>
        <div onClick={toggle} className='hoverClass'>
          <span id='sidebar-trigger'>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>

        <div className='actions'>
          {/*<HeaderNoticeComponent/>*/}

          <Dropdown
            trigger={['click']}
            overlay={
              <Menu onClick={selectLocale}>
                <Menu.Item style={{textAlign: 'left', width: '43px'}} disabled={locale === 'vi_VN'} key='vi_VN'>
                  <ViVnSvg /> Việt Nam
                </Menu.Item>
                <Menu.Item style={{textAlign: 'left'}} disabled={locale === 'en_US'} key='en_US'>
                  <EnUsSvg /> English
                </Menu.Item>
              </Menu>
            }
          >
            <span>
              <LanguageSvg id='language-change' />
            </span>
          </Dropdown>

          {
            logged ? (
              <Dropdown overlay={menu} trigger={['click']}>
              <span className='user-action'>
                <img src={OsacPNG} className='user-avator' alt='avator' />
              </span>
              </Dropdown>
            ) : (
              <span style={{cursor: 'pointer'}} onClick={onSignOut}>
              {formatMessage({id: 'gloabal.tips.login'})}
            </span>
            )
          }
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
