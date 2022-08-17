import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'

import * as formActions from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {nhaCungCapConstants as internalConstants} from './nha-cung-cap.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import NhaCungCapModal from './nha-cung-cap.modal'
import {NhaCungCap} from './NhaCungCap'
import {IUseActions, useActions} from 'hooks/useActions'
import {addSelectedId, onGetsAsync, onPending} from './nha-cung-cap.store'
import {downloadExcel} from 'stores/table.store'
import {stopListen} from 'services/firebase'

const modalId = modalConstants.nhaCungCapModal

const NhaCungCapScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, nhaCungCaps: datas} = useAppState(state => state.nhaCungCap)
  const actions: IUseActions = useActions({Instance: NhaCungCap, onPending, addSelectedId})

  React.useEffect(() => {
    dispatch(onGetsAsync())

    return () => {
      stopListen()
    }
  }, [])

  function onTabClick(key: any) {
    if (key === 'add') {
      const instance = new NhaCungCap()
      dispatch(formActions.openModal({modalId, data: instance.initData}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: internalConstants,
        fileSheet: 'nhaCungCap',
        fileName: 'nhaCungCap'
      }))
    }
  }

  return (
    <div className='nhaCungCap-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey='all'
        onTabClick={onTabClick}
      />

      <div className='tabs-main' style={{marginTop: '10px'}}>
        <div className='aside-main'>
          <AppSettingTable<any>
            scroll={{x: 1000}}
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

      <NhaCungCapModal />
    </div>
  )
}

export default NhaCungCapScreen
