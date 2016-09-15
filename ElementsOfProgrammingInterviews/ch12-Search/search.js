// Chapter 12 - Search

function binarySearch(A, tgt) {
    var start = 0, end = A.length - 1;

    while(start <= end) {
        var mid = (end - start) / 2;
        if(mid === tgt) {
            return mid;
        } else if(mid < tgt) {
            start = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}
