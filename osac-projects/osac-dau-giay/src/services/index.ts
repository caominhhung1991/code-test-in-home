export * from './time'
export * from './thongBao.services'

export const INPUT_NUMBER = {
  formatter: (value: any) => {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },
  parser: (value: any) => {
    return `${value}`.replace(/,*/g, '')
  },
}
