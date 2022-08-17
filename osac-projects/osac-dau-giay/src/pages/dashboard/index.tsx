import React, {FC} from 'react'
import './index.less'
import Overview from './overview'
import SalePercent from './salePercent'
import TimeLine from './timeLine'

const DashBoardPage: FC = () => {
  return (
    <div className='over-flow-scroll'>
      <div className='font-weight-bold' style={{padding: '10px 0'}}>Welcome to Osac Service</div>

      <Overview loading={false} />
      <SalePercent loading={false} />
      <TimeLine loading={false} />
    </div>
  )
}

export default DashBoardPage
