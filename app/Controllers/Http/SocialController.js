'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with socials
 */
const Social = use('App/Models/Social')

class SocialController {

  async index () {
    const social = Social.query()
    .with('member')
    .fetch()

    return social
  }

  async store ({ request, params, auth }) {

    const data = request.all()

    const social = await Social.create({ member_id: params.id, ...data })

    return social
  }


  async show ({ params  }) {
    const social = await Social.findOrFail(params.id)

    return social
  }


  async update ({ params, request, auth }) {
    const data = request.only([ "facebook", "skype",	"outros"]);

    const social = await Social.findOrFail(params.id);

    social.merge({ ...data })

    await social.save();

    return social

  }


  async destroy ({ params }) {
    const social = await Social.findOrFail(params.id)

    await social.delete()

    return `Social do ... apagadas com sucesso`
  }
}

module.exports = SocialController
