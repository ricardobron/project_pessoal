'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConfidentialSchema extends Schema {
  up () {
    this.create('confidentials', (table) => {
      table.increments()
      table
        .integer('member_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('members')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('profession')
      table.string('local_work')
      table.string('tel_urgence_work')
      table.string('tel_urgence_family')
      table.string('nationality').notNullable()
      table.string('local_nascimento').notNullable()
      table.string('state_civil').notNullable()
      table.string('date_marriage')
      table.string('name_conjuge')
      table.boolean('baptized').default(false)
      table.string('name_church_baptized')
      table.string('date_baptized')
      table.boolean('member_church').default(false)
      table.string('charges_church')

      table.timestamps()
    })
  }

  down () {
    this.drop('confidentials')
  }
}

module.exports = ConfidentialSchema
