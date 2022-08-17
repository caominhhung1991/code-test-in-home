import React from 'react'
import {MyModal, IConstants} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {IUseActions} from 'hooks/useActions'
import {getFormItemFields} from '@caominhhung1991/components'
import {thongBaoQuyenChinhSua} from '../../services'

type AppSettingModalProps = {
  isEdit?: boolean
  modalTitle: string
  modalId: string
  constants: IConstants
  actions: IUseActions
  onAfterAddFinish?(a?: any): void
}

function AppSettingModal(props: AppSettingModalProps) {
  const {modalId, constants, actions, modalTitle, onAfterAddFinish, isEdit, ...rest} = props

  const dispatch = useAppDispatch()
  const {modal, edit, datas} = useAppState(state => state.form)

  const visible = React.useMemo(() => {
    return !!modal[modalId]?.open
  }, [modal[modalId]])

  const formOptions = React.useMemo(() => {
    return getFormItemFields(constants.getInputFields(), edit)
  }, [edit])

  async function onClose(currentData: any, validatedValues: any) {
    let res: any = true
    if (validatedValues) {
      if (!isEdit) return thongBaoQuyenChinhSua()

      if (!currentData.id) { // ADD
        res = await dispatch(actions.onAddAsync({validatedValues}))
        onAfterAddFinish?.(res?.id)
        res = Boolean(res)
      } else { // UPDATE
        res = Boolean(await dispatch(actions.onUpdateAsync({currentData, validatedValues})))
      }
    }
    res && dispatch(formActions.closeModal({modalId}))
  }

  return (
    <MyModal<any>
      {...rest}
      form
      title={modalTitle}
      modalId={modalId}
      visible={visible}
      onClose={onClose}
      formOptions={formOptions}
      formProps={{
        labelCol: {span: 8},
        wrapperCol: {span: 16}
      }}
      datas={datas}
    />
  )
}

export default AppSettingModal
