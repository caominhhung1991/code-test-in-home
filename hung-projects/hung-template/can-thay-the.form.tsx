import React from 'react'
import {useForm} from 'antd/lib/form/Form'
import {useAppState} from 'stores'
import {MyForm} from '@caominhhung1991/components'
import {canThayTheConstants} from './can-thay-the.constants'
import {isEmpty} from 'lodash'
import {convertToMoment} from 'services'

type FormProps = {
}

const CanThayTheForm = (props: FormProps) => {
  const [formInstance] = useForm()

  const {canThayThes, canThayTheId: id} = useAppState(state => state.canThayThe)
  const data = canThayThes?.[id] || {}

  React.useEffect(() => {
    const convertedData = convertToMoment(canThayTheConstants.getInputFields(), data)

    if (!isEmpty(data)) {
      // @ts-ignore
      formInstance.setFieldsValue(convertedData)
    } else {
      formInstance.resetFields()
    }
  }, [data])

  return (
    <div className="canThayThe-form">
      <MyForm
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        //@ts-ignore
        options={canThayTheConstants.getFormViewFields?.()}
        form={formInstance}
      />
    </div>
  )
}

export default CanThayTheForm
