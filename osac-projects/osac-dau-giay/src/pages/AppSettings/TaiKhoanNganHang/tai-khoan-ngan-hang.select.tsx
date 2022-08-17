import React from 'react'
import {Button, Empty} from 'antd'
import {FormInstance} from 'antd/lib/form/Form'
import {MyForm, MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {ITaiKhoanNganHang} from './TaiKhoanNganHang'
import {addSelectedId} from './tai-khoan-ngan-hang.store'
import TaiKhoanNganHangModal from './tai-khoan-ngan-hang.modal'
import {PlusOutlined} from '@ant-design/icons'
import {openModal} from 'stores/form.store'
import {modalConstants} from 'app-constants'

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

const TaiKhoanNganHangSelect = (props: SelectProps) => {
  const {form, name, mode, label, labelCol, wrapperCol, rules, isAddNew} = props

  const dispatch = useAppDispatch()
  const {taiKhoanNganHangs} = useAppState(state => state.taiKhoanNganHang)

  const options = React.useMemo(() => {
    return Object.values(taiKhoanNganHangs)
      .filter(data => data.active)
      .map((data: ITaiKhoanNganHang) => {
        const label = `${data.maTaiKhoan || ''} - ${data.tenTaiKhoan} - ${data.soTaiKhoan} - ${data.nganHang}`

        return {value: data.id, label}
      })
  }, [taiKhoanNganHangs])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  const FormItem = <MyFormItem
    label={label || 'TaiKhoanNganHang'}
    type={'select'}
    name={name || 'taiKhoanNganHangId'}
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
          onClick={() => dispatch(openModal({modalId: modalConstants.taiKhoanNganHangModal, data: {}}))}
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
      <TaiKhoanNganHangModal
        onAfterAddFinish={(id) => {
          form.setFieldsValue({taiKhoanNganHangId: id})
        }}
      />
    </>
  }

  return <>
    {FormItem}
    <TaiKhoanNganHangModal />
  </>
}

export default TaiKhoanNganHangSelect
