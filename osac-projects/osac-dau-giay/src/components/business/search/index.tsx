import React from 'react'
import {MyButton} from '@caominhhung1991/components'
import {MyForm, MyFormProps} from '@caominhhung1991/components'
import {useForm} from 'antd/lib/form/Form'
import {css} from '@emotion/react'

interface SearchProps<T> extends MyFormProps<T> {
  onSearch: (values: T) => void;
}

const BaseSearch = <T extends object>(props: SearchProps<T>) => {
  const {children, onSearch, ...rest} = props
  const [form] = useForm<T>()

  const onSubmit = async () => {
    const values = await form.validateFields()
    if (values) {
      onSearch(values)
    }
  }

  return (
    <div css={styles}>
      <MyForm {...rest} form={form} layout="inline">
        {children}
        <MyForm.Item>
          <MyButton type="primary" onClick={onSubmit}>Tìm Kiếm</MyButton>

          <MyButton onClick={() => form.resetFields()}>Xóa</MyButton>
        </MyForm.Item>
      </MyForm>
    </div>
  )
}

export const MySearch = Object.assign(BaseSearch, {
  Item: MyForm.Item
})

export default MySearch

const styles = css`
  padding: 10px;
  background-color: #ffffff;
  .ant-form-item {
    margin-bottom: 10px;
  }
`
