import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {noiPhucVuConstants as internalConstants} from './noi-phuc-vu.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import NoiPhucVuModal from './noi-phuc-vu.modal'
import {NoiPhucVu} from './NoiPhucVu'
import {IUseActions, useActions} from 'hooks/useActions'
import {addSelectedId, onPending, setPageSize} from './noi-phuc-vu.store'
import {downloadExcel} from 'stores/table.store'
import {toggleAside} from 'stores/tags-page.store'
import {thongBaoQuyenChinhSua} from 'services'

const modalId = modalConstants.noiPhucVuModal

const NoiPhucVuScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, loading, pageSize, noiPhucVus: datas} = useAppState(state => state.noiPhucVu)
  const tagPage = useAppState(state => state.tagsPage?.[modalId])

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.noiPhucVu?.edit

  const actions: IUseActions = useActions({Instance: NoiPhucVu, onPending, addSelectedId})

  function onTabClick(key: any) {
    if (key === 'add' && isEdit) {
      if (!isEdit) return thongBaoQuyenChinhSua()

      const instance = new NoiPhucVu()
      dispatch(formActions.openModal({modalId, data: instance.initData}))
    } else if (key === 'aside') {
      dispatch(toggleAside({tagPageId: modalId}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: internalConstants,
        fileSheet: 'noiPhucVuSheet',
        fileName: 'noiPhucVuName'
      }))
    }
  }

  return (
    <div className='noiPhucVu-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey={tagPage ? 'aside' : ''}
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
            isSelection={true}
            pagination={true}
            pageSize={pageSize}
            onChange={(pagination) => {
              dispatch(setPageSize(pagination.pageSize))
            }}
          />
        </div>
      </div>

      <NoiPhucVuModal />
    </div>
  )
}

export default NoiPhucVuScreen
