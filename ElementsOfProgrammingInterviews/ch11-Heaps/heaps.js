// Chapter 11 Heaps

// Assumes MinHeap constructor takes initCapacity and callback function for comparator
// Also, assumes MinHeap has a toArray() function to convert to an array data type
// Peek O(1)
// Poll O(lg n)
// Add  O(lg n)
function topK(k, strings) {
    var minHeap = new MinHeap(k, function(a,b) { return a.length - b.length });

    for(var i = 0; i < strings.length; i++) {
        minHeap.add(strings[i]);
        if(minHeap.size() > k) minHeap.poll();
    }

    return minHeap.toArray();
}

// 11.5 Compute the rolling median of an int array
function rollingMedian(arr) {
    var minHeap = new Heap();
    var maxHeap = new Heap("max");

    for(var i = 0; i < arr.length; i++) {
        var c = arr[i];

        if(minHeap.isEmpty()) {
            minHeap.add(c);
        } else {
            // If current element is greater than the minHeap, add it to the right halve
            // If current is lower than the right half, add it to the maxheap on the left
            c >= minHeap.peek() ? minHeap.add(c) : maxHeap.add(c);
        }

        // Min heap always has extra 1 element on odds. On evens, they should be equal
        if(minHeap.size() > maxHeap.size() + 1) {
            maxHeap.add(minHeap.remove());
        } else if(maxHeap.size() > minHeap.size()) {
            minHeap.add(maxHeap.remove());
        }

        console.log(minHeap.size() === maxHeap.size()) ? 0.5 * (minHeap.peek() + maxHeap.peek()) : minHeap.peek();
    }
}
