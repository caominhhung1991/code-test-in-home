import React from 'react'
import {convertMomentToString, getFormItemFields, MyModal, closeModal, onConfirmOk} from '@caominhhung1991/components'
import {Button, Form} from 'antd'
import {useNavigate} from 'react-router-dom'
import {EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {canThayTheConstants} from './can-thay-the.constants'
import {useActions} from 'hooks/useActions'
import {CanThayThe} from './CanThayThe'
import {modalConstants} from 'app-constants'
import {addSelectedId, setCanThayThePending} from './can-thay-the.store'
import {thongBaoQuyenChinhSua} from 'services'

const modalId = modalConstants.canThayTheModal

type ModalProps = {
  onAfterAddFinish?(id: string, data?: any): void
}

function CanThayTheModal(props: ModalProps) {
  const {onAfterAddFinish} = props

  const actions = useActions({Instance: CanThayThe, onPending: setCanThayThePending, addSelectedId})

  const dispatch = useAppDispatch()
  const {modal, datas} = useAppState(state => state.form)

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.canThayThe?.edit

  const visible = React.useMemo(() => !!modal?.[modalId]?.open, [modal[modalId]])

  const [form] = Form.useForm()
  const data = datas?.[modalId]
  React.useEffect(() => {
    if (!visible) form.resetFields()
    else if (visible && data) form.setFieldsValue(data)
  }, [visible, data])

  function onClose() {
    dispatch(closeModal({modalId}))
  }

  function onOk(currentData: any, validatedValues: any) {
    if (!isEdit) return thongBaoQuyenChinhSua()
    dispatch(onConfirmOk(async () => {
      let res: any = true

      const convertedData = convertMomentToString(canThayTheConstants.getInputFields(), validatedValues)

      if (validatedValues) {
        if (!currentData?.id) { // ADD
          res = await dispatch(actions.onAddAsync({validatedValues: convertedData}))

          onAfterAddFinish?.(res?.id, res)
          res = Boolean(res)
        } else { // UPDATE
          res = Boolean(await dispatch(actions.onUpdateAsync({
            currentData, validatedValues: convertedData
          })))
        }
      }

      res && dispatch(closeModal({modalId}))
    }))
  }

  return (
    <MyModal<any>
      form
      title={<div>CanThayThe</div>}
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(canThayTheConstants.getInputFields())}
      formProps={{labelCol: {span: 8}, wrapperCol: {span: 16}}}
      width={700}
      modalId={modalId}
      datas={datas}
    >
    </MyModal>
  )
}

export default CanThayTheModal
