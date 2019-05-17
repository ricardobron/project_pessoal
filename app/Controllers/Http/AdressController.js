'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with adresses
 */
const Adress = use('App/Models/Adress')

class AdressController {

  async index () {
    const adress = Adress.query()
      .with('member')
      .fetch()

    return adress
  }

  async store ({ request, params, auth }) {

    const data = request.all()

    const adress = await Adress.create({ member_id: params.id, ...data })

    return adress
  }

  async show ({ params }) {

    const adress = await Adress.findOrFail(params.id)

    return adress
  }

  async update ({ params, request, auth }) {

    const data = request.only([ "morada", "n_door",	"bairro", "postal_code", "locate"]);

    const adress = await Adress.findOrFail(params.id);

    adress.merge({ ...data })

    await adress.save();

    return adress
  }


  async destroy ({ params }) {

    const adress = await Adress.findOrFail(params.id)

    await adress.delete()

    return `Adress do ... apagadas com sucesso`

  }
}

module.exports = AdressController
