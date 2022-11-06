import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Authorize {
  public async handle ({}: HttpContextContract, next: () => Promise<void>, guards: string[]) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log('Authorize before next', { guards })
    await next()
    console.log('Authorize after next')
  }
}
