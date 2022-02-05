import DiscordLogger from 'node-discord-logger'
import { discordLoggerConfig } from 'Config/log'

export default class Logger {
  protected logger: DiscordLogger

  constructor(config: typeof discordLoggerConfig) {
    this.logger = new DiscordLogger(config)
  }

  public async info(title: string, message?: string | object| Array<any>) {
    return this.logger.info(this.build(title, message))
  }

  public async warn(title: string, message?: string | object| Array<any>) {
    return this.logger.warn(this.build(title, message))
  }

  public async error(title: string, message?: string | object| Array<any>) {
    return this.logger.error(this.build(title, message))
  }

  public async debug(title: string, message?: string | object| Array<any>) {
    return this.logger.debug(this.build(title, message))
  }

  public async silly(title: string, message?: string | object| Array<any>) {
    return this.logger.silly(this.build(title, message))
  }

  private build(title: string, message?: string | object | Array<any>) {
    return {
      message: title,
      description: JSON.stringify(message, null,  4)
    }
  }
}
