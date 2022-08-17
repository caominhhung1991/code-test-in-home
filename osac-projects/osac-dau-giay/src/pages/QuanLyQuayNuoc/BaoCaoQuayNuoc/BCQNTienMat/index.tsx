import React, {FC} from 'react'
import moment from 'moment'
import {useForm} from 'antd/lib/form/Form'
import {useAppDispatch, useAppState} from 'stores'
import {MyTabs} from 'components/business'
import * as formActions from 'stores/form.store'
import {openModal} from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {pageStyles} from 'styles'
import {bcqnTienMatConstants} from './bcqn-tien-mat.constants'
import AppSettingTable from 'pages/AppSettings/app-setting.table'
import BCQNTienMatModal from './bcqn-tien-mat.modal'
import {BCQNTienMat} from './BCQNTienMat'
import {IUseActions, useActions} from 'hooks/useActions'
import {
  addSelectedId,
  getTableConstants,
  onCapNhatDuLieuOsacBinhDuong, onHienThiDuLieuBCQNTienMatMonth,
  onPending,
  setPageSize
} from './bcqn-tien-mat.store'
import {downloadExcel} from 'stores/table.store'
import {toggleAside} from 'stores/tags-page.store'
import BCQNTienMatAside from './bcqn-tien-mat.aside'
import {thongBaoQuyenChinhSua} from 'services'
import {useDatePicker} from 'hooks'
import {convertToMoment} from '@caominhhung1991/components'
import BCQNTienMatSummary from './bcqn-tien-mat.summary'
import {addSelectedId as addSelectedKhachHangId} from 'pages/AppSettings/KhachHang/khach-hang.store'

const modalId = modalConstants.bcqnTienMatModal

const BCQNTienMatScreen: FC = () => {
  const dispatch = useAppDispatch()

  const [form] = useForm()

  const {tabsData, loading, pageSize, bcqnTienMats, tableConstants} = useAppState(state => state.bcqnTienMat)
  const tagPage = useAppState(state => state.tagsPage?.[modalId])

  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.bcqnTienMat?.edit

  const {khachHangId} = useAppState(state => state.khachHang)
  const {noiPhucVus} = useAppState(state => state.noiPhucVu)

  const [selectedTime, dateTimePicker] = useDatePicker({
    defaultTime: moment('16-12-2021', 'L')
  })

  const actions: IUseActions = useActions({Instance: BCQNTienMat, onPending, addSelectedId})

  function onTabClick(key: any) {
    if (key === 'add' && isEdit) {
      if (!isEdit) return thongBaoQuyenChinhSua()

      const instance = new BCQNTienMat()
      dispatch(formActions.openModal({modalId, data: instance.initData}))
    } else if (key === 'aside') {
      dispatch(toggleAside({tagPageId: modalId}))
    } else if (key === 'taiExcel') {
      dispatch(downloadExcel({
        tableId: modalId,
        constants: bcqnTienMatConstants,
        fileSheet: 'bcqnTienMatSheet',
        fileName: 'bcqnTienMatName'
      }))
    } else if (key === 'capNhatDuLieu') {
      if (!isEdit) return thongBaoQuyenChinhSua()
      if (!window.confirm('Xác nhận cập nhật?')) return

      dispatch(onCapNhatDuLieuOsacBinhDuong(selectedTime, dateTimePicker))
    }
  }

  React.useEffect(() => {
    dispatch(getTableConstants())
  }, [khachHangId, noiPhucVus])

  React.useEffect(() => {
    const khachHangId: any = localStorage.getItem('khachHangId')
    form.setFieldsValue({khachHangId})
    dispatch(addSelectedKhachHangId(khachHangId))
    dispatch(onHienThiDuLieuBCQNTienMatMonth(selectedTime, khachHangId))
  }, [])

  return (
    <div className='bcqnTienMat-page' css={pageStyles}>
      <MyTabs
        className='tabs'
        options={tabsData}
        activeKey={tagPage ? 'aside' : ''}
        onTabClick={onTabClick}
      />

      <div className='tabs-main' style={{marginTop: '10px'}}>
        {tagPage && <BCQNTienMatAside form={form} selectedTime={selectedTime} dateTimePicker={dateTimePicker} />}
        <div className='aside-main'>
          <AppSettingTable<any>
            constants={tableConstants}
            actions={actions}
            datas={bcqnTienMats}
            loading={loading}
            modalId={modalId}
            isEdit={isEdit}
            isSelection={true}
            pagination={true}
            pageSize={pageSize}
            rowClassName={data => {
              const day = moment(data.dayId, 'YYMMDD').format('dd')
              return day === 'CN' ? 'bg-gold-less' : ''
            }}
            onRow={record => {
              return {
                onClick: () => {
                  const data = convertToMoment([bcqnTienMatConstants.ngay], record)

                  if (data.caLamViecId === 'caSang')
                    dispatch(openModal({modalId: modalId, data}))
                }
              }
            }}
            onChange={(pagination) => {
              dispatch(setPageSize(pagination.pageSize))
            }}
            summary={(pageData: any) => {
              return <BCQNTienMatSummary pageData={pageData} />
            }}
          />
        </div>
      </div>

      <BCQNTienMatModal />
    </div>
  )
}

export default BCQNTienMatScreen
