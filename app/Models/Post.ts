import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import User from './User'
import State from './State'
import Topic from './Topic'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public stateId: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string | null

  @column()
  public body: string | null

  @attachment()
  public thumbnail: AttachmentContract | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public author: BelongsTo<typeof User>

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>

  @manyToMany(() => Topic, {
    pivotColumns: ['sort_order']
  })
  public topics: ManyToMany<typeof Topic>
}
