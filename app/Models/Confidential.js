'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Confidential extends Model {
  member(){
   return this.belongsTo('App/Models/Member')
  }
  static get hidden(){
    return ['member_id', 'created_at', 'updated_at']
  }
}

module.exports = Confidential
