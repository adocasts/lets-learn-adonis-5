import { DateTime } from 'luxon'

export default class DateService {
  constructor() {
    console.log('DateService > instantiated')
  }

  public static toDateTime(date: DateTime | undefined | null = null, time: DateTime | undefined | null = null) {
    let dateTime = DateTime.now()

    if (date) {
      dateTime = dateTime.set({ year: date.year, month: date.month, day: date.day })
    }

    if (time) {
      dateTime = dateTime.set({ hour: time.hour, minute: time.minute, second: time.second })
    }

    return dateTime
  }

  public toDate(dateTime: DateTime) {
    return dateTime.toFormat('MM dd yyyy')
  }
}
