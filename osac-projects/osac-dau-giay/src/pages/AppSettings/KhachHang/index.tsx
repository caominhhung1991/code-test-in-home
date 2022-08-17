import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {khachHangConstants as internalConstants} from './khach-hang.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
// import AppSettingModal from 'pages/AppSettings/app-setting.modal'
import KhachHangModal from './khach-hang.modal'
import {KhachHang} from './KhachHang'
import {IUseActions, useActions} from 'hooks/useActions'
import {addSelectedId, onPending, setPageSize} from './khach-hang.store'

import {downloadExcel} from 'stores/table.store'
import {toggleAside} from 'stores/tags-page.store'
import {thongBaoQuyenChinhSua} from 'services'

const modalId = modalConstants.khachHangModal

const KhachHangScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, pageSize, khachHangs: datas} = useAppState(state => state.khachHang)
  const tagPage = useAppState(state => state.tagsPage?.[modalId])

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.khachHang?.edit

  const actions: IUseActions = useActions({Instance: KhachHang, onPending, addSelectedId})

  function onTabClick(key: any) {
    if (key === 'add' && isEdit) {
      if (!isEdit) return thongBaoQuyenChinhSua()

      const instance = new KhachHang()
      dispatch(formActions.openModal({modalId, data: instance.initData}))
    } else if (key === 'aside') {
      dispatch(toggleAside({tagPageId: modalId}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: internalConstants,
        fileSheet: 'khachHangSheet',
        fileName: 'khachHangName'
      }))
    }
  }

  return (
    <div className='khachHang-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey={tagPage ? 'aside' : ''}
        onTabClick={onTabClick}
      />

      <div className='tabs-main' style={{marginTop: '10px'}}>
        <div className='aside-main'>
          <AppSettingTable<any>
            constants={internalConstants}
            actions={actions}
            datas={datas}
            loading={loading}
            modalId={modalId}
            isEdit={isEdit}
            isSelection={true}
            pagination={true}
            pageSize={pageSize}
            onChange={(pagination) => {
              dispatch(setPageSize(pagination.pageSize))
            }}
          />
        </div>
      </div>

      <KhachHangModal />
    </div>
  )
}

export default KhachHangScreen
