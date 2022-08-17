import React, {memo} from 'react'
import SummaryTable from 'components/SummaryTable'
import {formatNumber} from '@caominhhung1991/components'
import {useAppState} from 'stores'
import {modalConstants} from 'app-constants'
import {bcqnTienMatConstants} from './bcqn-tien-mat.constants'
import {caLamViecConstants} from 'pages/AppSettings/CaLamViec/ca-lam-viec.constants'

const modalId = modalConstants.bcqnTienMatModal

const BCQNTienMatSummary = memo((props: {pageData: any[]}) => {
  const {pageData} = props

  const {noiPhucVuFields} = useAppState(state => state.bcqnTienMat)
  const hideColumnsState = useAppState(state => state.hideColumns)
  const hideColumns = hideColumnsState?.[modalId || '']

  const columns = React.useMemo(() => {
    const tongFields: any = [
      bcqnTienMatConstants.ngay,
      caLamViecConstants.caLamViecName,
    ]

    const emptyFields: any = [
      bcqnTienMatConstants.ghiChu,
    ]

    const colSpanTong = tongFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)
    const colSpanEmpty = emptyFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)

    return [
      {
        id: 0,
        colSpan: 1 + colSpanTong,
        cellClassName: 'text-center font-weight-bold text-danger'
      },
      ...noiPhucVuFields.map((field: any, index: number) => {
        return {
          id: index + 1,
          colSpan: 1,
          cellClassName: 'text-right font-weight-bold text-small text-danger',
          render: (cell: any = 0, row: any) => {
            const tongNgay = row.tongNgay || 1
            const cost = Math.round((cell / tongNgay) * 1000) / 10

            return <div>{formatNumber(cell)} <span className='text-dark'>{cost}%</span></div>
          }
        }
      }),
      {
        id: noiPhucVuFields.length + 1,
        colSpan: 1,
        cellClassName: 'text-right font-weight-bold text-small text-danger',
        render: (cell: any) => formatNumber(cell)
      },
      {
        id: noiPhucVuFields.length + 2,
        colSpan: 1,
        cellClassName: 'text-right font-weight-bold text-small text-danger',
        render: (cell: any) => formatNumber(Math.round(cell))
      },
      {
        id: noiPhucVuFields.length + 3,
        colSpan: 1,
        cellClassName: 'text-right font-weight-bold text-small text-danger',
        render: (cell: any) => formatNumber(cell)
      },
      {id: noiPhucVuFields.length + 4, colSpan: colSpanEmpty}
    ]
  }, [hideColumns, noiPhucVuFields])

  const datas = React.useMemo(() => {
    return pageData.reduce((acc, data) => {
      const tongCa = acc.tongCa + (data.tongCa || 0)
      const tongNgay = acc.tongNgay + (data.caLamViecId === 'caSang' ? (data.tongNgay || 0) : 0)
      const thuBoSung = acc.thuBoSung + (data.thuBoSung || 0)

      const tongNoiPhucVus = noiPhucVuFields.reduce((tongAcc: any, {id}: any) => {
        const tongNoiPhucVu = (tongAcc?.[id] || 0) + (data?.[id] || 0)

        return {...tongAcc, [id]: tongNoiPhucVu}
      }, acc)

      return {...acc, ...tongNoiPhucVus, tongCa, tongNgay, thuBoSung}
    }, {tong: 'Tổng tiền', tongCa: 0, tongNgay: 0, thuBoSung: 0})
  }, [pageData, noiPhucVuFields])

  const dataSource = React.useMemo(() => {
    const fields = ['tong', ...noiPhucVuFields.map((data: any) => data.id), 'tongCa', 'tongNgay', 'thuBoSung']

    return fields.map((fieldId, index) => {
      const tongNgay = datas?.tongNgay
      return {[index]: datas[fieldId], tongNgay}
    })
  }, [datas, noiPhucVuFields])

  return <SummaryTable columns={columns} dataSource={dataSource} />
})

export default BCQNTienMatSummary
