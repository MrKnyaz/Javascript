//***************************************************************

var MinPriorityQueue = function () {
    this.data = []
    this.size = 0
}

MinPriorityQueue.prototype.pushItem = function(item) {
    this.data.push(item)
    this.size += 1
    //console.log("before "+ this.size +"   "+ this.data)
    this.up(this.size - 1)
    //console.log("after "+ this.size  +"   " + this.data)
}

MinPriorityQueue.prototype.popItem = function() {
    if (this.size > 0) {
        var result = this.data[0]
        this.data[0] = this.data[this.size - 1]
        this.data.pop()
        this.size -= 1
        this.down(0)
        return result
    }
}

MinPriorityQueue.prototype.up = function (i) {
    var child = i
    var parent = Math.floor((i - 1) / 2)
    while (child > 0) {
        //console.log("child:"+child+"   parent:"+ parent)
        if (this.data[child] < this.data[parent]) {
            this.exch(child, parent)
            child = parent
            parent =  Math.floor((child - 1) / 2)
        } else return
    }
}

MinPriorityQueue.prototype.down = function (i) {
    var parent = i;
    var child = 2 * i + 1
    while (child < this.size) {
        if (child + 1 < this.size && this.data[child] > this.data[child + 1]) {
            child += 1;
        }
        if (this.data[parent] > this.data[child]) {
            this.exch(parent, child)
            parent = child
            child = 2 * parent + 1
        } else return
    }
}

MinPriorityQueue.prototype.exch = function (i, j) {
    var tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
}

//***************************************************************
