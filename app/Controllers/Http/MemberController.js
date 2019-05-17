'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with members
 */
const Member = use('App/Models/Member')
const Database = use("Database");
const Confidential = use('App/Models/Confidential')

class MemberController {

  async index() {
    const member = Member.query()
      .orderBy('id', 'cres')
      .with("adress")
      .with("confidential")
      .with("social")
      .with('family')
      .fetch()//.all()

    //Database.table('members').where('id', 2))

    return member
  }


  async store({ request }) {

    const data = request.all()

    const member = await Member.create(data)

    return member

  }

  async show({ request, params }) {

    const member = await Member.query().where('id', params.id)
      .with("adress")
      .with("confidential")
      .with("adress")
      .with("social")
      .with('family')
      .fetch()

    return member
  }

  async update({ params, request }) {
    const data = request.only([,
      "email",
      "name_c",
      "tel_fixo",
      "tel1",
      "tel2"])

    const member = await Member.findOrFail(params.id);

    member.merge({ ...data })

    await member.save();

    return member
  }

  async destroy({ params, auth }) {
    const member = await Member.findOrFail(params.id)

    await member.delete()

    return 'Deletado com sucesso'
  }

  async member_church({ request, response, params, auth }) {

    const members_church = await Confidential.query().with('member').where('member_church', true).where('baptized', true).fetch()

    return members_church
  }
  async baptized() {

    const members_church = await Confidential.query().with('member').where('baptized', true).fetch()

    return members_church
  }

}

module.exports = MemberController



