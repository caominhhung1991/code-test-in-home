import React from 'react'
import moment from 'moment'
import {sortByNumber, sortByText} from '@caominhhung1991/components'
import {DownloadButton, ActiveButton, CheckButton, DeleteButton, EditDeleteCancelButtons} from 'components/core/button'
import {IConstantItem, trueFalseFilter} from '@caominhhung1991/components'

type TConstants = {
  id: IConstantItem
  sort: IConstantItem
  stt: IConstantItem
  dayId: IConstantItem
  order: IConstantItem
  active: IConstantItem
  soThuTu: IConstantItem
  createdBy: IConstantItem
  createdAt: IConstantItem
  deleteRow: IConstantItem
  capNhatRow: IConstantItem
  editRow: IConstantItem
  downloadRow: IConstantItem
}

export const constants: TConstants = {
  id: {
    id: 'id',
    name: 'ID',
    className: 'text-small',
    width: 70,
    form: {
      type: 'input',
      innerProps: {disabled: true}
    }
  },
  sort: {
    id: 'sort',
    name: 'Sort',
    align: 'center',
    width: 50,
    className: 'text-small'
  },
  stt: {
    id: 'stt',
    name: 'STT',
    width: 40,
    fixed: true,
    align: 'center',
    className: 'text-small',
    render(cell: any, row: any, index: any, options: any) {
      const pageSize = options?.['pageSize'] || 0
      const currentPage = (options?.['currentPage'] - 1) || 0
      const stt = pageSize * currentPage
      return <div className='font-weight-bold text-dark'>
        <small>{stt + index + 1}</small>
      </div>
    },
  },
  dayId: {
    id: 'dayId',
    name: 'Ngày',
    width: 80,
    align: 'center',
    className: 'text-small',
    isSearch: true,
    sorter: sortByText('dayId'),
  },
  order: {
    id: 'order',
    name: 'Order',
    align: 'center',
    width: 50,
    sorter: sortByNumber('order'),
    className: 'text-small'
  },
  active: {
    id: 'active',
    name: 'Active',
    width: 65,
    className: 'text-small',
    filters: trueFalseFilter.filters,
    onFilter: trueFalseFilter.onFilter('active'),
    align: 'center',
    render: (cell: any, row: any, index: any, options: any) => {
      return <ActiveButton cell={cell} row={row} index={index} {...options}/>
    }
  },
  soThuTu: {
    id: 'soThuTu',
    name: 'Thứ tự',
    width: 65,
    className: 'text-small',
    sorter: sortByNumber('soThuTu'),
    align: 'center',
    form: {
      type: 'input-number'
    }
  },
  createdBy: {
    id: 'createdBy',
    name: 'Tạo bởi',
    align: 'center',
    className: 'text-small',
    width: 100,
    render: (cell: any) => <small>{cell}</small>
  },
  createdAt: {
    id: 'createdAt',
    name: 'Ngày tạo',
    width: 140,
    align: 'center',
    className: 'text-small',
    render: (cell: any) => cell ? moment(cell).format('DD/MM/YY - HH:mm') : null
  },
  deleteRow: {
    id: 'deleteRow',
    name: 'Xóa',
    align: 'center',
    width: 55,
    className: 'text-small',
    render: (cell: any, row: any, index: any, options: any) => {

      return <DeleteButton row={row} {...options} />
    }
  },
  capNhatRow: {
    id: 'capNhatRow',
    name: 'Edit',
    align: 'center',
    width: 60,
    className: 'text-small',
    render: (cell: any, row: any, index: any, options: any = {}) => {
      const props = {cell, row, index}

      return <CheckButton {...props} {...options} />
    }
  },
  editRow: {
    id: 'editRow',
    name: 'Edit',
    align: 'center',
    width: 110,
    className: 'text-small',
    render: (cell: any, row: any, index: any, options: any = {}) => {
      const props = {cell, row, index}

      return <EditDeleteCancelButtons {...props} {...options} />
    }
  },
  downloadRow: {
    id: 'downloadRow',
    name: 'Download',
    align: 'center',
    width: 60,
    className: 'text-small',
    render: (cell: any, row: any, index: any, options: any = {}) => {
      const props = {cell, row, index}

      return <DownloadButton {...props} {...options} />
    }
  }
}
