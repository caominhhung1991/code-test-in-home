import './button.less'
import React from 'react'
import {DownloadOutlined} from '@ant-design/icons'
import {MyButton} from '@caominhhung1991/components'
// import {useAppDispatch} from 'stores'

export const DownloadButton = (props: any) => {
  // const dispatch = useAppDispatch()

  return <div className='downloadButton'>
    <MyButton
      danger
      size='small'
      icon={<DownloadOutlined/>}
      tooltipTitle={'Dowload'}
      onClick={(e: any) => {
        e.stopPropagation()

        // dispatch(setEditId({}))
      }}
    />
  </div>
}

export default DownloadButton
