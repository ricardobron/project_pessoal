'use strict'

const User = use('App/Models/User')
const Hash = use("Hash");
const Token = use("App/Models/Token");
const Database = use("Database");

class AuthController {
  async register({ request }){
    const data = request.only(['username', 'email', 'password' ])

    const user = await User.create(data)

    return user
  }
  async authenticate({request , auth}){
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
  async show({ auth, response }) {

    const users = await User.all();

    return users;
  }
  async getUser ({ request, auth, response }) {
    const user = auth.current.user;

    return user;
  }

  async changePassword({ request, auth, response }) {
    const user = auth.current.user;
    const { password, newPassword } = request.all();

    const verifyPassword = await Hash.verify(
      password,
      user.password
    );

    if (!verifyPassword) {
      return response.status(400).json({
        status: "error",
        message: "Current password could not be verified! Please try again."
      });
    }

    user.password = newPassword;
    await user.save();

    return response.json({
      status: "success",
      message: "Password updated!"
    });
  }

  async resetPassword({ request, auth, response, params }) {
    const user = await User.findOrFail(params.id);

    user.password = await request.input("newPassword");
    await user.save();

    return response.json({
      status: "success",
      message: "Password updated!"
    });
  }

  async destroy({ params, request, response, auth }) {
  
    const user = await User.findOrFail(params.id);

    await user.delete();

    return response.json({
      status: "success",
      message: "Usuário Deletado!"
    });
  }
}

module.exports = AuthController
