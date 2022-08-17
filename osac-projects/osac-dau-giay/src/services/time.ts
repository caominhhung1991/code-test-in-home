import {Moment} from 'moment'

export const secondInDay = 60 * 60 * 24 * 1000 // 86_400_000 milisecond

export const getDayOfAll = (time: Moment) => {
  const startOfDay = time.clone().startOf('day').valueOf()

  return Math.floor(startOfDay / secondInDay)
}

export type YearAndDayOfYearReturn = {
  dayEndOfMonth?: any
  monthYearId?: any
  yearIdConst?: any
  yearId?: any
  dayOfYear?: any
  dayOfAll?: any
  years?: any
  months?: any
  weeks?: any
  dayOfAllMonths?: any
  startOfMonthRefs?: any
  endOfMonthRefs?: any
  refs?: any
  prevRefs?: any
  currentWeek?: any
  weekStart?: any
  weekEnd?: any
  layNguyenLieuNgayWeek?: any
}

export function getYearAndDayOfYear(selectedTime?: Moment | null): YearAndDayOfYearReturn {
  if (selectedTime) {
    const monthYearId = selectedTime.format('MM-YY')

    const dayEng = selectedTime.format('dddd')
    const yearIdConst = selectedTime.format('YYYY')
    let yearId: any = selectedTime.format('YYYY')
    let monthId = selectedTime.format('MM')
    const dayOfYear = selectedTime.dayOfYear()

    let dayEndOfMonth: any = selectedTime.clone().endOf('month').format('DD')
    dayEndOfMonth = Number(dayEndOfMonth)

    const prevYearId = selectedTime.clone().subtract(1, 'day').format('YYYY')
    const prevDayOfYear = selectedTime.clone().subtract(1, 'day').dayOfYear()

    const dayOfAll = getDayOfAll(selectedTime)
    const startOfMonth = selectedTime.clone().startOf('month')
    const endOfMonth = selectedTime.clone().endOf('month')

    const weekStart = selectedTime.clone().startOf('isoWeek')
    const weekEnd = selectedTime.clone().endOf('isoWeek')

    let currentWeek = selectedTime.week()
    let layNguyenLieuNgayWeek = selectedTime.week()

    if (dayEng === 'Sunday') {
      layNguyenLieuNgayWeek = layNguyenLieuNgayWeek - 1
      currentWeek = selectedTime.isoWeek()
    }
    if (currentWeek === 1 && monthId === '12') yearId = Number(yearId) + 1

    const years = {
      start: getDayOfAll(selectedTime.clone().startOf('year')),
      end: getDayOfAll(selectedTime.clone().endOf('year'))
    }
    const months = {
      start: getDayOfAll(selectedTime.clone().startOf('month')),
      end: getDayOfAll(selectedTime.clone().endOf('month'))
    }
    const weeks = {
      start: getDayOfAll(weekStart),
      end: getDayOfAll(weekEnd)
    }

    return {
      dayEndOfMonth,
      monthYearId,
      yearIdConst,
      yearId,
      dayOfYear,
      dayOfAll,
      years,
      months,
      weeks,
      dayOfAllMonths: [startOfMonth.dayOfYear(), endOfMonth.dayOfYear()],
      startOfMonthRefs: [startOfMonth.format('YYYY'), startOfMonth.dayOfYear()],
      endOfMonthRefs: [endOfMonth.format('YYYY'), endOfMonth.dayOfYear()],
      refs: [yearIdConst, dayOfYear],
      prevRefs: [prevYearId, prevDayOfYear],
      currentWeek, weekStart, weekEnd,
      layNguyenLieuNgayWeek
    }
  } else return {}
}
