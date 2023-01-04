import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import States from 'App/Enums/States'

export default class extends BaseSchema {
  protected tableName = 'states'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([{
        id: States.PUBLIC,
        name: 'Public'
      }, {
        id: States.UNLISTED,
        name: 'Unlisted'
      }, {
        id: States.PRIVATE,
        name: 'Private'
      }])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
