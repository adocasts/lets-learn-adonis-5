import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Topic from 'App/Models/Topic'
import Route from '@ioc:Adonis/Core/Route';
import Database from '@ioc:Adonis/Lucid/Database';

export default class TopicsController {
  public async index({ response }: HttpContextContract) {
    const model = await Topic.query().orderBy('created_at', 'desc')
    const db = await Database.from('topics').orderBy('created_at', 'desc')

    return response.json({ model, db })
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'slug', 'description'])

    const topic = new Topic()
    await topic.merge(data).save()

    // const topic = await Topic.create(data)
    // const topics = await Topic.createMany([data])

    // const topic = await Topic.firstOrCreate({ name: 'JavaScript' }, { 
    //   name: 'JavaScript',
    //   slug: 'javascript',
    //   description: 'Description'
    // })

    // const topic = await Topic.updateOrCreate({ name: 'JavaScript', slug: 'javascript' }, {
    //   name: 'JavaScript',
    //   slug: 'javascript',
    //   description: 'Description'
    // })

    // const topics = await Topic.updateOrCreateMany('name', [{
    //   name: 'JavaScript',
    //   slug: 'javascript',
    //   description: 'Description'
    // }])

    return topic;
  }
}
