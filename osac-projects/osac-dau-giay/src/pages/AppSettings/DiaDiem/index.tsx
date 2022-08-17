import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import * as actions from './dia-diem.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {diaDiemConstants as internalConstants} from './dia-diem.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import AppSettingModal from 'pages/AppSettings/app-setting.modal'
import {DiaDiem} from './DiaDiem'

const modalId = modalConstants.diaDiemModal

const DiaDiemScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, diaDiems: datas} = useAppState(state => state.diaDiem)

  // không thể thay thế
  function onTabClick(key: any) {
    if (key === 'add') {
      const diaDiem = new DiaDiem()
      dispatch(formActions.openModal({modalId, data: diaDiem.initData}))
    }
  }

  return (
    <div className="account-page" css={pageStyles}>
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
        modalTitle={'Địa điểm nấu'}
        constants={internalConstants}
        actions={actions}
        modalId={modalId}
      />
    </div>
  )
}

export default DiaDiemScreen
