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
  // const postsUrl = Route.makeUrl('app.posts.show', [1], {
  //   qs: {
  //     test: 'testing-query-string',
  //     another: 'testing'      
  //   },
  //   prefixUrl: 'http://localhost:3333'
  // })

  // const postsUrlBuilder = Route.builder()
  //   .qs({ test: 'this-is-a-test' })
  //   .prefixUrl('/builder')
  //   .params({ id: 1 })
  //   .make('app.posts.show')

  // const postsUrlSigned = Route.makeSignedUrl('/test-signature', {
  //   expiresIn: '10s'
  // })

  // const postsUrlBuilderSigned = Route.builder()
  //   .makeSigned('/test-signature', { expiresIn: '1h' })
  
  // return { 
  //   postsUrl,
  //   postsUrlBuilder,
  //   postsUrlSigned,
  //   postsUrlBuilderSigned
  // }
  return ctx.view.render('welcome')
})

Route.get('/test-signature', async () => {
  return 'this is valid'
}).mustBeSigned()

// Route.resource('test', '').mustBeSigned()

Route.group(() => {
  Route.resource('posts', 'PostsController')
  Route.shallowResource('posts.comments', 'CommentsController')
}).as('app')

Route.group(() => {
  Route.group(() => {
    Route.get('/',        'PostsController.index').as('index')
    Route.get('/:id',     'PostsController.show').as('show')
    Route.post('/',       'PostsController.store').as('store')
    Route.put('/:id',     'PostsController.update').as('update')
    Route.delete('/:id',  'PostsController.destroy').as('destroy')
  }).prefix('/posts').as('posts')
}).namespace('App/Admin/Controllers/Http').prefix('admin')

Route.get('/posts/topics/:topic?', ({ params }) => `topic is ${params.topic}`).where('topic', Route.matchers.slug())

Route.on('/testing').goHome()

Route.get('test/:testing', () => 'cool').where('testing', Route.matchers.alphaString())

require('./routes/api')