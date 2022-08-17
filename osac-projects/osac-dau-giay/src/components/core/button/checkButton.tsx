import React from 'react'
import {MyButton, IConstants} from '@caominhhung1991/components'
import {EditOutlined} from '@ant-design/icons'
import {useAppDispatch} from 'stores'
import {openModal} from 'stores/form.store'
import {convertToMoment} from '@caominhhung1991/components'

type ButtonProps = {
  row: any
  modalId: string
  constants: IConstants
}

export const CheckButton = (props: ButtonProps) => {
  const {row, modalId, constants} = props

  const dispatch = useAppDispatch()

  return <MyButton
    type='primary'
    size='small'
    icon={<EditOutlined/>}
    onClick={(e) => {
      e.stopPropagation()

      const data = convertToMoment(constants.getInputFields(), row)
      dispatch(openModal({data, modalId, edit: true}))
    }}
  />
}

export default CheckButton
