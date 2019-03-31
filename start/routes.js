'use strict'

const Route = use('Route')

Route.resource('tweet', 'TweetController').apiOnly().except(['destroy', 'update', 'show'])
Route.post('like/:id', 'TweetController.like')
