import React from 'react'
import {PlusOutlined, EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {TaiKhoanNganHang} from './TaiKhoanNganHang'
import * as formActions from 'stores/form.store'
import {MyButton} from '@caominhhung1991/components'
import {modalConstants} from 'app-constants'
import {taiKhoanNganHangConstants} from './tai-khoan-ngan-hang.constants'
import {convertToMoment} from '@caominhhung1991/components'

const modalId = modalConstants.taiKhoanNganHangModal

type ITaiKhoanNganHangAddButtonProps = {
}

const TaiKhoanNganHangAddButton = (props: ITaiKhoanNganHangAddButtonProps) => {
  const dispatch = useAppDispatch()

  const {taiKhoanNganHangs, taiKhoanNganHangId} = useAppState(state => state.taiKhoanNganHang)
  const data = taiKhoanNganHangs?.[taiKhoanNganHangId]

  return (
    <MyButton
      type='primary'
      icon={data?.id ? <EditOutlined/>:  <PlusOutlined/>}
      onClick={() => {
        const convertedData = convertToMoment(taiKhoanNganHangConstants.getInputFields(), data)
        const instance = new TaiKhoanNganHang()

        const initData = convertedData?.id ? convertedData : instance.initData

        dispatch(formActions.openModal({data: initData, modalId}))
      }}
    >TK N.Hàng</MyButton>
  )
}

export default TaiKhoanNganHangAddButton
