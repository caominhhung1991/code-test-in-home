import React from 'react'
import {Button, Empty} from 'antd'
import {FormInstance} from 'antd/lib/form/Form'
import {useNavigate} from 'react-router-dom'
import {MyForm, MyFormItem, onSelectSearch} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {INoiPhucVu} from './NoiPhucVu'
import {addSelectedId} from './noi-phuc-vu.store'
import NoiPhucVuModal from './noi-phuc-vu.modal'
import {EditOutlined, PlusOutlined} from '@ant-design/icons'
import {openModal} from 'stores/form.store'
import {modalConstants} from 'app-constants'
import {appSettingsUrls} from 'pages/AppSettings/app-settings.urls'

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

const NoiPhucVuSelect = (props: SelectProps) => {
  const {form, name, mode, label, labelCol, wrapperCol, rules, isAddNew, isTrangQuanLy, onAfterSelect, disabled} = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {noiPhucVus} = useAppState(state => state.noiPhucVu)
  const {accountData} = useAppState(state => state.account)

  const options = React.useMemo(() => {
    return Object.values(noiPhucVus)
      .filter(data => data.active)
      .map((data: INoiPhucVu) => {
        const label = `${data.noiPhucVuName}`

        return {value: data.id, label}
      })
  }, [noiPhucVus])

  const isEdit = accountData?.paths?.noiPhucVu?.edit

  function onChange(id: string) {
    dispatch(addSelectedId(id))
    onAfterSelect?.(id)
  }

  const FormItem = <MyFormItem
    label={label || 'Nơi phục vụ'}
    type={'select'}
    name={name || 'noiPhucVuId'}
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
            onClick={() => dispatch(openModal({modalId: modalConstants.noiPhucVuModal}))}
          >Thêm</Button> : null
        }
        {
          isTrangQuanLy ? <Button
            icon={<EditOutlined />}
            type={'dashed'}
            onClick={() => {
              navigate(appSettingsUrls.noiPhucVu)
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
        isEdit && <NoiPhucVuModal
          onAfterAddFinish={(id: any) => {
            form.setFieldsValue({noiPhucVuId: id})
          }}
        />
      }
    </>
  }

  return <>
    {FormItem}
    {isEdit && <NoiPhucVuModal />}
  </>
}

export default NoiPhucVuSelect
