import React from 'react'
import {onSelectSearch} from '@caominhhung1991/components'
import {MyFormItem} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {INhaCungCap} from './NhaCungCap'
import {addSelectedId} from './nha-cung-cap.store'

type SelectProps = {}

const NhaCungCapSelect = (props: SelectProps) => {
  const dispatch = useAppDispatch()

  const {nhaCungCaps} = useAppState(state => state.nhaCungCap)
  const options = React.useMemo(() => {
    return Object.values(nhaCungCaps)
      .filter(data => data.active)
      .map((data: INhaCungCap) => {
      const label = `${data.tenNhaCungCap} - ${data.nganhNgheKinhDoanh}`

      return {value: data.id, label}
    })
  }, [nhaCungCaps])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  return (
    <MyFormItem
      label="Nhà CC"
      type={'select'}
      name={'nhaCungCapId'}
      innerProps={{
        showSearch: true,
        allowClear: true,
        filterOption: onSelectSearch,
        onChange
      }}
      options={options}
    />
  )
}

export default NhaCungCapSelect
