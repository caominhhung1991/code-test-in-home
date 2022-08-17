export const DAYS_ALL = {
  monday: {id: 'monday', name: 'Thứ 2', enName: 'Monday'},
  tuesday: {id: 'tuesday', name: 'Thứ 3', enName: 'Tuesday'},
  wednesday: {id: 'wednesday', name: 'Thứ 4', enName: 'Wednesday'},
  thursday: {id: 'thursday', name: 'Thứ 5', enName: 'Thursday'},
  friday: {id: 'friday', name: 'Thứ 6', enName: 'Friday'},
  saturday: {id: 'saturday', name: 'Thứ 7', enName: 'Saturday'},
  sunday: {id: 'sunday', name: 'Chủ nhật', enName: 'Sunday'},
  getArray: () => {
    return [
      DAYS_ALL.monday, DAYS_ALL.tuesday, DAYS_ALL.wednesday, DAYS_ALL.thursday,
      DAYS_ALL.friday, DAYS_ALL.saturday, DAYS_ALL.sunday,
    ]
  },
  getName: (dayId) => {
    const day = DAYS_ALL[dayId] || {}
    return day.name || ''
  },
}
