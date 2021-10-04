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

import './routes/api/v2/posts'

Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id)
})

Route.get('/img/:userId/*', async ({ params }) => {
  return params
})

Route.get('/', async (ctx) => {
  const postsUrl = Route.makeUrl('posts.show', { id: 1 })
  return postsUrl
  return ctx.view.render('welcome')
})

Route.group(() => {
  Route.group(() => {
    Route.get('/',        async () => 'listing posts').as('index')
    Route.get('/:id',     async ({ params }) => `get single post with an id of ${typeof params.id}`).as('show')
    Route.post('/',       async () => 'creating a post').as('store')
    Route.put('/:id',     async ({ params }) => `updating a post with an id of ${params.id}`).as('update')
    Route.delete('/:id',  async (ctx) => `deleting a post with an id of ${ctx.params.id}`).as('destroy')
  }).prefix('/posts').as('posts')
}).as('app')



Route.get('/posts/topics/:topic?', ({ params }) => `topic is ${params.topic}`).where('topic', Route.matchers.slug())

Route.on('/testing').redirectToPath('https://duckduckgo.com')