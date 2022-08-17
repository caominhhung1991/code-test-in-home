import React from 'react'
import {MyButton} from '@caominhhung1991/components'
import {CloseOutlined} from '@ant-design/icons'

export const CancelButton = (props: any) => {
  return <MyButton
    danger
    size='small'
    icon={<CloseOutlined/>}
    onClick={(e: any) => {
      e.stopPropagation()
      // dispatch(setEditId({}))
    }}
    {...props}
  />
}

export default CancelButton
