import { DateTime } from 'luxon'

class DateService {
    public count = 0
    public defaultFormat = 'MM dd yyyy'

    constructor(defaultFormat: string | null = null) {
      console.log('DateService > instantiated')
      this.defaultFormat = defaultFormat ?? this.defaultFormat
    }

    public toDateTime(date: DateTime | null = null, time: DateTime | null = null) {
      let dateTime = DateTime.now()

      if (date) {
        dateTime = dateTime.set({ year: date.year, month: date.month, day: date.day })
      }

      if (time) {
        dateTime = dateTime.set({ hour: time.hour, minute: time.minute, second: time.second })
      }

      return dateTime
    }

    public toDate(dateTime: DateTime = DateTime.now(), format: string = this.defaultFormat) {
      this.count += 1
      console.log(this.count)
      return dateTime.toFormat(format)
    }
  }

  export default new DateService()
