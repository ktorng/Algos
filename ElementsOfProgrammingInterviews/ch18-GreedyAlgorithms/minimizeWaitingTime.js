function minimizeWaitingTime(times) {
    var timer = 0;
    times = times.sort();
    for(var i = 0; i < times.length; i++) {
        var remaining = times.length - (i+1);
        timer += times[i] * remaining;
    }

    return timer;
}
