'use strict'

const Tweet = use('App/Models/Tweet')
const Database = use('Database')

class TweetController {

  async index () {
    const tweets = await Database.table('tweets').orderBy('id', 'desc')
    return tweets
  }

  async store ({ request }) {
    const data = request.only(['user', 'content'])
    const likes = 0
    const info = { ...data, likes }
    const tweet = await Tweet.create(info)
    return tweet
  }

  async like ({ params }) {
    const tweet = await Tweet.find(params.id)
    const likes = tweet.likes + 1
    tweet.likes = likes
    await tweet.save()
    return tweet
  }
  
}

module.exports = TweetController
