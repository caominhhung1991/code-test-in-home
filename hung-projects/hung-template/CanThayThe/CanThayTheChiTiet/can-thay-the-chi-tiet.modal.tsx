import React from 'react'
import {convertMomentToString, MyForm, MyModal, closeModal} from '@caominhhung1991/components'
import {Form} from 'antd'
import {useAppDispatch, useAppState} from 'stores'
import {canThayTheChiTietConstants} from './can-thay-the-chi-tiet.constants'
import {modalConstants} from 'app-constants'
import {setCanThayTheChiTiet} from './can-thay-the-chi-tiet.store'
import {InputItem} from 'components/core/input/input-item'
// import {focusElement} from 'services/dom/focus-element'

const modalId = modalConstants.canThayTheChiTietModal

type ModalProps = {}

function CanThayTheChiTietModal(props: ModalProps) {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  const {modal, datas} = useAppState(state => state.form)

  const visible = React.useMemo(() => !!modal?.[modalId]?.open, [modal[modalId]])
  const data = datas?.[modalId]

  function onClose() {
    dispatch(closeModal({modalId}))
  }

  async function onOk() {
    const validatedValues = await form.validateFields()

    const convertedData = convertMomentToString(canThayTheChiTietConstants.getInputFields(), validatedValues)
    console.log(convertedData, 'convertedData')

    dispatch(setCanThayTheChiTiet({convertedData, nameOfId: false}))
    // focusElement('matHangId')
    // dispatch(closeModal({modalId}))
  }

  React.useEffect(() => {
    if (!visible) form.resetFields()
    else if (visible && data) form.setFieldsValue(data)
  }, [visible, data])

  return (
    <MyModal<any>
      title={<div>CanThayThe</div>}
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      width={900}
      modalId={modalId}
      datas={datas}
    >
      <MyForm form={form} labelCol={{span: 6}} wrapperCol={{span: 18}}>
        <InputItem name={'id'} label={'id'} disabled />
      </MyForm>
    </MyModal>
  )
}

export default CanThayTheChiTietModal
