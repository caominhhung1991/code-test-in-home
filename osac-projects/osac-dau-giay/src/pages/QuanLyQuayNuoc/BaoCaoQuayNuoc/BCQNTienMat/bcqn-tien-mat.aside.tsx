import React from 'react'
import {Button} from 'antd'
import {useForm, FormInstance} from 'antd/lib/form/Form'
import {CloseOutlined} from '@ant-design/icons'
import {MyAside} from 'components/business'
import {useAppDispatch} from 'stores'
import {Moment} from 'moment'
import {DatePickerHandle} from 'hooks/date-picker/useDatePicker'
import {modalConstants} from 'app-constants'
import {toggleAside} from 'stores/tags-page.store'
import KhachHangSelect from 'pages/AppSettings/KhachHang/khach-hang.select'
import {onHienThiDuLieuBCQNTienMatMonth} from './bcqn-tien-mat.store'

type Props = {
  form?: FormInstance
  selectedTime?: Moment
  dateTimePicker?: DatePickerHandle
}
const BCQNTienMatAside = (props: Props) => {
  const {selectedTime, dateTimePicker, form} = props
  const dispatch = useAppDispatch()

  async function onLayDuLieu() {
    const {khachHangId} = (await form?.validateFields?.()) || {}

    await dispatch(onHienThiDuLieuBCQNTienMatMonth(selectedTime, khachHangId))
  }

  return (
    <>
      <MyAside
        header={
          <div className={'font-weight-bold'}>
            <span>Thông Tin Trang </span>
          </div>
        }
        body={
          <div className='form-input-aside' style={{padding: '5px'}}>
            <div>
              <KhachHangSelect
                form={form}
                rules={[{required: true, message: 'Chưa chọn khách hàng'}]}
                onAfterSelect={(khachHangId: string) => {
                  localStorage.setItem('khachHangId', khachHangId)
                }}
              />
            </div>
            <div>{dateTimePicker?.getDayRender?.() || null}</div>
            <div>
              <Button block onClick={onLayDuLieu} type='primary'>Hiển thị dữ liệu một tháng</Button>
            </div>
          </div>
        }
        footer={
          <div>
            <Button
              icon={<CloseOutlined />}
              onClick={() => {
                dispatch(toggleAside({tagPageId: modalConstants.bcqnTienMatModal}))
              }}>Đóng mở rộng</Button>
          </div>
        }
      />

    </>
  )
}

export default BCQNTienMatAside
