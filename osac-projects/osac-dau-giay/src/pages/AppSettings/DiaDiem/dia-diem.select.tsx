import React from 'react'
import {FormInstance} from 'antd/lib/form/Form'
import {MyForm, MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {IDiaDiem} from './DiaDiem'
import {addSelectedId} from './dia-diem.store'

type SelectProps = {
  form?: FormInstance
  mode?: 'multiple' | 'tags' | undefined
}

const DiaDiemSelect = (props: SelectProps) => {
  const {form, mode} = props

  const dispatch = useAppDispatch()
  const {diaDiems} = useAppState(state => state.diaDiem)

  const options = React.useMemo(() => {
    return Object.values(diaDiems)
      .filter(data => data.active)
      .map((data: IDiaDiem) => {
        const label = `${data.diaDiemName}`

        return {value: data.id, label}
      })
  }, [diaDiems])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  const FormItem = <MyFormItem
    label="Địa điểm"
    type={'select'}
    name={'diaDiemId'}
    innerProps={{mode, showSearch: true, allowClear: true, filterOption: onSelectSearch, onChange}}
    options={options}
  />

  if (form) {
    return <MyForm form={form} labelCol={{span: 8}} wrapperCol={{span: 16}}>{FormItem}</MyForm>
  }

  return FormItem
}

export default DiaDiemSelect
