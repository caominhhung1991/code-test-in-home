import React from 'react'
import {Form, DatePicker} from 'antd'

function DayPicker() {

  return <Form.Item label={'Ngày'} name={'dayPicker'}  style={{marginBottom: '0'}}>
    <DatePicker
      size={'small'}
      format={'DD/MM/YY'}
      style={{width: '110px'}}
    />
  </Form.Item>
}

export default DayPicker
