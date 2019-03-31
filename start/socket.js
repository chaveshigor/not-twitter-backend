'use strict'

const Ws = use('Ws')

Ws.channel('tweet', 'TweetController')

Ws.channel('like', 'TweetController')
