import React from 'react'
import {PlusOutlined, EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {DonViTinh} from './DonViTinh'
import {donViTinhConstants} from './don-vi-tinh.constants'
import * as formActions from 'stores/form.store'
import {MyButton} from '@caominhhung1991/components'
import {modalConstants} from 'app-constants'
import {convertToMoment} from '@caominhhung1991/components'

const modalId = modalConstants.donViTinhModal

type AddButtonProps = {
}

const DonViTinhAddButton = (props: AddButtonProps) => {
  const dispatch = useAppDispatch()

  const {donViTinhs, donViTinhId} = useAppState(state => state.donViTinh)
  const data = donViTinhs?.[donViTinhId]

  return (
    <MyButton
      type='primary'
      icon={data?.id ? <EditOutlined/> : <PlusOutlined/>}
      onClick={() => {
        const convertedData = convertToMoment(donViTinhConstants.getInputFields(), data)
        const initData = convertedData?.id ? convertedData : (new DonViTinh()).initData

        dispatch(formActions.openModal({data: initData, modalId}))
      }}
    >DonViTinh</MyButton>
  )
}

export default DonViTinhAddButton
