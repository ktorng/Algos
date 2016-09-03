// Given a set of tasks that take a certain amount of time
// Assign them to workers, each of which can finish 2 tasks
// Optimize for the shortest finish time for all completed workers
// --- Example ---
// tasks = [5,2,1,6,4,4]
// workers = [[6,1], [5,2], [4,4]]
function taskAssignment(tasks) {
    var workers = [];
    var s = 0, e = tasks.length - 1;
    tasks.sort();

    while(s < e) {
        workers.push([tasks[e], tasks[s]]);
        s++; 
        e--;
    }

    // Leftover
    if(s === e) workers.push([tasks[e]]);

    return workers;
}