import { ApplicationContract } from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class Index {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
    this.app.container.singleton('Logger/Discord', () => {
      const { discordLoggerConfig } = this.app.config.get('log')
      const DiscordLogger = require('./discord').default
      return new DiscordLogger(discordLoggerConfig)
    })
  }

  public async boot () {
    // All bindings are ready, feel free to use them
    // const logger = this.app.container.use('Logger/Discord')
    // logger.silly('Discord Logger Registered')
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
