declare module '@ioc:Service/CounterService' {
  import CounterService from 'App/Services/CounterService'

  const counterService: CounterService

  export default counterService
}
