import React from 'react'
import {MyModal} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {donViTinhConstants} from './don-vi-tinh.constants'
import {useActions} from 'hooks/useActions'
import {DonViTinh} from './DonViTinh'
import {modalConstants} from 'app-constants'
import {addSelectedId, onPending} from './don-vi-tinh.store'
import {convertMomentToString, getFormItemFields} from '@caominhhung1991/components'

const modalId = modalConstants.donViTinhModal

type ModalProps = {
  onAfterAddFinish?(id: string): void
}

const DonViTinhModal = (props: ModalProps) => {
  const {onAfterAddFinish} = props

  const actions = useActions({Instance: DonViTinh, onPending, addSelectedId})

  const dispatch = useAppDispatch()
  const {modal, datas} = useAppState(state => state.form)

  const visible = React.useMemo(() => {
    return !!modal?.[modalId]?.open
  }, [modal[modalId]])

  function onClose() {
    dispatch(formActions.closeModal({modalId}))
  }

  async function onOk(currentData: any, validatedValues: any) {
    let res: any = true

    const convertedData = convertMomentToString(donViTinhConstants.getInputFields(), validatedValues)

    if (validatedValues) {
      if (!currentData.id) { // ADD
        res = await dispatch(actions.onAddAsync({validatedValues: convertedData}))

        onAfterAddFinish?.(res?.id)
        res = Boolean(res)
      } else { // UPDATE
        res = Boolean(await dispatch(actions.onUpdateAsync({
          currentData, validatedValues: convertedData
        })))
      }
    }

    res && dispatch(formActions.closeModal({modalId}))
  }

  return (
    <MyModal<any>
      form
      title='Đơn Vị Tính'
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(donViTinhConstants.getInputFields())}
      formProps={{
        labelCol: {span: 8},
        wrapperCol: {span: 16}
      }}
      width={700}
      modalId={modalId}
      datas={datas}
    >
    </MyModal>
  )
}

export default DonViTinhModal
