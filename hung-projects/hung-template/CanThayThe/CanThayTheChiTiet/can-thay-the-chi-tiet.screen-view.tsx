import React from 'react'
import {canThayTheChiTietViewConstants} from './can-thay-the-chi-tiet.constants'
import AppSettingTable from 'pages/AppSetting/app-setting.table'

type Props = {record?: any}

function CanThayTheChiTietScreenView(props: Props) {
  const {record} = props

  const canThayTheChiTiets = React.useMemo(() => {
    return record?.canThayTheChiTiets || {}
  }, [record])

  return (
    <AppSettingTable<any>
      constants={canThayTheChiTietViewConstants}
      datas={canThayTheChiTiets}
    />
  )
}

export default CanThayTheChiTietScreenView
