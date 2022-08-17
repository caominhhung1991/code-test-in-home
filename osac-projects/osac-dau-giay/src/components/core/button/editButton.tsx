import React, {FC} from 'react'
import {MyButton} from '@caominhhung1991/components'
import {EyeOutlined} from '@ant-design/icons'
// import {useAppDispatch} from 'stores'
// import {setEditId} from 'stores/form.store'

export const EditButton: FC = (props: any) => {
  // const {row, modalId} = props
  // const dispatch = useAppDispatch()

  return <MyButton
    block
    size='small'
    icon={<EyeOutlined />}
    onClick={(e) => {
      e.stopPropagation()
      // dispatch(setEditId({row, modalId}))
    }}
  />
}

export default EditButton
