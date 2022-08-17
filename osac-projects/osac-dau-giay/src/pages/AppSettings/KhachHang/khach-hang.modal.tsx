import React from 'react'
import {convertMomentToString, getFormItemFields, MyModal} from '@caominhhung1991/components'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import {EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {khachHangConstants} from './khach-hang.constants'
import {useActions} from 'hooks/useActions'
import {KhachHang} from './KhachHang'
import {modalConstants} from 'app-constants'
import {addSelectedId, onPending} from './khach-hang.store'
import {thongBaoQuyenChinhSua} from 'services'
import {appSettingsUrls} from '../app-settings.urls'

const modalId = modalConstants.khachHangModal

type ModalProps = {
  onAfterAddFinish?(id: string): void
}

const KhachHangModal = (props: ModalProps) => {
  const {onAfterAddFinish} = props

  const actions = useActions({Instance: KhachHang, onPending, addSelectedId})

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {modal, datas} = useAppState(state => state.form)

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.khachHang?.edit

  const visible = React.useMemo(() => {
    return !!modal?.[modalId]?.open
  }, [modal[modalId]])

  function onClose() {
    dispatch(formActions.closeModal({modalId}))
  }

  async function onOk(currentData: any, validatedValues: any) {
    if (!isEdit) return thongBaoQuyenChinhSua()

    let res: any = true

    const convertedData = convertMomentToString(khachHangConstants.getInputFields(), validatedValues)

    if (validatedValues) {
      if (!currentData?.id) { // ADD
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

  function goTrangQL() {
    navigate(appSettingsUrls.khachHang)
  }

  return (
    <MyModal<any>
      form
      title={<div>Khách Hàng <Button icon={<EditOutlined />} onClick={goTrangQL}>Trang quản lý</Button></div>}
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(khachHangConstants.getInputFields())}
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

export default KhachHangModal
