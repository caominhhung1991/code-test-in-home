import React from 'react'
import {taiKhoanNganHangConstants} from './tai-khoan-ngan-hang.constants'
import {IUseActions, useActions} from 'hooks/useActions'
import {TaiKhoanNganHang} from './TaiKhoanNganHang'
import {modalConstants} from 'app-constants'
import {onPending, addSelectedId} from './tai-khoan-ngan-hang.store'
import AppSettingModal from '../app-setting.modal'
import {useAppState} from 'stores'

type ITaiKhoanNganHangModalProps = {
  onAfterAddFinish?(taiKhoanNganHangId: string): void
}

const TaiKhoanNganHangModal = (props: ITaiKhoanNganHangModalProps) => {
  const {onAfterAddFinish} = props

  const actions: IUseActions = useActions({Instance: TaiKhoanNganHang, onPending, addSelectedId})
  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.taiKhoanNganHang?.edit

  return (
    <AppSettingModal
      isEdit={isEdit}
      modalId={modalConstants.taiKhoanNganHangModal}
      modalTitle={'Tài khoản ngân hàng'}
      actions={actions}
      constants={taiKhoanNganHangConstants}
      onAfterAddFinish={onAfterAddFinish}
    />
  )
}

export default TaiKhoanNganHangModal
