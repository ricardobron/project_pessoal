'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('dt_nascimento').notNullable()
      table.string('name_c').notNullable()
      table.string('tel_fixo')
      table.string('tel1')
      table.string('tel2')
      table.timestamps()
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema
