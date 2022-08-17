import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {MyTabs} from 'components/business'
import {Switch, Tree} from 'antd'
import {pageStyles} from 'styles'
import {modalConstants} from 'app-constants'
import {Account} from '../Account/Account'
import AccountSelect from '../Account/account.select'
import {getPhanQuyenData, setPhanQuyenAccess, setPhanQuyenEdit} from './phan-quyen-path.store'

const modalId = modalConstants.accountModal

const PhanQuyenPathScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {accountId, phanQuyenData} = useAppState(state => state.account)
  const {routesList, menuList} = useAppState(state => state.user)

  const expandedKeys = React.useMemo(() => {
    return menuList.map(menu => menu.key)
  }, [menuList])

  React.useEffect(() => {
    dispatch(getPhanQuyenData(accountId))
  }, [accountId])

  function onTabClick(key: any) {
    if (key === 'add') {
      const instance = new Account()

      dispatch(formActions.openModal({modalId, data: instance.initData}))
    }
  }

  return (
    <div css={pageStyles}>
      <MyTabs
      className="tabs"
      options={[]}
      activeKey='all'
      onTabClick={onTabClick}
      />

      <div style={{marginTop: '10px'}}>
        <AccountSelect />
      </div>

      <div className='tabs-main'>
        <div className='aside-main'>
          <div className='over-flow-scroll'>
            <Tree
              className='draggable-tree'
              expandedKeys={expandedKeys}
              blockNode
              showLine
              autoExpandParent
              treeData={routesList}
              titleRender={(nodeData) => {
                const {title, key} = nodeData
                //@ts-ignore
                const role = phanQuyenData?.[key] || {}

                return <div>
                  <span style={{marginRight: '7px'}}>{title}</span>
                  {
                    accountId && <>
                      <Switch
                        checkedChildren='Access'
                        unCheckedChildren='Access'
                        checked={role?.access || false}
                        onClick={(checked: boolean) => {
                          dispatch(setPhanQuyenAccess(key, checked))
                        }}
                      />

                      <Switch
                        checkedChildren='Edit'
                        unCheckedChildren='Edit'
                        checked={role?.edit || false}
                        onClick={(checked: boolean) => {
                          dispatch(setPhanQuyenEdit(key, checked))
                        }}
                      />
                    </>
                  }
                </div>
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhanQuyenPathScreen
