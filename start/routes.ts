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

Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id)
})

Route.get('/img/:userId/*', async ({ params }) => {
  return params
})

Route.get('/', async (ctx) => {
  const postsUrl = Route.makeUrl('app.posts.show', [1], {
    qs: {
      test: 'testing-query-string',
      another: 'testing'      
    },
    prefixUrl: 'http://localhost:3333'
  })

  const postsUrlBuilder = Route.builder()
    .qs({ test: 'this-is-a-test' })
    .prefixUrl('/builder')
    .params({ id: 1 })
    .make('app.posts.show')

  const postsUrlSigned = Route.makeSignedUrl('/test-signature', {
    expiresIn: '10s'
  })

  const postsUrlBuilderSigned = Route.builder()
    .makeSigned('/test-signature', { expiresIn: '1h' })
  
  return { 
    postsUrl,
    postsUrlBuilder,
    postsUrlSigned,
    postsUrlBuilderSigned
  }
  return ctx.view.render('welcome')
})

Route.get('/test-signature', async ({ request, response }) => {
  if (request.hasValidSignature()) {
    return 'is valid'
  }

  return response.redirect().toRoute('app.posts.show', [1], { qs: { test: 'test' } })
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

Route.on('/testing').redirectToPath('https://duckduckgo.com');

require('./routes/api')