import React from 'react'
import {PlusOutlined, EditOutlined} from '@ant-design/icons'
import {useAppDispatch, useAppState} from 'stores'
import {CanThayThe} from './CanThayThe'
import {canThayTheConstants} from './can-thay-the.constants'
import * as formActions from 'stores/form.store'
import {MyButton} from '@caominhhung1991/components'
import {modalConstants} from 'app-constants'
import {convertToMoment} from 'services'

const modalId = modalConstants.canThayTheModal

type AddButtonProps = {
}

const CanThayTheAddButton = (props: AddButtonProps) => {
  const dispatch = useAppDispatch()

  const {canThayThes, canThayTheId} = useAppState(state => state.canThayThe)
  const data = canThayThes?.[canThayTheId]

  return (
    <MyButton
      type='primary'
      icon={data?.id ? <EditOutlined/> : <PlusOutlined/>}
      onClick={() => {
        const convertedData = convertToMoment(canThayTheConstants.getInputFields(), data)
        const initData = convertedData?.id ? convertedData : (new CanThayThe()).initData

        dispatch(formActions.openModal({data: initData, modalId}))
      }}
    >CanThayThe</MyButton>
  )
}

export default CanThayTheAddButton
