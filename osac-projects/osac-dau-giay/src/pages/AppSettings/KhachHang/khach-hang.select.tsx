import React from 'react'
import {Button, Empty} from 'antd'
import {FormInstance} from 'antd/lib/form/Form'
import {useNavigate} from 'react-router-dom'
import {MyForm, MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {IKhachHang} from './KhachHang'
import {addSelectedId} from './khach-hang.store'
import KhachHangModal from './khach-hang.modal'
import {EditOutlined, PlusOutlined} from '@ant-design/icons'
import {openModal} from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {appSettingsUrls} from '../app-settings.urls'

type SelectProps = {
  form?: FormInstance
  mode?: 'multiple' | 'tags' | undefined
  label?: string
  name?: string
  labelCol?: any
  wrapperCol?: any
  rules?: any
  disabled?: any
  isAddNew?: boolean
  isTrangQuanLy?: boolean
  onAfterSelect?(id: any): any
}

const KhachHangSelect = (props: SelectProps) => {
  const {form, name, mode, label, labelCol, wrapperCol, rules, isAddNew, isTrangQuanLy, onAfterSelect, disabled} = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {khachHangs} = useAppState(state => state.khachHang)
  const {accountData} = useAppState(state => state.account)

  const options = React.useMemo(() => {
    return Object.values(khachHangs)
      .filter(data => data.active)
      .map((data: IKhachHang) => {
        const label = `${data.khachHangName}`

        return {value: data.id, label}
      })
  }, [khachHangs])

  const isEdit = accountData?.paths?.khachHang?.edit

  function onChange(id: string) {
    dispatch(addSelectedId(id))
    onAfterSelect?.(id)
  }

  const FormItem = <MyFormItem
    label={label || 'Khách hàng'}
    type={'select'}
    name={name || 'khachHangId'}
    innerProps={{
      mode,
      showSearch: true,
      allowClear: true,
      filterOption: onSelectSearch,
      onChange,
      disabled: disabled,
      notFoundContent: isEdit ? <div>
        {
          isAddNew ? <Button
            icon={<PlusOutlined />}
            type={'primary'}
            onClick={() => dispatch(openModal({modalId: modalConstants.khachHangModal}))}
          >Thêm</Button> : null
        }
        {
          isTrangQuanLy ? <Button
            icon={<EditOutlined />}
            type={'dashed'}
            onClick={() => {
              navigate(appSettingsUrls.khachHang)
            }}
          >Q. lý</Button> : null
        }
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
      {
        isEdit && <KhachHangModal
          onAfterAddFinish={(id: any) => {
            form.setFieldsValue({khachHangId: id})
          }}
        />
      }
    </>
  }

  return <>
    {FormItem}
    {isEdit && <KhachHangModal />}
  </>
}

export default KhachHangSelect
