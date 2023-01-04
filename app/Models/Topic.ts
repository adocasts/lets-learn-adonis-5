import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'

export default class Topic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public name: string

  @column() 
  public slug: string

  @column() 
  public description: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Post, {
    pivotColumns: ['sort_order']
  })
  public posts: ManyToMany<typeof Post>
}
