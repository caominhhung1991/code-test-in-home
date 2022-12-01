import React, {FC} from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {convertToMoment, downloadExcel, openModal, toggleAside} from '@caominhhung1991/components'
import {MyTabs} from 'components/business'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {canThayTheConstants} from './can-thay-the.constants'
import AppSettingTable from 'pages/AppSetting/app-setting.table'
// import CanThayTheModal from './can-thay-the.modal'
import {CanThayThe, ICanThayThe} from './CanThayThe'
import {IUseActions, useActions} from 'hooks/useActions'
import {addSelectedId, setCanThayThePending, setPageSize} from './can-thay-the.store'
import CanThayTheAside from './can-thay-the.aside'
import {thongBaoQuyenChinhSua} from 'services'

const modalId = modalConstants.canThayTheModal

const CanThayTheScreen: FC = () => {
  const dispatch = useAppDispatch()

  const {tabsData, canThayTheLoading, pageSize, canThayThes} = useAppState(state => state.canThayThe)
  const {selectedRows} = useAppState(state => state.table)
  const tagPage = useAppState(state => state.tagsPage?.[modalId])

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.canThayThe?.edit

  const actions: IUseActions = useActions({
    Instance: CanThayThe,
    onPending: setCanThayThePending,
    addSelectedId,
    isEdit
  })

  function onTabClick(key: any) {
    if (key === 'add') {
      if (!isEdit) return thongBaoQuyenChinhSua()

      const canThayThe = new CanThayThe()
      dispatch(openModal({modalId, data: canThayThe.initData}))
    } else if (key === 'aside') {
      dispatch(toggleAside({tagPageId: modalId}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: canThayTheConstants,
        fileSheet: 'canThayTheSheet',
        fileName: 'canThayTheName'
      }))
    }
  }

  return (
    <div className='canThayThe-page' css={pageStyles}>
      <MyTabs className='tabs' options={tabsData} activeKey={tagPage ? 'aside' : ''} onTabClick={onTabClick} />

      <div className='tabs-main' style={{marginTop: '10px'}}>
        <div className='aside-main'>
          <AppSettingTable<any>
            isEdit={isEdit}
            constants={canThayTheConstants}
            actions={actions}
            datas={canThayThes}
            loading={canThayTheLoading}
            modalId={modalId}
            expandable={{
              expandedRowRender: (record: ICanThayThe) => {
                return <div>{record.id}</div>
              },
              expandRowByClick: false
            }}
            isSelection={false}
            pagination={true}
            pageSize={pageSize}
            onChange={(pagination) => {
              dispatch(setPageSize(pagination.pageSize))
            }}
            onRow={record => {
              return {
                onClick: () => {
                  const data = convertToMoment(canThayTheConstants.getInputFields(), record)
                  if (isEdit) dispatch(openModal({modalId, data}))
                }
              }
            }}
          />
        </div>
      </div>

      {/*<CanThayTheModal />*/}
    </div>
  )
}

export default CanThayTheScreen
