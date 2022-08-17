import './index.less'
import React, {Suspense} from 'react'
import {Drawer, Layout} from 'antd'
import MenuComponent from './menu'
import HeaderComponent from './header'
import {getGlobalState} from 'utils/getGlobal'
import TagsView from './tagView'
import SuspendFallbackLoading from './suspendFallbackLoading'
import {getMenuList} from 'api/layout.api'
import {initMenuListAll, MenuList} from '@caominhhung1991/components'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {setUserItem} from 'stores/user.store'
import {useAppDispatch, useAppState} from 'stores'
import {stopListen} from 'services/firebase'

const {Sider, Content} = Layout
const WIDTH = 992

const LayoutPage: React.FC = () => {
  const [menuList, setMenuList] = React.useState<MenuList>([])
  const {device, collapsed} = useAppState(state => state.user)
  const isMobile = device === 'MOBILE'
  const dispatch = useAppDispatch()
  const {pathname} = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (pathname === '/' && menuList.length > 0) {
      navigate('/dashboard')
    }
  }, [pathname, menuList])

  function toggle() {
    dispatch(setUserItem({collapsed: !collapsed}))
    localStorage.setItem('collapsed', `${!collapsed}`)
  }

  React.useEffect(() => {
    const fetchMenuList = async () => {
      const data = await getMenuList()

      const {status, result} = data

      const menuList = initMenuListAll(result)

      if (status) {
        setMenuList(result)

        dispatch(setUserItem({menuList, routesList: result}))
      }
    }

    fetchMenuList()
  }, [])

  React.useEffect(() => {
    const {device} = getGlobalState()
    const rect = document.body.getBoundingClientRect()
    const needCollapse = rect.width < WIDTH
    if (needCollapse) {
      dispatch(setUserItem({device, collapsed: needCollapse}))
      localStorage.setItem('collapsed', `${needCollapse}`)
    }

    return () => {
      stopListen()
    }
  }, [])

  return (
    <Layout className='layout-page'>
      <HeaderComponent collapsed={collapsed} toggle={toggle} />

      <Layout>
        {
          isMobile ? (
            <Drawer
              width={200}
              placement='left'
              bodyStyle={{padding: 0, height: '100%'}}
              closable={false}
              onClose={toggle}
              visible={!collapsed}
            >
              <MenuComponent menuList={menuList} />
            </Drawer>
          ) : (
            <Sider
              className='layout-page-sider'
              trigger={null}
              collapsible
              collapsed={collapsed}
              breakpoint='md'
            >
              <MenuComponent menuList={menuList} />
            </Sider>
          )
        }

        <Content
          className='layout-page-content'
          style={{paddingLeft: isMobile ? '0' : (collapsed ? '80px' : '200px')}}
        >
          <TagsView />

          <Suspense
            fallback={
              <SuspendFallbackLoading
                message='Alert message title'
                description='Further details about the context of this alert.'
              />
            }
          ><Outlet /></Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
