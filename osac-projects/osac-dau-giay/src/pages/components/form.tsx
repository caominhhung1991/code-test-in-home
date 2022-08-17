import React, {FC} from 'react'
import {MyButton} from '@caominhhung1991/components'
import {MyForm} from '@caominhhung1991/components'

const tailLayout = {
  wrapperCol: {offset: 8, span: 16}
}

interface Data {
  test: number;
}

const FormPage: FC = () => {
  const onFinish = (value: any) => {
    console.log(value)
  }

  return (
    <MyForm<Data> onFinish={onFinish}>
      <MyForm.Item label="Kiểm tra" required name="test" type="input"/>
      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  )
}

export default FormPage
