'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Member extends Model {
  confidential(){
    return this.hasMany('App/Models/Confidential')
   }

   adress(){
    return this.hasMany('App/Models/Adress')
   }

   social(){
    return this.hasMany('App/Models/Social')
   }

   family(){
     return this.hasMany('App/Models/Family')
   }


   static get hidden(){
    return ['created_at', 'updated_at']
  }
}

module.exports = Member
