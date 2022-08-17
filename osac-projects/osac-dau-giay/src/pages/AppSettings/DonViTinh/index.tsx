import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'

import * as formActions from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {donViTinhConstants as internalConstants} from './don-vi-tinh.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import AppSettingModal from 'pages/AppSettings/app-setting.modal'
import {DonViTinh} from './DonViTinh'
import {IUseActions, useActions} from 'hooks/useActions'
import {addSelectedId, onPending} from './don-vi-tinh.store'

import {downloadExcel} from 'stores/table.store'

const modalId = modalConstants.donViTinhModal

const DonViTinhScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, donViTinhs: datas} = useAppState(state => state.donViTinh)
  const actions: IUseActions = useActions({Instance: DonViTinh, onPending, addSelectedId})

  function onTabClick(key: any) {
    if (key === 'add') {
      const instance = new DonViTinh()
      dispatch(formActions.openModal({modalId, data: instance.initData}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: internalConstants,
        fileSheet: 'donViTinh',
        fileName: 'donViTinh'
      }))
    }
  }

  return (
    <div className='donViTinh-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey='all'
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
            isSelection
            pagination={true}
          />
        </div>
      </div>

      <AppSettingModal
        modalTitle={'DonViTinh'}
        constants={internalConstants}
        actions={actions}
        modalId={modalId}
      />
    </div>
  )
}

export default DonViTinhScreen
