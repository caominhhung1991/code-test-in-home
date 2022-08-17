export const trangThaiFilter = {
  filters: [
    {value: 'chuaXacNhan', text: 'Chưa xác nhận'},
    {value: 'daXacNhan', text: 'Đã xác nhận'}
  ],
  onFilter: (value: any, record: any) => {
    return record.trangThai === value
  }
}
