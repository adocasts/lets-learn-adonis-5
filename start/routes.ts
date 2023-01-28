/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/store', 'UsersController.store').as('users.store')

Route.post('/topics/store', 'TopicsController.store').as('topics.store')


Route.get('/', async (ctx) => {
  console.log('route handler')
  return ctx.view.render('welcome')
}).middleware(async (ctx, next) => {
  console.log('1st middleware before next')
  await next()
  console.log('1st middleware after next')
}).middleware(async (ctx, next) => {
  console.log('2nd middleware before next')
  await next()
  console.log('2nd middleware after next')
}).middleware(async (ctx, next) => {
  console.log('3rd middleware before next')
  await next()
  console.log('3rd middleware after next')
}).middleware('authorize:admin,moderator')

Route.get('/guest', async (ctx) => {
  return 'guest'
}).middleware(['authorize', 'authorize:admin', async (ctx, next) => {
  console.log('3rd middleware before next')
  await next()
  console.log('3rd middleware after next')
}])
