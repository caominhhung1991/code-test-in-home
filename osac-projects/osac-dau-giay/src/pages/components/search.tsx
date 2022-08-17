import React, {FC} from 'react'
import MySearch from 'components/business/search'
import {MyFormItem} from '@caominhhung1991/components'

const SearchPage: FC = () => {
  const onSearch = (values: any) => {
    console.log(values)
  }

  return (
    <MySearch onSearch={onSearch}>
      <MyFormItem label="Tên" type="input" name="name"/>
      <MyFormItem label="Địa chỉ" type="input" name="address"/>
      <MyFormItem
        name="sex"
        label="Giới tính"
        type="radio"
        initialValue={1}
        options={[
          {label: 'Name', value: 1},
          {label: 'Nữ', value: 2}
        ]}
      />
    </MySearch>
  )
}

export default SearchPage
