import React from 'react'
import {FormInstance} from 'antd/lib/form/Form'
import {onSelectSearch} from '@caominhhung1991/components'
import {MyForm} from '@caominhhung1991/components'
import {MyFormItem} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {ICaLamViec} from './CaLamViec'
import {addSelectedId} from './ca-lam-viec.store'

type SelectProps = {
  form?: FormInstance
}

const CaLamViecSelect = (props: SelectProps) => {
  const {form} = props

  const dispatch = useAppDispatch()

  const {caLamViecs} = useAppState(state => state.caLamViec)
  const options = React.useMemo(() => {
    return Object.values(caLamViecs || {}).map((data: ICaLamViec) => {
      const label = data.caLamViecName

      return {value: data.id, label}
    })
  }, [caLamViecs])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  const FormItem = <MyFormItem
    label="Ca Làm Việc"
    type={'select'}
    name={'caLamViecId'}
    innerProps={{
      showSearch: true,
      allowClear: true,
      filterOption: onSelectSearch,
      onChange
    }}
    options={options}
  />

  if (form) return  <MyForm form={form} labelCol={{span: 8}} wrapperCol={{span: 16}}>{FormItem}</MyForm>

  return FormItem
}

export default CaLamViecSelect
