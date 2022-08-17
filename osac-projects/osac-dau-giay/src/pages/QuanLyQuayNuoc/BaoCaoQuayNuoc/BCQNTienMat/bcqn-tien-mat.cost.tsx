import React from 'react'
import {formatNumber} from '@caominhhung1991/components'

export function BcqnTienMatCost(cell: any = 0, row: any, options?: any) {
  const cost = React.useMemo(() => {
    const tongNgay = row?.tongNgay || 1

    return Math.round((cell / tongNgay) * 1000) / 10
  }, [])

  return (
    <div>
      <div style={{marginRight: '7px', textAlign: 'right'}}>{formatNumber(cell || '')}</div>
      {
        cost ? <div><small style={{width: '30px'}} className='text-danger'>{cost}%</small></div> : ''
      }
    </div>
  )
}
