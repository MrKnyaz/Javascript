var minPQ = new MinPriorityQueue()
for (var i = 0; i < 50; i++) {
   // console.log(Math.round(Math.random() * 100))
    minPQ.pushItem(Math.round(Math.random() * 100))
}

console.log(minPQ.data)


for (var i = 0; i < 50; i++) {
    console.log(minPQ.popItem())
}
