'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with confidentials
 */
const Confidential = use('App/Models/Confidential')
const Member = use('App/Models/Member')

class ConfidentialController {

  async index() {
    const confidential = Confidential//.all()
    .query()
    .with('member')
    .fetch()

    return confidential
  }

  async store({ request, params }) {
    const data = request.all()

    const confidential = await Confidential.create({ member_id: params.id, ...data })

    return confidential
  }


  async show({ params }) {

    const confidential = await Confidential.findOrFail(params.id)

    return confidential
  }

  async update({ params, request }) {

    const data = request.only([ 'profession',
      'local_work',
      'tel_urgence_work',
      'tel_urgence_family',
      'nationality',
      'local_nascimento',
      'state_civil',
      'date_marriage',
      'name_conjuge',
      'baptized',
      'name_church_baptized',
      'date_baptized',
      'member_church',
      'charges_church' ]);

    const confidential = await Confidential.findOrFail(params.id);

    confidential.merge({ ...data })

    await confidential.save();

    return confidential
  }

  async destroy({ params }) {
    const confidential = await Confidential.findOrFail(params.id)

    await confidential.delete()

    return `Confidenciais do ... apagadas com sucesso`

  }
}

module.exports = ConfidentialController
