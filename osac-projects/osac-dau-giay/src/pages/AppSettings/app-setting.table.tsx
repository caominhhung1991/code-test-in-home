import React from 'react'
import {FormInstance} from 'antd/lib/form/Form'
import {useAppDispatch, useAppState} from 'stores'
import {getTableColumns, IConstants, MyTable, useSearchText} from '@caominhhung1991/components'
import {IUseActions} from 'hooks/useActions'
import {ExpandableConfig, TableRowSelection} from 'antd/lib/table/interface'
import {onChangeSelectedRowKeys} from 'stores/table.store'
import {thongBaoQuyenChinhSua} from 'services'

type AppSettingTableProps<T> = {
  scroll?: {[x: string]: number | string}
  modalId?: string
  isEdit?: any
  isSelection?: boolean
  inputOptions?: any
  rowSelection?: TableRowSelection<any>
  constants: IConstants
  actions?: IUseActions
  datas: any
  loading?: boolean
  pagination?: any
  expandable?: ExpandableConfig<T>
  form?: FormInstance
  pageSize?: number
  filters?: any
  summary?: any
  rowClassName?(e?: any): any
  onBlur?(e?: any): any
  onRow?(row?: any): any
  onCallbackDataSource?(dataSource: any): any
  onChange?(pagination?: any, filters?: any, sorter?: any, extra?: any): any
}

function AppSettingTable<T>(props: AppSettingTableProps<T>) {
  const {modalId, constants, actions, datas, loading, isSelection, form, rowSelection, summary, isEdit, onBlur, inputOptions, ...rest} = props
  const dispatch = useAppDispatch()
  const {selectedRowKeys} = useAppState(state => state.table)
  const hideColumnsState = useAppState(state => state.hideColumns)
  const hideColumns = hideColumnsState?.[modalId || '']

  const otherProps = React.useMemo(() => {
    const values: any = {}

    if (isSelection) {
      values.rowSelection = {
        selectedRowKeys: selectedRowKeys[modalId || ''] || [],
        onChange: (keys: any, rows: any) => {
          dispatch(onChangeSelectedRowKeys({tableId: modalId, selectedRowKeys: keys, selectedRows: rows}))
        },
        ...rowSelection,
      }
    } else delete values.rowSelection

    return values
  }, [isSelection, selectedRowKeys])

  function onActiveItem(row: any, value: boolean, name?: string) {
    if (!isEdit) return thongBaoQuyenChinhSua()

    const activeName = name ? name : 'active'
    const updatedData = {...row, active: value, name: activeName}

    dispatch(actions?.onActiveAsync(updatedData))
  }

  function onDeleteItem(row: any) {
    if (!isEdit) return thongBaoQuyenChinhSua()

    if (actions?.onDeleteAsync) dispatch(actions.onDeleteAsync(row))
  }

  const [searchText, setSearchText, searchInput] = useSearchText()
  const columns = React.useMemo(() => {
    let initColumns = getTableColumns<any>(constants, {
      onActiveItem, onDeleteItem,
      searchText, searchInput, setSearchText,
      modalId,
      isEdit,
      constants,
      form,
      onBlur,
      inputOptions,
    })

    if (hideColumns) {
      initColumns = initColumns.filter((column: any) => !hideColumns?.[column.id])
    }

    return initColumns
  }, [searchText, hideColumns, constants, inputOptions])

  const dataSource: any = React.useMemo(() => {
    let datasArray = Object.values(datas || {})

    if (props?.onCallbackDataSource) datasArray = props.onCallbackDataSource(datasArray)

    return datasArray
  }, [datas])

  return (
    <div className='table'>
      <MyTable
        {...otherProps}
        {...rest}
        rowKey='id'
        height={'100%'}
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        summary={summary || null}
      />
    </div>
  )
}

export default AppSettingTable
