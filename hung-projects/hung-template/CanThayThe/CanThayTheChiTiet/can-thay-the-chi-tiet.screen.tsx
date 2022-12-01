import React from 'react'
import {useAppDispatch, useAppState} from 'stores'
import {onCallbackDataSource, onChangeSelectedRowKeys, openModal, SoLuongInputModal} from '@caominhhung1991/components'
import {Button} from 'antd'
import {DeleteOutlined, PlusOutlined} from '@ant-design/icons'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {canThayTheChiTietConstants} from './can-thay-the-chi-tiet.constants'
import AppSettingTable from 'pages/AppSetting/app-setting.table'
import CanThayTheChiTietModal from './can-thay-the-chi-tiet.modal'
import {deleteCanThayTheChiTiet, deleteCanThayTheChiTiets, setCanThayTheChiTiet} from './can-thay-the-chi-tiet.store'
import {thongBaoDaLoi} from 'services'
import {confirmOk} from 'services/confirm.services'
import CanThayTheChiTietSummary from './can-thay-the-chi-tiet.summary'

const modalId = modalConstants.canThayTheChiTietModal

type Props = {}

// ví dụ đầy đủ là don-hang-nhap-chi-tiet.screen.tsx
function CanThayTheChiTietScreen(props: Props) {
  const dispatch = useAppDispatch()

  const {canThayTheChiTiets} = useAppState(state => state.canThayTheChiTiet)
  const {selectedRows} = useAppState(state => state.table)

  function onOpenAddCanThayThe() {
    dispatch(openModal({modalId}))
  }

  function onDeleteItem(row: any) {
    dispatch(deleteCanThayTheChiTiet(row))
  }

  function onDeleteItems() {
    const canThayTheDaChons = selectedRows?.[modalId] || []
    if (canThayTheDaChons.length === 0) return thongBaoDaLoi('Chưa chọn mặt hàng!')
    if (!confirmOk('Xác nhận xóa mặt hàng đã chọn?')) return

    dispatch(deleteCanThayTheChiTiets({canThayTheChiTietDataArray: canThayTheDaChons}))
    dispatch(onChangeSelectedRowKeys({tableId: modalId, selectedRowKeys: [], selectedRows: []}))
  }

  function onOpenEditSoLuong(row: any) {
    dispatch(openModal({modalId: modalConstants.openEditSoLuong, data: row}))
  }

  const pageDataSource = React.useMemo(() => {
    return onCallbackDataSource('tenMatHang', Object.values(canThayTheChiTiets || {}))
  }, [canThayTheChiTiets])

  return (
    <div className='canThayTheChiTiet-page' css={pageStyles}>
      <div style={{marginBottom: '7px'}}>
        <Button icon={<PlusOutlined />} type={'primary'} onClick={onOpenAddCanThayThe}>Thêm canThayThe</Button>
        <Button icon={<DeleteOutlined />} type={'dashed'} danger onClick={onDeleteItems}>Xóa canThayThe đã chọn</Button>
      </div>

      <AppSettingTable<any>
        isEdit={true}
        constants={canThayTheChiTietConstants}
        onCallbackDataSource={(dataSource: any) => onCallbackDataSource('tenMatHang', dataSource)}
        datas={canThayTheChiTiets}
        modalId={modalId}
        isSelection={false}
        pagination={false}
        inputOptions={{onDeleteItem, openEditSoLuong: onOpenEditSoLuong}}
        summary={(pageData: any) => <CanThayTheChiTietSummary pageData={pageData} />}
      />

      <CanThayTheChiTietModal />

      <SoLuongInputModal
        modalId={modalConstants.openEditSoLuong}
        soLuongName={'soLuong'}
        dataSource={pageDataSource}
        onOk={(values: any) => {
          dispatch(setCanThayTheChiTiet({convertedData: values}))
        }}
      />
    </div>
  )
}

export default CanThayTheChiTietScreen
