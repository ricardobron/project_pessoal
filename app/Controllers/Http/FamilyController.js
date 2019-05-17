'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with families
 */
const Family = use('App/Models/Family')

class FamilyController {

  async index() {
    const family = Family.query().with('member').fetch()

    return family
  }

  async store({ request, params }) {
    const data = request.all()

    const family = await Family.create({ member_id: params.id, ...data })

    return family
  }


  async show({ params }) {
    const family = await Family.findOrFail(params.id)

    return family

  }



  async update({ params, request, auth }) {
    const data = request.only([ "grau_parentesco", "name_parentesco",	"dt_nascimento"]);

    const family = await Family.findOrFail(params.id);

    family.merge({ ...data })

    await family.save();

    return family
  }


  async destroy({ params }) {
    const family = await Family.findOrFail(params.id)

    await family.delete()

    return `Family do ... apagadas com sucesso`

  }
  async grau_member() {
    const family = await Family.findOrFail(params.id)

    await family.delete()

    return `Family do ... apagadas com sucesso`

  }
}

module.exports = FamilyController
