import React from 'react'
import {Switch} from 'antd'

export const ActiveButton = (props: any) => {
  const {cell, row, onActiveItem, name} = props

  const onClick = (checked: any, e: any) => {
    e.stopPropagation()

    onActiveItem?.(row, checked, name)
  }

  return <Switch size={'small'} checked={cell} onClick={onClick}/>
}

export default ActiveButton
