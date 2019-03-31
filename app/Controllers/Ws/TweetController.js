'use strict'

class TweetController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onTweet (tweet) {
    tweet.likes = 0
    this.socket.broadcastToAll('tweet', tweet)
  }

}

module.exports = TweetController
