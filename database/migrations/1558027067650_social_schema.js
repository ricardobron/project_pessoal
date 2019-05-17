'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SocialSchema extends Schema {
  up () {
    this.create('socials', (table) => {
      table.increments()
      table
        .integer('member_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('members')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('facebook')
      table.string('skype')
      table.string('outros')
      table.timestamps()
    })
  }

  down () {
    this.drop('socials')
  }
}

module.exports = SocialSchema
