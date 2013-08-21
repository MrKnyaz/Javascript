//***************************************************************

var PriorityQueue = function (comparator) {
    this.data = []
    this.size = 0
    this.compare = comparator || PriorityQueue.prototype.compare
}


/**
Method may be overridden in constructor if you need to compare complex objects
By default true is first object is less than second
*/
PriorityQueue.prototype.compare = function(first, second) {
    return first < second
}

/**
Adding item then moving it to correct place in queue
*/
PriorityQueue.prototype.pushItem = function(item) {
    this.data.push(item)
    this.size += 1
    //console.log("before "+ this.size +"   "+ this.data)
    this.up(this.size - 1)
    //console.log("after "+ this.size  +"   " + this.data)
}

/**
Get first item, then put last item on its place and push it down till it comes to correct place
*/
PriorityQueue.prototype.popItem = function() {
    if (this.size > 0) {
        var result = this.data[0]
        this.data[0] = this.data[this.size - 1]
        this.data.pop()
        this.size -= 1
        this.down(0)
        return result
    }
}

PriorityQueue.prototype.up = function (i) {
    var child = i
    var parent = Math.floor((i - 1) / 2)
    while (child > 0) {
        //console.log("child:"+child+"   parent:"+ parent)
        if (this.compare(this.data[child], this.data[parent])) {
            this.exch(child, parent)
            child = parent
            parent =  Math.floor((child - 1) / 2)
        } else return
    }
}

PriorityQueue.prototype.down = function (i) {
    var parent = i;
    var child = 2 * i + 1
    while (child < this.size) {
        if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
            child += 1;
        }
        if (this.compare(this.data[child], this.data[parent])) {
            this.exch(parent, child)
            parent = child
            child = 2 * parent + 1
        } else return
    }
}

PriorityQueue.prototype.exch = function (i, j) {
    var tmp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = tmp
}

//***************************************************************
