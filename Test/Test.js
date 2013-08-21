
var maxComparator = function(first, second) {
    return first > second
}
var minComparator = function(first, second) {
    return first < second
}
var pq = new PriorityQueue(maxComparator)
for (var i = 0; i < 50; i++) {
   // console.log(Math.round(Math.random() * 100))
    pq.pushItem(Math.round(Math.random() * 100))
}

console.log(pq.data)


for (var i = 0; i < 50; i++) {
    console.log(pq.popItem())
}
