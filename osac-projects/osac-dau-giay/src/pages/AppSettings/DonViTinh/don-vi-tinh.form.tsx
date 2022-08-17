import React from 'react'
import {useForm} from 'antd/lib/form/Form'
import {useAppState} from 'stores'
import {MyForm} from '@caominhhung1991/components'
import {donViTinhConstants} from './don-vi-tinh.constants'
import {isEmpty} from 'lodash'
import {convertToMoment} from '@caominhhung1991/components'

type FormProps = {
}

const DonViTinhForm = (props: FormProps) => {
  const [formInstance] = useForm()

  const {donViTinhs, donViTinhId: id} = useAppState(state => state.donViTinh)
  const data = donViTinhs?.[id] || {}

  React.useEffect(() => {
    const convertedData = convertToMoment(donViTinhConstants.getInputFields(), data)

    if (!isEmpty(data)) {
      // @ts-ignore
      formInstance.setFieldsValue(convertedData)
    } else {
      formInstance.resetFields()
    }
  }, [data])

  return (
    <div className="donViTinh-form">
      <MyForm
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        //@ts-ignore
        options={donViTinhConstants.getFormViewFields?.()}
        form={formInstance}
      />
    </div>
  )
}

export default DonViTinhForm
