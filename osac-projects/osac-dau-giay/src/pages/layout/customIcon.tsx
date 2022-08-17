import React, {FC} from 'react'
import {
  AliwangwangOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  SettingOutlined,
  SkinOutlined,
  TeamOutlined,
  QqOutlined,
  IdcardFilled,
  DollarOutlined,
  MedicineBoxOutlined,
  SnippetsFilled,
  BoxPlotFilled,
  SketchOutlined,
} from '@ant-design/icons'
import {ReactComponent as GuideSvg} from 'assets/menu/guide.svg'
import {ReactComponent as PermissionSvg} from 'assets/menu/permission.svg'
import {ReactComponent as DashboardSvg} from 'assets/menu/dashboard.svg'
import {ReactComponent as DocumentationSvg} from 'assets/menu/documentation.svg'

interface CustomIconProps {
  type: string;
}

export const CustomIcon: FC<CustomIconProps> = props => {
  const {type} = props
  let com: any

  if (type === 'guide') {
    com = <GuideSvg />
  } else if (type === 'permission') {
    com = <PermissionSvg />
  } else if (type === 'dashboard') {
    com = <DashboardSvg />
  } else if (type === 'account') {
    com = <AliwangwangOutlined />
  } else if (type === 'documentation') {
    com = <DocumentationSvg />
  } else if (type === 'nhanSu') {
    com = <TeamOutlined />
  } else if (type === 'snipest') {
    com = <SnippetsFilled />
  } else if (type === 'box-slot') {
    com = <BoxPlotFilled />
  } else if (type === 'money') {
    com = <DollarOutlined />
  } else if (type === 'salary') {
    com = <DollarOutlined />
  } else if (type === 'thungThuoc') {
    com = <MedicineBoxOutlined />
  } else if (type === 'dongPhuc') {
    com = <SkinOutlined />
  } else if (type === 'settings') {
    com = <SettingOutlined />
  } else if (type === 'heart') {
    com = <HeartOutlined />
  }  else if (type === 'card') {
    com = <IdcardFilled />
  } else if (type === 'clock') {
    com = <ClockCircleOutlined />
  } else if (type === 'chimCanhCut') {
    com = <QqOutlined />
  } else if (type === 'kimCuong') {
    com = <SketchOutlined />
  } else {
    com = null
  }

  return com ? <span className='anticon'>{com}</span> : null
}
