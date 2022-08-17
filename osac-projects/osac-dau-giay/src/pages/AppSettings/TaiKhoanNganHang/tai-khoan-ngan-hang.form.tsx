import React from 'react'
import {useForm} from 'antd/lib/form/Form'
import {useAppState} from 'stores'
import {MyForm} from '@caominhhung1991/components'
import {taiKhoanNganHangConstants} from './tai-khoan-ngan-hang.constants'
import {isEmpty} from 'lodash'
import {convertToMoment} from '@caominhhung1991/components'

type FormProps = {
}

const TaiKhoanNganHangForm = (props: FormProps) => {
  const [formInstance] = useForm()

  const {taiKhoanNganHangs, taiKhoanNganHangId: id} = useAppState(state => state.taiKhoanNganHang)
  const data = taiKhoanNganHangs?.[id]

  React.useEffect(() => {
    const convertedData = convertToMoment(taiKhoanNganHangConstants.getInputFields(), data)

    if (!isEmpty(data)) {
      formInstance.setFieldsValue(convertedData)
    } else {
      formInstance.resetFields()
    }
  }, [data])

  return (
    <div className="tai-khoan-ngan-hang-form">
      <MyForm
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        options={taiKhoanNganHangConstants.getFormViewFields?.()}
        form={formInstance}
      />
    </div>
  )
}

export default TaiKhoanNganHangForm
