import React, {FC} from 'react'
import {message} from 'antd'
import LoginPage from 'pages/login'
import XemCongLamViecScreen from 'pages/QuanLyNhanSu/XemCongLamViec'
import LayoutPage from 'pages/layout'
import {Routes, useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppState} from 'stores'
import {elements} from 'pages'
import {MenuItem, NotFoundPage, WrapperRouteComponent} from '@caominhhung1991/components'
import {osacApp} from 'services/firebase/firebase-config'
import {loginAsync} from 'stores/user.store'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {onGetAccount} from 'pages/QuanLyTaiKhoan/Account/account.store'

const RenderRouter: FC = () => {
  const {routesList, logged} = useAppState(state => state.user)
  const userPaths = useAppState(state => state.account.accountData?.paths)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const auth = getAuth(osacApp)

    const unOnAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(onGetAccount(user))
        await dispatch(loginAsync({user}))
        await message.success('Đã đăng nhập!')
      } else {
        navigate(`/login`)
        await message.success('Chào bạn đến với website Osac, bạn cần đăng nhập trước khi làm việc!')
      }
    })

    return () => {
      unOnAuth()
    }
  }, [])

  const NotFoundElement = elements.notFound

  function getMenuChildren(menu: MenuItem) {
    const MenuElement = elements[menu.component] || NotFoundElement

    if (menu.children && menu.children.length > 0) {
      const menuChildren = menu.children

      return <WrapperRouteComponent
        key={menu.key}
        path={menu.componentPath}
        element={<MenuElement menu={menu} />}
        title={menu.title}
        logged={logged}
        auth
      >
        {
          menuChildren
            .filter(m => userPaths?.[m.key]?.access)
            .map(m => getMenuChildren(m))
        }
      </WrapperRouteComponent>
    }

    return <WrapperRouteComponent
      key={menu.key}
      path={menu.componentPath}
      element={<MenuElement menu={menu} />}
      title={menu.title}
      logged={logged}
      auth
    />
  }

  return <Routes>
    <WrapperRouteComponent path={'login'} element={<LoginPage />} logged={logged} title='Đăng Nhập' />
    <WrapperRouteComponent path={'xem-cong-lam-viec'} element={<XemCongLamViecScreen />} logged={logged} title='Công làm việc' />
    <WrapperRouteComponent path={'/'} element={<LayoutPage />} logged={logged} title=''>
      {
        routesList
          .filter(menu => userPaths?.[menu.key]?.access)
          .map((menu) => getMenuChildren(menu))
      }
      <WrapperRouteComponent path={'*'} element={<NotFoundPage />} logged={logged} title={'Trang Không Tìm Thấy'} />
    </WrapperRouteComponent>
  </Routes>
}

export default RenderRouter
