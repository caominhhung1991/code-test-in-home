import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import * as actions from './ca-lam-viec.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {caLamViecConstants as internalConstants} from './ca-lam-viec.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import AppSettingModal from 'pages/AppSettings/app-setting.modal'
import {CaLamViec} from './CaLamViec'

const modalId = modalConstants.khachHangModal

const CaLamViecScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, caLamViecs: datas} = useAppState(state => state.caLamViec)

  // không thể thay thế
  function onTabClick(key: any) {
    if (key === 'add') {
      const caLamViec = new CaLamViec()
      dispatch(formActions.openModal({modalId, data: caLamViec.initData}))
    }
  }

  return (
    <div className="ca-lam-viec-page" css={pageStyles}>
      <MyTabs
        className="tabs"
        options={tabsData}
        activeKey='all'
        onTabClick={onTabClick}
      />

      <div className="tabs-main" style={{marginTop: '10px'}}>
        <div className="aside-main">
          <AppSettingTable<any>
            constants={internalConstants}
            actions={actions}
            datas={datas}
            loading={loading}
            modalId={modalId}
            pagination={true}
          />
        </div>
      </div>

      <AppSettingModal
        modalTitle={'Ca làm việc'}
        constants={internalConstants}
        actions={actions}
        modalId={modalId}
      />
    </div>
  )
}

export default CaLamViecScreen
