import React from 'react'
import {PlusOutlined, EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {NhaCungCap} from './NhaCungCap'
import {nhaCungCapConstants} from './nha-cung-cap.constants'
import * as formActions from 'stores/form.store'
import {MyButton} from '@caominhhung1991/components'
import {modalConstants} from 'app-constants'
import {convertToMoment} from '@caominhhung1991/components'

const modalId = modalConstants.nhaCungCapModal

type AddButtonProps = {
}

const NhaCungCapAddButton = (props: AddButtonProps) => {
  const dispatch = useAppDispatch()

  const {nhaCungCaps, nhaCungCapId} = useAppState(state => state.nhaCungCap)
  const data = nhaCungCaps?.[nhaCungCapId]

  return (
    <MyButton
      type='primary'
      icon={data?.id ? <EditOutlined/> : <PlusOutlined/>}
      onClick={() => {
        const convertedData = convertToMoment(nhaCungCapConstants.getInputFields(), data)
        const initData = convertedData?.id ? convertedData : (new NhaCungCap()).initData

        dispatch(formActions.openModal({data: initData, modalId}))
      }}
    >NhaCungCap</MyButton>
  )
}

export default NhaCungCapAddButton
