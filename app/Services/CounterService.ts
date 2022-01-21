export default class CounterService {
  public count = 0

  constructor() {
    console.log('CounterService > instantiated')
  }

  public increment() {
    this.count += 1
    return this.count
  }
}
