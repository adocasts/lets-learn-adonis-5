import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index ({}: HttpContextContract) {
    return 'listing posts'
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
    return 'creating a post'
  }

  public async show ({ params }: HttpContextContract) {
    debugger
    return `get single post with an id of ${typeof params.id}`
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({ params }: HttpContextContract) {
    return `updating a post with an id of ${params.id}`
  }

  public async destroy (ctx: HttpContextContract) {
    return `deleting a post with an id of ${ctx.params.id}`
  }
}
