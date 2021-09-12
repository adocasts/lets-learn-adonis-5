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

Route.get('/', async (ctx) => {
  return ctx.view.render('welcome')
})

Route.get('/test', async () => {
  return 'working'
})

Route.get('/posts',       () => 'listing posts')
Route.get('/posts/1',     () => 'get single post')
Route.post('/posts',      () => 'creating a post')
Route.put('/posts/1',     () => 'updating a post')
Route.delete('/posts/1',  () => 'deleting a post')

// Route.any('/posts', () => {})

Route.on('/testing').redirectToPath('https://duckduckgo.com')