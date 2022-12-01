import React from 'react'
import {Button, Empty} from 'antd'
import {FormInstance} from 'antd/lib/form/Form'
import {useNavigate} from 'react-router-dom'
import {MyForm, MyFormItem, onSelectSearch, openModal} from '@caominhhung1991/components'
import {useAppDispatch, useAppState} from 'stores'
import {ICanThayThe} from './CanThayThe'
import {addSelectedId} from './can-thay-the.store'
import CanThayTheModal from './can-thay-the.modal'
import {EditOutlined, PlusOutlined} from '@ant-design/icons'
import {modalConstants} from 'app-constants'
import {canThayTheUrls} from './can-thay-the.urls'

type SelectProps = {
  form?: FormInstance
  mode?: 'multiple' | 'tags' | undefined
  label?: string
  name?: string
  labelCol?: any
  wrapperCol?: any
  rules?: any
  disabled?: any
  isEdit?: boolean
  isAddNew?: boolean
  isTrangQuanLy?: boolean
  loaiTruMatHangs?: any
  onAfterSelect?(id: any, data?: any): any
  onAfterAddFinish?(id: any, data?: any): any
}

function CanThayTheSelect(props: SelectProps) {
  const {
    form,
    name,
    mode,
    label,
    labelCol,
    wrapperCol,
    rules,
    isEdit: isPageEdit,
    isAddNew,
    isTrangQuanLy,
    onAfterSelect,
    onAfterAddFinish,
    disabled,
    loaiTruMatHangs,
  } = props

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {canThayThes} = useAppState(state => state.canThayThe)
  const {accountData} = useAppState(state => state.account)
  const isEdit = accountData?.paths?.canThayThe?.edit || isPageEdit

  const options = React.useMemo(() => {
    let values = Object.values(canThayThes)

    if (Object.values(loaiTruMatHangs || {}).length > 0) {
      values = values.reduce((acc: any, valueData: any) => {
        return loaiTruMatHangs?.[valueData?.id] ? acc : [...acc, valueData]
      }, [])
    }

    return values
      .filter(data => data.active)
      .map((data: ICanThayThe) => {
        const label = `${data.tenCanThayThe}`

        return {value: data.id, label}
      })
  }, [canThayThes])

  function onChange(id: string) {
    dispatch(addSelectedId(id))
    const canThayTheData = canThayThes?.[id]
    onAfterSelect?.(id, canThayTheData)
  }

  const FormItem = <MyFormItem
    label={label ?? 'CanThayThe'}
    type={'select'}
    name={name ?? 'canThayTheId'}
    innerProps={{
      mode,
      showSearch: true,
      allowClear: true,
      filterOption: onSelectSearch,
      onChange,
      disabled,
      notFoundContent: isEdit ? <div>
        {
          isAddNew ? <Button
            icon={<PlusOutlined />}
            type={'primary'}
            onClick={() => dispatch(openModal({modalId: modalConstants.canThayTheModal}))}
          >Thêm</Button> : null
        }
        {
          isTrangQuanLy ? <Button
            icon={<EditOutlined />}
            type={'dashed'}
            onClick={() => {
              navigate(canThayTheUrls.canThayThe)
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
        isEdit && <CanThayTheModal
          onAfterAddFinish={(id) => {
            form.setFieldsValue({canThayTheId: id})
          }}
        />
      }
    </>
  }

  return <>
    {FormItem}
    {isEdit && <CanThayTheModal 
      onAfterAddFinish={(id: any, data: any) => {
        onAfterAddFinish?.(id, data)
      }
      }
    />}
  </>
}

export default CanThayTheSelect
