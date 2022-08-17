import React from 'react'
import {useForm} from 'antd/lib/form/Form'
import {useAppState} from 'stores'
import {MyForm} from '@caominhhung1991/components'
import {nhaCungCapConstants} from './nha-cung-cap.constants'
import {isEmpty} from 'lodash'
import {convertToMoment} from '@caominhhung1991/components'

type FormProps = {
}

const NhaCungCapForm = (props: FormProps) => {
  const [formInstance] = useForm()

  const {nhaCungCaps, nhaCungCapId: id} = useAppState(state => state.nhaCungCap)
  const data = nhaCungCaps?.[id] || {}

  React.useEffect(() => {
    const convertedData = convertToMoment(nhaCungCapConstants.getInputFields(), data)

    if (!isEmpty(data)) {
      // @ts-ignore
      formInstance.setFieldsValue(convertedData)
    } else {
      formInstance.resetFields()
    }
  }, [data])

  return (
    <div className="nhaCungCap-form">
      <MyForm
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        //@ts-ignore
        options={nhaCungCapConstants.getFormViewFields?.()}
        form={formInstance}
      />
    </div>
  )
}

export default NhaCungCapForm
