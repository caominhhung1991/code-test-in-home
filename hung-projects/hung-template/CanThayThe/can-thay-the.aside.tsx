import React from 'react'
import {Button} from 'antd'
import {CloseOutlined} from '@ant-design/icons'
import {MyAside} from 'components/business'
import {useAppDispatch} from 'stores'
import {Moment} from 'moment'
import {DatePickerHandle} from '@caominhhung1991/components'
// import {hideColumnsConstants} from 'app-constants'
// import CanThayTheHideColumns from './can-thay-the.hide-columns'
import {modalConstants} from 'app-constants'
import {toggleAside} from '@caominhhung1991/components'

type Props = {
  selectedTime?: Moment
  dateTimePicker?: DatePickerHandle
}

function CanThayTheAside(props: Props) {
  const {selectedTime, dateTimePicker} = props
  const dispatch = useAppDispatch()

  function onDongMoRong() {
    dispatch(toggleAside({tagPageId: modalConstants.canThayTheModal}))
  }

  return (
    <>
      <MyAside
        header={<div className={'font-weight-bold'}>Thông Tin Trang</div>}
        body={
          <div className='form-input-aside' style={{padding: '5px'}}>
            <div>{dateTimePicker?.getDayRender?.() || null}</div>
            <div>
              {/*<Button*/}
              {/*  type={'primary'} icon={<DeleteColumnOutlined />}*/}
              {/*  onClick={() => dispatch(openModal({modalId: hideColumnsConstants.canThayThe}))}*/}
              {/*>Ẩn cột của bảng</Button>*/}
            </div>
          </div>
        }
        footer={<div><Button icon={<CloseOutlined />} onClick={onDongMoRong}>Đóng mở rộng</Button></div>}
      />

      {/*<CanThayTheHideColumns modalId={modalConstants.canThayTheModal} />*/}
    </>
  )
}

export default CanThayTheAside
