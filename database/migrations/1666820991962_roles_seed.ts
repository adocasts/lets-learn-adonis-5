import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Roles from 'App/Enums/Roles'

export default class extends BaseSchema {
  public async up () {
    await Database.table('roles').insert([
      { id: Roles.MEMBER, name: 'Member' },
      { id: Roles.ADMIN, name: 'Admin' }
    ])    
  }

  public async down () {
    await Database.from('roles').whereIn('id', [Roles.MEMBER, Roles.ADMIN]).delete()
  }
}
