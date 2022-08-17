import React from 'react'
import './button.less'
import EditButton from './editButton'
import CancelButton from './cancelButton'
import DeleteButton from './deleteButton'
import CheckButton from './checkButton'

export const EditDeleteCancelButtons = (props: any) => {
  return <div className='editDeleteCancelButton'>
    <div className='view'>
      <EditButton {...props} />
    </div>

    <div className='edit-groups'>
      <CancelButton disabled/>
      <CheckButton {...props}/>
      <DeleteButton {...props}/>
    </div>
  </div>
}

export default EditDeleteCancelButtons
