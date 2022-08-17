import React from 'react'
import {getFormItemFields, MyModal} from '@caominhhung1991/components'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'
import {EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import * as formActions from 'stores/form.store'
import {noiPhucVuConstants} from './noi-phuc-vu.constants'
import {useActions} from 'hooks/useActions'
import {NoiPhucVu} from './NoiPhucVu'
import {modalConstants} from 'app-constants'
import {addSelectedId, onPending} from './noi-phuc-vu.store'
import {thongBaoQuyenChinhSua} from 'services'
import {appSettingsUrls} from 'pages/AppSettings/app-settings.urls'
import KhachHangSelect from '../KhachHang/khach-hang.select'
import {getTenKhachHang} from '../KhachHang/khach-hang.store'

const modalId = modalConstants.noiPhucVuModal

type ModalProps = {
  onAfterAddFinish?(id: string): void
}

const NoiPhucVuModal = (props: ModalProps) => {
  const {onAfterAddFinish} = props

  const actions = useActions({Instance: NoiPhucVu, onPending, addSelectedId})

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {modal, datas} = useAppState(state => state.form)
  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.noiPhucVu?.edit

  const visible = React.useMemo(() => {
    return !!modal?.[modalId]?.open
  }, [modal[modalId]])

  function onClose() {
    dispatch(formActions.closeModal({modalId}))
  }

  async function onOk(currentData: any, validatedValues: any) {
    if (!isEdit) return thongBaoQuyenChinhSua()

    let res: any = true

    const convertedData = await dispatch(getTenKhachHang(validatedValues))

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
    navigate(appSettingsUrls.noiPhucVu)
  }

  return (
    <MyModal<any>
      form
      title={<div>Nơi Phục Vụ <Button icon={<EditOutlined />} onClick={goTrangQL}>Trang quản lý</Button></div>}
      visible={visible}
      onClose={onClose}
      onOkModal={onOk}
      formOptions={getFormItemFields(noiPhucVuConstants.getInputFields())}
      formProps={{
        labelCol: {span: 8},
        wrapperCol: {span: 16}
      }}
      width={700}
      modalId={modalId}
      datas={datas}
    >
      <KhachHangSelect />
    </MyModal>
  )
}

export default NoiPhucVuModal
