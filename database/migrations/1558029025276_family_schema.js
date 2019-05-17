'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FamilySchema extends Schema {
  up () {
    this.create('families', (table) => {
      table.increments()
      table
      .integer('member_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('members')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('grau_parentesco')
      table.string('name_parentesco')
      table.string('dt_nascimento')
      table.timestamps()
    })
  }

  down () {
    this.drop('families')
  }
}

module.exports = FamilySchema
