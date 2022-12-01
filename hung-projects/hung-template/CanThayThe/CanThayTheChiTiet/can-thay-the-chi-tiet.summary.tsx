import React from 'react'
import SummaryTable from 'components/SummaryTable'
import {constants, formatNumber} from '@caominhhung1991/components'
import {useAppState} from 'stores'
import {modalConstants} from 'app-constants'

const modalId = modalConstants.canThayTheChiTietModal

function CanThayTheChiTietSummary(props: {pageData: any[]}) {
  const {pageData} = props

  const hideColumnsState = useAppState(state => state.hideColumns)
  const hideColumns = hideColumnsState?.[modalId || '']

  const columns = React.useMemo(() => {
    const tongFields: any = [
      constants.stt,
      // nguyenVatLieuChaLuaConstants.tenNguyenVatLieuChaLua,
      // nhomMatHangConstants.tenNhomMatHang,
      // phieuKhoChiTietConstants.soLuong,
      // donViTinhConstants.tenDonViTinh,
      // phieuKhoChiTietConstants.donGia
    ]

    const tienFields: any = [
      // phieuKhoChiTietConstants.thanhTien
    ]

    const emptyFields: any = [constants.editRow]

    const colSpanTong = tongFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)
    const colSpanTien = tienFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)
    const colSpanEmpty = emptyFields.reduce((acc: any, {id}: any) => (acc + (hideColumns?.[id] ? 0 : 1)), 0)

    return [
      {
        id: 0,
        colSpan: 0 + colSpanTong,
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
      const thanhTien = acc.thanhTien + (data.thanhTien || 0)

      return {...acc, thanhTien}
    }, {tong: 'Tổng tiền', thanhTien: 0})
  }, [pageData])

  const dataSource = React.useMemo(() => {
    const fields = ['tong', 'thanhTien']

    return fields.map((fieldId, index) => ({[index]: datas[fieldId]}))
  }, [datas])

  return <SummaryTable columns={columns} dataSource={dataSource} />
}

export default CanThayTheChiTietSummary
