import React, {useState} from 'react'
import moment, {Moment} from 'moment'
import {DatePicker, Form} from 'antd'
import {noop} from 'lodash'
import {getYearAndDayOfYear} from 'services'
import locale from 'antd/es/date-picker/locale/vi_VN'

type DayPickerProps = {
  disabledDate?(): boolean
  editabledDate?(time?: Moment): boolean
  className?: string
  width?: string
  format?: string
  defaultTime?: Moment
  disabled?: boolean
}

export type DatePickerHandle = {
  getDayRender(): any
  getMonthRender(): any
  getYearRender(): any
  isEditabledDate: boolean | undefined
  selectedTime: Moment
  yearAndDayOfYear: any
  getDayOfAll(): number | undefined
  onUpdate(): void
}

const useDatePicker = (props?: DayPickerProps) => {
  const {
    disabledDate,
    editabledDate,
    className,
    defaultTime = moment(),
    disabled
  } = props || {}

  const [_selectedTime, _setSelectedTime] = useState<any>(defaultTime)

  const [_yearAndDayOfYear, _setYearAndDayOfYear] = useState(() => {
    return getYearAndDayOfYear(defaultTime)
  })

  const isEditabledDate = React.useMemo(() => {
    return editabledDate?.(_selectedTime)
  }, [_selectedTime, editabledDate])

  function _onUpdate(nextTime?: Moment | null): void {
    const yearAndDayOfYear = getYearAndDayOfYear(nextTime)
    _setYearAndDayOfYear(yearAndDayOfYear)
    _setSelectedTime(nextTime)
  }

  const getRender = (renderProps: {picker: any, label: string, format: string, width: string}) => {
    const {label, format, width, picker} = renderProps

    return (
      <Form.Item label={label}>
        <DatePicker
          locale={locale}
          style={{width}}
          format={format}
          picker={picker}
          value={_selectedTime}
          onChange={_onUpdate}
          disabledDate={disabledDate}
          disabled={disabled}
          className={className}
        />
      </Form.Item>
    )
  }

  const getDayRender = () => {
    return getRender({
      picker: 'date',
      label: 'Ngày: ',
      format: 'DD/MM/YY',
      width: '110px'
    })
  }

  const getMonthRender = () => {
    return getRender({
      picker: 'month',
      label: 'Tháng: ',
      format: 'MM/YYYY',
      width: '110px'
    })
  }

  const getYearRender = () => {
    return getRender({
      picker: 'year',
      label: 'Năm: ',
      format: 'YYYY',
      width: '110px'
    })
  }

  const handle: DatePickerHandle = {
    getDayRender,
    getMonthRender,
    getYearRender,
    isEditabledDate,
    selectedTime: _selectedTime,
    yearAndDayOfYear: _yearAndDayOfYear,
    getDayOfAll: () => _yearAndDayOfYear?.['dayOfAll'],
    onUpdate: _onUpdate
  }

  return [_selectedTime, handle]
}

useDatePicker.defaultProps = {
  disabledDate: noop,
  width: '105px',
  format: 'DD/MM/YY',
  className: '',
  defaultTime: moment(),
  disabled: false
}

export default useDatePicker
