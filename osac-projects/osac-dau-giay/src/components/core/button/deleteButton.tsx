import React, {FC} from 'react'
import {MyButton} from '@caominhhung1991/components'
import {DeleteOutlined} from '@ant-design/icons'

export const DeleteButton: FC = (props: any) => {
  const {row, onDeleteItem} = props

  return <MyButton
    danger
    type='primary'
    size='small'
    icon={<DeleteOutlined/>}
    onClick={(e) => {
      e.stopPropagation()
      if (!window.confirm('Are you sure?')) return null
      onDeleteItem?.(row)
    }}
  />
}

export default DeleteButton
