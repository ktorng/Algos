function intervalCoveringProblem(intervals) {
    intervals = intervals.sort((a,b) => { a[1] - b[1] });
    var last = intervals[0][1];
    var chosen = [last];

    for(var i = 1; i < intervals.length; i++) {
        if(intervals[i][0] > last) {
            last = intervals[i][1];
            chosen.push(intervals[i][1]);
        }
    }

    return chosen;
}
