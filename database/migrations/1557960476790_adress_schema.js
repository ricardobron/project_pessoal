'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdressSchema extends Schema {
  up () {
    this.create('adresses', (table) => {
      table.increments()
      table
        .integer('member_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('members')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('morada')
      table.string('n_door')
      table.string('bairro')
      table.string('postal_code')
      table.string('locate')

      table.timestamps()
    })
  }

  down () {
    this.drop('adresses')
  }
}

module.exports = AdressSchema
