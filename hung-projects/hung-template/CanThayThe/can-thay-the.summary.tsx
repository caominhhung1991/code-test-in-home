import React from 'react'
import SummaryTable from 'components/SummaryTable'
import {formatNumber} from '@caominhhung1991/components'
import {useAppState} from 'stores'
import {modalConstants} from 'app-constants'

const modalId = modalConstants.canThayTheModal

type Props = {
  pageData: any[]
  isSelection?: boolean
  isExpandable?: boolean
}

function CanThayTheSummary(props: Props) {
  const {pageData, isSelection, isExpandable} = props

  const hideColumnsState = useAppState(state => state.hideColumns)
  const hideColumns = hideColumnsState?.[modalId || '']

  const columns = React.useMemo(() => {
    const tongFields: any = []

    const tienFields: any = []

    const emptyFields: any = []

    const colSpanTong = tongFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)
    const colSpanTien = tienFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)
    const colSpanEmpty = emptyFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)

    return [
      {
        id: 0,
        colSpan: (isSelection ? 1 : 0) + (isExpandable ? 1 : 0) + colSpanTong,
        cellClassName: 'text-center font-weight-bold text-danger'
      },
      {
        id: 1,
        colSpan: colSpanTien,
        cellClassName: 'text-right font-weight-bold text-small text-danger',
        render: (cell: any) => formatNumber(cell)
      },
      {id: 2, colSpan: colSpanEmpty}
    ]
  }, [hideColumns])

  const datas = React.useMemo(() => {
    return pageData.reduce((acc, data) => {
      const tongTienDeNghi = acc.tongTienDeNghi + (data.tongTienDeNghi || 0)

      return {...acc, tongTienDeNghi}
    }, {tong: 'Tổng tiền', tongTienDeNghi: 0})
  }, [pageData])

  const dataSource = React.useMemo(() => {
    const fields = ['tong', 'tongTienDeNghi']

    return fields.map((fieldId, index) => ({[index]: datas[fieldId]}))
  }, [datas])

  return <SummaryTable columns={columns} dataSource={dataSource} />
}

export default CanThayTheSummary
