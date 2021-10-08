import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/',        async () => 'listing series').as('index')
  Route.get('/:id',     async ({ params }) => `get single series with an id of ${typeof params.id}`).as('show')
  Route.post('/',       async () => 'creating a series').as('store')
  Route.put('/:id',     async ({ params }) => `updating a series with an id of ${params.id}`).as('update')
  Route.delete('/:id',  async (ctx) => `deleting a series with an id of ${ctx.params.id}`).as('destroy')
}).prefix('/series').as('series')