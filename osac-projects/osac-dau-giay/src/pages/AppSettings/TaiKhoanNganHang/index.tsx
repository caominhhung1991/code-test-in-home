import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import {addSelectedId, onPending, setPageSize} from './tai-khoan-ngan-hang.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {taiKhoanNganHangConstants as internalConstants} from './tai-khoan-ngan-hang.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import {TaiKhoanNganHang} from './TaiKhoanNganHang'
import TaiKhoanNganHangModal from './tai-khoan-ngan-hang.modal'
import {useActions} from 'hooks/useActions'
import {thongBaoQuyenChinhSua} from 'services'

const modalId = modalConstants.taiKhoanNganHangModal

const TaiKhoanNganHangScreen: FC = () => {
  const dispatch = useAppDispatch()

  const actions = useActions({Instance: TaiKhoanNganHang, onPending, addSelectedId})
  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.taiKhoanNganHang?.edit

  const {tabsData, loading, taiKhoanNganHangs: datas, pageSize} = useAppState(state => state.taiKhoanNganHang)

  // không thể thay thế
  function onTabClick(key: any) {
    if (key === 'add') {
      if (!isEdit) return thongBaoQuyenChinhSua()

      const taiKhoanNganHang = new TaiKhoanNganHang()
      dispatch(formActions.openModal({modalId, data: taiKhoanNganHang.initData}))
    }
  }

  return (
    <div className='account-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey='all'
        onTabClick={onTabClick}
      />

      <div className='tabs-main' style={{marginTop: '10px'}}>
        <div className='aside-main'>
          <AppSettingTable<any>
            isEdit={isEdit}
            constants={internalConstants}
            actions={actions}
            datas={datas}
            loading={loading}
            modalId={modalId}
            pageSize={pageSize}
            onChange={(pagination) => {
              dispatch(setPageSize(pagination.pageSize))
            }}
            pagination={true}
          />
        </div>
      </div>

      <TaiKhoanNganHangModal />
    </div>
  )
}

export default TaiKhoanNganHangScreen
