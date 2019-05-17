'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group(() => {
  //Route.put("/logout", "AuthController.logout");
  Route.put("/change_password", "AuthController.changePassword");
  Route.get('/get_user', "AuthController.getUser");
}).middleware("auth");

//Route.post('/register', 'AuthController.register')

Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  Route.get("/show", "AuthController.show");
  Route.put("/reset_password/:id", "AuthController.resetPassword");
  Route.delete("/delete/:id", "AuthController.destroy");
}).middleware(["auth"]);

Route.group(() => {
  Route.resource('/member', 'MemberController').apiOnly()
}).middleware(['auth'])

Route.group(() => {
  Route.resource('/confidential', 'ConfidentialController').apiOnly().except('store')
  Route.post('/confidential/:id', 'ConfidentialController.store')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('/adress', 'AdressController').apiOnly().except('store')
  Route.post('/adress/:id', 'AdressController.store')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('/social', 'SocialController').apiOnly().except('store')
  Route.post('/social/:id', 'SocialController.store')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('/family', 'FamilyController').apiOnly().except('store')
  Route.post('/family/:id', 'FamilyController.store')
}).middleware(['auth'])


Route.get('/church', 'MemberController.member_church').middleware(['auth'])
Route.get('/baptized', 'MemberController.baptized').middleware(['auth'])






