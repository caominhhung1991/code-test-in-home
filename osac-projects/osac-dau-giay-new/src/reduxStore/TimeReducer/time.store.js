import moment from "moment";
import {DAYS_ALL} from './time.constants'

const TYPE = {
  GET_GENERATE_DAY_WEEK: 'GET_GENERATE_DAY_WEEK',
}

export const generateDaysOfWeek = (cantin = {}) => (dispatch) => {
  if (!cantin?.['year'] || !cantin?.['week']) return {}

  let weekData = {}
  let day = cantin ? moment(`${cantin.year}`, 'YYYY').weeks(cantin.week).startOf('isoWeek') : moment()
  if (day.format('dddd') === 'Sunday') day.add(1, 'week')

  while (true) {
    const ngay = day.format('dddd')
    weekData[ngay] = day.format('DD-MM')
    if (day.format('dddd') === 'Sunday') break
    day = day.add(1, 'day')
  }

  dispatch({type: TYPE.GET_GENERATE_DAY_WEEK, payload: {weekData}})

  return weekData
}

const initState = {
  weekData: {},
  DAYS_ALL: DAYS_ALL,
}


export default (state = initState, action) => {
  const {payload} = action
  switch (action.type) {
    case TYPE.GET_GENERATE_DAY_WEEK: {
      return {...state, ...payload}
    }
    default:
      return state
  }
}
