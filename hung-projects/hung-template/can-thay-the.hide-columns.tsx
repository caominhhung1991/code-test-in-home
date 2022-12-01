import React from 'react'
import {List} from 'antd'
import {MyModal} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {hideColumnsConstants, modalConstants} from 'app-constants'
import {canThayTheConstants} from './can-thay-the.constants'
import {toggleColumn} from 'stores/hide-columns.store'

type ModalProps = {
  modalId?: string
}

const visibleModal = hideColumnsConstants.canThayThe

const CanThayTheHideColumns = (props: ModalProps) => {
  const {modalId} = props

  const dispatch = useAppDispatch()
  const {modal, datas} = useAppState(state => state.form)
  const hideColumnsState = useAppState(state => state.hideColumns)

  const pageModalId = React.useMemo(() => modalId ? modalId : visibleModal, [modalId])
  const hideColumns = hideColumnsState?.[pageModalId]

  const visible = React.useMemo(() => !!modal?.[visibleModal]?.open, [modal[visibleModal]])

  function onClose() {
    dispatch(formActions.closeModal({modalId: visibleModal}))
  }

  const fields = React.useMemo(() => {
    return canThayTheConstants.getTableColumns()
  }, [])

  return (
    <MyModal<any>
      title='Chức năng khác'
      visible={visible}
      onClose={onClose}
      width={600}
      modalId={pageModalId}
      datas={datas}
    >
      <List
        dataSource={fields}
        renderItem={item => (
          <List.Item
            className={hideColumns?.[item.id] ? 'hoverClass font-weight-bold' : 'bg-gold hoverClass'}
            onClick={() => {
              dispatch(toggleColumn({tableId: pageModalId, columnId: item.id}))
            }}
          >
            <List.Item.Meta
              title={item.name}
            />
            <div>{item.fixed ? '[Đã cố định]' : ''}</div>
          </List.Item>
        )}
      />
    </MyModal>
  )
}

export default CanThayTheHideColumns
