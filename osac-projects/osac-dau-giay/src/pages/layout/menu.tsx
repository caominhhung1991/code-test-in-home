import React, {FC} from 'react'
import {Menu} from 'antd'
import {MenuItem, MenuList} from '@caominhhung1991/components'
import {useLocation, useNavigate} from 'react-router-dom'
import {CustomIcon} from './customIcon'
import {useAppDispatch, useAppState} from 'stores'
import {addTag} from 'stores/tags-view.store'

const {SubMenu, Item} = Menu

const soLuongCoMenuLvl2 = 4

interface MenuProps {
  menuList: MenuList
}

const MenuComponent: FC<MenuProps> = ({menuList}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const [openKeys, setOpenkeys] = React.useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])
  const {collapsed, locale} = useAppState(state => state.user)
  const userPaths = useAppState(state => (state.account.accountData?.paths || {}))

  React.useEffect(() => {
    setSelectedKeys([pathname])
    const splitedPathname = pathname.split('/')
    const firstPathname = splitedPathname[1]

    const firstOpenKey = `/${firstPathname}`
    let _openKeys = [firstOpenKey]

    const isLvl2 = splitedPathname.length === soLuongCoMenuLvl2
    if (isLvl2) {
      const secondPathname = splitedPathname[2]
      const secondOpenKey = `/${firstPathname}/${secondPathname}`
      _openKeys.push(secondOpenKey)
    }

    setOpenkeys(collapsed ? [] : _openKeys)
  }, [collapsed, pathname])

  function getTitie(menu: MenuList[0]) {
    return (
      <span style={{display: 'flex', alignItems: 'center'}}>
        <CustomIcon type={menu.icon!} />
        <span>{menu.label[locale]}</span>
      </span>
    )
  }

  function onMenuClick(menu: MenuList[0]) {
    if (menu.path === pathname) return null

    const {key, label, path} = menu
    setSelectedKeys([key])

    dispatch(addTag({id: key, label, path, closable: true}))

    navigate(path)
  }

  function onOpenChange(openKeys: any[]) {
    setOpenkeys(openKeys)
  }

  function getMenuRender(menu: MenuItem) {
    if (menu?.children?.length) {
      const menuChildren = menu.children

      return <SubMenu key={menu.path} title={getTitie(menu)}>
        {
          menuChildren
            .filter(menuChild => userPaths?.[menuChild.key]?.access)
            .map(menuChild => getMenuRender(menuChild))
        }
      </SubMenu>
    }

    return <Item key={menu.path} onClick={() => onMenuClick(menu)}>{getTitie(menu)}</Item>
  }

  return (
    <Menu
      mode='inline'
      theme='light'
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className='layout-page-sider-menu'
    >
      {
        menuList
          .filter(menu => userPaths?.[menu.key]?.access)
          .map(menu => getMenuRender(menu))
      }
    </Menu>
  )
}

export default MenuComponent
