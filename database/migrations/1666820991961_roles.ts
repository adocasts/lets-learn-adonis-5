import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    // defer the execution of the callback until after migrations have run
    this.defer(async (db) => {
      await db.table('roles').insert([
        { id: Roles.MEMBER, name: 'Member' },
        { id: Roles.ADMIN, name: 'Admin' }
      ])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
