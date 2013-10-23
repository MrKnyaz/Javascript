var PubSub = {
    topics: {},
    publish: function(topic) {
        var subscribers = this.topics[topic]
        if (subscribers !== undefined) {
            for (var i = 0; i < subscribers.length; i++) {
                subscribers[i]()
            }
        }
    },
    subscribe: function(topic, event) {
        //if we don't have such topic, create topic and empty array of subscribers
        if (this.topics[topic] === undefined) {
            this.topics[topic] = []
        }
        this.topics[topic].push(event)
    }
}
