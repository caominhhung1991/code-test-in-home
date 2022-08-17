import React from 'react'
import {convertMomentToString, getFormItemFields, MyModal} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {bcqnTienMatConstants} from './bcqn-tien-mat.constants'
import {modalConstants} from 'app-constants'
import {thongBaoQuyenChinhSua} from 'services'
import {onUpdateBCQNTienMat} from './bcqn-tien-mat.store'

const modalId = modalConstants.bcqnTienMatModal

const BCQNTienMatModal = () => {
  const dispatch = useAppDispatch()
  const {modal, datas} = useAppState(state => state.form)

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.bcqnTienMat?.edit

  const visible = React.useMemo(() => {
    return !!modal?.[modalId]?.open
  }, [modal[modalId]])

  function onClose() {
    dispatch(formActions.closeModal({modalId}))
  }

  async function onOk(currentData: any, validatedValues: any) {
    if (!isEdit) return thongBaoQuyenChinhSua()

    const convertedData = convertMomentToString(bcqnTienMatConstants.getInputFields(), validatedValues)

    if (validatedValues) {
      const updatedData = {...convertedData, id: currentData.id}

      await dispatch(onUpdateBCQNTienMat(updatedData))
    }

    dispatch(formActions.closeModal({modalId}))
  }


  return (
    <MyModal<any>
      form
      title={<div>Báo Cáo Tiền Mặt Quầy Nước</div>}
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(bcqnTienMatConstants.getInputFields())}
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

export default BCQNTienMatModal
