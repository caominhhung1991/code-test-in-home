import React from 'react'
import {Button, Empty} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {FormInstance} from 'antd/lib/form/Form'
import {MyForm, MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {IAccount} from './Account'
import {addSelectedId} from './account.store'
import {openModal} from 'stores/form.store'
import {modalConstants} from '../../../app-constants'
import AccountModal from './account.modal'

type SelectProps = {
  form?: FormInstance
  mode?: 'multiple' | 'tags' | undefined
  label?: string
  name?: string
  labelCol?: any
  wrapperCol?: any
  rules?: any
  isAddNew?: boolean
}

const AccountSelect = (props: SelectProps) => {
  const {form, mode, name, label, labelCol, wrapperCol, rules, isAddNew} = props

  const dispatch = useAppDispatch()
  const {accounts} = useAppState(state => state.account)

  const options = React.useMemo(() => {
    return Object.values(accounts)
      .filter(data => data.active)
      .map((data: IAccount) => {
        const label = `${data.hoTen || ''} - ${data.email}`

        return {value: data.id, label}
      })
  }, [accounts])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  const FormItem = <MyFormItem
    label={label || 'Account'}
    type={'select'}
    name={name || 'accountId'}
    innerProps={{
      mode,
      showSearch: true,
      allowClear: true,
      filterOption: onSelectSearch,
      onChange,
      notFoundContent: isAddNew ? <div>
        <Button
          icon={<PlusOutlined />}
          type={'primary'}
          onClick={() => dispatch(openModal({modalId: modalConstants.accountModal}))}
        >Thêm mới</Button>
      </div> : <Empty />
    }}
    options={options}
    rules={rules || []}
  />

  if (form) {
    return <>
      <MyForm
        form={form}
        labelCol={labelCol || {span: 8}}
        wrapperCol={wrapperCol || {span: 16}}
      >{FormItem}</MyForm>

      <AccountModal
        onAfterAddFinish={(id) => {
          form.setFieldsValue({accountId: id})
        }}
      />
    </>
  }

  return <>
    {FormItem}
    <AccountModal />
  </>
}

export default AccountSelect
