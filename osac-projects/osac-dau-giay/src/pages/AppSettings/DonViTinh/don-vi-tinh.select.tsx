import React from 'react'
import {MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {IDonViTinh} from './DonViTinh'
import {addSelectedId} from './don-vi-tinh.store'

type SelectProps = {}

const DonViTinhSelect = (props: SelectProps) => {
  const dispatch = useAppDispatch()

  const {donViTinhs} = useAppState(state => state.donViTinh)
  const options = React.useMemo(() => {
    return Object.values(donViTinhs)
      .filter(data => data.active)
      .map((data: IDonViTinh) => {
        const label = data.tenDonViTinh

        return {value: data.id, label}
      })
  }, [donViTinhs])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
  }

  return (
    <MyFormItem
      label='DonViTinh'
      type={'select'}
      name={'donViTinhId'}
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

export default DonViTinhSelect
